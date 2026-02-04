"use client";

import RevealItem from "./RevealItem";

const data = [
  {
    title: "Self-Esteem",
    text:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "/images/special-1.png",
  },
  {
    title: "Relationships",
    text:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "/images/special-2.png",
  },
  {
    title: "Burnout",
    text:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "/images/special-3.png",
  },
];

export default function Specialties() {
  const baseDelay = 0.01;

  return (
    <section className="bg-cream">
      <div className="max-w-[90rem] mx-auto px-[2vw] py-[12vh]">
        {/* HEADING */}
        <RevealItem delay={baseDelay}>
          <h2 className="font-serif text-[clamp(2rem,3vw,2.5rem)] text-textDark text-center mb-[10vh]">
            My Specialties
          </h2>
        </RevealItem>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 min-w-[90vw] gap-[2vw]">
  {data.map((item, index) => (
    <RevealItem
      key={item.title}
      delay={baseDelay + index * 0.02}
    >
      <div
        className="
          border border-textDark/70
          bg-extra
          p-[2vw]
          flex flex-col
          min-h-[65vh]
           min-w-[30vw]
        "
      >
        {/* TEXT */}
        <div className="mb-auto">
          <h3 className="font-serif text-[clamp(1.2rem,1.6vw,1.4rem)] mb-[2vh]">
            {item.title}
          </h3>

          <p className="text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed">
            {item.text}
          </p>
        </div>

        {/* IMAGE */}
        <div
          className="
            mt-[5vh]
            w-[80%]
            aspect-square
            rounded-full
            overflow-hidden
            bg-sand
            mx-auto
          "
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </RevealItem>
  ))}
</div>
      </div>
    </section>
  );
}
