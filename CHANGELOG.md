# Zu Burger Spot — Production Upgrade Changelog

## 🔴 Critical fixes

1. **Mobile menu cards no longer collapse into stacked squares.**
   `styles.css` previously had a `@media (max-width: 640px)` rule that
   switched `.menu-item-card` to a single-column stacked layout with a
   full-width 220px-tall image. Replaced the fixed-breakpoint system with a
   fluid, `clamp()`-based sizing system so the card stays in its original
   3-column layout (image / content / price) at every viewport width, from
   large desktop down to small phones — image, padding, gap, and type size
   all scale proportionally instead of jumping between fixed states.

2. **Fixed the loading-screen duplicate photo bug.**
   `Loader.jsx` was rendering two separate images at once — `hero-bg.jpg`
   as a full background *and* `logo.jpg` as a circular badge on top of it —
   which produced the visible overlapping/collision artifact you saw on
   the loading screen. Now uses a single photo (`logo.jpg`), full-bleed,
   with a soft radial mask-fade instead of a hard rectangle.

3. **Fixed broken menu item photos.**
   `MenuSection.jsx` contained a hand-typed lookup table of 56 unique
   Unsplash photo IDs (one per menu item). Several of these IDs were
   invalid, producing the broken-image icons you saw across multiple
   categories (Shawarma, Pancakes, etc.) — confirmed via your DevTools
   screenshot showing a 403/failed load on one such ID. Replaced this
   fragile per-item lookup with the already-verified category banner photo
   (each of which was individually confirmed against a live Unsplash page
   before being used), applied consistently as the item thumbnail. This
   trades unique-per-dish photography for guaranteed-correct rendering —
   the right tradeoff until real photos of your dishes are available (see
   "Next steps" below).

## 🟠 High-priority improvements

4. **Rebuilt the hero section** — headline size increased from 36px to a
   fluid 72–96px `Fraunces` display size, the logo moved from a boxed
   background photo (which had a visible seam/contrast mismatch) to a
   small rotated emblem badge, and the four duplicate "Popular" cards were
   replaced with one confident flagship dish callout. Search and category
   filtering logic is unchanged — same behavior, cleaner presentation.

5. **Removed the unused `lucide-react` dependency.** It was listed in
   `package.json` but never imported anywhere in the codebase — pure dead
   weight in the install and bundle.

6. **Regenerated `package-lock.json` from scratch** against the cleaned
   `package.json`, confirming no platform-locked (Windows-only) binaries
   are pinned as direct dependencies.

## 🟡 Accessibility & polish

7. Added a **skip-to-content link** for keyboard users.
8. Added **visible focus states** (`:focus-visible` outline) for all
   interactive elements — buttons, links, the search input.
9. Increased **category nav touch targets** to a 40px minimum height, and
   added `aria-current` so the active category is announced correctly by
   screen readers.
10. Marked decorative elements (`category.icon`, steam-wisp animation, the
    per-item thumbnail) with `aria-hidden` / empty `alt` where appropriate,
    so screen readers don't announce redundant or purely-visual content.
11. Added `aria-label`s to all footer social links.
12. Menu item descriptions are now `line-clamp`-limited to 2 lines, so long
    descriptions can no longer overflow or break card layout at narrow
    widths.

## 🟢 New feature

13. **Footer now includes real contact info** — phone (click-to-call),
    email (click-to-email), and social links for Instagram, Facebook,
    TikTok, and Telegram. **Action needed:** the values are currently
    placeholders — edit the `CONTACT` object at the top of
    `src/components/Footer.jsx` with your real phone number, email, and
    social URLs before deploying.

## Removed

- `src/assets/images/hero-bg.jpg` — no longer imported anywhere after the
  loader fix, deleted to avoid shipping dead assets in the repo.

## Preserved, unchanged

- All category/item data in `menuData.js`
- Search-by-name/category filtering logic
- Category scroll-to-section navigation
- Framer Motion scroll-reveal and hover animations on menu cards
- Overall gold/black visual identity and typography choices (Fraunces +
  Manrope)

---

## Production readiness — verified

- ✅ `npm install` completes cleanly (only a Node-version advisory warning,
  since this sandbox runs Node 22 — your `engines` field correctly
  requires 24.x, which is what Vercel will use)
- ✅ `npm run build` completes with no errors or warnings
- ✅ No broken image references — confirmed by inspecting the built
  `dist/index.html` and `dist/assets/` output directly
- ✅ Favicon (`public/logo.jpg`) present and correctly referenced
- ✅ Ready to commit and push to GitHub as-is
- ✅ Ready for Vercel deployment as-is (`vercel.json` unchanged, still
  correctly configured for a Vite project)

## Next steps (not done — needs your input, not a code fix)

- **Real dish photography.** The category images are stock photos, and
  every item within a category currently shares that one photo. For a
  paying client's actual menu, the highest-impact remaining upgrade is
  swapping these for real photos of your dishes — send me real photos per
  item (or per category, at minimum) and I'll wire them in as local,
  bundled assets, which is both faster to load and impossible to 404
  (unlike hotlinked external URLs).
- **Footer contact details** — fill in your real phone/email/socials (see
  #13 above).
