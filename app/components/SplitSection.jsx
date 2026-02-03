export default function SplitSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-[500px] bg-sand"></div>

      <div className="bg-[#d6d3dc] p-20">
        <h2 className="font-serif text-3xl mb-6">
          You don’t have to do this alone.
        </h2>
        <ul className="text-sm space-y-3">
          <li>• Anxiety & overwhelm</li>
          <li>• Life transitions</li>
          <li>• Emotional balance</li>
        </ul>
      </div>
    </section>
  );
}
import RevealItem from "./RevealItem";

export default function SplitSection() {
  const baseDelay = 0.01;

  return (
    <section className="bg-cream">
      <div
        className="
          max-w-[1600px] mx-auto
          grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr]
        "
      >
        {/* LEFT IMAGE BLOCK */}
        <div className="bg-cream px-6 sm:px-8 lg:px-[8%] py-24 lg:py-32 flex items-center">
          <RevealItem delay={baseDelay}>
            <div
              className="
                w-full
                h-[320px]
                sm:h-[400px]
                lg:h-[500px]
                bg-sand
              "
            />
          </RevealItem>
        </div>

        {/* RIGHT CONTENT BLOCK */}
        <div className="bg-[#d6d3dc] px-6 sm:px-8 lg:px-[8%] py-24 lg:py-32">
          <RevealItem delay={baseDelay + 0.01}>
            <h2 className="font-serif text-[28px] lg:text-[32px] mb-6">
              You don’t have to do this alone.
            </h2>
          </RevealItem>

          <ul className="text-[14px] lg:text-[15px] space-y-3">
            <RevealItem delay={baseDelay + 0.02}>
              <li>• Anxiety &amp; overwhelm</li>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.03}>
              <li>• Life transitions</li>
            </RevealItem>

            <RevealItem delay={baseDelay + 0.04}>
              <li>• Emotional balance</li>
            </RevealItem>
          </ul>
        </div>
      </div>
    </section>
  );
}
