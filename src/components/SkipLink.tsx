export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[100] -translate-y-[150%] bg-accent text-white px-6 py-3 rounded-lg font-medium shadow-xl transition-transform duration-300 focus:translate-y-0 focus:outline-none focus:ring-4 focus:ring-yellow-300"
    >
      Skip to main content
    </a>
  );
}
