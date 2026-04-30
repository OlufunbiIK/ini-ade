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
  note: string;
  activeClassName: string;
}> = [
  {
    key: "attending",
    label: "I will be there",
    note: "Celebrating with you in person",
    activeClassName: "border-[#6d2039] bg-[#6d2039] text-white",
  },
  {
    key: "maybe",
    label: "Still arranging",
    note: "Hoping plans come together sweetly",
    activeClassName: "border-[#f1d7a3] bg-[#f5dfb0] text-[#5f2436]",
  },
  {
    key: "unable",
    label: "Sending love",
    note: "Cheering from afar with prayers",
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

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selected) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#5b2137_0%,#8d4961_54%,#d0a55f_150%)]" />
      <div className="pattern-lattice absolute inset-0 opacity-40" />
      <div className="pattern-petals absolute inset-0 opacity-34" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <SectionHeading
              eyebrow="RSVP"
              title="Will you share this joy with us?"
              subtitle="This RSVP section now captures the details you will later need for a Google Sheet, starting with each guest's name and email."
              tone="light"
            />

            <div className="mt-6 rounded-[2rem] border border-white/14 bg-white/10 p-6 text-white/84 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f5dfb0]">
                Quick Contact
              </p>
              <p className="mt-4 text-base leading-8">
                If you need help with directions, dress details, or gift support, you can
                call the contact below.
              </p>
              <div className="mt-5">
                <LinkPill href={`tel:${CONTACT_PHONE}`} variant="ghost">
                  Call {CONTACT_PHONE}
                </LinkPill>
              </div>
            </div>
          </div>

          <div className="surface-card rounded-[2.2rem] p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="guest_name"
                    value={formValues.guest_name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="mt-3 w-full rounded-[1.4rem] border border-[#eadcdf] bg-white px-4 py-4 text-base text-[#4f2433] outline-none placeholder:text-[#ae97a1] focus:border-[#b87b8e]"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="guest_email"
                    value={formValues.guest_email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="mt-3 w-full rounded-[1.4rem] border border-[#eadcdf] bg-white px-4 py-4 text-base text-[#4f2433] outline-none placeholder:text-[#ae97a1] focus:border-[#b87b8e]"
                  />
                </label>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                  Attendance
                </p>
                <div className="mt-3 grid gap-4 sm:grid-cols-3">
                  {options.map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => setSelected(option.key)}
                      className={cn(
                        "rounded-[1.7rem] border border-[#eadde0] bg-white p-5 text-left text-[#5d3b47] shadow-[0_12px_30px_rgba(83,34,49,0.05)] hover:-translate-y-0.5",
                        selected === option.key && option.activeClassName,
                      )}
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                        {option.label}
                      </p>
                      <p
                        className={cn(
                          "mt-3 text-sm leading-7",
                          selected === option.key ? "text-current opacity-90" : "text-[#6f5661]",
                        )}
                      >
                        {option.note}
                      </p>
                    </button>
                  ))}
                </div>
                <input type="hidden" name="attendance" value={selected ?? ""} />
              </div>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                  Note
                </span>
                <textarea
                  name="guest_note"
                  value={formValues.guest_note}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Optional message for the couple"
                  className="mt-3 w-full rounded-[1.4rem] border border-[#eadcdf] bg-white px-4 py-4 text-base text-[#4f2433] outline-none placeholder:text-[#ae97a1] focus:border-[#b87b8e]"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={!selected}
                  className={cn(
                    "rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_rgba(92,29,46,0.18)]",
                    selected
                      ? "bg-[#6d2039] hover:-translate-y-0.5 hover:bg-[#5c1930]"
                      : "cursor-not-allowed bg-[#b49aa3] shadow-none",
                  )}
                >
                  Submit RSVP
                </button>

                <p className="text-sm leading-7 text-[#6f5962]">
                  {selected
                    ? rsvpMessages[selected]
                    : "Choose an attendance option so the response can be recorded later."}
                </p>
              </div>
            </form>

            <div className="mt-5 rounded-[1.8rem] bg-[#fff7f1] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a67830]">
                Form Status
              </p>
              <p className="mt-3 text-base leading-8 text-[#69505b]">
                {submitted
                  ? "The RSVP form layout is ready. When you connect the submit handler to your Google Sheet endpoint later, these fields are already in place."
                  : "This section is now structured like a real RSVP form with guest name, email, attendance, and note fields ready for your later integration."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
