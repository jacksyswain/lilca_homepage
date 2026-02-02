export default function About() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 px-10 py-24 gap-16 items-center">
      <div>
        <h2 className="font-serif text-3xl mb-6">Hi, I’m Lilac.</h2>
        <p className="text-sm leading-relaxed">
          I offer compassionate, thoughtful therapy focused
          on long-term personal growth.
        </p>
      </div>

      <div className="relative">
        <div className="w-64 h-80 bg-sand rounded-full"></div>
        <div className="w-40 h-40 bg-sand rounded-full absolute -bottom-10 -right-10"></div>
      </div>
    </section>
  );
}
