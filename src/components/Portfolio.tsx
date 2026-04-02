import Image from 'next/image';

interface Project {
  id: string; title: string; room: string;
  description: string; before: string; after: string; tag: string;
}

export default function Portfolio({ projects }: { projects: Project[] }) {
  return (
    <section id="portfolio" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="pill mb-5 block w-fit mx-auto">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Before &amp; After
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Real homes, real budgets, real results. Every project starts with what you already have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={p.id} className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-lg transition-all duration-300">
              {/* Images side by side */}
              <div className="grid grid-cols-2 h-52 relative">
                <div className="img-zoom relative">
                  <Image src={p.before} alt={`Before - ${p.title}`} fill className="object-cover" sizes="25vw"/>
                  <div className="absolute inset-0 bg-stone-900/20"/>
                  <span className="absolute bottom-2 left-2 bg-stone-800/70 text-white text-[10px] tracking-wider uppercase px-2 py-1 rounded">Before</span>
                </div>
                <div className="img-zoom relative border-l-2 border-white">
                  <Image src={p.after} alt={`After - ${p.title}`} fill className="object-cover" sizes="25vw"/>
                  <span className="absolute bottom-2 right-2 bg-terra-500/90 text-white text-[10px] tracking-wider uppercase px-2 py-1 rounded">After</span>
                </div>
                {/* Center arrow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-terra-500">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-stone-800">{p.title}</h3>
                  <span className="text-[10px] tracking-wider uppercase bg-terra-50 text-terra-600 border border-terra-100 rounded-full px-3 py-1">
                    {p.tag}
                  </span>
                </div>
                <p className="text-stone-400 text-xs mb-2 font-medium tracking-wide uppercase">{p.room}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-terra">Start Your Transformation</a>
        </div>
      </div>
    </section>
  );
}
