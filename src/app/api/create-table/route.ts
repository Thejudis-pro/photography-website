import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST() {
  try {
    // Check if table exists first
    const { data: existingTable, error: checkError } = await supabase
      .from('contacts')
      .select('*')
      .limit(1);

    if (existingTable) {
      return NextResponse.json({ message: 'Table already exists' }, { status: 200 });
    }

    // If table doesn't exist, try to create it
    const { error: createError } = await supabase.rpc('create_contacts_table', {
      sql_command: `
        CREATE TABLE IF NOT EXISTS contacts (
          id BIGSERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          service TEXT,
          message TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
        );
      `
    });

    if (createError) {
      console.error('Error creating table:', createError);
      return NextResponse.json({ 
        message: 'Error creating table',
        error: createError.message 
      }, { status: 500 });
    }

    return NextResponse.json({ message: 'Table created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ 
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 