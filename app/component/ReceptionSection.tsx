import { arrivalNotes, guestGuideVenues } from "../types/constant";
import { LinkPill, SectionHeading } from "./ui";

export default function ReceptionSection() {
  return (
    <section id="guide" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="deep-card pattern-lattice relative aspect-[0.96] overflow-hidden rounded-4xl">
              <div className="pattern-petals absolute inset-0 opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(255,255,255,0.18)_0%,transparent_20%),radial-gradient(circle_at_76%_20%,rgba(244,221,177,0.2)_0%,transparent_18%),radial-gradient(circle_at_50%_82%,rgba(255,255,255,0.1)_0%,transparent_22%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(90,29,48,0.12)_0%,rgba(90,29,48,0.34)_42%,rgba(62,16,31,0.88)_100%)]" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
                <div className="max-w-lg rounded-[1.6rem] border border-white/12 bg-[rgba(72,18,36,0.26)] p-5 shadow-[0_18px_50px_rgba(28,7,15,0.2)] backdrop-blur-sm sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f5dfb0]">
                    Guest Guide
                  </p>
                  <h3 className="mt-4 font-serif text-4xl leading-tight text-[#fffaf4] drop-shadow-[0_10px_26px_rgba(17,4,9,0.28)] sm:text-5xl">
                    Move through the weekend with ease.
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-8 text-white/90">
                    From Friday’s traditional celebration to Saturday’s church and reception,
                    every stop has been laid out clearly for guests on the go.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Before You Come"
              title=""
              subtitle=""
            />

   

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {guestGuideVenues.map((venue) => (
                <div key={venue.title} className="surface-card rounded-[1.8rem] p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a67830]">
                    {venue.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#6b515c]">{venue.note}</p>
                  <p className="mt-3 font-serif text-2xl leading-tight text-[#512535]">
                    {venue.venue}
                  </p>
                  <div className="mt-5">
                    <LinkPill href={venue.link} variant="soft" target="_blank" rel="noreferrer">
                      Open in maps
                    </LinkPill>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
