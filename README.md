# dental-portal-v2

Monorepo: Next.js (web) + FastAPI (api) + Docker.  
Palette/theme based on clinic site (gold/dark).  
Date: 2025-11-04

## Structure
```
apps/
  web/   # Next.js 15 App Router
  api/   # FastAPI
docker/
  docker-compose.yml
  .env.example
packages/
  ui/    # shared UI (placeholder)
  types/ # shared types (placeholder)
```

## Quick start (Docker)
1. Copy envs:
   ```bash
   cp docker/.env.example docker/.env
   ```
2. Start:
   ```bash
   docker compose -f docker/docker-compose.yml up --build
   ```
   - Web: http://localhost:3000
   - API: http://localhost:8000/docs

## Local dev (without Docker)
### API
```bash
cd apps/api
python -m venv .venv && . .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Web
```bash
cd apps/web
npm i
npm run dev
```

## GitHub
```bash
git init
git add .
git commit -m "chore: bootstrap dental-portal-v2"
git branch -M main
git remote add origin https://github.com/ChulkovAlex/dental-portal-v2.git
git push -u origin main
```

## Notes
- Stubs included for routers, models, and pages matching the redesign plan.
- Replace placeholders in `docker/.env.example` before production.
