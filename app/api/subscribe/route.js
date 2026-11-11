import { NextResponse } from 'next/server';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const { firstName, lastName, email } = body || {};
  if (!firstName || !lastName || !EMAIL.test(email || '')) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  // TODO: connect your email provider (Mailchimp, ConvertKit, Resend...) here.
  console.log('[subscribe]', { firstName, lastName, email });

  return NextResponse.json({ ok: true });
}
