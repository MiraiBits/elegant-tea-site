## 2024-05-22 - Navbars in Pages vs Layouts
**Learning:** Placing the `Navbar` component inside `page.tsx` (instead of `layout.tsx`) complicates implementing a global "Skip to Main Content" link. A wrapper in `layout.tsx` (e.g., `<main id="skip-target">{children}</main>`) captures the Navbar as well, defeating the purpose.
**Action:** When adding skip links, verify if navigation is inside `children`. If so, target the first content component (like `Hero`) explicitly or refactor navigation to the layout.

## 2026-01-29 - Form Semantics for Interaction
**Learning:** Wrapping `div`-based inputs in a semantic `<form>` component is the single most effective micro-UX fix. It simultaneously solves accessibility (by enabling labels/grouping) and usability (by enabling "Enter" to submit) with zero visual change.
**Action:** Always refactor static input/button pairs into proper `<form>` components to enable native browser behaviors.
