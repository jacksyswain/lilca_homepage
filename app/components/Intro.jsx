"use client";

import RevealItem from "./RevealItem";

export default function Intro() {
  const baseDelay = 0.01;

  return (
    <section className="bg-extra">
      <div className="flex flex-col-reverse lg:flex-row min-h-[110vh]">

        {/* TEXT — LEFT ON DESKTOP, BOTTOM ON MOBILE */}
        <div className="relative w-full lg:w-[50vw] bg-extra px-[8vw] pt-[10vh] pb-[14vh] flex flex-col">

          <div>
            <RevealItem delay={baseDelay}>
              <h2 className="font-serif text-[clamp(2.3rem,4vw,3.3rem)] mb-[5vh] text-textDark">
                Live a fulfilling life.
              </h2>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.01}>
              <p className="text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed w-full lg:max-w-[32vw] mb-[3vh]">
                Life can be challenging—especially when you're trying to balance
                your personal and professional life.
              </p>

              <p className="text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed w-full lg:max-w-[32vw]">
                It's easy to feel like you're alone in facing these challenges,
                but I want you to know that I'm here to help.
              </p>
            </RevealItem>
          </div>

          {/* BUTTON — STICKS TO BOTTOM OF TEXT BLOCK */}
          <RevealItem delay={baseDelay + 0.02}>
            <button
              className="
                absolute bottom-0 left-0
                w-full
                flex items-center justify-center gap-3
                border-t border-textDark
                py-[4vh]
                text-[clamp(0.9rem,1.1vw,1.15rem)]
                tracking-widest uppercase
                hover:bg-textDark hover:text-cream
                transition
                bg-extra
              "
            >
              GET IN TOUCH
              <span aria-hidden>→</span>
            </button>
          </RevealItem>

        </div>

        {/* IMAGE — RIGHT ON DESKTOP, TOP ON MOBILE */}
        <RevealItem delay={baseDelay + 0.03}>
          <div
            className="w-full lg:w-[50vw] min-h-[60vh] lg:min-h-[110vh]"
            style={{
              backgroundImage: "url('/images/intro.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </RevealItem>

      </div>
    </section>
  );
}
