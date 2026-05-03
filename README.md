# ESC

ESC is a Web3 monorepo with a Next.js frontend, Cloudflare Workers backend, Ponder indexer, Foundry contracts, and shared UI/config packages.

## Stack

- pnpm workspaces + Turborepo
- Next.js 16, React 19, Tailwind CSS 4, next-intl
- RainbowKit, Wagmi, Viem
- Cloudflare Workers, Hono, Wrangler
- Ponder indexer with GraphQL/SQL APIs
- Foundry + Solidity
- TypeScript + Biome

## Structure

```txt
apps/frontend   Next.js Web3 app
apps/backend    Cloudflare Workers API
apps/indexer    Ponder event indexer
apps/contract   Foundry contracts
packages/ui     Shared UI components and styles
packages/configs Shared Biome and TypeScript configs
```

## Setup

```bash
pnpm install
cp apps/frontend/.env.example apps/frontend/.env
cp apps/indexer/.env.example apps/indexer/.env.local
```

Required environment variables:

```env
# apps/frontend/.env
WALLET_CONNECT_PROJECT_ID=""

# apps/indexer/.env.local
PONDER_RPC_URL_1=
DATABASE_URL=
```

`DATABASE_URL` is optional. If omitted, Ponder uses SQLite.

## Development

Run everything:

```bash
pnpm dev
```

Run one app:

```bash
pnpm --filter @esc/frontend dev
pnpm --filter @esc/backend dev
pnpm --filter @esc/indexer dev
```

## Common Commands

```bash
pnpm build
pnpm typecheck
pnpm check
pnpm format:check
```

Backend:

```bash
pnpm --filter @esc/backend typegen
pnpm --filter @esc/backend deploy
```

Contracts:

```bash
cd apps/contract
forge build
forge test
forge fmt
```

## Notes

- Frontend supports wallet connection and i18n.
- Backend exposes `/` and `/health`.
- Indexer tracks `PrimitiveManager:Swap` events on Ethereum mainnet.
- Root license is not currently declared.
