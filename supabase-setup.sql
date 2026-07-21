-- ============================================================
-- NorthDigital Tech — Supabase setup
-- Run this once in: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- 1. Content table (one row per editable section)
create table if not exists public.site_content (
  section    text primary key,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

-- 2. Lock the table down. The admin API uses the service role key,
--    which bypasses RLS, so no public policies are needed.
alter table public.site_content enable row level security;

-- 3. Public storage bucket for images (team photos, client logos, etc.)
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

-- 4. Allow anyone to READ images (needed so the website can display them).
--    Uploads still require the service role key, so only your admin panel can write.
drop policy if exists "Public read access to media" on storage.objects;
create policy "Public read access to media"
  on storage.objects for select
  using (bucket_id = 'media');
