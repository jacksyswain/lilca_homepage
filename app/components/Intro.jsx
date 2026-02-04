"use client";

import RevealItem from "./RevealItem";

export default function Intro() {
  const baseDelay = 0.01;

  return (
    <section className="bg-extra">
      <div className="flex flex-col lg:flex-row min-h-[110vh]">

        {/* LEFT — 50vw */}
        <div className="relative w-full lg:w-[50vw] bg-extra px-[8%] pt-24 pb-0 flex flex-col">

  {/* CONTENT */}
  <div>
    <RevealItem delay={baseDelay}>
      <h2 className="font-serif text-[52px] mb-10 text-textDark">
        Live a fulfilling life.
      </h2>
    </RevealItem>

    <RevealItem delay={baseDelay + 0.01}>
      <p className="text-[18px] leading-relaxed max-w-[520px] mb-6">
        Life can be challenging—especially when you're trying to balance
        your personal and professional life.
      </p>

      <p className="text-[18px] leading-relaxed max-w-[520px]">
        It's easy to feel like you're alone in facing these challenges,
        but I want you to know that I'm here to help.
      </p>
    </RevealItem>
  </div>

  {/* STICKY BOTTOM BUTTON */}
  <RevealItem delay={baseDelay + 0.02}>
    <button
      className="
        absolute bottom-0 left-0
        w-full
        flex items-center justify-center gap-4
        border-t border-textDark
        py-8
        text-[18px] tracking-widest uppercase
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

        {/* RIGHT — 50vw FULL HEIGHT BACKGROUND IMAGE */}
        <RevealItem delay={baseDelay + 0.02}>
          <div
            className="w-full lg:w-[50vw] min-h-[110vh]"
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
