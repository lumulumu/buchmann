'use client';
import { useState } from 'react';

import { saveStep } from './actions';

export default function WizardPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setLoading(true);
    await saveStep(step, data);
    setLoading(false);
    setStep(step + 1);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Onboarding Wizard</h1>
      {step === 1 && (
        <form onSubmit={onSubmit} className="space-y-2">
          <input name="first_name" placeholder="Vorname" className="border p-2" />
          <input name="last_name" placeholder="Nachname" className="border p-2" />
          <button className="px-4 py-2 bg-blue-500 text-white" disabled={loading}>
            Weiter
          </button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={onSubmit} className="space-y-2">
          <input name="kasse" placeholder="Krankenkasse" className="border p-2" />
          <button className="px-4 py-2 bg-blue-500 text-white" disabled={loading}>
            Weiter
          </button>
        </form>
      )}
      {step === 3 && <p>Vielen Dank! Weitere Schritte folgen.</p>}
    </div>

  );
}
