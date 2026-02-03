import RevealItem from "./RevealItem";

export default function Header() {
  const baseDelay = 0.005; // extra subtle for header

  return (
    <header className="bg-cream">
      <div
        className="
          max-w-[1800px] mx-auto
          px-6 sm:px-8 lg:px-[8%]
          pt-6 pb-4
          flex items-center justify-between
        "
      >
        {/* LEFT LOGO */}
        <RevealItem delay={baseDelay}>
          <p
            className="
              font-serif
              text-[30px]
              lg:text-[34px]
              font-semibold
              text-textDark
              leading-none
            "
          >
            Lilac Template
          </p>
        </RevealItem>

        {/* RIGHT NAV */}
        <nav className="flex gap-12">
          <RevealItem delay={baseDelay + 0.01}>
            <a
              href="#"
              className="text-[16px] font-medium text-textDark"
            >
              Blog
            </a>
          </RevealItem>

          <RevealItem delay={baseDelay + 0.02}>
            <a
              href="#"
              className="text-[16px] font-medium text-textDark"
            >
              Contact
            </a>
          </RevealItem>
        </nav>
      </div>
    </header>
  );
}
