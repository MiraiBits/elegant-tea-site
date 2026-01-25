## 2024-05-22 - Navbars in Pages vs Layouts
**Learning:** Placing the `Navbar` component inside `page.tsx` (instead of `layout.tsx`) complicates implementing a global "Skip to Main Content" link. A wrapper in `layout.tsx` (e.g., `<main id="skip-target">{children}</main>`) captures the Navbar as well, defeating the purpose.
**Action:** When adding skip links, verify if navigation is inside `children`. If so, target the first content component (like `Hero`) explicitly or refactor navigation to the layout.
