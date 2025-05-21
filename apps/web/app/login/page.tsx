'use client';
import { useAuth } from '../../providers/auth';

export default function LoginPage() {
  const { signIn } = useAuth();
  return (
    <div className="p-4">
      <button onClick={signIn} className="px-4 py-2 bg-blue-500 text-white">Login with Google</button>
    </div>
  );
}
