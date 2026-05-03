# @esc/backend

Cloudflare Workers API service built with Hono.

## Scripts

```txt
pnpm --filter @esc/backend dev
pnpm --filter @esc/backend typecheck
pnpm --filter @esc/backend check
pnpm --filter @esc/backend build
pnpm --filter @esc/backend deploy
```

Regenerate Cloudflare binding types after changing `wrangler.jsonc`:

```txt
pnpm --filter @esc/backend typegen
```

The reusable Hono app lives in `src/app.ts`; `src/index.ts` is the Worker entrypoint.
