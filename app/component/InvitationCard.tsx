import { COUPLE_NAMES } from "../types/constant";
import { cn } from "./ui";

type InvitationCardProps = {
  compact?: boolean;
  className?: string;
};

export default function InvitationCard({
  compact = false,
  className,
}: InvitationCardProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border border-[#ede0d4]/80 bg-[linear-gradient(160deg,#fffdf9_0%,#fff8f0_45%,#fdf5ee_100%)] shadow-[0_40px_100px_rgba(88,33,53,0.14),0_0_0_1px_rgba(214,173,98,0.12)]",
        compact ? "p-6 sm:p-7" : "p-7 sm:p-10",
        className,
      )}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_6%,rgba(241,214,145,0.38)_0%,transparent_22%),radial-gradient(circle_at_94%_10%,rgba(212,225,214,0.36)_0%,transparent_24%),radial-gradient(circle_at_80%_92%,rgba(244,203,211,0.28)_0%,transparent_20%),radial-gradient(circle_at_12%_88%,rgba(214,173,98,0.18)_0%,transparent_18%)]" />
      <div className="pattern-lattice absolute inset-0 opacity-40" />
      <div className="pattern-whisper absolute inset-0 opacity-35" />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full border border-[#d6ad62]/20" />
      <div className="pointer-events-none absolute -right-8 -bottom-8 h-44 w-44 rounded-full border border-[#e8cfd5]/40" />
      <div className="pointer-events-none absolute right-8 top-6 h-10 w-10 rounded-full bg-[#efdca3]/50 blur-sm" />
      <div className="pointer-events-none absolute left-12 bottom-10 h-14 w-14 rounded-full border border-[#cfd9cf]/50" />

      <div className="relative">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between gap-3">
          <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-[#a97a33]">
            Digital Invitation
          </p>
          <div className="rounded-full border border-[#ead8cc] bg-white/90 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#7a6470] shadow-[0_6px_16px_rgba(88,33,53,0.07)]">
            19 · 20 June 2026
          </div>
        </div>

        {/* ── Centre: couple names ── */}
        <div className={cn("text-center", compact ? "mt-7" : "mt-9")}>
          <p className="text-[9px] font-semibold uppercase tracking-[0.5em] text-[#9a8290]">
            You are invited to celebrate
          </p>

          {/* Gold hairline rule */}
          <div className="mx-auto mt-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d6ad62]/50" />
            <span className="text-[#d6ad62]/70 text-sm">✦</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d6ad62]/50" />
          </div>

          {/* Names — stacked, large, serif */}
          <div className="mt-5 space-y-0">
            <p
              className={cn(
                "font-serif leading-[0.9] text-[#4d2432]",
                compact ? "text-[2.6rem] sm:text-[3rem]" : "text-[3rem] sm:text-[3.8rem]",
              )}
            >
              Inioluwa
            </p>
            <p className="font-serif italic text-[#d6ad62] leading-none"
              style={{ fontSize: compact ? "1.1rem" : "1.3rem" }}>
              &amp;
            </p>
            <p
              className={cn(
                "font-serif leading-[0.9] text-[#4d2432]",
                compact ? "text-[2.6rem] sm:text-[3rem]" : "text-[3rem] sm:text-[3.8rem]",
              )}
            >
              Adeboye
            </p>
          </div>

          {/* Surnames — small, spaced */}
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.5em] text-[#a08090]">
            Rhoda &nbsp;·&nbsp; Amos
          </p>

          <div className="mx-auto mt-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d6ad62]/40" />
            <span className="text-[#d6ad62]/60 text-sm">✦</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d6ad62]/40" />
          </div>

          {!compact && (
            <p className="mx-auto mt-4 max-w-[18rem] text-sm leading-7 text-[#6c5660]">
              A sweet two-day celebration of love, prayer, beauty, and joyful beginnings.
            </p>
          )}
        </div>

        {/* ── Event tiles ── */}
        <div
          className={cn(
            "mt-6 grid gap-2.5",
            compact ? "grid-cols-2" : "sm:grid-cols-3",
          )}
        >
          {/* Friday */}
          <div className="rounded-[1.4rem] border border-[#efe4da] bg-white/75 p-3.5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a97a33]">
              Friday
            </p>
            <p className="mt-2 font-serif text-xl leading-tight text-[#4f2433]">Traditional</p>
            <p className="mt-1.5 text-xs leading-5 text-[#7a6470]">
              11:00 AM · Baba Ijo Hall
            </p>
          </div>

          {/* Saturday */}
          <div className="rounded-[1.4rem] border border-[#f0dde3] bg-[linear-gradient(180deg,rgba(255,248,250,0.95)_0%,rgba(255,241,245,0.95)_100%)] p-3.5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#bf798d]">
              Saturday
            </p>
            <p className="mt-2 font-serif text-xl leading-tight text-[#4f2433]">White Wedding</p>
            <p className="mt-1.5 text-xs leading-5 text-[#7a6470]">
              10:00 AM · St. Philips Anglican
            </p>
          </div>

          {/* Reception — hidden in compact */}
          {!compact && (
            <div className="rounded-[1.4rem] border border-[#e9e0cf] bg-[linear-gradient(180deg,rgba(255,251,244,0.96)_0%,rgba(248,238,217,0.96)_100%)] p-3.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a97a33]">
                Reception
              </p>
              <p className="mt-2 font-serif text-xl leading-tight text-[#4f2433]">Celebration</p>
              <p className="mt-1.5 text-xs leading-5 text-[#7a6470]">
                After church · Women Conference Center
              </p>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div className="mt-5 border-t border-[#eaded3]/70 pt-4 text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.46em] text-[#9a8290]">
            Save the date · Ijebu Igbo
          </p>
          {!compact && (
            <p className="mt-2 text-xs leading-6 text-[#7a6870]">
              Inioluwa Rhoda and Adeboye Amos warmly invite you to witness the beginning of forever.
            </p>
          )}
        </div>

      </div>
    </article>
  );
}