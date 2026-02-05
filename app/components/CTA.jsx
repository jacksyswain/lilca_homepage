"use client";

import RevealItem from "./RevealItem";

export default function CTA() {
  const baseDelay = 0.01;

  return (
    <section className="bg-olive text-white">
      <div
        className="
          min-h-[80vh]
          w-full
          flex flex-col
          items-center justify-center
          px-[6vw]
          text-center
        "
      >
        {/* HEADING */}
        <RevealItem delay={baseDelay}>
          <h2
            className="
              font-serif
              text-[clamp(2.6rem,4vw,3.6rem)]
              mb-[4vh]
            "
          >
            Get started today.
          </h2>
        </RevealItem>

        {/* DESCRIPTION */}
        <RevealItem delay={baseDelay + 0.01}>
          <p
            className="
              max-w-[48rem]
              text-[clamp(1.05rem,1.4vw,1.3rem)]
              leading-relaxed
              mb-[6vh]
              text-white/90
            "
          >
            Ready to take the first step towards a happier, healthier you?
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>
        </RevealItem>

        {/* BUTTON */}
        <RevealItem delay={baseDelay + 0.02}>
          <button
            className="
              inline-flex items-center gap-[1vw]
              border border-white
              px-[clamp(2.4rem,3vw,3.4rem)]
              py-[clamp(0.9rem,1.6vh,1.2rem)]
              text-[clamp(0.85rem,1vw,1rem)]
              tracking-widest uppercase
              hover:bg-white hover:text-olive
              transition
            "
          >
            GET IN TOUCH
            <span aria-hidden>→</span>
          </button>
        </RevealItem>
      </div>
    </section>
  );
}
