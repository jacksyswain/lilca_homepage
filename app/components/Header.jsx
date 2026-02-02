export default function Header() {
  return (
    <header className="bg-cream">
      <div
        className="
          max-w-[1800px] mx-auto
          px-10 lg:px-32
          pt-6 pb-4
          flex items-center justify-between
        "
      >
        {/* LEFT LOGO */}
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

        {/* RIGHT NAV */}
        <nav className="flex gap-12">
          <a
            href="#"
            className="text-[16px] font-medium text-textDark"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-[16px] font-medium text-textDark"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
