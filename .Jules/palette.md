## 2024-05-23 - Accessibility of Opacity-Hidden Overlays
**Learning:** Elements hidden with `opacity-0` (like hover overlays) remain in the DOM and are often keyboard focusable but invisible, creating a confusing experience for keyboard users.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the container to ensure the overlay becomes visible when a child element receives focus.

## 2025-01-22 - Mobile Menu Accessibility
**Learning:** Mobile menu toggles are often overlooked for accessibility. They require `aria-expanded`, `aria-controls`, and dynamic `aria-label` to be usable by screen readers.
**Action:** Ensure all toggle buttons include these attributes and that the controlled element has a matching ID.
