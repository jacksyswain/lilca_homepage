import RevealItem from "./RevealItem";

export default function FAQ() {
  const baseDelay = 0.01;

  return (
    <section className="bg-cream">
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 sm:px-8 lg:px-[8%]
          py-24 lg:py-32
          grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr]
          gap-16 lg:gap-24
          items-center
        "
      >
        {/* LEFT IMAGE */}
        <RevealItem delay={baseDelay}>
          <div
            className="
              w-full
              h-[260px]
              sm:h-[320px]
              lg:h-[380px]
              bg-sand
              rounded-[999px]
            "
          />
        </RevealItem>

        {/* RIGHT CONTENT */}
        <div>
          <RevealItem delay={baseDelay + 0.01}>
            <h2 className="font-serif text-[28px] lg:text-[32px] mb-6">
              FAQs
            </h2>
          </RevealItem>

          <ul className="space-y-4 text-[14px] lg:text-[15px]">
            <RevealItem delay={baseDelay + 0.02}>
              <li>— Do you take insurance?</li>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.03}>
              <li>— What are your rates?</li>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.04}>
              <li>— Do you have availability?</li>
            </RevealItem>
          </ul>
        </div>
      </div>
    </section>
  );
}
