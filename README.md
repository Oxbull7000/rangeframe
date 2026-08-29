# RangeFrame

**Concentrated liquidity, under control.**

RangeFrame is a Solana product for creating, previewing, simulating, monitoring, and exiting Raydium CLMM liquidity positions.

## Routes

- `/` kinetic product landing page
- `/app` launch-app workspace and range builder
- `/markets` allowlisted Raydium CLMM pools
- `/positions` owned position UI
- `/positions/[position]` position detail and exit preview
- `/activity` RangeFrame-originating activity
- `/docs` integration notes

## Local Development

```bash
npm install --ignore-scripts
npm run dev
```

## Environment

```bash
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Never commit private keys, seed phrases, RPC secrets, or Supabase service-role credentials.

## Current Status

The product UI, wallet adapter, Raydium CLMM prepare/sign/broadcast flow, allowlisted pools, range math, and position manager are implemented. Server routes prepare transactions; the connected wallet signs and broadcasts.

## Verification

```bash
npm run lint
npm run typecheck
npm test
npm run build
```
