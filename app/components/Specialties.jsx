"use client";

import RevealItem from "./RevealItem";

const data = [
  {
    title: "Self-Esteem",
    text:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "/images/special-1.jpg",
  },
  {
    title: "Relationships",
    text:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "/images/special-2.jpg",
  },
  {
    title: "Burnout",
    text:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "/images/special-3.jpg",
  },
];

export default function Specialties() {
  const baseDelay = 0.01;

  return (
    <section className="bg-cream">
      <div className="max-w-[1600px] mx-auto px-[6%] py-32">
        {/* HEADING */}
        <RevealItem delay={baseDelay}>
          <h2 className="font-serif text-[40px] text-textDark text-center mb-20">
            My Specialties
          </h2>
        </RevealItem>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <RevealItem
              key={item.title}
              delay={baseDelay + 0.02 * index}
            >
              <div
                className="
                  border border-textDark/70
                  p-10
                  min-h-[520px]
                  flex flex-col
                  text-left
                  bg-extra
                "
              >
                {/* TEXT */}
                <div className="mb-auto">
                  <h3 className="font-serif text-[22px] mb-6">
                    {item.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* IMAGE (CENTERED ONLY IMAGE) */}
                <div
                  className="
                    mt-10
                    w-[220px] h-[220px]
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
