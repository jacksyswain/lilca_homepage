"use client";

import RevealItem from "./RevealItem";

export default function Intro() {
  const baseDelay = 0.01;

  return (
    <section className="bg-extra">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">

        {/* LEFT — 50vw */}
        <div className="w-full lg:w-[50vw] bg-extra px-[8%] py-24 flex items-center">
          <div>
            <RevealItem delay={baseDelay}>
              <h2 className="font-serif text-[58px] lg:text-[52px] mb-6">
                Live a fulfilling life.
              </h2>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.01}>
              <p className="text-[14px] lg:text-[15px] leading-relaxed max-w-[420px]">
                Life can be challenging—especially when you're trying to balance your personal and professional life. 

It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
              </p>
            </RevealItem>
          </div>
        </div>

        {/* RIGHT — 50vw FULL HEIGHT BACKGROUND IMAGE */}
        <RevealItem delay={baseDelay + 0.02}>
          <div
            className="w-full lg:w-[50vw] min-h-[80vh]"
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
