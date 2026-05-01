"use client";

import { useEffect, useState } from "react";
import InvitationCard from "./InvitationCard";
import { CountdownTile, LinkPill } from "./ui";
import {
  type CountdownState,
  getCountdownState,
  heroHighlights,
  navLinks,
} from "../types/constant";

export default function HeroSection() {
  const [countdown, setCountdown] = useState<CountdownState>(getCountdownState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = window.setInterval(() => {
      setCountdown(getCountdownState());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header id="top" className="relative overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(214,173,98,0.28)_0%,transparent_14%),radial-gradient(circle_at_88%_12%,rgba(140,159,139,0.2)_0%,transparent_20%),radial-gradient(circle_at_18%_76%,rgba(243,200,208,0.2)_0%,transparent_18%),linear-gradient(180deg,rgba(255,252,248,0.98)_0%,rgba(255,247,239,0.96)_58%,rgba(255,251,246,0.98)_100%)]" />
      <div className="pattern-orbit absolute inset-0 opacity-60" />
      <div className="pattern-petals absolute inset-0 opacity-50" />
      <div className="float-bloom pointer-events-none absolute -left-10 top-24 h-48 w-48 rounded-full bg-[#d6ad62]/16 blur-3xl" />
      <div className="float-bloom-delayed pointer-events-none absolute right-0 top-16 h-60 w-60 rounded-full bg-[#d9e2d7]/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-14 pt-5 sm:px-6 lg:px-8">

        {/* ── Nav ── */}
        <nav
          aria-label="Section navigation"
          className="nav-pill mb-8 flex w-full gap-1 overflow-x-auto rounded-full border border-white/70 bg-white/72 p-1.5 shadow-[0_16px_45px_rgba(93,36,54,0.08)] backdrop-blur sm:max-w-max"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full px-3.5 py-2 text-[13px] font-medium text-[#6b4d59] transition-colors hover:bg-white hover:text-[#522334]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Main grid ── */}
        <div
          className="grid flex-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
          }}
        >
          {/* ── Left: text ── */}
          <div className="flex flex-col">

            {/* Location badge */}
            <p className="inline-flex w-max items-center gap-2 rounded-full border border-[#e8d5ba] bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a5d26] shadow-[0_8px_24px_rgba(93,36,54,0.07)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6ad62]" />
              Ijebu Igbo · 19 – 20 June 2026
            </p>

            {/* ── Names ── */}
            <div className="mt-5 select-none">
              <h1
                className="font-serif leading-[0.87] text-[#512535]"
                style={{ fontSize: "clamp(3rem, 10vw, 5.6rem)" }}
              >
                Inioluwa
              </h1>

              <div className="my-2 flex items-center gap-3 sm:my-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d6ad62]/45 to-transparent" />
                <span
                  className="metallic-text font-serif leading-none"
                  style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)" }}
                >
                  &amp;
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d6ad62]/45 to-transparent" />
              </div>

              <h1
                className="font-serif leading-[0.87] text-[#512535]"
                style={{ fontSize: "clamp(3rem, 10vw, 5.6rem)" }}
              >
                Adeboye
              </h1>
            </div>

            {/* ── Mobile-only: compact countdown card (replaces duplicate IV) ── */}
            <div className="mt-6 overflow-hidden rounded-[1.8rem] border border-[#eadcdf] bg-white/80 backdrop-blur lg:hidden">
              {/* Top strip — maroon accent */}
              <div className="flex items-center justify-between bg-[#6d2039]/6 px-4 py-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#6d2039]">
                  Days until the celebration
                </p>
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d6ad62]" />
              </div>
              {/* Countdown tiles */}
              <div className="grid grid-cols-4 gap-2 px-4 py-4">
                <CountdownTile value={countdown.days} label="Days" />
                <CountdownTile value={countdown.hours} label="Hrs" />
                <CountdownTile value={countdown.minutes} label="Mins" />
                <CountdownTile value={countdown.seconds} label="Secs" />
              </div>
              <p className="border-t border-[#eadcdf] px-4 py-3 text-[11px] leading-5 text-[#8a7278]">
                {countdown.isLive
                  ? "The celebration is here 🎉"
                  : "Fri 19 June · Baba Ijo Hall, Ijebu Igbo"}
              </p>
            </div>

            {/* Highlight pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#ead7cf] bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7c5d68]"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkPill href="#invitation" variant="primary">
                View the IV
              </LinkPill>
              <LinkPill href="#rsvp" variant="soft">
                RSVP now
              </LinkPill>
            </div>

            {/* ── Desktop-only countdown ── */}
            <div className="mt-8 hidden lg:block">
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-10 bg-[#d6ad62]/60" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7b5c67]">
                  Countdown · Traditional ceremony
                </p>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <CountdownTile value={countdown.days} label="Days" />
                <CountdownTile value={countdown.hours} label="Hours" />
                <CountdownTile value={countdown.minutes} label="Mins" />
                <CountdownTile value={countdown.seconds} label="Secs" />
              </div>
              <p className="mt-4 text-sm leading-7 text-[#6d5560]">
                {countdown.isLive
                  ? "The celebration is here. Time for love, joy, and dancing."
                  : "Friday, 19 June 2026 · 11:00 AM · Baba Ijo Hall, Ijebu Igbo"}
              </p>
            </div>
          </div>

          {/* ── Right: InvitationCard — desktop only ── */}
          <div
            className="relative mx-auto hidden w-full max-w-md pb-8 lg:block"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
            }}
          >
            <div className="pointer-events-none absolute -left-6 top-14 h-24 w-24 rounded-full bg-[#d6ad62]/18 blur-3xl" />
            <div className="pointer-events-none absolute -right-4 bottom-20 h-28 w-28 rounded-full bg-[#f3c8d0]/28 blur-3xl" />
            <InvitationCard compact />
          </div>
        </div>
      </div>
    </header>
  );
}