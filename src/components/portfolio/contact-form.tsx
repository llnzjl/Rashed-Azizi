"use client";

import { FormEvent, useState } from "react";

import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

import { siteData } from "@/data/portfolio";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please complete every field before sending.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    // Swap this mailto flow for a form service or API route when you want live submissions.
    window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`;
    setStatus("Your default email app should open with the drafted message.");
    setForm(initialFormState);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={handleSubmit}
      className="section-shell p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Your name"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.06]"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-300">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="you@example.com"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.06]"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-300">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            placeholder="Tell me about your project, role, or collaboration idea."
            rows={6}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.06]"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          data-cursor-label="Send"
          className="interactive-ring inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/25 bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_24px_60px_rgba(56,189,248,0.22)]"
        >
          Send Message
          <HiOutlineArrowRight className="text-lg" />
        </button>
        <p className="text-sm text-slate-400">{status}</p>
      </div>
    </motion.form>
  );
}
