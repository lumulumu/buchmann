import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const { data: cases } = await supabase
    .from('cases')
    .select('id,user_id,status')
    .not('status', 'eq', 'complete');

  for (const c of cases ?? []) {
    // send a reminder email (placeholder)
    await resend.emails.send({
      to: 'user@example.com',
      subject: 'Dokumente fehlen',
      html: `<p>Bitte laden Sie fehlende Dokumente zu Fall ${c.id} hoch.</p>`,
      from: 'noreply@example.com'
    });
  }

  return NextResponse.json({ ok: true });
}
