## 2024-05-22 - Navbars in Pages vs Layouts
**Learning:** Placing the `Navbar` component inside `page.tsx` (instead of `layout.tsx`) complicates implementing a global "Skip to Main Content" link. A wrapper in `layout.tsx` (e.g., `<main id="skip-target">{children}</main>`) captures the Navbar as well, defeating the purpose.
**Action:** When adding skip links, verify if navigation is inside `children`. If so, target the first content component (like `Hero`) explicitly or refactor navigation to the layout.

## 2026-01-30 - Success State Layout Stability
**Learning:** When replacing a form with a success message, failing to maintain the same width constraints can cause the layout to shift or stretch unexpectedly, disrupting the visual flow.
**Action:** Always ensure replacement elements inherit the same layout constraints (e.g., `max-w-md mx-auto`) as the element they replace.

## 2026-01-30 - Dynamic Status Accessibility
**Learning:** Visual feedback for dynamic states (like "Subscribed successfully") is not enough for screen readers.
**Action:** Always add `role="status"` and `aria-live="polite"` to containers that display dynamic status messages to ensure all users are notified.
