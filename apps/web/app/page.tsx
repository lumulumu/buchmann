
'use client';
import Link from 'next/link';
import { useAuth } from '../providers/auth';

export default function Page() {
  const { user, signIn, signOut } = useAuth();
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">PflegeForge</h1>
      {user ? (
        <>
          <p>Angemeldet als {user.email}</p>
          <Link href="/wizard" className="underline">Wizard starten</Link>
          <button onClick={signOut} className="ml-4 text-sm underline">Logout</button>
        </>
      ) : (
        <button onClick={signIn} className="px-4 py-2 bg-blue-500 text-white">Login mit Google</button>
      )}

    </main>
  );
}
