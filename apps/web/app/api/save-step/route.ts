import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  console.log('received step', data);
  return NextResponse.json({ ok: true });
}
