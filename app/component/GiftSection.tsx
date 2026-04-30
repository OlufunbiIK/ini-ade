"use client";

import { useState } from "react";
import {
  ACCOUNT_NAME,
  ACCOUNT_NUMBER,
  BANK_NAME,
  CONTACT_PHONE,
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

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="deep-card rounded-[2.2rem] p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f5dfb0]">
              Bank Transfer
            </p>
            <p className="mt-6 font-serif text-4xl leading-none sm:text-5xl">
              {ACCOUNT_NUMBER}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#f5dfb0]">
                  Account Name
                </p>
                <p className="mt-3 text-lg text-white/88">{ACCOUNT_NAME}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#f5dfb0]">
                  Bank
                </p>
                <p className="mt-3 text-lg text-white/88">{BANK_NAME}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={copyAccountNumber}
                className="rounded-full bg-[#f5dfb0] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5e2436] shadow-[0_16px_40px_rgba(160,126,59,0.22)] hover:-translate-y-0.5 hover:bg-[#f3e5c2]"
              >
                {copied ? "Account copied" : "Copy account number"}
              </button>
              <p aria-live="polite" className="text-sm leading-7 text-white/74">
                {copied
                  ? "The account number is ready to paste."
                  : "Presence and prayers are more than enough, but gifts are deeply appreciated."}
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="surface-card rounded-[2rem] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a67830]">
                Gift Ideas
              </p>
              <div className="mt-4 space-y-4">
                {giftIdeas.map((idea) => (
                  <div key={idea.title} className="rounded-[1.4rem] bg-[#fff7f1] p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b5d68]">
                      {idea.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#69505b]">{idea.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a67830]">
                Need Help?
              </p>
              <p className="mt-4 text-base leading-8 text-[#69505b]">
                For questions around gifts, support, or any quick clarification, you can
                reach out directly.
              </p>
              <div className="mt-5">
                <LinkPill href={`tel:${CONTACT_PHONE}`} variant="primary">
                  Call {CONTACT_PHONE}
                </LinkPill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
