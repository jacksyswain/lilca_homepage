export default function Header() {
  return (
    <header className="bg-cream">
      <div
        className="
          max-w-[1680px] mx-auto
          px-8 lg:px-28
          py-12
          flex items-center justify-between
        "
      >
        <p
          className="
            font-serif
            text-[32px]
            font-medium
            text-textDark
            tracking-[-0.01em]
          "
        >
          Lilac Template
        </p>

        <nav className="flex gap-14">
          <a className="text-[17px] text-textDark">Blog</a>
          <a className="text-[17px] text-textDark">Contact</a>
        </nav>
      </div>
    </header>
  );
}
