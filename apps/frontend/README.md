# @esc/frontend

Next.js Web3 frontend for ESC.

## Stack

- Next.js 16 with React 19
- Tailwind CSS 4, DaisyUI, Radix UI, Motion
- Shared components and styles from `@esc/ui`
- Hugeicons via `@hugeicons/core-free-icons` and `@hugeicons/react`
- next-intl for routing and translations
- next-themes for theme switching
- RainbowKit, Wagmi, Viem, and TanStack Query for wallet and EVM data flows
- Pino for logging
- TypeScript and Biome

## Setup

Install dependencies from the repository root:

```bash
pnpm install
```

Create the frontend environment file:

```bash
cp apps/frontend/.env.example apps/frontend/.env
```

Required variables:

```env
WALLET_CONNECT_PROJECT_ID=""
```

## Development

Run only the frontend from the repository root:

```bash
pnpm dev:frontend
```

Equivalent filter command:

```bash
pnpm --filter @esc/frontend dev
```

Open `http://localhost:3000`.

## Scripts

```txt
pnpm --filter @esc/frontend dev
pnpm --filter @esc/frontend build
pnpm --filter @esc/frontend start
pnpm --filter @esc/frontend typecheck
pnpm --filter @esc/frontend check
pnpm --filter @esc/frontend check:fix
pnpm --filter @esc/frontend lint
pnpm --filter @esc/frontend lint:fix
pnpm --filter @esc/frontend format
pnpm --filter @esc/frontend format:check
```
