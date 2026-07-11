# Zu Burger Spot — Digital Menu

A stripped-down, menu-only version of the Zu Burger project. No cart, checkout,
admin dashboard, auth, or backend — just a fast, animated digital menu.

## What's inside
- Smooth loading intro using your uploaded background photo + logo, with a
  shimmer title and progress reveal.
- Sticky category navigation (Burgers, Sandwiches, Pancakes, Shawarma &
  Burrito, Fruit, Juices, Milkshakes, Frappe, Hot Drinks, Soft Drinks, Extras).
- Every item from your real menu list, with prices in Birr.
- Dark gold/black theme built around your logo's color palette.

## Run it
```
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Notes
- "Moines" (Extras) was kept exactly as given — rename it in
  `src/data/menuData.js` if it should say something else (e.g. "Mayonnaise").
- Category photos are stock photos (Unsplash, free license) representing each
  section, not photos of your specific dishes — swap in real photos anytime by
  replacing the `image` URL per category in `src/data/menuData.js`.
- Logo: `src/assets/images/logo.jpg` — Background/hero: `src/assets/images/hero-bg.jpg`.
