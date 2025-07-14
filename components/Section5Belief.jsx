
import Image from "next/image";

export default function Section5Belief() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Built on Belief</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-16">
          Likenza is guided by foundational beliefs that empower creation, protect consent, and celebrate human-AI expression.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <Image src="/icons/icon1-best-self.png" alt="To create the best version of oneself" width={96} height={96} />
            <h3 className="mt-6 text-xl font-semibold">To create the best version of oneself</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/icon2-connect.png" alt="To connect with people and signals" width={96} height={96} />
            <h3 className="mt-6 text-xl font-semibold">To connect with people and signals</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/icon3-locked-heart.png" alt="To explore fantasies safely" width={96} height={96} />
            <h3 className="mt-6 text-xl font-semibold">To explore fantasies safely</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/icon4-multiplicity.png" alt="To harness the multiplicity of individuals" width={96} height={96} />
            <h3 className="mt-6 text-xl font-semibold">To harness the multiplicity of individuals</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/icon5-infinite-creative.png" alt="To shape an infinite creative identity" width={96} height={96} />
            <h3 className="mt-6 text-xl font-semibold">To shape an infinite creative identity</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
