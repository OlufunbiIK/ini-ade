import { eventCards } from "../types/constant";
import { SectionHeading, cn } from "./ui";

export default function EventsSection() {
  const themeClasses = {
    berry: {
      card: "deep-card text-white",
      label: "text-[#f5dfb0]",
      pill: "bg-white/12 text-[#f5dfb0]",
      body: "text-white/82",
    },
    blush: {
      card:
        "surface-card bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,241,245,0.96)_100%)] text-[#5b2436]",
      label: "text-[#b26f82]",
      pill: "bg-white text-[#b26f82]",
      body: "text-[#6e5560]",
    },
    champagne: {
      card:
        "surface-card bg-[linear-gradient(180deg,rgba(255,251,243,0.96)_0%,rgba(247,235,208,0.96)_100%)] text-[#604736]",
      label: "text-[#aa7c34]",
      pill: "bg-white/78 text-[#aa7c34]",
      body: "text-[#745e4c]",
    },
  } as const;

  return (
    <section id="weekend" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Wedding Weekend"
          title="Two beautiful days, one flowing celebration"
          subtitle="From the richness of the traditional day to the softness of the church ceremony and the joy of the reception, every part of the weekend has its own mood."
          align="center"
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {eventCards.map((event, index) => {
            const theme = themeClasses[event.theme];

            return (
              <article
                key={event.title}
                className={cn("rounded-[2rem] p-6 sm:p-8", theme.card)}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={cn(
                      "rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em]",
                      theme.pill,
                    )}
                  >
                    {event.title}
                  </span>
                  <span className={cn("text-[11px] font-semibold uppercase tracking-[0.28em]", theme.label)}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6">
                  <p className={cn("text-xs font-semibold uppercase tracking-[0.3em]", theme.label)}>
                    Date
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-[2.3rem]">
                    {event.date}
                  </h3>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className={cn("text-xs font-semibold uppercase tracking-[0.3em]", theme.label)}>
                      Time
                    </p>
                    <p className="mt-2 text-base font-medium leading-7">{event.time}</p>
                  </div>
                  <div>
                    <p className={cn("text-xs font-semibold uppercase tracking-[0.3em]", theme.label)}>
                      Dress code
                    </p>
                    <p className="mt-2 text-base font-medium leading-7">{event.palette}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className={cn("text-xs font-semibold uppercase tracking-[0.3em]", theme.label)}>
                    Venue
                  </p>
                  <p className="mt-2 text-base leading-7">{event.venue}</p>
                </div>

                <p className={cn("mt-6 text-sm leading-7", theme.body)}>{event.note}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
