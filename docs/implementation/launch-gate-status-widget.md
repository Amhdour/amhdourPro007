# Launch-Gate Status Widget (Secure Support Agent Starter Kit)

## Data source model
- The widget is **artifact-backed**, not live Python execution.
- Source JSON file: `public/data/launch-gate-status.json`.
- API endpoint: `GET /api/launch-gate-status` (`src/app/api/launch-gate-status/route.ts`) reads that artifact and returns a safe summary.

## Why artifact-backed
- The website stack supports safe route handlers, but direct Python/shell execution from a public web endpoint is not appropriate for security and reliability.
- This design keeps the endpoint read-only and deterministic, while still surfacing launch-gate readiness in the UI.

## Security considerations
- No user-controlled command execution or shell access.
- Read-only JSON response from checked-in artifact data.
- Basic in-memory request rate limiting is applied per client IP.
- Endpoint returns fallback safe response when artifact is unavailable.
- Frontend widget uses timeout + fallback messaging to avoid hanging or hard failure.

## Update workflow
1. Refresh `public/data/launch-gate-status.json` from your latest trusted evaluation output.
2. Deploy site updates.
3. Widget and API automatically reflect the new summary.
