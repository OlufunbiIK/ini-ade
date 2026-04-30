"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryMoments } from "../types/constant";
import { SectionHeading, cn } from "./ui";

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryMoments.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + galleryMoments.length) % galleryMoments.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % galleryMoments.length);
  };

  return (
    <section id="gallery" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A few sweet frames"
          subtitle="Just the images, sliding softly."
        />

        <div className="mx-auto mt-10 max-w-[22rem] sm:max-w-[34rem] lg:max-w-[48rem] xl:max-w-[52rem]">
          <div className="surface-card overflow-hidden rounded-[2.5rem] p-3 sm:p-4">
            <div className="overflow-hidden rounded-[1.9rem]">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {galleryMoments.map((moment, index) => (
                  <div key={moment.title} className="min-w-full">
                    <div className="photo-card panel-wash aspect-[0.92] sm:aspect-[1.02] lg:aspect-[1.4] xl:aspect-[1.52]">
                      <Image
                        src={moment.image}
                        alt={moment.alt}
                        width={moment.width}
                        height={moment.height}
                        sizes="(min-width: 1280px) 52rem, (min-width: 1024px) 48rem, (min-width: 640px) 34rem, 22rem"
                        className={cn(
                          "h-full w-full object-cover",
                          moment.note === "Floral texture"
                            ? "object-top"
                            : "object-[center_24%] sm:object-[center_22%] lg:object-[center_20%]",
                        )}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(66,21,36,0.2)_100%)]" />
                      <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
                        <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-white backdrop-blur">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                {galleryMoments.map((moment, index) => (
                  <button
                    key={moment.title}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      activeIndex === index ? "w-10 bg-[#6d2039]" : "w-2.5 bg-[#d5bcc4]",
                    )}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="rounded-full border border-[#eadcdf] bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5d2436] shadow-[0_12px_30px_rgba(83,34,49,0.06)] hover:-translate-y-0.5"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="rounded-full border border-[#eadcdf] bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#5d2436] shadow-[0_12px_30px_rgba(83,34,49,0.06)] hover:-translate-y-0.5"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
