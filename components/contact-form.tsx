"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "@/lib/portfolio";

export function CopyEmail() {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("Email address copied.");
    } catch {
      setStatus("Copy isn’t available. Use the email link to get in touch.");
    }
  }
  return (
    <div className="copy-email-wrap">
      <button type="button" className="copy-email" onClick={copy}>
        {status === "Email address copied." ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}{" "}
        Copy email address
      </button>
      <p role="status" className="form-status">
        {status}
      </p>
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [draftHref, setDraftHref] = useState("");
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setStatus("Please fill in your name, email, and message.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Ashutosh,\n\n${message}\n\n${name}\n${email}`,
    );
    setDraftHref(`mailto:${profile.email}?subject=${subject}&body=${body}`);
    setStatus(
      "Your email draft is ready. Open your email app to review and send it.",
    );
  }
  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      onChange={() => {
        setDraftHref("");
        setStatus("");
      }}
    >
      <div className="form-heading">
        <span className="mono-label">START A CONVERSATION</span>
        <h2>What are you thinking?</h2>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Alex Smith"
            required
            maxLength={100}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@example.com"
            required
            maxLength={254}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">A little about your idea</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What would you like to build together?"
          required
          maxLength={5000}
        />
      </div>
      <button type="submit" className="button button-dark">
        Create email draft <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <p className="form-note">
        Prepare a draft, then open it in your email app to send.
      </p>
      <p className="form-status" role="status">
        {status}
      </p>
      {draftHref && (
        <a className="text-link" href={draftHref}>
          Open email app <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      )}
    </form>
  );
}
