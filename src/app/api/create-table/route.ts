import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Create the contacts table
    const { error: createTableError } = await supabase.rpc('create_contacts_table', {
      sql_command: `
        CREATE TABLE IF NOT EXISTS contacts (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          service TEXT NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
        );

        -- Create updated_at trigger
        CREATE OR REPLACE FUNCTION update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.updated_at = TIMEZONE('utc'::text, NOW());
            RETURN NEW;
        END;
        $$ language 'plpgsql';

        CREATE TRIGGER update_contacts_updated_at
            BEFORE UPDATE ON contacts
            FOR EACH ROW
            EXECUTE FUNCTION update_updated_at_column();

        -- Add RLS (Row Level Security) policies
        ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

        -- Allow anonymous users to insert
        CREATE POLICY "Allow anonymous users to insert contacts"
            ON contacts FOR INSERT
            TO anon
            WITH CHECK (true);

        -- Allow authenticated users to view all contacts
        CREATE POLICY "Allow authenticated users to view contacts"
            ON contacts FOR SELECT
            TO authenticated
            USING (true);
      `
    });

    if (createTableError) {
      console.error('Error creating table:', createTableError);
      return NextResponse.json(
        { error: 'Failed to create table', details: createTableError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Contacts table created successfully'
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 