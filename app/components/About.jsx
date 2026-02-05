"use client";

import RevealItem from "./RevealItem";

export default function About() {
  const baseDelay = 0.01;

  return (
    <section className="bg-cream overflow-hidden">
      <div
        className="
          w-full
          max-w-screen-2xl
          mx-auto
          px-[6vw]
          py-[12vh]
          grid grid-cols-1 lg:grid-cols-[55%_45%]
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex items-center">
          <div className="max-w-[42vw]">
            <RevealItem delay={baseDelay}>
              <h2 className="font-serif font-semibold text-textDark text-[clamp(3rem,4vw,3.8rem)] mb-[3vh]">
                Hi, I’m Lilac.
              </h2>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.01}>
              <p className="text-[clamp(1.1rem,1.3vw,1.25rem)] leading-relaxed text-textDark/90">
                I'm committed to providing a safe and supportive environment
                where we can explore your thoughts, feelings, and behaviors.
                With empathy and guidance, we'll work together to navigate
                the challenges life throws your way.
              </p>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.02}>
              <button
                className="
                  mt-[5vh]
                  inline-flex items-center gap-[0.8vw]
                  border border-textDark
                  px-[2.6vw] py-[1.8vh]
                  text-[clamp(0.9rem,1vw,1rem)]
                  tracking-widest uppercase
                  hover:bg-textDark hover:text-cream
                  transition
                "
              >
                LET’S CHAT
                <span aria-hidden>→</span>
              </button>
            </RevealItem>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-end pr-[4vw]">
          {/* MAIN ARCH IMAGE */}
          <RevealItem delay={baseDelay + 0.03}>
            <div
              className="
                w-[25vw]
                h-[90vh]
                min-w-[22rem]
                aspect-[3/4]
                rounded-t-[999px]
                rounded-b-none
                overflow-hidden
                bg-sand
              "
              style={{
                backgroundImage: "url('/images/about-main.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </RevealItem>

          {/* BIGGER ACCENT CIRCLE */}
          <RevealItem delay={baseDelay + 0.04}>
            <div
              className="
                absolute
                w-[19vw]
                min-w-[11rem]
                aspect-square
                rounded-full
                overflow-hidden
                bg-sand
                bottom-[-6vh]
                right-[-2vw]
              "
              style={{
                backgroundImage: "url('/images/about-accent.jpg')",
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
