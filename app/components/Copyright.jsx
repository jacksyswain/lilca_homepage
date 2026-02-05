"use client";

import RevealItem from "./RevealItem";

export default function Copyright() {
  const year = new Date().getFullYear();
  const baseDelay = 0.01;

  return (
    <section className="bg-cream border-t border-textDark/20">
      <div
        className="
          max-w-screen-2xl mx-auto
          px-[6vw]
          py-[5vh]
          text-center
          text-textDark
        "
      >
        {/* LEGAL LINKS */}
        <RevealItem delay={baseDelay}>
          <div
            className="
              flex flex-wrap justify-center
              gap-x-[5vw] gap-y-[2vh]
              text-[clamp(0.95rem,1vw,1.05rem)]
              mb-[3vh]
            "
          >
            <span className="underline underline-offset-4 cursor-pointer">
              Privacy & Cookies Policy
            </span>
            <span className="underline underline-offset-4 cursor-pointer">
              Good Faith Estimate
            </span>
            <span className="underline underline-offset-4 cursor-pointer">
              Website Terms & Conditions
            </span>
            <span className="underline underline-offset-4 cursor-pointer">
              Disclaimer
            </span>
          </div>
        </RevealItem>

        {/* TEMPLATE CREDIT */}
        <RevealItem delay={baseDelay + 0.01}>
          <p className="text-[clamp(0.95rem,1vw,1.05rem)] mb-[3vh]">
            Website Template Credits:{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              Go Bloom Creative
            </span>
          </p>
        </RevealItem>

        {/* COPYRIGHT */}
        <RevealItem delay={baseDelay + 0.02}>
          <p className="text-[clamp(0.9rem,0.95vw,1rem)]">
            All Rights Reserved © {year} Your Business Name Here, LLC.
          </p>
        </RevealItem>
      </div>
    </section>
  );
}
