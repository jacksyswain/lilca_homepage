"use client";

import { useState } from "react";
import RevealItem from "./RevealItem";

const faqs = [
  {
    q: "Do you take insurance?",
    a: "Answer goes here.",
  },
  {
    q: "What are your rates?",
    a: "Answer goes here.",
  },
  {
    q: "Do you have any openings?",
    a: "Answer goes here.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const baseDelay = 0.01;

  return (
    <section className="bg-cream">
      <div
        className="
          max-w-screen-2xl mx-auto
          px-[6vw]
          py-[12vh]
          flex flex-col
          lg:flex-row
          items-center
          gap-[8vh]
          lg:gap-[6vw]
        "
      >
        {/* IMAGE BLOCK */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <RevealItem delay={baseDelay}>
            <div
              className={`
                w-[clamp(16rem,28vw,24rem)]
                aspect-[3/4]
                rounded-t-[999px]
                overflow-hidden
                bg-sand
                transition-transform duration-500 ease-out
                ${open !== null ? "scale-[1.04]" : "scale-100"}
              `}
              style={{
                backgroundImage: "url('/images/faq.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </RevealItem>
        </div>

        {/* FAQ CONTENT */}
        <div className="w-full lg:w-[60%] max-w-[40rem]">
          <RevealItem delay={baseDelay + 0.01}>
            <h2 className="font-serif text-[clamp(2.2rem,3vw,2.8rem)] mb-[5vh]">
              FAQs
            </h2>
          </RevealItem>
<div className="border-t border-textDark/40">
  {faqs.map((item, i) => (
    <RevealItem key={i} delay={baseDelay + 0.02 * i}>
      <div className="border-b border-textDark/40">
        <button
          onClick={() => setOpen(open === i ? null : i)}
          className="
            w-full
            py-[4vh]
            flex items-center gap-[1.6rem]
            text-left
            font-medium
          "
        >
          {/* PLUS / MINUS ICON */}
          <span
            className="
              flex items-center justify-center
              w-8 h-8
              border border-textDark
              rounded-full
              text-[1.6rem]
              leading-none
            "
          >
            {open === i ? "−" : "+"}
          </span>

          {/* QUESTION TEXT — BIG */}
          <span className="text-[clamp(1.8rem,2.4vw,2.2rem)]">
            {item.q}
          </span>
        </button>

        {open === i && (
          <p
            className="
              pl-[4.2rem]
              pb-[4vh]
              text-[clamp(1.3rem,1.6vw,1.5rem)]
              leading-relaxed
              text-textDark/80
            "
          >
            {item.a}
          </p>
        )}
      </div>
    </RevealItem>
  ))}
</div>



        </div>
      </div>
    </section>
  );
}
