import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Try to get the table structure
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Table check error:', error);
      return NextResponse.json(
        { 
          error: 'Table check failed', 
          details: error.message,
          code: error.code,
          hint: error.hint
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Contacts table exists and is accessible',
      data: data || []
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 