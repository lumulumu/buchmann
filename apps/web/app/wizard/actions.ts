'use server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function saveStep(step: number, data: any) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('not authenticated');

  const updates = { user_id: user.id, ...data, status: 'draft' };
  await supabase.from('cases').upsert(updates, { onConflict: 'user_id' });
}
