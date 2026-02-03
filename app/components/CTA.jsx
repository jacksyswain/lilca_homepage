import RevealItem from "./RevealItem";

export default function CTA() {
  const baseDelay = 0.01;

  return (
    <section className="bg-olive text-white">
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 sm:px-8 lg:px-[8%]
          py-24 lg:py-28
          text-center
        "
      >
        <RevealItem delay={baseDelay}>
          <h2 className="font-serif text-[28px] lg:text-[32px] mb-4">
            Get started today.
          </h2>
        </RevealItem>

        <RevealItem delay={baseDelay + 0.01}>
          <p className="text-[14px] lg:text-[15px] mb-8">
            Reach out to begin your journey.
          </p>
        </RevealItem>

        <RevealItem delay={baseDelay + 0.02}>
          <button
            className="
              inline-flex items-center
              border border-white
              px-8 py-4
              text-[13px]
              uppercase tracking-widest
              hover:bg-white hover:text-olive
              transition
            "
          >
            Contact
          </button>
        </RevealItem>
      </div>
    </section>
  );
}
