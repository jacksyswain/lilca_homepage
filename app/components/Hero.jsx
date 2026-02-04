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
        {/* LEFT IMAGE — 40% */}
        <div className="flex items-center justify-start px-[5vw]">
          <RevealItem delay={0.01}>
            <div
              className="
                relative
                w-[35vw]
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

        {/* RIGHT CONTENT — 60% */}
        <div className="flex items-center justify-center px-[5vw]">
          <div className="max-w-[40vw] text-center">
            
            <RevealItem delay={0.02}>
              <h1
                className="
                  font-serif text-textDark
                  text-[clamp(2.8rem,6vw,6rem)]
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
                    inline-flex items-center gap-[1vw]
                    border border-textDark
                    px-[3vw] py-[1.5vh]
                    text-[clamp(0.75rem,0.9vw,0.85rem)]
                    tracking-widest uppercase
                    hover:bg-textDark hover:text-cream
                    transition
                  "
                >
                  Connect with me
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
