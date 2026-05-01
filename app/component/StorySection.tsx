import Image from "next/image";
import { storyMoments, storyParagraphs } from "../types/constant";
import { SectionHeading } from "./ui";

export default function StorySection() {
  return (
    <section id="story" className="section-shell relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative">
            <div className="photo-card panel-wash aspect-[0.92] overflow-hidden">
              <Image
                src="/WhatsApp Image 2026-04-29 at 18.36.22 (1).jpeg"
                alt="Portrait of Inioluwa Rhoda and Adeboye Amos"
                width={1920}
                height={2560}
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(77,27,42,0.54)_100%)]" />
              <div className="surface-card absolute bottom-4 left-4 right-4 rounded-[1.6rem] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a67830]">
                  From school corridors to forever
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6a505b]">
                  A friendship that felt natural, a love that kept growing, and a future
                  that now feels beautifully certain.
                </p>
              </div>
            </div>
          </div>

          <div>
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
