"use client"
import Image from "next/image";
import { galleryMoments, storyMoments } from "../types/constant";
import { cn, SectionHeading } from "./ui";
import { useEffect, useState } from "react";

// Each frame gets its own shape, tilt, and size personality
const frameStyles = [
  {
    // Tall portrait — like a Polaroid
    wrapper: "rounded-[2rem] rounded-tl-[3.5rem]",
    aspect: "aspect-[0.75]",
    tiltIn: "rotate-[-1.5deg] scale-95",
    tiltActive: "rotate-[-0.5deg] scale-100",
    border: "border-[6px] border-white shadow-[0_32px_80px_rgba(66,21,36,0.28),0_0_0_1px_rgba(214,173,98,0.18)]",
    label: "bottom-5 left-5",
  },
  {
    // Wide landscape
    wrapper: "rounded-[2rem] rounded-br-[4rem]",
    aspect: "aspect-[1.42]",
    tiltIn: "rotate-[1.2deg] scale-95",
    tiltActive: "rotate-[0.4deg] scale-100",
    border: "border-[6px] border-white shadow-[0_32px_80px_rgba(66,21,36,0.28),0_0_0_1px_rgba(214,173,98,0.18)]",
    label: "bottom-5 right-5",
  },
  {
    // Square-ish with arch top feel
    wrapper: "rounded-[50%_50%_2rem_2rem/3rem_3rem_2rem_2rem]",
    aspect: "aspect-[0.88]",
    tiltIn: "rotate-[-2deg] scale-93",
    tiltActive: "rotate-[-0.8deg] scale-100",
    border: "border-[6px] border-white shadow-[0_32px_80px_rgba(66,21,36,0.32),0_0_0_1px_rgba(214,173,98,0.2)]",
    label: "bottom-5 left-5",
  },
  {
    // Classic 4:5 portrait
    wrapper: "rounded-[2.5rem]",
    aspect: "aspect-[0.8]",
    tiltIn: "rotate-[1.8deg] scale-95",
    tiltActive: "rotate-[0.6deg] scale-100",
    border: "border-[8px] border-white shadow-[0_40px_100px_rgba(66,21,36,0.3),0_0_0_1px_rgba(214,173,98,0.15)]",
    label: "bottom-5 right-5",
  },
];

export default function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const navigate = (next: number) => {
    if (animating || next === activeIndex) return;
    setAnimating(true);
    setPrevIndex(activeIndex);
    setActiveIndex(next);
    setTimeout(() => {
      setPrevIndex(null);
      setAnimating(false);
    }, 600);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      navigate((activeIndex + 1) % galleryMoments.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [activeIndex, animating]);

  const goToSlide = (index: number) => navigate(index);
  const goToPrevious = () => navigate((activeIndex - 1 + galleryMoments.length) % galleryMoments.length);
  const goToNext = () => navigate((activeIndex + 1) % galleryMoments.length);

  return (
    <section id="story" className="section-shell relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">

          {/* ── Gallery: framed photos ── */}
          <div className="relative flex items-center justify-center">
            {/* Decorative background blobs */}
            <div className="pointer-events-none absolute -left-6 -top-6 h-36 w-36 rounded-full bg-[#f3c8d0]/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-6 -right-4 h-40 w-40 rounded-full bg-[#d6ad62]/18 blur-3xl" />

            {/* Frame stage */}
            <div className="relative w-full" style={{ minHeight: "420px" }}>
              {galleryMoments.map((moment, index) => {
                const frame = frameStyles[index % frameStyles.length];
                const isActive = index === activeIndex;
                const isPrev = index === prevIndex;

                if (!isActive && !isPrev) return null;

                return (
                  <div
                    key={moment.title}
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "opacity-100 translate-y-0 " + frame.tiltActive
                        : "opacity-0 translate-y-4 " + frame.tiltIn,
                    )}
                    style={{ zIndex: isActive ? 2 : 1 }}
                  >
                    <div
                      className={cn(
                        "relative overflow-hidden",
                        frame.wrapper,
                        frame.border,
                        frame.aspect,
                        "w-full max-w-[340px] sm:max-w-[400px]",
                      )}
                    >
                      <Image
                        src={moment.image}
                        alt={moment.alt}
                        width={moment.width}
                        height={moment.height}
                        sizes="(min-width: 640px) 400px, 340px"
                        className={cn(
                          "h-full w-full object-cover transition-transform duration-700",
                          isActive && "scale-[1.03]",
                          moment.note === "Floral texture"
                            ? "object-top"
                            : "object-[center_22%]",
                        )}
                      />

                      {/* Subtle inner vignette */}
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(66,21,36,0.22)_100%)]" />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(66,21,36,0.35)_100%)]" />

                      {/* Slide label */}
                      <div className={cn("absolute z-10", frame.label)}>
                        <span className="rounded-full bg-black/22 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                          {moment.title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Controls row below ── */}
            <div className="absolute -bottom-10 inset-x-0 flex items-center justify-between px-2">
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {galleryMoments.map((moment, index) => (
                  <button
                    key={moment.title}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      activeIndex === index
                        ? "w-6 bg-[#6d2039]"
                        : "w-1.5 bg-[#d5bcc4] hover:bg-[#b87b8e]",
                    )}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#eadcdf] bg-white text-[#5d2436] shadow-sm transition hover:bg-[#fdf5f7] active:scale-95"
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className="text-[10px] font-semibold tabular-nums tracking-[0.18em] text-[#9a7885]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(galleryMoments.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#eadcdf] bg-white text-[#5d2436] shadow-sm transition hover:bg-[#fdf5f7] active:scale-95"
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── Story text ── */}
          <div className="pt-6 lg:pt-0">
            <SectionHeading
              eyebrow="Our Story"
              title="A love story that unfolded gently and grew with grace"
              subtitle="Their beginning was simple, but every season that followed carried more warmth, intention, and joy."
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {storyMoments.map((item) => (
                <div
                  key={item.title}
                  className="surface-card rounded-[1.7rem] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ba7689]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#6c535d]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}