import RevealItem from "./RevealItem";

export default function Footer() {
  const baseDelay = 0.01;

  return (
    <footer className="bg-cream">
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 sm:px-8 lg:px-[8%]
          py-16 lg:py-20
          grid grid-cols-1 md:grid-cols-3
          gap-10
          text-[14px]
        "
      >
        {/* COLUMN 1 */}
        <div>
          <RevealItem delay={baseDelay}>
            <p className="font-serif mb-2">Lilac Template</p>
          </RevealItem>

          <RevealItem delay={baseDelay + 0.01}>
            <p>Therapy Practice</p>
          </RevealItem>
        </div>

        {/* COLUMN 2 */}
        <div>
          <RevealItem delay={baseDelay + 0.02}>
            <p className="mb-2">Hours</p>
          </RevealItem>

          <RevealItem delay={baseDelay + 0.03}>
            <p>Mon – Fri</p>
          </RevealItem>
        </div>

        {/* COLUMN 3 */}
        <div>
          <RevealItem delay={baseDelay + 0.04}>
            <p className="mb-2">Find</p>
          </RevealItem>

          <RevealItem delay={baseDelay + 0.05}>
            <p>Contact</p>
          </RevealItem>
        </div>
      </div>
    </footer>
  );
}
