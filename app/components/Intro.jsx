export default function Intro() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-sand p-20">
        <h2 className="font-serif text-3xl mb-6">
          Live a fulfilling life.
        </h2>
        <p className="text-sm leading-relaxed">
          You deserve a space where you can slow down, reflect,
          and reconnect with yourself.
        </p>
      </div>

      <div className="bg-cream p-20">
        <div className="w-full h-[360px] bg-sand"></div>
      </div>
    </section>
  );
}
