"use client";

import { useEffect, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = window.setInterval(() => {
      setCountdown(getCountdownState());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = () => setMenuOpen(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpen]);

  return (
    <header id="top" className="relative overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(214,173,98,0.28)_0%,transparent_14%),radial-gradient(circle_at_88%_12%,rgba(140,159,139,0.2)_0%,transparent_20%),radial-gradient(circle_at_18%_76%,rgba(243,200,208,0.2)_0%,transparent_18%),linear-gradient(180deg,rgba(255,252,248,0.98)_0%,rgba(255,247,239,0.96)_58%,rgba(255,251,246,0.98)_100%)]" />
      <div className="pattern-orbit absolute inset-0 opacity-60" />
      <div className="pattern-petals absolute inset-0 opacity-50" />
      <div className="float-bloom pointer-events-none absolute -left-10 top-24 h-48 w-48 rounded-full bg-[#d6ad62]/16 blur-3xl" />
      <div className="float-bloom-delayed pointer-events-none absolute right-0 top-16 h-60 w-60 rounded-full bg-[#d9e2d7]/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#f3c8d0]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-16 h-52 w-52 rounded-full bg-[#d6ad62]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-14 pt-5 sm:px-6 lg:px-8">

        {/* ── Nav ── */}
        <nav aria-label="Section navigation" className="relative mb-8">
          {/* Desktop: full pill nav */}
          <div className="nav-pill hidden sm:flex w-full gap-1 overflow-x-auto rounded-full border border-white/70 bg-white/72 p-1.5 shadow-[0_16px_45px_rgba(93,36,54,0.08)] backdrop-blur sm:max-w-max">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full px-3.5 py-2 text-[13px] font-medium text-[#6b4d59] transition-colors hover:bg-white hover:text-[#522334]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile: hamburger */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={(e) => { e.stopPropagation(); setMenuOpen((p) => !p); }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/70 bg-white/80 shadow-[0_8px_24px_rgba(93,36,54,0.10)] backdrop-blur transition-all active:scale-95"
            >
              <span className="block h-[1.5px] w-5 rounded-full bg-[#6d2039] transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
              <span className="block h-[1.5px] w-5 rounded-full bg-[#6d2039] transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "none" }} />
              <span className="block h-[1.5px] w-5 rounded-full bg-[#6d2039] transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
            </button>
            <span className="ml-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a5d26]">
              #IniAde26
            </span>
          </div>

          {/* Mobile dropdown */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="sm:hidden absolute top-14 left-0 z-50 overflow-hidden rounded-[1.4rem] border border-white/70 bg-white/90 shadow-[0_16px_45px_rgba(93,36,54,0.13)] backdrop-blur transition-all duration-300 ease-in-out"
            style={{ maxHeight: menuOpen ? "400px" : "0px", opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
          >
            <div className="flex flex-col p-2 min-w-[180px]">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-medium text-[#6b4d59] transition-colors hover:bg-[#f9f0f3] hover:text-[#522334]"
                  style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
                >
                  <span className="h-1 w-1 rounded-full bg-[#d6ad62] flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-[#d6ad62]/30 via-[#f3c8d0]/40 to-[#d9e2d7]/30" />
          </div>
        </nav>

        {/* ── Hero content — centered ── */}
        <div
          className="flex flex-1 flex-col items-center justify-center text-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.85s ease, transform 0.85s ease",
          }}
        >
          {/* Location badge */}
          <p className="inline-flex items-center gap-2 rounded-full border border-[#e8d5ba] bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a5d26] shadow-[0_8px_24px_rgba(93,36,54,0.07)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6ad62]" />
            Ijebu Igbo · 19 – 20 June 2026
          </p>

          {/* ── Names ── */}
          <div className="mt-8 select-none">
            <h1
              className="font-serif leading-[0.87] text-[#512535]"
              style={{ fontSize: "clamp(3.4rem, 12vw, 7rem)" }}
            >
              Inioluwa
            </h1>

            <div className="my-4 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d6ad62]/50 sm:w-28" />
              <span
                className="metallic-text font-serif leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
              >
                &amp;
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d6ad62]/50 sm:w-28" />
            </div>

            <h1
              className="font-serif leading-[0.87] text-[#512535]"
              style={{ fontSize: "clamp(3.4rem, 12vw, 7rem)" }}
            >
              Adeboye
            </h1>
          </div>

          {/* Hashtag */}
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#a08090]">
            #IniAde26
          </p>

          {/* Divider */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d6ad62]/40" />
            <span className="text-[#d6ad62]/60 text-base">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d6ad62]/40" />
          </div>

          {/* Tagline */}
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#6c5660]">
            A sweet two-day celebration of love, prayer, beauty, and joyful beginnings.
          </p>

          {/* Highlight pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
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
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <LinkPill href="#invitation" variant="primary">
              View the IV
            </LinkPill>
            <LinkPill href="#rsvp" variant="soft">
              RSVP now
            </LinkPill>
          </div>

          {/* ── Countdown ── */}
          <div className="mt-10 w-full max-w-md overflow-hidden rounded-[1.8rem] border border-[#eadcdf] bg-white/80 backdrop-blur">
            <div className="flex items-center justify-between bg-[#6d2039]/6 px-4 py-3">
              <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#6d2039]">
                Days until the celebration
              </p>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d6ad62]" />
            </div>
            <div className="grid grid-cols-4 gap-2 px-4 py-4 sm:gap-3 sm:px-6 sm:py-5">
              <CountdownTile value={countdown.days} label="Days" />
              <CountdownTile value={countdown.hours} label="Hrs" />
              <CountdownTile value={countdown.minutes} label="Mins" />
              <CountdownTile value={countdown.seconds} label="Secs" />
            </div>
            <p className="border-t border-[#eadcdf] px-4 py-3 text-center text-[11px] leading-5 text-[#8a7278]">
              {countdown.isLive
                ? "The celebration is here 🎉"
                : "Fri 19 June · Baba Ijo Hall, Ijebu Igbo"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}