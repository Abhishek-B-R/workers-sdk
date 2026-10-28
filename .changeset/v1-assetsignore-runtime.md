---
"@cloudflare/vite-plugin": patch
---

Validate asset ignore files and update local Flagship support

Upgrade Miniflare to 5.20261023.2-beta and Wrangler to 4.154.1. Local development now rejects `.assetsignore` files with invalid UTF-8 or null characters instead of silently ignoring their patterns. The Local Explorer also supports Flagship management by app ID, and local flag evaluations retain metadata.
