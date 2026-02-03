import RevealItem from "./RevealItem";


export default function Hero() {
  return (
    <section className="bg-cream">
      
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 sm:px-8 lg:px-[8%]
          pt-10 lg:pt-16
          pb-24 lg:pb-32
          grid grid-cols-1 lg:grid-cols-[0.3fr_0.5fr]
          items-center
          gap-20
        "
      >
        {/* LEFT IMAGE (30%) */}
        <div className="flex justify-center lg:justify-start">
          <RevealItem delay={0.01}>
            <div
              className="
                w-[300px] h-[420px]
                sm:w-[420px] sm:h-[560px]
                lg:w-[560px] lg:h-[720px]
                rounded-t-[999px] rounded-b-none
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
          </RevealItem>
        </div>

        {/* RIGHT CONTENT (50%) */}
        <div className="max-w-[520px] text-center lg:text-left">
          <RevealItem delay={0.02}>
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
          </RevealItem>

          <RevealItem delay={0.03}>
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
          </RevealItem>

          <RevealItem delay={0.04}>
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
          </RevealItem>
        </div>
      </div>
    </section>
  );
}
