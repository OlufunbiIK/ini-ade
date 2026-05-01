import { CONTACT_PHONE, asoebiOptions, paletteCards } from "../types/constant";
import { LinkPill, SectionHeading } from "./ui";

export default function AsoebiSection() {
  return (
    <section id="style" className="relative overflow-hidden py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#582035_0%,#9d4e66_56%,#d1a860_140%)]" />
      <div className="pattern-lattice absolute inset-0 opacity-45" />
      <div className="pattern-petals absolute inset-0 opacity-35" />
      <div className="float-bloom pointer-events-none absolute -left-10 top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="float-bloom-delayed pointer-events-none absolute right-0 top-12 h-52 w-52 rounded-full bg-[#f3c8d0]/22 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Row 1: heading + palette cards ── */}
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">

          {/* Left */}
          <div className="flex flex-col gap-4">
            <SectionHeading
              eyebrow="Dress Code & Asoebi"
              title="Come dressed in softness and joy"
              subtitle="The palette is rich, flattering, and consistent across both days."
              tone="light"
            />

            {/* Fabric contact — inline layout */}
            <div className="rounded-4xl border border-white/14 bg-white/10 p-5 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f5dfb0]">
                🧵 Fabric Contact
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                For asoebi reservations, gele, or style questions — just call.
              </p>
              <div className="mt-4">
                <LinkPill href={`tel:${CONTACT_PHONE}`} variant="ghost">
                  Call {CONTACT_PHONE}
                </LinkPill>
              </div>
            </div>
          </div>

          {/* Right: palette cards */}
          <div className="grid gap-3 sm:grid-cols-3">
            {paletteCards.map((card) => (
              <div
                key={card.name}
                className="rounded-[1.9rem] border border-white/14 bg-white/10 p-4 backdrop-blur"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#f5dfb0]">
                  {card.name}
                </p>
                <h3 className="mt-2 font-serif text-xl leading-tight text-white">
                  {card.label}
                </h3>
                <div className="mt-3.5 flex items-center gap-2">
                  {card.colours.map((colour) => (
                    <span
                      key={colour}
                      className="h-9 w-9 rounded-full border border-white/22 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
                      style={{ backgroundColor: colour }}
                    />
                  ))}
                </div>
                <p className="mt-3.5 text-xs leading-6 text-white/75">{card.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Row 2: asoebi options — horizontal strip ── */}
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {asoebiOptions.map((option) => (
            <div
              key={option.label}
              className="flex items-center gap-5 rounded-[1.9rem] border border-white/14 bg-white/10 px-5 py-4 backdrop-blur"
            >
              {/* Price pill */}
              <div className="shrink-0 rounded-2xl bg-white/15 px-4 py-3 text-center">
                <p className="font-serif text-2xl font-semibold leading-none text-[#fff0c9]">
                  {option.price}
                </p>
              </div>

              {/* Label + note */}
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#f5dfb0]">
                  Asoebi option
                </p>
                <h3 className="mt-1 font-serif text-lg leading-tight text-white">
                  {option.label}
                </h3>
                <p className="mt-1 text-xs leading-5 text-white/65 line-clamp-2">
                  {option.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}