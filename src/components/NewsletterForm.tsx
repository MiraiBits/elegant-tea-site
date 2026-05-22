"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");
    setMessage("");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail("");

      // Decision: Do not automatically reset the form status. Keep it in "success" state.
      // A manual reset is provided via the "Subscribe another email" button below,
      // or they can just see the success message.
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-grow">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            disabled={status === "loading"}
            className="w-full px-6 py-3 rounded-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-70 disabled:cursor-not-allowed bg-white"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-accent hover:bg-yellow-600 text-white px-8 py-3 font-medium transition-colors shadow-lg flex items-center justify-center min-w-[140px] disabled:opacity-90 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              <span>Sending</span>
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>

      {/* Status Message - Live Region */}
      <div
        aria-live="polite"
        className={`mt-4 text-sm font-medium transition-all duration-300 overflow-hidden ${
          status === "error" ? "text-red-400 opacity-100 max-h-10" :
          "opacity-0 max-h-0"
        }`}
      >
        {status === "error" && (
          <p className="flex items-center justify-center gap-2">
            <AlertCircle size={16} />
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
