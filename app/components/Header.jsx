export default function Header() {
  return (
    <header className="bg-cream">
      <div
        className="
          max-w-[1400px] mx-auto
          px-6 sm:px-10 lg:px-20
          py-8
          flex items-center justify-between
        "
      >
        {/* LEFT LOGO */}
        <p className="font-serif text-[20px] text-textDark">
          Lilac Template
        </p>

        {/* RIGHT NAV */}
        <nav className="flex gap-10 text-[16px] text-textDark">
          <a
            href="#"
            className="hover:opacity-70 transition"
          >
            Blog
          </a>
          <a
            href="#"
            className="hover:opacity-70 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
