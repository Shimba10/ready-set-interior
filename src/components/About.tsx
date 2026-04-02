import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-28 bg-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[500px]">
            <div className="img-zoom absolute top-0 left-0 w-3/4 h-4/5 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80"
                alt="Diane Haignere — Ready Set ReDesign"
                fill className="object-cover object-top"
                sizes="40vw"
              />
            </div>
            <div className="img-zoom absolute bottom-0 right-0 w-1/2 h-2/5 rounded-2xl overflow-hidden shadow-xl border-4 border-warm">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&q=80"
                alt="Interior design work"
                fill className="object-cover"
                sizes="20vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-16 left-0 bg-white rounded-xl shadow-lg p-4 border border-stone-100">
              <p className="text-xs font-medium tracking-wider uppercase text-terra-500 mb-0.5">Est.</p>
              <p className="font-display text-3xl font-bold text-stone-800">2003</p>
              <p className="text-stone-400 text-xs">San Antonio, TX</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="pill mb-6 inline-block">Meet Diane</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">
              Design That <br />
              <em className="text-terra-500 not-italic">Doesn&apos;t Break</em> <br />
              the Bank
            </h2>

            <p className="text-stone-600 leading-relaxed mb-5">
              Hi, I&apos;m Diane Haignere — and I started Ready Set ReDesign in 2003 because of one simple belief:
              <strong className="text-stone-800"> everyone deserves a well-decorated home, no matter their budget.</strong>
            </p>

            <p className="text-stone-500 leading-relaxed mb-5">
              I got tired of seeing people give up on decorating after making one costly mistake after another.
              So I created a service that&apos;s different: flat-rate pricing, no purchases made for you (so no
              awkward returns!), and a complete Design Plan handed to you the very same day.
            </p>

            <p className="text-stone-500 leading-relaxed mb-8">
              With over 20 years of experience, 300+ reviews, and 12 consecutive Angie&apos;s List Super Service
              Awards, I&apos;m also a certified Feng Shui practitioner and Gold Member of the Interior ReDecorators Network.
              Now serving San Antonio, TX and virtually anywhere in the US.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                '✅ Certified Feng Shui Practitioner',
                '✅ Gold Member · Interior ReDecorators Network',
                '✅ Angie\'s List Super Service × 12',
                '✅ 300+ Verified Reviews',
              ].map(c => (
                <div key={c} className="text-sm text-stone-600 bg-white rounded-lg px-4 py-3 border border-stone-100">
                  {c}
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-terra">Work With Diane</a>
          </div>
        </div>
      </div>
    </section>
  );
}
