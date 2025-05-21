# PflegeForge

This repository provides a starter monorepo for building the onboarding service described in the project outline. It relies on Next.js with Turborepo and integrates Supabase, Stripe, Twilio, Resend and OpenAI.

## Structure

- `apps/web` – customer facing Next.js app with an onboarding wizard
- `apps/api` – Next.js API routes (webhooks, cron jobs)
- `packages/db` – shared TypeScript types for the Supabase schema
- `packages/ai` – wrapper for OpenAI calls

Install dependencies locally and run all apps with Turborepo:

```bash
pnpm install
pnpm turbo run dev
```

The web app offers a login with Google and a simple multi-step wizard. Form data is saved via server actions to Supabase with `status = draft` until payment succeeds. Stripe webhooks update the payment table and set the case status to `pending`.
