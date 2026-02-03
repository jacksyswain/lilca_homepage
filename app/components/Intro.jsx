import RevealItem from "./RevealItem";

export default function Intro() {
  const baseDelay = 0.01;

  return (
    <section className="bg-cream">
      <div
        className="
          max-w-[1600px] mx-auto
          grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr]
        "
      >
        {/* LEFT TEXT BLOCK */}
        <div className="bg-sand px-6 sm:px-8 lg:px-[8%] py-24 lg:py-32">
          <RevealItem delay={baseDelay}>
            <h2 className="font-serif text-[28px] lg:text-[32px] mb-6">
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

        {/* RIGHT IMAGE BLOCK */}
        <div className="bg-cream px-6 sm:px-8 lg:px-[8%] py-24 lg:py-32 flex items-center">
          <RevealItem delay={baseDelay + 0.02}>
            <div
              className="
                w-full
                h-[260px]
                sm:h-[320px]
                lg:h-[360px]
                bg-sand
              "
            />
          </RevealItem>
        </div>
      </div>
    </section>
  );
}
