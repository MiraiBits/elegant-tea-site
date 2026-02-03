## 2024-05-22 - Navbars in Pages vs Layouts
**Learning:** Placing the `Navbar` component inside `page.tsx` (instead of `layout.tsx`) complicates implementing a global "Skip to Main Content" link. A wrapper in `layout.tsx` (e.g., `<main id="skip-target">{children}</main>`) captures the Navbar as well, defeating the purpose.
**Action:** When adding skip links, verify if navigation is inside `children`. If so, target the first content component (like `Hero`) explicitly or refactor navigation to the layout.

## 2026-02-02 - Form Feedback & Live Regions
**Learning:** Static "fake" forms are a common anti-pattern. Upgrading them to real `<form>` elements with `aria-live` regions for feedback transforms a dead UI into an accessible, responsive experience with minimal code.
**Action:** Always wrap inputs in `<form>` and use `aria-live="polite"` for dynamic status messages (loading/success/error) to support screen readers without extra focus management.
