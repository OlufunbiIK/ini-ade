import { verseLines } from "../types/constant";

export default function ScriptureSection() {
  return (
    <section className="section-shell relative py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="surface-card panel-wash relative overflow-hidden rounded-[2.4rem] px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="pattern-orbit absolute inset-0 opacity-40" />
          <div className="pattern-whisper absolute inset-0 opacity-35" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#a67830]">
              Ecclesiastes 4:9-10
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#522334] sm:text-5xl">
              Two are better than one.
            </h2>
            <div className="mt-8 space-y-4 text-base leading-8 text-[#6c525d] sm:text-lg">
              {verseLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
