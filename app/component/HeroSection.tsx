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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownState());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(214,173,98,0.3)_0%,transparent_12%),radial-gradient(circle_at_88%_12%,rgba(140,159,139,0.24)_0%,transparent_18%),radial-gradient(circle_at_18%_76%,rgba(243,200,208,0.18)_0%,transparent_16%),radial-gradient(circle_at_52%_28%,rgba(255,255,255,0.82)_0%,transparent_42%),linear-gradient(180deg,rgba(255,252,248,0.98)_0%,rgba(255,247,239,0.96)_58%,rgba(255,251,246,0.98)_100%)]" />
      <div className="pattern-orbit absolute inset-0 opacity-70" />
      <div className="pattern-petals absolute inset-0 opacity-55" />
      <div className="float-bloom pointer-events-none absolute -left-10 top-24 h-40 w-40 rounded-full bg-[#d6ad62]/18 blur-3xl" />
      <div className="float-bloom-delayed pointer-events-none absolute right-0 top-16 h-52 w-52 rounded-full bg-[#d9e2d7]/36 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-[#f3c8d0]/12 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <nav
          aria-label="Section navigation"
          className="nav-pill mb-10 flex w-full gap-2 overflow-x-auto rounded-full border border-white/70 bg-white/72 p-2 shadow-[0_16px_45px_rgba(93,36,54,0.08)] backdrop-blur sm:max-w-max"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-[#6b4d59] hover:bg-white hover:text-[#522334]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/80 bg-white/78 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8a5d26] shadow-[0_12px_32px_rgba(93,36,54,0.08)]">
              A graceful wedding celebration in Ijebu Igbo
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6b75] sm:text-sm">
              Friday 19 June 2026 and Saturday 20 June 2026
            </p>

            <h1 className="hero-title mt-5 font-serif text-[3.45rem] leading-[0.92] text-[#512535] sm:text-[4.75rem] lg:text-[6rem]">
              Inioluwa Rhoda
              <span className="metallic-text block py-2">&amp;</span>
              Adeboye Amos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#68515b] sm:text-lg">
              Two hearts, one testimony, and a weekend full of warmth, beauty, prayer,
              and celebration. This experience is designed to feel sweet, soft, and
              memorable from the very first scroll.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#ead7cf] bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7c5d68]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <LinkPill href="#invitation" variant="primary">
                View the IV
              </LinkPill>
              <LinkPill href="#rsvp" variant="soft">
                RSVP now
              </LinkPill>
            </div>

            <div className="mt-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-14 bg-[#d6ad62]/70" />
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7b5c67]">
                  Countdown to the traditional wedding
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <CountdownTile value={countdown.days} label="Days" />
                <CountdownTile value={countdown.hours} label="Hours" />
                <CountdownTile value={countdown.minutes} label="Minutes" />
                <CountdownTile value={countdown.seconds} label="Seconds" />
              </div>
              <p className="mt-5 text-sm leading-7 text-[#6d5560] sm:text-base">
                {countdown.isLive
                  ? "The celebration is here. It is time for love, joy, music, and dancing."
                  : "Friday, 19 June 2026 at 11:00 AM at Baba Ijo Hall, Oke Agbo, Ijebu Igbo."}
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-160 pb-8 sm:pb-12">
            <div className="pointer-events-none absolute -left-6 top-14 h-24 w-24 rounded-full bg-[#d6ad62]/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-4 bottom-20 h-28 w-28 rounded-full bg-[#f3c8d0]/30 blur-3xl" />

            <InvitationCard compact />

         
          </div>
        </div>
      </div>
    </header>
  );
}
