import Image from 'next/image';

interface Service {
  id: string; title: string; emoji: string; price: string;
  description: string; details: string[]; image: string;
}

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="pill mb-5 block w-fit mx-auto">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Flat-Rate Services
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            No hourly billing. No hidden fees. You know exactly what you&apos;re paying before we start —
            and you get everything you need to make your home beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              {/* Image */}
              <div className="img-zoom h-48 relative">
                <Image src={s.image} alt={s.title} fill className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"/>
                {/* Price tag */}
                <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 shadow-sm">
                  <span className="text-terra-600 font-bold text-sm">{s.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{s.emoji}</span>
                  <h3 className="font-display text-xl font-bold text-stone-800 group-hover:text-terra-600 transition-colors">
                    {s.title}
                  </h3>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{s.description}</p>

                <ul className="space-y-1.5">
                  {s.details.map(d => (
                    <li key={d} className="flex items-start gap-2 text-xs text-stone-500">
                      <span className="text-sage-500 mt-0.5">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 bg-terra-500 rounded-2xl p-10 text-center text-white">
          <h3 className="font-display text-3xl font-bold mb-3">
            Don&apos;t See What You Need?
          </h3>
          <p className="text-terra-100 mb-6 max-w-lg mx-auto">
            We specialize in customized decorating consultations. Whatever your room challenge is,
            let&apos;s talk — there&apos;s almost always a flat-rate solution.
          </p>
          <a href="#contact" className="inline-block bg-white text-terra-600 font-medium py-3 px-8 rounded-lg hover:bg-terra-50 transition-colors">
            Ask About Custom Services
          </a>
        </div>
      </div>
    </section>
  );
}
