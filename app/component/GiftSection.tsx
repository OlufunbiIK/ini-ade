"use client";

import { useState } from "react";
import {
  ACCOUNT_NAME,
  ACCOUNT_NUMBER,
  BANK_NAME,
  CONTACT_PHONE_ONE,
  CONTACT_PHONE_TWO,
  giftIdeas,
} from "../types/constant";
import { LinkPill, SectionHeading } from "./ui";

export default function GiftSection() {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NUMBER);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="gift" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gift Section"
          title="Your presence is already the sweetest gift"
          subtitle="If you would love to bless the couple further, the details below make it simple and easy, especially on mobile."
          align="center"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          {/* ── Bank Transfer card ── */}
          <div className="deep-card rounded-[2.2rem] p-5 text-white sm:p-6">
            <div className="flex items-center gap-2">
              <span className="text-lg">🏦</span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f5dfb0]">
                Bank Transfer
              </p>
            </div>

            <p className="mt-4 font-serif text-3xl leading-none tracking-wide sm:text-4xl">
              {ACCOUNT_NUMBER}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/12 bg-white/10 px-3 py-2.5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#f5dfb0]">
                  Account Name
                </p>
                <p className="mt-1.5 text-sm leading-snug text-white/88">{ACCOUNT_NAME}</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/10 px-3 py-2.5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#f5dfb0]">
                  Bank
                </p>
                <p className="mt-1.5 text-sm leading-snug text-white/88">{BANK_NAME}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copyAccountNumber}
                className="flex items-center gap-1.5 rounded-full bg-[#f5dfb0] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5e2436] shadow-[0_12px_32px_rgba(160,126,59,0.22)] transition-transform hover:-translate-y-0.5 hover:bg-[#f3e5c2] active:scale-95"
              >
                <span>{copied ? "✓" : "⎘"}</span>
                {copied ? "Copied!" : "Copy account"}
              </button>
              <p aria-live="polite" className="text-xs leading-6 text-white/60">
                {copied
                  ? "Ready to paste 🎉"
                  : "Tap to copy · paste into your banking app"}
              </p>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="grid gap-4">
            {/* Gift Ideas */}
            <div className="surface-card rounded-4xl p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <span className="text-base">🎁</span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#a67830]">
                  Gift Ideas
                </p>
              </div>
              <div className="mt-3 space-y-2.5">
                {giftIdeas.map((idea) => (
                  <div
                    key={idea.title}
                    className="flex gap-3 rounded-2xl bg-[#fff7f1] px-4 py-3"
                  >
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7b5d68]">
                        {idea.title}
                      </p>
                      <p className="mt-1 text-xs leading-6 text-[#69505b]">{idea.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

{/* Need Help */}
<div className="surface-card flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-4xl p-5 sm:p-6">

  {/* Left text */}
  <div className="lg:max-w-md">
    <div className="flex items-center gap-2">
      <span className="text-base">💬</span>
      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#a67830]">
        Need Help?
      </p>
    </div>

    <p className="mt-2 text-xs leading-6 text-[#69505b]">
      Any questions about gifts? Just give us a ring.
    </p>
  </div>

  {/* Right actions */}
  <div className="flex w-full flex-col sm:flex-row lg:w-auto gap-4">

    {/* Contact 1 */}
    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium text-[#69505b] whitespace-nowrap">
        Damilola
      </p>
      <LinkPill
        href={`tel:${CONTACT_PHONE_ONE}`}
        variant="primary"
        className="whitespace-nowrap"
      >
        Call us
      </LinkPill>
    </div>

    {/* Contact 2 */}
    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium text-[#69505b] whitespace-nowrap">
        Olakiitan
      </p>
      <LinkPill
        href={`tel:${CONTACT_PHONE_TWO}`}
        variant="primary"
        className="whitespace-nowrap"
      >
        Call us
      </LinkPill>
    </div>

  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}