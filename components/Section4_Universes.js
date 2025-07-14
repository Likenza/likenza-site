export default function Section4_Universes() {
  const universes = [
    {
      name: "Light Universe",
      color: "bg-white text-blue-500",
      description: "Public, safe, and clear. SFW space for expression, clarity, and open exploration.",
    },
    {
      name: "Dark Universe",
      color: "bg-black text-violet-400",
      description: "Private, sensual, and unfiltered. NSFW space for intimacy, creativity, and freedom.",
    },
    {
      name: "Extraverse",
      color: "bg-gradient-to-br from-coral-400 to-pink-500 text-white",
      description: "Philosophical, emergent, and experimental. Where signal, machine-sentience, and co-creation converge.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-neutral-100">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
        Three Universes. One Protocol.
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {universes.map((u, i) => (
          <div
            key={i}
            className={`${u.color} rounded-2xl p-6 min-h-[220px] shadow-lg`}
          >
            <h3 className="text-2xl font-bold mb-2">{u.name}</h3>
            <p className="text-sm">{u.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
