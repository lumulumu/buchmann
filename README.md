# PflegeForge

This repository provides a minimal monorepo skeleton for the platform described in the project plan. It uses Next.js with Turborepo, Supabase, Stripe, Twilio, Resend and OpenAI.

The project structure:

- `apps/web` – Next.js 14 frontend
- `apps/api` – API routes and webhooks
- `packages/db` – database types and utilities
- `packages/ai` – wrapper for OpenAI

The root `package.json` defines workspaces for each app and package. Dependency installation requires network access which is not available in this environment, so you will need to run `pnpm install` locally.

## Development

```bash
pnpm install
pnpm turbo run dev
```
