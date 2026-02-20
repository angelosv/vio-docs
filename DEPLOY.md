# Deploy Guide - vio-docs

## Remaining steps

### 1. Create the repository on GitHub

If you have `gh` installed and authenticated:

```bash
cd /Users/angelo/vio-docs
gh auth login   # if the token has expired
gh repo create vio-docs --public --source=. --remote=origin --push
```

Or manually at [github.com/new](https://github.com/new):
- Name: **vio-docs**
- Visibility: Public
- Do not initialize with README (one already exists)

Then:

```bash
cd /Users/angelo/vio-docs
git remote add origin https://github.com/angelosv/vio-docs.git
git push -u origin main
```

### 2. Connect with Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. **Add New** → **Project**
3. Import the `vio-docs` repo from GitHub
4. Framework preset: Next.js (auto-detected)
5. Build command: `npm run build`
6. Deploy

### 3. Configure domain docs.vio.live

1. In Vercel: **Project Settings** → **Domains**
2. Add `docs.vio.live`
3. Configure DNS at your `vio.live` domain provider:
   - Type: **CNAME**
   - Name: `docs`
   - Value: `cname.vercel-dns.com`

### Alternative: Vercel CLI

```bash
npm i -g vercel
cd /Users/angelo/vio-docs
vercel
# Follow the instructions to link the project
vercel --prod
```

---

**Note**: If you use a different GitHub user, update `docsRepositoryBase` in:
- `theme.config.jsx`
- `app/layout.jsx`
