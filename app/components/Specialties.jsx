export default function Specialties() {
  const items = ["Self Reflection", "Relationships", "Growth"];

  return (
    <section className="py-24 px-10 text-center">
      <h2 className="font-serif text-3xl mb-16">My Specialties</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map(item => (
          <div key={item}>
            <div className="w-48 h-48 mx-auto bg-sand rounded-full mb-6"></div>
            <h3 className="font-serif mb-2">{item}</h3>
            <p className="text-sm">
              Personalized support designed around your needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
