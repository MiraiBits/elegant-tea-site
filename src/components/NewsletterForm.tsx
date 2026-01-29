"use client";

import { FormEvent } from "react";

export default function NewsletterForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, this would handle the subscription logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
    >
      <input
        type="email"
        placeholder="Your email address"
        aria-label="Email address for newsletter"
        required
        autoComplete="email"
        className="px-6 py-3 rounded-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent w-full"
      />
      <button
        type="submit"
        className="bg-accent hover:bg-yellow-600 text-white px-8 py-3 font-medium transition-colors shadow-lg"
      >
        Subscribe
      </button>
    </form>
  );
}
