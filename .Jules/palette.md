## 2024-05-23 - Accessibility of Opacity-Hidden Overlays
**Learning:** Elements hidden with `opacity-0` (like hover overlays) remain in the DOM and are often keyboard focusable but invisible, creating a confusing experience for keyboard users.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the container to ensure the overlay becomes visible when a child element receives focus.

## 2024-05-24 - Disclosure Pattern for Mobile Toggles
**Learning:** Toggle buttons (like mobile menus) often lack state communication for screen readers, making them confusing.
**Action:** Always implement the full Disclosure Pattern: `aria-expanded` on the button, `aria-controls` pointing to the content ID, and a dynamic `aria-label`.
## 2025-01-22 - Mobile Menu Accessibility
**Learning:** Mobile menu toggles are often overlooked for accessibility. They require `aria-expanded`, `aria-controls`, and dynamic `aria-label` to be usable by screen readers.
**Action:** Ensure all toggle buttons include these attributes and that the controlled element has a matching ID.

## 2025-02-18 - Input Accessibility
**Learning:** Inputs designed without visible labels (like newsletter subscriptions) are common in this design.
**Action:** Use the `sr-only` utility class on a `<label>` element to ensure accessibility without compromising the visual design.
