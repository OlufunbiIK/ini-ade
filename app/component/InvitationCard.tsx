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
        "relative overflow-hidden rounded-[2.35rem] border border-white/75 bg-[linear-gradient(180deg,#fffdfa_0%,#fff7ef_52%,#fffaf6_100%)] shadow-[0_30px_90px_rgba(88,33,53,0.12)]",
        compact ? "p-6 sm:p-7" : "p-7 sm:p-9",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(241,214,145,0.42)_0%,transparent_18%),radial-gradient(circle_at_92%_12%,rgba(212,225,214,0.42)_0%,transparent_22%),radial-gradient(circle_at_86%_88%,rgba(244,203,211,0.32)_0%,transparent_18%)]" />
      <div className="pattern-lattice absolute inset-0 opacity-55" />
      <div className="pattern-whisper absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute -left-8 top-10 h-44 w-44 rounded-full border border-[#d7d9cf]/55" />
      <div className="pointer-events-none absolute right-6 top-8 h-16 w-16 rounded-full bg-[#efdca3]/36 blur-sm" />
      <div className="pointer-events-none absolute bottom-8 left-10 h-20 w-20 rounded-full border border-[#e8cfd5]/65" />
      <div className="pointer-events-none absolute bottom-12 right-10 h-28 w-28 rounded-full border border-[#cfd9cf]/55" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#a97a33]">
              Digital Invitation
            </p>
            <p className="mt-3 max-w-[11rem] text-xs uppercase tracking-[0.26em] text-[#7a6470] sm:max-w-none">
              Wedding weekend in Ijebu Igbo
            </p>
          </div>
          <div className="rounded-full border border-[#ead8cc] bg-white/82 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#6e5a64] shadow-[0_10px_24px_rgba(88,33,53,0.06)]">
            19 • 20 June 2026
          </div>
        </div>

        <div className={cn("mt-8 text-center", compact ? "sm:mt-10" : "sm:mt-12")}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.44em] text-[#7f6a74]">
            You are invited to celebrate
          </p>
          <h2
            className={cn(
              "mx-auto mt-6 max-w-[18rem] font-serif leading-[0.98] text-[#4d2432]",
              compact ? "text-[2.8rem] sm:text-[3.2rem]" : "text-[3.2rem] sm:text-[4rem]",
            )}
          >
            {COUPLE_NAMES}
          </h2>
          <p className="mx-auto mt-5 max-w-[20rem] text-sm leading-7 text-[#6c5660] sm:text-base">
            A sweet two-day celebration of love, prayer, beauty, and joyful beginnings.
          </p>
        </div>

        <div
          className={cn(
            "mt-8 grid gap-3",
            compact ? "sm:grid-cols-2" : "sm:grid-cols-3",
          )}
        >
          <div className="rounded-[1.5rem] border border-[#efe4da] bg-white/80 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a97a33]">
              Friday
            </p>
            <p className="mt-3 font-serif text-2xl text-[#4f2433]">Traditional</p>
            <p className="mt-2 text-sm leading-6 text-[#6e5a63]">
              11:00 AM at Baba Ijo Hall
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#f0dde3] bg-[linear-gradient(180deg,rgba(255,248,250,0.95)_0%,rgba(255,241,245,0.95)_100%)] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#bf798d]">
              Saturday
            </p>
            <p className="mt-3 font-serif text-2xl text-[#4f2433]">White Wedding</p>
            <p className="mt-2 text-sm leading-6 text-[#6e5a63]">
              10:00 AM at St. Philips Anglican Church
            </p>
          </div>
          {!compact && (
            <div className="rounded-[1.5rem] border border-[#e9e0cf] bg-[linear-gradient(180deg,rgba(255,251,244,0.96)_0%,rgba(248,238,217,0.96)_100%)] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a97a33]">
                Reception
              </p>
              <p className="mt-3 font-serif text-2xl text-[#4f2433]">Celebration</p>
              <p className="mt-2 text-sm leading-6 text-[#6e5a63]">
                Immediately after church at Women Conference Center
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 border-t border-[#eaded3] pt-5 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#7f6a74]">
            Save the date
          </p>
          <p className="mt-3 text-sm leading-7 text-[#6c5660] sm:text-base">
            Inioluwa Rhoda and Adeboye Amos warmly invite you to witness the beginning
            of forever.
          </p>
        </div>
      </div>
    </article>
  );
}
