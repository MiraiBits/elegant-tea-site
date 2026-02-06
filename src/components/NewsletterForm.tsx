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

      // Reset after 3 seconds so they can see the input again if needed,
      // or keep it successful. Let's keep it successful for now but maybe
      // allow reset if they want to add another email?
      // For this simple case, just staying "success" is fine.
      setTimeout(() => {
          setStatus("idle");
          setMessage("");
      }, 5000);

    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

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
            disabled={status === "loading" || status === "success"}
            className="w-full px-6 py-3 rounded-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-70 disabled:cursor-not-allowed bg-white"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-accent hover:bg-yellow-600 text-white px-8 py-3 font-medium transition-colors shadow-lg flex items-center justify-center min-w-[140px] disabled:opacity-90 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              <span>Sending</span>
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle className="mr-2" size={20} />
              <span>Joined</span>
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
          status === "success" ? "text-green-400 opacity-100 max-h-10" :
          status === "error" ? "text-red-400 opacity-100 max-h-10" :
          "opacity-0 max-h-0"
        }`}
      >
        {(status === "success" || status === "error") && (
          <p className="flex items-center justify-center gap-2">
            {status === "error" && <AlertCircle size={16} />}
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
