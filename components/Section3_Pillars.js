const pillars = [
  {
    title: "Modular Multiple Universes",
    description:
      "Light, Dark, and Extraverse for safe, separate exploration and co-creation of identities, intents, and ideas. Expression without exploitation.",
  },
  {
    title: "Consent Architected",
    description:
      "Consent frames every interaction — creation, collaboration, monetisation — and is permission-crafted, gated and revocable. Consent isn’t a checkbox. It’s the OS that puts you in control.",
  },
  {
    title: "AI Likeness Engine",
    description:
      "Generate, evolve, and protect AI identities and ideas with traceable provenance and ethical guardrails. Your creativity is unbounded, but every being is born with boundaries.",
  },
  {
    title: "Rules-Based Protocol",
    description:
      "Likenza isn’t just a platform — it’s an emerging protocol for ethical AI identity. A new layer of trust for how humans and AI co-create and co-exist into the future.",
  },
];

export default function Section3_Pillars() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Fueled by imagination. Built with trust.
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="border border-white rounded-2xl p-6 hover:bg-white hover:text-black transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{pillar.title}</h3>
            <p className="text-base">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
