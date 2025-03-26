import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { data: contact, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone,
          service,
          message,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save contact information', details: error.message },
        { status: 500 }
      );
    }

    // Temporarily disable email sending until we get the database working
    // const emailResult = await sendEmail({
    //   name,
    //   email,
    //   phone,
    //   service,
    //   message,
    // });

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!',
      contact 
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 