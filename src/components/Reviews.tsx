'use client';
import { useState } from 'react';

interface Testimonial {
  id: number; name: string; location: string;
  text: string; rating: number; service: string;
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" fill="#e07040" viewBox="0 0 20 20">
          <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.31L10 13.27l-4.78 2.52.91-5.31L2.27 6.62l5.34-.78z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="py-28 bg-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-terra-500/20 border border-terra-400/30 text-terra-300 text-[11px] font-medium tracking-widest uppercase mb-5">
            300+ Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            Angie&apos;s List Super Service Award winner for 12 consecutive years. Read what real homeowners say.
          </p>
        </div>

        {/* Award badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { label: "Angie's List", sub: 'Super Service Award × 12' },
            { label: '4.9 ★', sub: 'Chamber of Commerce' },
            { label: '4.5 ★', sub: 'Houzz Rating' },
            { label: 'Gold Member', sub: 'Interior ReDecorators Network' },
          ].map(b => (
            <div key={b.label} className="bg-stone-700/50 border border-stone-600 rounded-xl px-6 py-4 text-center">
              <p className="font-display text-lg font-bold text-terra-300">{b.label}</p>
              <p className="text-stone-400 text-xs mt-0.5">{b.sub}</p>
            </div>
          ))}
        </div>

        {/* Featured quote */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Stars n={testimonials[active].rating} />
          <blockquote className="font-display text-2xl md:text-3xl text-white font-medium italic leading-relaxed mt-5 mb-6">
            &ldquo;{testimonials[active].text}&rdquo;
          </blockquote>
          <p className="text-stone-400">
            — {testimonials[active].name},&nbsp;
            <span className="text-terra-400">{testimonials[active].location}</span>
            &nbsp;·&nbsp;
            <span className="text-stone-500 text-sm">{testimonials[active].service}</span>
          </p>
        </div>

        {/* Dot nav */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-terra-400' : 'w-2 h-2 bg-stone-600 hover:bg-stone-500'}`}
            />
          ))}
        </div>

        {/* Mini cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <button key={t.id} onClick={() => setActive(i)}
              className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                i === active
                  ? 'border-terra-400/50 bg-stone-700/80'
                  : 'border-stone-700 bg-stone-700/30 hover:border-stone-500'
              }`}>
              <Stars n={t.rating} />
              <p className="text-stone-300 text-sm leading-relaxed mt-3 mb-3 line-clamp-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-terra-400 text-xs font-medium">{t.name}</p>
              <p className="text-stone-500 text-xs">{t.service}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
