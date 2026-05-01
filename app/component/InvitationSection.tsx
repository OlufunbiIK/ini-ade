import Image from "next/image";
import { INVITATION_DOWNLOAD_PATH } from "../types/constant";
import { LinkPill, SectionHeading } from "./ui";

export default function InvitationSection() {
  return (
    <section id="invitation" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Invitation"
              title=""
              subtitle=""
            />

            <div className="surface-card mt-6 rounded-4xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#a97a33]">
                Original invite image
              </p>
              <p className="mt-4 text-base leading-8 text-[#68515b]">
                Guests can download the actual invitation image, save it straight into
                their gallery, and forward it easily on WhatsApp without needing to hunt
                around the page for it again.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <LinkPill
                  href={INVITATION_DOWNLOAD_PATH}
                  download="Ini-Ade-Invitation.jpeg"
                  variant="primary"
                >
                  Download IV
                </LinkPill>
                <LinkPill href={INVITATION_DOWNLOAD_PATH} target="_blank" rel="noreferrer" variant="soft">
                  Open full IV
                </LinkPill>
              </div>
            </div>

          
          </div>

          <div className="mx-auto w-full max-w-136 surface-card rounded-4xl p-4 sm:p-5">
            <div className="overflow-hidden rounded-[1.7rem] border border-[#efe3d7] bg-[#fffaf4] shadow-[0_24px_60px_rgba(88,33,53,0.08)]">
              <Image
                src={INVITATION_DOWNLOAD_PATH}
                alt="Original invitation image for Inioluwa Rhoda and Adeboye Amos"
                width={1200}
                height={1600}
                sizes="(min-width: 1024px) 34rem, (min-width: 640px) 32rem, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
