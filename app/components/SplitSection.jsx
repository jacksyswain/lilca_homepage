export default function SplitSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-[500px] bg-sand"></div>

      <div className="bg-[#d6d3dc] p-20">
        <h2 className="font-serif text-3xl mb-6">
          You don’t have to do this alone.
        </h2>
        <ul className="text-sm space-y-3">
          <li>• Anxiety & overwhelm</li>
          <li>• Life transitions</li>
          <li>• Emotional balance</li>
        </ul>
      </div>
    </section>
  );
}
