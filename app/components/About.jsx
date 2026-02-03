import RevealItem from "./RevealItem";

export default function About() {
  const baseDelay = 0.01;

  return (
    <section className="bg-cream">
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 sm:px-8 lg:px-[8%]
          py-24 lg:py-32
          grid grid-cols-1 lg:grid-cols-[0.5fr_0.5fr]
          gap-16 lg:gap-24
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div>
          <RevealItem delay={baseDelay}>
            <h2 className="font-serif text-[28px] lg:text-[32px] mb-6">
              Hi, I’m Lilac.
            </h2>
          </RevealItem>

          <RevealItem delay={baseDelay + 0.01}>
            <p className="text-[15px] lg:text-[16px] leading-relaxed max-w-[420px]">
              I offer compassionate, thoughtful therapy focused on
              long-term personal growth.
            </p>
          </RevealItem>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main arched image */}
          <RevealItem delay={baseDelay + 0.02}>
            <div
              className="
                w-[260px] h-[340px]
                sm:w-[300px] sm:h-[400px]
                lg:w-[360px] lg:h-[460px]
                bg-sand
                rounded-t-[999px] rounded-b-none
              "
            />
          </RevealItem>

          {/* Accent circle */}
          <RevealItem delay={baseDelay + 0.03}>
            <div
              className="
                w-[120px] h-[120px]
                lg:w-[150px] lg:h-[150px]
                bg-sand
                rounded-full
                absolute -bottom-8 -right-8
              "
            />
          </RevealItem>
        </div>
      </div>
    </section>
  );
}
