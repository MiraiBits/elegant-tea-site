"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm text-center animate-in fade-in zoom-in duration-300">
        <div className="flex justify-center mb-2"><Check className="text-green-400" size={24} /></div>
        <h3 className="text-white font-serif text-xl font-bold">Subscribed!</h3>
        <p className="text-white/80 text-sm mt-1">Thank you for joining our community.</p>
        <button onClick={() => setStatus("idle")} className="text-xs text-accent mt-3 hover:text-white uppercase tracking-widest font-bold">Subscribe another</button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto relative">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="w-full relative">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address" required disabled={status === "loading"}
            className="px-6 py-3 rounded-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent w-full disabled:opacity-70"
          />
        </div>
        <button
          type="submit" disabled={status === "loading"}
          className="bg-accent hover:bg-yellow-600 text-white px-8 py-3 font-medium transition-colors shadow-lg flex items-center justify-center min-w-[140px] disabled:opacity-80"
          aria-label={status === "loading" ? "Subscribing..." : "Subscribe"}
        >
          {status === "loading" ? <Loader2 size={20} className="animate-spin" /> : "Subscribe"}
        </button>
      </form>
      <div className="sr-only" aria-live="polite">{status === "loading" ? "Subscribing..." : ""}</div>
    </div>
  );
}
