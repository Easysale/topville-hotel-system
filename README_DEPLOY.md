
# Topville Hotel System — Deployment Guide

This guide walks through deploying the frontend (Vercel) and backend (Render) and connecting your Supabase database.

## 1. Push to GitHub
1. Create a private repo named `topville-hotel-system`.
2. Push the project files to the repo.

## 2. Vercel (Frontend)
- Import the repo on Vercel.
- Framework: Vite.
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables (Vercel):
  - VITE_SUPABASE_URL
  - VITE_SUPABASE_ANON_KEY

## 3. Render (Backend)
- Create a Web Service on Render.
- Build command: `npm install`
- Start command: `npm run server`
- Environment variables (Render):
  - SUPABASE_URL
  - SUPABASE_SERVICE_ROLE_KEY
  - PORT=4000

## 4. DNS (TopvilleHotel.com)
- Add CNAME/A records as Vercel instructs for `www` and root.
- Optionally add `api.topvillehotel.com` CNAME pointing to Render service.

## 5. Supabase
- Run `migrations/topville_full_schema.sql` in SQL editor to create tables and seed data.
- Add staff users via Supabase Auth or insert into `users` table.
