# Matt Kopiec — Personal Website

## Before publishing — fill in your links

Open `src/App.jsx` in any text editor.
At the very top you'll see a block called `LINKS` — replace each URL with your real ones.

---

## How to run locally (to preview before publishing)

1. Open a terminal in this folder
2. Run: `npm install`
3. Run: `npm run dev`
4. Open your browser at: http://localhost:5173

---

## How to publish on GitHub + Vercel

### Step 1 — GitHub
1. Go to github.com → sign in → click the "+" in top right → "New repository"
2. Name it `matt-kopiec-website`, leave everything else as default, click "Create repository"
3. GitHub will show you a page with commands — copy the ones under "push an existing repository"
4. Open terminal in this folder and paste those commands one by one

### Step 2 — Vercel
1. Go to vercel.com → sign up with your GitHub account
2. Click "Add New Project" → select your `matt-kopiec-website` repo
3. Click "Deploy" — no settings to change, Vercel detects Vite automatically
4. Your site is live at a `vercel.app` URL in ~30 seconds

### Step 3 — Connect your domain
1. In Vercel, go to your project → Settings → Domains → type your domain name
2. Vercel gives you two DNS records (an A record and a CNAME)
3. Go to wherever you bought your domain → DNS settings → add those two records
4. Wait 10–30 minutes → your site is live on your domain
