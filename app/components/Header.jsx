export default function Header() {
  return (
    <header className="bg-cream">
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 sm:px-10 lg:px-24
          py-10
          flex items-center justify-between
        "
      >
        {/* LEFT LOGO */}
        <p
          className="
            font-serif
            text-[28px]
            sm:text-[30px]
            lg:text-[34px]
            font-medium
            text-textDark
            tracking-tight
          "
        >
          Lilac Template
        </p>

        {/* RIGHT NAV */}
        <nav className="flex gap-12">
          <a
            href="#"
            className="
              text-[16px]
              text-textDark
              hover:opacity-70
              transition
            "
          >
            Blog
          </a>
          <a
            href="#"
            className="
              text-[16px]
              text-textDark
              hover:opacity-70
              transition
            "
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
