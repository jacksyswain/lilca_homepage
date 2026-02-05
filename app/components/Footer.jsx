"use client";

import RevealItem from "./RevealItem";

export default function Footer() {
  const baseDelay = 0.01;

  return (
    <footer className="bg-cream">
      <div
        className="
          w-full
          max-w-screen-2xl
          mx-auto
          px-[6vw]
          py-[10vh]
          grid grid-cols-1
          md:grid-cols-3
          gap-[8vh] md:gap-[4vw]
          text-textDark
        "
      >
        {/* LEFT — BRAND & CONTACT */}
        <div className="space-y-[3vh] text-center md:text-left">
          <RevealItem delay={baseDelay}>
            <p className="font-serif text-[clamp(2rem,2.6vw,2.8rem)] font-semibold">
              Lilac Template
            </p>
          </RevealItem>

          <RevealItem delay={baseDelay + 0.01}>
            <div className="text-[clamp(1rem,1.1vw,1.15rem)] leading-relaxed">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
            </div>
          </RevealItem>

          <RevealItem delay={baseDelay + 0.02}>
            <div className="text-[clamp(1rem,1.1vw,1.15rem)] space-y-[1vh]">
              <p className="underline underline-offset-4">
                email@example.com
              </p>
              <p className="underline underline-offset-4">
                (555) 555-5555
              </p>
            </div>
          </RevealItem>
        </div>

        {/* CENTER — HOURS */}
        <div className="space-y-[3vh] text-center md:text-left">
          <RevealItem delay={baseDelay + 0.03}>
            <p className="font-serif text-[clamp(1.6rem,2vw,2rem)] font-medium">
              Hours
            </p>
          </RevealItem>

          <RevealItem delay={baseDelay + 0.04}>
            <div className="text-[clamp(1rem,1.1vw,1.15rem)] leading-relaxed">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </RevealItem>
        </div>

        {/* RIGHT — FIND */}
        <div className="space-y-[3vh] text-center md:text-right">
          <RevealItem delay={baseDelay + 0.05}>
            <p className="font-serif text-[clamp(1.6rem,2vw,2rem)] font-medium">
              Find
            </p>
          </RevealItem>

          <RevealItem delay={baseDelay + 0.06}>
            <ul className="space-y-[1.8vh] text-[clamp(1rem,1.1vw,1.15rem)]">
              <li className="underline underline-offset-4 cursor-pointer">
                Home
              </li>
              <li className="underline underline-offset-4 cursor-pointer">
                Contact
              </li>
              <li className="underline underline-offset-4 cursor-pointer">
                Blog
              </li>
            </ul>
          </RevealItem>
        </div>
      </div>
    </footer>
  );
}
