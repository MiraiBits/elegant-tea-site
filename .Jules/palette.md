## 2024-05-22 - Navbars in Pages vs Layouts
**Learning:** Placing the `Navbar` component inside `page.tsx` (instead of `layout.tsx`) complicates implementing a global "Skip to Main Content" link. A wrapper in `layout.tsx` (e.g., `<main id="skip-target">{children}</main>`) captures the Navbar as well, defeating the purpose.
**Action:** When adding skip links, verify if navigation is inside `children`. If so, target the first content component (like `Hero`) explicitly or refactor navigation to the layout.

## 2024-05-23 - Semantic Navigation in Hero Components
**Learning:** The Hero component used `<button>` elements for primary navigation links ("Explore Collection"), which prevents standard browser link behavior (like opening in a new tab) and semantic navigation for screen readers.
**Action:** Always check "buttons" in marketing sections. If they navigate to another section or page, replace them with Next.js `Link` components. Also, ensure decorative scroll indicators are functional links with `aria-label`.
