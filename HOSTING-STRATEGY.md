# Portfolio Hosting Strategy: Permanent & Reliable

> **Goal:** 100% uptime for krishnakaushik25.github.io for 1+ years
> **Created:** Jan 31, 2026

---

## 1. Root Cause Analysis: Why Your Site Failed

### What Happened

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FAILURE SEQUENCE                                                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  1. GitHub Pages was set to: "Deploy from branch" (Legacy/Jekyll mode)  │
│     └── This builds site using Jekyll, NOT your Astro workflow          │
│                                                                          │
│  2. Your deploy.yml workflow WAS running and succeeding                 │
│     └── BUT GitHub Pages was IGNORING the output                        │
│     └── It was serving raw source files instead of built /dist          │
│                                                                          │
│  3. Result: README.md (Astro default) shown instead of index.html       │
│                                                                          │
│  FIX: Changed source to "GitHub Actions" → Now uses your workflow       │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Why Cache Showed Old Content

GitHub Pages uses **Fastly CDN** with ~10-30 minute cache:
- Even after fix, CDN edge servers had old content cached
- Hard refresh (Cmd+Shift+R) or cache-busting URL (`?nocache=xxx`) showed new content
- Full propagation: 10-30 minutes globally

**Sources:**
- [GitHub Pages CDN Caching Discussion](https://github.com/orgs/community/discussions/11884)
- [GitHub Pages Not Updating](https://github.com/orgs/community/discussions/152753)

---

## 2. Current Setup (After Fix)

```yaml
# .github/workflows/deploy.yml
Source: GitHub Actions (NOT "Deploy from branch")
Workflow: Astro build → Upload artifact → Deploy to Pages
Branch: main
Status: ✅ Working
```

### Verified Working

| Check | Status |
|-------|--------|
| GitHub Actions source enabled | ✅ |
| deploy.yml using actions v4 | ✅ |
| Proper permissions set | ✅ |
| Build succeeds locally | ✅ |
| All workflow runs passing | ✅ |

---

## 3. Prevention: Hardening Your Setup

### 3.1 Lock Down GitHub Pages Settings

**Manual Step (Do This Once):**

1. Go to: `Settings → Environments → github-pages`
2. Add **Deployment Protection Rule:**
   - ✅ Only allow `main` branch to deploy
   - This prevents accidental deployments from other branches

### 3.2 Pin Action Versions (Critical)

Your current workflow uses `@v4` which is good. But for maximum stability:

```yaml
# .github/workflows/deploy.yml - Pinned versions
- uses: actions/checkout@v4.1.1        # Pin to specific version
- uses: actions/setup-node@v4.0.2
- uses: actions/upload-pages-artifact@v3.0.1
- uses: actions/deploy-pages@v4.0.4
```

**Why:** GitHub deprecated Pages actions v3 on Jan 30, 2025. Always use v4+.

**Source:** [GitHub Pages Actions Deprecation Notice](https://github.blog/changelog/2024-12-05-deprecation-notice-github-pages-actions-to-require-artifacts-actions-v4-on-github-com/)

### 3.3 Add Build Verification Step

Add to your workflow to catch build failures early:

```yaml
- name: Build Astro
  run: npm run build

- name: Verify build output
  run: |
    if [ ! -f "./dist/index.html" ]; then
      echo "ERROR: Build failed - index.html not found"
      exit 1
    fi
    grep -q "Krishna Kaushik" ./dist/index.html || (echo "ERROR: Content verification failed" && exit 1)
```

---

## 4. Monitoring: Know When It Goes Down

### 4.1 Free Uptime Monitoring (Recommended)

| Service | Free Tier | Check Interval | Alerts |
|---------|-----------|----------------|--------|
| **UptimeRobot** | 50 monitors | 5 min | Email, Telegram, Slack |
| **Pulsetic** | 10 monitors | 1 min | Email, Webhook |
| **Better Stack** | 10 monitors | 3 min | Email, SMS |

**Recommended: [UptimeRobot](https://uptimerobot.com/)** (Best free tier)

**Setup (2 minutes):**
1. Sign up at uptimerobot.com
2. Add monitor: `https://krishnakaushik25.github.io`
3. Set alert contacts: Email + Telegram
4. Optional: Create public status page

### 4.2 GitHub Actions Notification

Add to your workflow for deployment failure alerts:

```yaml
- name: Notify on failure
  if: failure()
  uses: dawidd6/action-send-mail@v3
  with:
    server_address: smtp.gmail.com
    server_port: 465
    username: ${{ secrets.EMAIL_USERNAME }}
    password: ${{ secrets.EMAIL_PASSWORD }}
    subject: "⚠️ Portfolio Deployment Failed"
    to: k.kaushik25@gmail.com
    body: "GitHub Pages deployment failed. Check: https://github.com/krishnakaushik25/krishnakaushik25.github.io/actions"
```

---

## 5. Redundancy: Backup Hosting

### Why Backup Hosting?

GitHub Pages is reliable (~99.9% uptime) but:
- No SLA for free tier
- Occasional CDN issues
- Single point of failure

### Option A: Vercel Mirror (Recommended)

**Setup time:** 5 minutes | **Cost:** Free

```bash
# One-time setup
npm i -g vercel
cd /Users/krishnakaushik/Documents/Portfolios/portfolio-astro
vercel --prod
```

**Benefits:**
- Auto-deploys on git push
- Separate URL as backup: `portfolio-astro.vercel.app`
- Can point custom domain if GitHub Pages fails

### Option B: Netlify Mirror

```bash
# One-time setup
npm i -g netlify-cli
netlify init
netlify deploy --prod
```

### Option C: Cloudflare Pages (Best Performance)

**Benefits:**
- Unlimited bandwidth
- Fastest global CDN (300+ edge locations)
- Built-in DDoS protection

**Sources:**
- [Vercel vs Netlify vs Cloudflare 2025](https://www.digitalapplied.com/blog/vercel-vs-netlify-vs-cloudflare-pages-comparison)
- [Awesome Web Hosting 2026](https://github.com/iSoumyaDey/Awesome-Web-Hosting-2026)

---

## 6. Recommended Architecture: Multi-Tier Hosting

```
┌─────────────────────────────────────────────────────────────────────────┐
│  PRODUCTION ARCHITECTURE (Recommended)                                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  PRIMARY: GitHub Pages                                                  │
│  ├── URL: krishnakaushik25.github.io                                    │
│  ├── Auto-deploy: On push to main                                       │
│  └── Monitored by: UptimeRobot                                          │
│                                                                          │
│  BACKUP: Vercel (Optional but Recommended)                              │
│  ├── URL: krishna-portfolio.vercel.app                                  │
│  ├── Auto-deploy: On push to main (same repo)                           │
│  └── Failover: If GitHub Pages down, share Vercel URL                   │
│                                                                          │
│  MONITORING:                                                             │
│  ├── UptimeRobot: Check every 5 min                                     │
│  ├── Alerts: Email + Telegram                                           │
│  └── Status page: status.krishnakaushik.dev (optional)                  │
│                                                                          │
│  CUSTOM DOMAIN (Future):                                                │
│  ├── Buy: krishnakaushik.dev (~$12/year)                                │
│  ├── Point to: GitHub Pages (primary)                                   │
│  └── Failover DNS: Can switch to Vercel in minutes                      │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Maintenance Checklist (Quarterly)

### Every 3 Months

- [ ] Check GitHub Actions workflow runs for any failures
- [ ] Verify site loads correctly (visual check)
- [ ] Update npm dependencies: `npm update`
- [ ] Check for GitHub Actions deprecation notices
- [ ] Review UptimeRobot alerts log

### Yearly

- [ ] Renew custom domain (if purchased)
- [ ] Update Node.js version in workflow
- [ ] Review and update content
- [ ] Check for Astro major version updates

---

## 8. Quick Reference: Troubleshooting

### Site Not Updating

```bash
# Force rebuild
cd /Users/krishnakaushik/Documents/Portfolios/portfolio-astro
git commit --allow-empty -m "Force rebuild"
git push origin main
```

### Still Showing Old Content

1. Wait 10-30 minutes (CDN cache)
2. Hard refresh: `Cmd+Shift+R`
3. Try: `https://krishnakaushik25.github.io/?v=2`

### Workflow Failing

```bash
# Check locally first
npm run build
# Check dist/index.html exists and has correct content
```

### GitHub Pages Completely Down

1. Check: https://www.githubstatus.com/
2. Switch to backup: Share Vercel URL temporarily
3. Wait for GitHub to resolve

---

## 9. Cost Summary

| Item | Cost | Frequency |
|------|------|-----------|
| GitHub Pages | Free | Forever |
| Vercel Backup | Free | Forever |
| UptimeRobot | Free | Forever |
| Custom Domain | ~$12 | Yearly (optional) |
| **Total** | **$0-12/year** | |

---

## 10. Implementation Checklist

### Immediate (Today)

- [x] Fix GitHub Pages source → GitHub Actions
- [x] Verify site is live
- [ ] Set up UptimeRobot monitoring
- [ ] Add deployment protection rules

### This Week

- [ ] Deploy to Vercel as backup
- [ ] Pin action versions in workflow
- [ ] Add build verification step

### This Month

- [ ] Consider custom domain
- [ ] Set up Telegram alerts
- [ ] Create public status page

---

*Last Updated: Jan 31, 2026*
