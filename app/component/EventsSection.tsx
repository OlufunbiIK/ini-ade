import { arrivalNotes, eventCards, guestGuideVenues } from "../types/constant";
import { LinkPill, SectionHeading, cn } from "./ui";

const themeClasses = {
  berry: {
    card: "deep-card text-white",
    label: "text-[#f5dfb0]",
    pill: "bg-white/12 text-[#f5dfb0]",
    body: "text-white/82",
    mapBtn: "ghost",
  },
  blush: {
    card: "surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,241,245,0.96)_100%)] text-[#5b2436]",
    label: "text-[#b26f82]",
    pill: "bg-white text-[#b26f82]",
    body: "text-[#6e5560]",
    mapBtn: "soft",
  },
  champagne: {
    card: "surface-card bg-[linear-gradient(180deg,rgba(255,251,243,0.96)_0%,rgba(247,235,208,0.96)_100%)] text-[#604736]",
    label: "text-[#aa7c34]",
    pill: "bg-white/78 text-[#aa7c34]",
    body: "text-[#745e4c]",
    mapBtn: "soft",
  },
} as const;

export default function WeekendSection() {
  return (
    <section id="weekend" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <SectionHeading
          eyebrow="Wedding Weekend"
          title="Two beautiful days, one flowing celebration"
          subtitle="Every moment of the weekend has been arranged clearly — from ceremony times to venue directions."
          align="center"
        />

        {/* ── Event cards ── */}
        <div className="mt-10 grid gap-4 xl:grid-cols-3">
          {eventCards.map((event, index) => {
            const theme = themeClasses[event.theme];
            // Match venue guide to this event card by index
            const venue = guestGuideVenues[index];

            return (
              <article
                key={event.title}
                className={cn("rounded-4xl p-5 sm:p-6", theme.card)}
              >
                {/* Top row: pill + number */}
                <div className="flex items-center justify-between gap-4">
                  <span className={cn("rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em]", theme.pill)}>
                    {event.title}
                  </span>
                  <span className={cn("text-[11px] font-semibold tabular-nums tracking-[0.26em]", theme.label)}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Date */}
                <h3 className="mt-4 font-serif text-[2rem] leading-tight sm:text-[2.2rem]">
                  {event.date}
                </h3>

                {/* Time + Dress */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className={cn("text-[9px] font-semibold uppercase tracking-[0.3em]", theme.label)}>Time</p>
                    <p className="mt-1 text-sm font-medium leading-6">{event.time}</p>
                  </div>
                  <div>
                    <p className={cn("text-[9px] font-semibold uppercase tracking-[0.3em]", theme.label)}>Dress</p>
                    <p className="mt-1 text-sm font-medium leading-6">{event.palette}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-4 h-px w-full bg-current opacity-10" />

                {/* Venue info — merged from guestGuideVenues */}
                {venue && (
                  <div>
                    <p className={cn("text-[9px] font-semibold uppercase tracking-[0.3em]", theme.label)}>Venue</p>
                    <p className="mt-1 font-serif text-lg leading-snug">{venue.venue}</p>
                    <p className={cn("mt-1.5 text-xs leading-6", theme.body)}>{venue.note}</p>
                    <div className="mt-3">
                      <LinkPill href={venue.link} variant={theme.mapBtn as "soft" | "ghost"} target="_blank" rel="noreferrer">
                        Open in maps
                      </LinkPill>
                    </div>
                  </div>
                )}

                {/* Note */}
                <p className={cn("mt-4 text-xs leading-6 opacity-80", theme.body)}>{event.note}</p>
              </article>
            );
          })}
        </div>


      </div>
    </section>
  );
}