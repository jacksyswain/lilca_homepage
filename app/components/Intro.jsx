"use client";

import RevealItem from "./RevealItem";

export default function Intro() {
  const baseDelay = 0.01;

  return (
    <section className="bg-#dfd5c5">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">

        {/* LEFT — 50vw */}
        <div className="w-full lg:w-[50vw] bg-sand px-[8%] py-24 flex items-center">
          <div>
            <RevealItem delay={baseDelay}>
              <h2 className="font-serif text-[58px] lg:text-[52px] mb-6">
                Live a fulfilling life.
              </h2>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.01}>
              <p className="text-[14px] lg:text-[15px] leading-relaxed max-w-[420px]">
                You deserve a space where you can slow down, reflect,
                and reconnect with yourself.
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
