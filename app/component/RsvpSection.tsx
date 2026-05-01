"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import {
  CONTACT_PHONE,
  type RsvpChoice,
  rsvpMessages,
} from "../types/constant";
import { LinkPill, SectionHeading, cn } from "./ui";

const options: Array<{
  key: RsvpChoice;
  label: string;
  emoji: string;
  activeClassName: string;
}> = [
  {
    key: "attending",
    label: "I'll be there",
    emoji: "🎉",
    activeClassName: "border-[#6d2039] bg-[#6d2039] text-white",
  },
  {
    key: "maybe",
    label: "Still sorting",
    emoji: "🤞",
    activeClassName: "border-[#f1d7a3] bg-[#f5dfb0] text-[#5f2436]",
  },
  {
    key: "unable",
    label: "Sending love",
    emoji: "💌",
    activeClassName: "border-[#f1cad3] bg-[#f6d6dd] text-[#5f2436]",
  },
];

export default function RsvpSection() {
  const [selected, setSelected] = useState<RsvpChoice | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    guest_name: "",
    guest_email: "",
    guest_note: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selected) return;
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#5b2137_0%,#8d4961_54%,#d0a55f_150%)]" />
      <div className="pattern-lattice absolute inset-0 opacity-40" />
      <div className="pattern-petals absolute inset-0 opacity-34" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">

          {/* ── Left: heading + quick contact ── */}
          <div className="flex flex-col justify-between gap-5">
            <SectionHeading
              eyebrow="RSVP"
              title="Will you share this joy with us?"
              subtitle="Let us know so we can save your seat."
              tone="light"
            />

            <div className="rounded-4xl border border-white/14 bg-white/10 p-5 text-white/84 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f5dfb0]">
                💬 Quick Contact
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Questions about directions or dress code? Just call.
              </p>
              <div className="mt-4">
                <LinkPill href={`tel:${CONTACT_PHONE}`} variant="ghost">
                  Call {CONTACT_PHONE}
                </LinkPill>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="surface-card rounded-[2.2rem] p-5 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name + Email */}
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="guest_name"
                    value={formValues.guest_name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-2xl border border-[#eadcdf] bg-white px-4 py-3 text-sm text-[#4f2433] outline-none placeholder:text-[#ae97a1] focus:border-[#b87b8e]"
                  />
                </label>

                <label className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                    Email
                  </span>
                  <input
                    type="email"
                    name="guest_email"
                    value={formValues.guest_email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-[#eadcdf] bg-white px-4 py-3 text-sm text-[#4f2433] outline-none placeholder:text-[#ae97a1] focus:border-[#b87b8e]"
                  />
                </label>
              </div>

              {/* Attendance */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                  Attendance
                </p>
                <div className="mt-2 grid grid-cols-3 gap-2.5">
                  {options.map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => setSelected(option.key)}
                      className={cn(
                        "rounded-[1.4rem] border border-[#eadde0] bg-white px-3 py-3.5 text-center text-[#5d3b47] shadow-[0_8px_20px_rgba(83,34,49,0.06)] transition-transform hover:-translate-y-0.5 active:scale-95",
                        selected === option.key && option.activeClassName,
                      )}
                    >
                      <p className="text-xl leading-none">{option.emoji}</p>
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] leading-tight">
                        {option.label}
                      </p>
                    </button>
                  ))}
                </div>
                <input type="hidden" name="attendance" value={selected ?? ""} />
              </div>

              {/* Note */}
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                  Note <span className="normal-case tracking-normal text-[#ae97a1]">(optional)</span>
                </span>
                <textarea
                  name="guest_note"
                  value={formValues.guest_note}
                  onChange={handleChange}
                  rows={2}
                  placeholder="A sweet message for the couple…"
                  className="mt-2 w-full rounded-2xl border border-[#eadcdf] bg-white px-4 py-3 text-sm text-[#4f2433] outline-none placeholder:text-[#ae97a1] focus:border-[#b87b8e]"
                />
              </label>

              {/* Submit row */}
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={!selected}
                  className={cn(
                    "shrink-0 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_32px_rgba(92,29,46,0.18)] transition-transform",
                    selected
                      ? "bg-[#6d2039] hover:-translate-y-0.5 hover:bg-[#5c1930] active:scale-95"
                      : "cursor-not-allowed bg-[#b49aa3] shadow-none",
                  )}
                >
                  {submitted ? "✓ Sent!" : "Send RSVP"}
                </button>

                <p aria-live="polite" className="text-xs leading-5 text-[#8a7278]">
                  {submitted
                    ? "We can't wait to celebrate with you 🥂"
                    : selected
                    ? rsvpMessages[selected]
                    : "Pick an option above to continue."}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}