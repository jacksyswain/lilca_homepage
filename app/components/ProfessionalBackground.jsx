"use client";

import { useState } from "react";
import RevealItem from "./RevealItem";

const items = [
  {
    title: "Education",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Licensure",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Certifications",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

export default function ProfessionalBackground() {
  const [open, setOpen] = useState(null);
  const baseDelay = 0.01;

  return (
    <section className="bg-cream">
      <div className="px-[6vw] py-[12vh]">
        
        {/* HEADING */}
        <RevealItem delay={baseDelay}>
          <h2 className="font-serif text-center text-textDark text-[clamp(2.4rem,3.5vw,3.2rem)] mb-[6vh]">
            My Professional Background
          </h2>
        </RevealItem>

        {/* CENTERED 50% COLUMN */}
        <div
          className="
            mx-auto
            w-full
            max-w-[50vw]
            lg:max-w-[50vw]
            md:max-w-[70vw]
          "
        >
          <div className="border-t border-textDark/40">
            {items.map((item, i) => (
              <RevealItem key={i} delay={baseDelay + 0.02 * i}>
                <div className="border-b border-textDark/40">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="
                      w-full
                      py-[4vh]
                      flex items-center justify-between
                      text-left
                    "
                  >
                    <span className="text-[clamp(1.4rem,2vw,1.8rem)] font-medium text-textDark">
                      {item.title}
                    </span>

                    <span className="text-[2rem] leading-none text-textDark">
                      {open === i ? "−" : "+"}
                    </span>
                  </button>

                  {open === i && (
                    <div className="pb-[4vh] pr-[6vw]">
                      <p className="text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-textDark/80">
                        {item.content}
                      </p>
                    </div>
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
