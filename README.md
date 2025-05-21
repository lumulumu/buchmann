# PflegeForge

This repository provides a minimal monorepo skeleton for the platform described in the project plan. It follows the [Next Forge](https://docs.next-forge.com/overview) approach for structuring Next.js 14 apps in a Turborepo and integrates Supabase, Stripe, Twilio, Resend and OpenAI.

The project structure:

- `apps/web` – Next.js 14 frontend
- `apps/api` – API routes and webhooks
- `packages/db` – database types and utilities
- `packages/ai` – wrapper for OpenAI

The root `package.json` defines workspaces for each app and package. Dependency installation requires network access which is not available in this environment, so you will need to run `pnpm install` locally. Copy `.env.example` to `.env` and fill in your credentials before running the apps.

## Development

```bash
pnpm install
pnpm turbo run dev
```
