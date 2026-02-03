import RevealItem from "./RevealItem";

export default function Specialties() {
  const items = ["Self Reflection", "Relationships", "Growth"];
  const baseDelay = 0.01;

  return (
    <section className="bg-cream">
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 sm:px-8 lg:px-[8%]
          py-24 lg:py-32
          text-center
        "
      >
        {/* SECTION HEADING */}
        <RevealItem delay={baseDelay}>
          <h2 className="font-serif text-[28px] lg:text-[32px] mb-16">
            My Specialties
          </h2>
        </RevealItem>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <RevealItem
              key={item}
              delay={baseDelay + 0.01 + index * 0.02}
            >
              <div>
                {/* IMAGE */}
                <div
                  className="
                    w-48 h-48
                    mx-auto
                    bg-sand
                    rounded-full
                    mb-6
                  "
                />

                {/* TITLE */}
                <h3 className="font-serif mb-2">
                  {item}
                </h3>

                {/* TEXT */}
                <p className="text-[14px] lg:text-[15px]">
                  Personalized support designed around your needs.
                </p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
