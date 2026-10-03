-- Lead funnel storage for csrushil.com.
-- The website inserts with the public (publishable/anon) key; RLS allows
-- INSERT only, so nobody can read leads with that key. The /admin dashboard
-- reads them server-side with the secret key (SUPABASE_SECRET_KEY).

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),
  name              text not null check (char_length(name) between 1 and 200),
  phone             text not null check (char_length(phone) between 5 and 40),
  email             text check (email is null or char_length(email) <= 200),
  service           text check (service is null or char_length(service) <= 200),
  client_type       text check (client_type is null or char_length(client_type) <= 100),
  turnover          text check (turnover is null or char_length(turnover) <= 100),
  location          text check (location is null or char_length(location) <= 100),
  urgency           text check (urgency is null or char_length(urgency) <= 100),
  preferred_contact text check (preferred_contact is null or char_length(preferred_contact) <= 50),
  message           text check (message is null or char_length(message) <= 2000),
  lead_score        int  check (lead_score is null or lead_score between 0 and 100),
  lead_tier         text check (lead_tier is null or lead_tier in ('high', 'medium', 'standard')),
  source_page       text check (source_page is null or char_length(source_page) <= 300),
  referrer          text check (referrer is null or char_length(referrer) <= 500),
  utm_source        text check (utm_source is null or char_length(utm_source) <= 100),
  utm_medium        text check (utm_medium is null or char_length(utm_medium) <= 100),
  utm_campaign      text check (utm_campaign is null or char_length(utm_campaign) <= 100),
  status            text not null default 'new' check (status in ('new', 'contacted', 'meeting_booked', 'won', 'lost'))
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

drop policy if exists "website can insert leads" on public.leads;
create policy "website can insert leads" on public.leads
  for insert to anon, authenticated
  with check (status = 'new');

revoke all on public.leads from anon, authenticated;
grant insert on public.leads to anon, authenticated;

-- Click tracking for the Call / WhatsApp / Book buttons, so the dashboard
-- shows which pages and devices actually drive contact.
create table if not exists public.cta_clicks (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  action     text not null check (action in ('call', 'whatsapp', 'book', 'form_start', 'form_submit')),
  placement  text check (placement is null or char_length(placement) <= 50),
  page       text check (page is null or char_length(page) <= 300),
  device     text check (device is null or device in ('mobile', 'desktop'))
);

create index if not exists cta_clicks_created_at_idx on public.cta_clicks (created_at desc);

alter table public.cta_clicks enable row level security;

drop policy if exists "website can insert clicks" on public.cta_clicks;
create policy "website can insert clicks" on public.cta_clicks
  for insert to anon, authenticated
  with check (true);

revoke all on public.cta_clicks from anon, authenticated;
grant insert on public.cta_clicks to anon, authenticated;
