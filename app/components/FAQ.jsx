export default function FAQ() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 px-10 py-24">
      <div className="h-72 bg-sand rounded-full"></div>

      <div>
        <h2 className="font-serif text-3xl mb-6">FAQs</h2>
        <ul className="space-y-4 text-sm">
          <li>— Do you take insurance?</li>
          <li>— What are your rates?</li>
          <li>— Do you have availability?</li>
        </ul>
      </div>
    </section>
  );
}
