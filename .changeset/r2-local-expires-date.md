---
"wrangler": patch
---

Fix `wrangler r2 object put --local` and `wrangler r2 bulk put --local` mishandling `--expires`

Local mode read `--expires` with `parseInt()`, so an HTTP date such as `"Wed, 21 Oct 2026 07:28:00 GMT"` failed with an internal "not of type 'date'" error, and an ISO date such as `2026-10-21` was silently stored as 2026 milliseconds after the epoch (1 January 1970). Local mode now parses the value as a date, the same value a remote upload sends as the `Expires` header, and reports a clear error when it is not one. All-digit values are still read as epoch milliseconds.
