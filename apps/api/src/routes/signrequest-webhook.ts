import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const caseId = body.metadata?.case_id;
  const pdfUrl = body.pdf_url;

  const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

  if (caseId && pdfUrl) {
    await supabase.from('documents').insert({
      case_id: caseId,
      type: 'power_of_attorney',
      storage_url: pdfUrl,
      uploaded_at: new Date().toISOString()
    });
    await supabase.from('cases').update({ signed_power_of_attorney_url: pdfUrl }).eq('id', caseId);
  }

  return NextResponse.json({ ok: true });
}
