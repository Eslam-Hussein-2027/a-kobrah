# Frontend — React + Vite

Website UI for العربية الكبرى للتأمين المساهمة. See the [root README](../../README.md) for the full project guide.

```bash
cp .env.example .env   # optional — only needed to change the API location
npm install
npm run dev            # http://localhost:5173 (proxies /api to http://127.0.0.1:8000)
npm run lint
npm run build          # output in dist/
```

| Env var                 | Purpose                                                                |
| ----------------------- | ---------------------------------------------------------------------- |
| `VITE_API_URL`          | API base URL in production; empty when the API is on the same domain   |
| `VITE_API_PROXY_TARGET` | Laravel dev server used by the Vite proxy (default `http://127.0.0.1:8000`) |
