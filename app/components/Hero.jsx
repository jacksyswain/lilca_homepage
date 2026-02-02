export default function Hero() {
  return (
    <section className="bg-cream">
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 sm:px-10 lg:px-24
          pt-10 lg:pt-16
          pb-24 lg:pb-32
          grid grid-cols-1 lg:grid-cols-2
          items-center
          gap-20
        "
      >
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="
              w-[300px] h-[420px]
              sm:w-[420px] sm:h-[560px]
              lg:w-[560px] lg:h-[720px]
              rounded-[999px]
              overflow-hidden
              bg-sand
            "
          >
            <img
              src="/images/hero.jpg"
              alt="Lilac flowers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[520px] text-center lg:text-left">
          <h1
            className="
              font-serif text-textDark
              text-[38px]
              sm:text-[48px]
              lg:text-[64px]
              leading-[1.05]
              mb-10
            "
          >
            Live your life
            <br />
            in full bloom
          </h1>

          <p
            className="
              text-[16px]
              sm:text-[17px]
              lg:text-[18px]
              mb-12
            "
          >
            Therapy for Adults in Minneapolis, MN.
          </p>

          <button
            className="
              inline-flex items-center gap-4
              border border-textDark
              px-10 py-4
              text-[13px] tracking-widest
              uppercase
              hover:bg-textDark hover:text-cream
              transition
            "
          >
            Connect with me
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
