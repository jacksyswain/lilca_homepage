"use client";

import RevealItem from "./RevealItem";

export default function About() {
  const baseDelay = 0.01;

  return (
    <section className="bg-cream overflow-hidden">
      <div
        className="
          max-w-screen-2xl mx-auto
          px-[6vw] py-[12vh]
          flex flex-col-reverse lg:flex-row
          items-center
          gap-[8vh] lg:gap-[6vw]
        "
      >
        {/* TEXT BLOCK */}
        <div className="w-full lg:w-[55%] flex justify-center">
          <div className="w-full max-w-[36rem] text-center lg:text-left">
            <RevealItem delay={baseDelay}>
              <h2 className="font-serif font-semibold text-textDark text-[clamp(2.4rem,4vw,3.8rem)] mb-[3vh]">
                Hi, I’m Lilac.
              </h2>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.01}>
              <p className="text-[clamp(1.05rem,1.3vw,1.25rem)] leading-relaxed text-textDark/90">
                I'm committed to providing a safe and supportive environment
                where we can explore your thoughts, feelings, and behaviors.
                With empathy and guidance, we'll work together to navigate
                the challenges life throws your way.
              </p>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.02}>
              <div className="mt-[5vh] flex justify-center lg:justify-start">
                <button
                  className="
                    inline-flex items-center gap-3
                    border border-textDark
                    px-[clamp(2rem,3vw,3rem)]
                    py-[clamp(0.8rem,1.5vh,1rem)]
                    text-[clamp(0.9rem,1vw,1rem)]
                    tracking-widest uppercase
                    hover:bg-textDark hover:text-cream
                    transition
                  "
                >
                  LET’S CHAT
                  <span aria-hidden>→</span>
                </button>
              </div>
            </RevealItem>
          </div>
        </div>

        {/* IMAGE BLOCK */}
        <div className="w-full lg:w-[45%] flex justify-center relative">
          <RevealItem delay={baseDelay + 0.03}>
            <div
              className="
                w-[clamp(16rem,28vw,24rem)]
                h-auto
                aspect-[3/4]
                rounded-t-[999px]
                overflow-hidden
                bg-sand
              "
              style={{
                backgroundImage: "url('/images/about-main.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </RevealItem>

          {/* ACCENT CIRCLE */}
          <RevealItem delay={baseDelay + 0.04}>
            <div
              className="
                absolute
                w-[clamp(10rem,16vw,14rem)]
                
                aspect-square
                rounded-full
                overflow-hidden
                bg-sand
                -bottom-[6%]
                -right-[1%]
              "
              style={{
                backgroundImage: "url('/images/about-accent.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </RevealItem>
        </div>
      </div>
    </section>
  );
}
