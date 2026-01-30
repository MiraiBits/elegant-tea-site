"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div
        className="bg-white/10 p-6 rounded-none text-center animate-fade-in backdrop-blur-sm border border-white/20 max-w-md mx-auto"
        role="status"
        aria-live="polite"
      >
        <div className="flex justify-center mb-3">
            <CheckCircle className="text-accent" size={32} />
        </div>
        <h3 className="text-xl font-serif font-bold text-white mb-2">Welcome to the family!</h3>
        <p className="text-white/80">You&apos;ve successfully subscribed to our newsletter.</p>
        <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm text-accent hover:text-white underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
        >
            Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto relative">
      <div className="w-full relative">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          disabled={status === "loading"}
          className="w-full px-6 py-3 rounded-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-70 disabled:cursor-not-allowed placeholder:text-gray-500"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-accent hover:bg-yellow-600 text-white px-8 py-3 font-medium transition-colors shadow-lg flex items-center justify-center min-w-[140px] disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent rounded-none"
      >
        {status === "loading" ? (
            <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Sending...
            </>
        ) : (
            "Subscribe"
        )}
      </button>
    </form>
  );
}
