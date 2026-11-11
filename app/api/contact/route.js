import { NextResponse } from 'next/server';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const { firstName, lastName, email, message } = body || {};
  if (!firstName || !lastName || !message || !EMAIL.test(email || '')) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  // TODO: forward to your inbox (Resend, SendGrid, SMTP...) here.
  console.log('[contact]', { firstName, lastName, email, message });

  return NextResponse.json({ ok: true });
}
