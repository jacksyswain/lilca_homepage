import RevealItem from "./RevealItem";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[3vh]">
      <div
        className="
          max-w-[90rem] mx-auto
          grid grid-cols-1 lg:grid-cols-[40%_60%]
          min-h-[90vh]
        "
      >
        {/* IMAGE */}
        <div className="flex items-center justify-center lg:justify-start px-[5vw]">
          <RevealItem delay={0.01}>
            <div
              className="
                relative
                w-[80vw]
                sm:w-[60vw]
                lg:w-[35vw]
                max-w-[36rem]
                aspect-[3/4]
                rounded-t-[50vw]
                overflow-hidden
                bg-sand
                mt-[5vh]
              "
            >
              <Image
                src="/images/hero.png"
                alt="Lilac flowers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </RevealItem>
        </div>

        {/* TEXT */}
        <div className="flex items-center justify-center px-[5vw]">
          <div className="w-[90vw] lg:max-w-[40vw] text-center">
            <RevealItem delay={0.02}>
              <h1
                className="
                  font-serif text-textDark
                  text-[clamp(2.6rem,6vw,6rem)]
                  leading-[1.05]
                  mb-[6vh]
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
                  text-[clamp(1rem,1.2vw,1.15rem)]
                  font-semibold
                  tracking-wide
                  mb-[6vh]
                "
              >
                Therapy for Adults in Minneapolis, MN.
              </p>
            </RevealItem>

            <RevealItem delay={0.04}>
              <div className="flex justify-center">
                <button
                  className="
                    inline-flex items-center gap-3
                    border border-textDark
                    px-[2.5rem] py-[1rem]
                    text-[0.8rem]
                    tracking-widest uppercase
                    hover:bg-textDark hover:text-cream
                    transition
                  "
                >
                  CONNECT WITH ME
                  <span aria-hidden>→</span>
                </button>
              </div>
            </RevealItem>
          </div>
        </div>
      </div>
    </section>
  );
}
