import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { to, subject, html } = await req.json();
  await resend.emails.send({ to, subject, html, from: 'noreply@example.com' });
  return NextResponse.json({ ok: true });
}
