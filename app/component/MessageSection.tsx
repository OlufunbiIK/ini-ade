import { coupleMessage } from "../types/constant";

export default function MessageSection() {
  return (
    <section id="message" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="surface-card panel-wash overflow-hidden rounded-[2.5rem] px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div className="rounded-4xl bg-[linear-gradient(150deg,rgba(255,247,241,0.98)_0%,rgba(255,240,245,0.96)_100%)] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#a67830]">
                A Note From The Couple
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#4f2433] sm:text-5xl">
                We are looking forward to sharing this day with you.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#6a515c]">
                The celebration is still ahead, and it means so much to know that your
                love, support, and prayers are already part of the journey.
              </p>
              <p className="mt-8 font-serif text-3xl text-[#a67830]">Ini &amp; Ade</p>
            </div>

         
          </div>
        </div>
      </div>
    </section>
  );
}
