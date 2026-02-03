import RevealItem from "./RevealItem";

export default function Hero() {
  return (
    <section className="pt-[30px]">
      <div
        className="

          max-w-[1600px] mx-auto
          grid grid-cols-1 lg:grid-cols-[40%_60%]
          min-h-[90vh]
        "
      >
        {/* LEFT IMAGE — 40% */}
        <div className="flex items-center justify-center px-[5vw]">
          <RevealItem delay={0.01}>
            <div
              className="
                w-[300px] h-[420px]
                sm:w-[420px] sm:h-[560px]
                lg:w-[520px] lg:h-[680px]
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

        {/* RIGHT CONTENT — 60% */}
        <div className="flex items-center justify-center px-[5vw]">
          <div className="max-w-[520px] text-center lg:text-left">
            <RevealItem delay={0.02}>
              <h1
                className="
                  font-serif text-textDark
                  text-[68px]
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
      </div>
    </section>
  );
}
