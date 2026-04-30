import { COUPLE_NAMES, navLinks } from "../types/constant";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#4a1728_0%,#3e1221_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(214,173,98,0.22)_0%,transparent_16%),radial-gradient(circle_at_84%_18%,rgba(242,210,219,0.14)_0%,transparent_18%),radial-gradient(circle_at_50%_110%,rgba(214,226,216,0.12)_0%,transparent_22%)]" />
      <div className="pattern-lattice absolute inset-0 opacity-25" />
      <div className="pattern-whisper absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[2.6rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_28px_80px_rgba(15,2,8,0.24)] backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#f3ddb1]">
                With love
              </p>
              <p className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                {COUPLE_NAMES}
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
                Thank you for being part of a story still unfolding. The sweetest part of
                this page is knowing the celebration is still ahead.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Ijebu Igbo", "19 & 20 June 2026", "#IniAndAde"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/78"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f3ddb1]">
                  Explore
                </p>
                <nav aria-label="Footer navigation" className="mt-4 flex flex-wrap gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f3ddb1]">
                  Creator
                </p>
                <p className="mt-4 font-serif text-2xl text-white">@eventlybuilt</p>
                <p className="mt-3 text-sm leading-7 text-white/76">
                  Built with intention, warmth, and all the sweet details that make a
                  celebration page feel personal.
                </p>
                <a
                  href="#top"
                  className="mt-5 inline-flex rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/82 hover:bg-white/12 hover:text-white"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-center text-sm text-white/56 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            Copyright 2026 • {COUPLE_NAMES}
          </div>
          <div>Designed by @eventlybuilt</div>
        </div>
      </div>
    </footer>
  );
}
