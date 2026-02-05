"use client";

import { useState } from "react";
import RevealItem from "./RevealItem";

const faqs = [
  {
    q: "Do you take insurance?",
    a: "I do not accept insurance at this time, but I can provide superbills for out-of-network reimbursement.",
  },
  {
    q: "What are your rates?",
    a: "Rates vary depending on session length. Please reach out to discuss current pricing.",
  },
  {
    q: "Do you have any openings?",
    a: "Availability changes regularly. Contact me and we’ll find a time that works for you.",
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
              className="
                w-[clamp(16rem,28vw,24rem)]
                aspect-[3/4]
                rounded-t-[999px]
                overflow-hidden
                bg-sand
              "
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

          <div className="divide-y divide-textDark/30">
            {faqs.map((item, i) => (
              <RevealItem key={i} delay={baseDelay + 0.02 * i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="
                    w-full
                    py-[3vh]
                    flex justify-between items-center
                    text-left
                    text-[clamp(1rem,1.2vw,1.1rem)]
                    font-medium
                  "
                >
                  {item.q}
                  <span className="text-xl">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <p className="pb-[3vh] text-[clamp(0.95rem,1.1vw,1.05rem)] text-textDark/80">
                    {item.a}
                  </p>
                )}
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
