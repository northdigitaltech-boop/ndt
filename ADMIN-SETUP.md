# Admin Panel — Setup Guide

The site has an admin panel at **`/admin`** where every page's content can be edited without touching code.
Content and images are stored in **Supabase** (free tier is plenty).

---

## 1. Create your Supabase project

1. Go to [supabase.com](https://supabase.com) → sign up → **New Project**
2. Pick a name and a database password, choose the region closest to Malaysia (Singapore)
3. Wait ~2 minutes for it to finish setting up

### Run the database setup

Open **SQL Editor → New query**, paste the entire contents of `supabase-setup.sql`
(in this folder), and click **Run**.

That creates the `site_content` table and the public `media` storage bucket for images.

### Copy your keys

Go to **Project Settings → API** and copy:

| Supabase field | Goes into |
|---|---|
| Project URL | `NEXT_PUBLIC_SUPABASE_URL` |
| `service_role` secret | `SUPABASE_SERVICE_ROLE_KEY` |

> The `service_role` key bypasses all security rules. It's only ever used on the server —
> never put it in client code, and never commit it.

---

## 2. Create the environment file

Create `frontend/.env.local`:

```
ADMIN_PASSWORD=choose-a-strong-password-here
AUTH_SECRET=any-long-random-string-for-signing-sessions

NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

GMAIL_USER=your-gmail@gmail.com
GMAIL_PASS=your-16-char-gmail-app-password
```

`.env.local` is git-ignored — it will never be committed.

---

## 3. Run it

```
npm install
npm run dev
```

Open **http://localhost:3000/admin**, enter your `ADMIN_PASSWORD`, and you're in.

---

## 4. Deploying to Vercel

Add all six variables under **Project → Settings → Environment Variables**, then redeploy.
Nothing else changes — Supabase works the same in production.

---

## What you can edit

| Section | Controls |
|---|---|
| **Site Text (EN / MS)** | Every heading, paragraph and button label — in both languages |
| **Contact Info** | Email, phone, WhatsApp number, office address (updates everywhere at once) |
| **Hero Stats** | The 50+ / 30+ / 5+ numbers on the homepage |
| **Services (Home)** | The service list — first 6 appear on the homepage |
| **Services (Full Page)** | The `/services` page cards with descriptions |
| **Service Highlights** | "Fast Services", "Cheap Price", etc. |
| **Packages / Pricing** | Plan names, prices, discounts, features, badges |
| **Package Comparison** | The comparison table on `/packages` |
| **Team Members** | Names, roles, bios, photos |
| **Company Values** | The 4 value cards on `/team` |
| **Clients / Logos** | Client names and logo images |
| **Portfolio Projects** | Project cards on `/work` |
| **Work Page Stats** | Stats on the `/work` page |
| **Job Openings** | Careers listings — title, duties, requirements, benefits |

### How editing works

- Each section has its own **Save Changes** button — save only what you edited.
- **Reset to Default** restores that section to the original built-in content.
- Sidebar markers: green ✔ = section has saved custom content, amber ● = unsaved edits.
- If Supabase is unreachable, the site falls back to the built-in content automatically — it never breaks.

### Images

Any image field (team photos, client logos) has an **Upload Image** button.
Files go straight to Supabase Storage and the URL is filled in for you.
**Choose Existing** opens a gallery of everything you've uploaded before.

Max 5 MB per file. PNG, JPG, WEBP, GIF and SVG accepted.

### Notes

- Colour fields (e.g. `from-cyan-500 to-blue-600`) are Tailwind gradient classes — copy the pattern from existing entries.
- In the comparison table, type `true` for a checkmark, `false` for a dash, or any text to display that text.
- Icons are matched by service/value title. Titles you invent get a sensible default icon.
