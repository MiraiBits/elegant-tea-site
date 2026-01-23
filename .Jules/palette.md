## 2024-05-23 - Accessibility of Opacity-Hidden Overlays
**Learning:** Elements hidden with `opacity-0` (like hover overlays) remain in the DOM and are often keyboard focusable but invisible, creating a confusing experience for keyboard users.
**Action:** Always pair `group-hover:opacity-100` with `group-focus-within:opacity-100` on the container to ensure the overlay becomes visible when a child element receives focus.

## 2024-05-24 - Disclosure Pattern for Mobile Toggles
**Learning:** Toggle buttons (like mobile menus) often lack state communication for screen readers, making them confusing.
**Action:** Always implement the full Disclosure Pattern: `aria-expanded` on the button, `aria-controls` pointing to the content ID, and a dynamic `aria-label`.
