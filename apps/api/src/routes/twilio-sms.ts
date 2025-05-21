import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req: NextRequest) {
  const data = await req.json();
  await client.messages.create({
    body: data.message,
    from: process.env.TWILIO_PHONE_NUMBER!,
    to: data.to
  });
  return NextResponse.json({ ok: true });
}
