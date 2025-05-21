'use client';
import { useState } from 'react';

export default function WizardPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '' });

  async function handleSubmit() {
    await fetch('/api/save-step', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setStep(step + 1);
  }

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Onboarding Wizard</h1>
      {step === 1 && (
        <div className="flex flex-col gap-2">
          <input
            className="border p-2"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="border p-2"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <button className="bg-blue-600 text-white p-2" onClick={handleSubmit}>
            Next
          </button>
        </div>
      )}
      {step > 1 && <p className="text-green-700">Thank you! Step saved.</p>}
    </main>
  );
}
