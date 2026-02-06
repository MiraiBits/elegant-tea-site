## 2024-05-22 - Navbars in Pages vs Layouts
**Learning:** Placing the `Navbar` component inside `page.tsx` (instead of `layout.tsx`) complicates implementing a global "Skip to Main Content" link. A wrapper in `layout.tsx` (e.g., `<main id="skip-target">{children}</main>`) captures the Navbar as well, defeating the purpose.
**Action:** When adding skip links, verify if navigation is inside `children`. If so, target the first content component (like `Hero`) explicitly or refactor navigation to the layout.

## 2024-05-23 - Semantic Navigation in Hero Components
**Learning:** The Hero component used `<button>` elements for primary navigation links ("Explore Collection"), which prevents standard browser link behavior (like opening in a new tab) and semantic navigation for screen readers.
**Action:** Always check "buttons" in marketing sections. If they navigate to another section or page, replace them with Next.js `Link` components. Also, ensure decorative scroll indicators are functional links with `aria-label`.
## 2026-02-02 - Form Feedback & Live Regions
**Learning:** Static "fake" forms are a common anti-pattern. Upgrading them to real `<form>` elements with `aria-live` regions for feedback transforms a dead UI into an accessible, responsive experience with minimal code.
**Action:** Always wrap inputs in `<form>` and use `aria-live="polite"` for dynamic status messages (loading/success/error) to support screen readers without extra focus management.

## 2026-02-15 - Reusable Scroll Logic
**Learning:** Hardcoded scroll thresholds in hooks (like `window.scrollY > 50`) limit reusability for different UI elements. Adding a `threshold` parameter to `useThrottledScroll` allowed reusing the same logic for both the Navbar background and the "Back to Top" button without code duplication.
**Action:** When creating event listeners (scroll, resize), always parameterize thresholds or conditions to support multiple use cases.
## 2026-02-05 - Accessible Smooth Scrolling
**Learning:** For Single Page Applications (SPAs) with anchor navigation, smooth scrolling is essential for context preservation. However, it can trigger motion sickness.
**Action:** Always combine `scroll-smooth` with `motion-reduce:scroll-auto` (or CSS `@media (prefers-reduced-motion)`) to respect user accessibility preferences.

## 2026-02-06 - Unused Assets and Props
**Learning:** Sometimes high-quality assets (like product images) exist in `public/` but are ignored by components due to unfinished implementation (commented out props). Enabling them is a high-impact, low-effort UX win.
**Action:** When auditing components, check for unused props and cross-reference with available assets in `public/` to find "quick wins" for visual polish.
