"use client";

import RevealItem from "./RevealItem";

export default function SplitSection() {
  const baseDelay = 0.01;

  return (
    <section className="bg-cream">
      <div className="flex flex-col lg:flex-row min-h-[110vh]">

        {/* LEFT — IMAGE */}
        <RevealItem delay={baseDelay}>
          <div
            className="w-full lg:w-[50vw] min-h-[110vh]"
            style={{
              backgroundImage: "url('/images/split.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </RevealItem>

        {/* RIGHT — CONTENT */}
        <div className="w-full lg:w-[50vw] bg-[#d6d3dc] flex flex-col min-h-[110vh] px-[6vw]">

          {/* CONTENT AREA (padding only here) */}
          <div className="pt-[10vh]">
            <RevealItem delay={baseDelay + 0.01}>
              <h2 className="font-serif text-[clamp(2.2rem,3vw,3rem)] mb-[4vh] leading-tight">
                You don’t have to do this all alone.
              </h2>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.02}>
              <p className="text-[clamp(1rem,1.1vw,1.15rem)] mb-[4vh]">
                If you are facing any of these, there’s hope:
              </p>
            </RevealItem>

            <ul className="space-y-[2vh] text-[clamp(1rem,1.1vw,1.15rem)] list-disc pl-6">
              <RevealItem delay={baseDelay + 0.03}>
                <li>Persistent feelings of sadness or hopelessness</li>
              </RevealItem>
              <RevealItem delay={baseDelay + 0.04}>
                <li>Trouble focusing or making decisions</li>
              </RevealItem>
              <RevealItem delay={baseDelay + 0.05}>
                <li>Difficulty maintaining relationships</li>
              </RevealItem>
              <RevealItem delay={baseDelay + 0.06}>
                <li>Feeling constantly exhausted or unmotivated</li>
              </RevealItem>
              <RevealItem delay={baseDelay + 0.07}>
                <li>A pervasive sense of being overwhelmed</li>
              </RevealItem>
            </ul>

            <RevealItem delay={baseDelay + 0.08}>
              <p className="mt-[5vh] text-[clamp(1rem,1.1vw,1.15rem)]">
                With empathy and guidance, we’ll work together to navigate
                the challenges life throws your way.
              </p>
            </RevealItem>
          </div>

          {/* BUTTON — TRUE BOTTOM EDGE */}
          <div className="mt-auto -mx-[6vw]">
            <RevealItem delay={baseDelay + 0.09}>
              <button
                className="
                  w-full
                  flex items-center justify-center gap-3
                  border-t border-textDark
                  py-[3vh]
                  text-[clamp(0.9rem,1vw,1rem)]
                  tracking-widest uppercase
                  hover:bg-textDark hover:text-cream
                  transition
                "
              >
                WORK WITH ME
                <span aria-hidden>→</span>
              </button>
            </RevealItem>
          </div>

        </div>
      </div>
    </section>
  );
}
