"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("pending");

    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        website: formData.get("website"),
      }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Something went wrong. Please try again.");
      setStatus("error");
      return;
    }

    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[19rem] flex-col items-center justify-center text-center">
        <p className="mb-2 font-serif text-xl text-navy">Thank you.</p>
        <p className="text-sm text-stone">Your message has been sent. We&rsquo;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div>
        <label htmlFor="contact-name" className="label">
          Name
        </label>
        <input id="contact-name" name="name" type="text" required className="input" />
      </div>
      <div>
        <label htmlFor="contact-email" className="label">
          Email
        </label>
        <input id="contact-email" name="email" type="email" required className="input" />
      </div>
      <div>
        <label htmlFor="contact-message" className="label">
          Message
        </label>
        <textarea id="contact-message" name="message" required rows={4} className="input" />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={status === "pending"}
        className="btn-primary w-full justify-center disabled:opacity-60"
      >
        {status === "pending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
