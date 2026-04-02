import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85"
          alt="Beautiful interior designed home"
          fill className="object-cover" priority quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="fade-up delay-1 inline-flex items-center gap-2 bg-terra-500/20 border border-terra-400/40 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-terra-400 animate-pulse"/>
            <span className="text-terra-200 text-xs font-medium tracking-wider uppercase">
              Flat-Rate · No Hourly Surprises
            </span>
          </div>

          <h1 className="fade-up delay-2 font-display text-white font-bold leading-[1.1] mb-6">
            <span className="block text-5xl md:text-6xl lg:text-7xl">Everyone</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl italic text-terra-300">Deserves a</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl">Beautiful Home.</span>
          </h1>

          <p className="fade-up delay-3 text-white/70 text-lg font-light leading-relaxed mb-10 max-w-md">
            Professional interior design for <em className="text-terra-300 not-italic font-medium">every budget</em>.
            Flat-rate pricing. You shop where you want. Over 300 five-star reviews.
          </p>

          <div className="fade-up delay-4 flex flex-wrap gap-4">
            <a href="#contact" className="btn-terra">Get My Free Quote</a>
            <a href="#services" className="btn-outline !text-white !border-white/50 hover:!bg-white hover:!text-terra-600">
              See Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="fade-up delay-4 flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/10">
            {[
              { val: '20+', label: 'Years Experience' },
              { val: '300+', label: 'Five-Star Reviews' },
              { val: '12×', label: 'Angie\'s List Award' },
            ].map(b => (
              <div key={b.val}>
                <p className="font-display text-3xl text-terra-300 font-bold">{b.val}</p>
                <p className="text-white/50 text-xs tracking-wide">{b.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating price card */}
        <div className="fade-up delay-3 hidden lg:block">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm ml-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-terra-500 mb-1">Starting at</p>
            <p className="font-display text-6xl font-bold text-stone-800 mb-1">$200</p>
            <p className="text-stone-500 text-sm mb-6">per room · flat rate</p>

            <ul className="space-y-3 mb-8">
              {[
                'Full Design Plan — same day',
                'Paint colors & furniture layout',
                'Design Board with shopping pics',
                'You shop where you want',
                'Free follow-up emails',
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-stone-600">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
                    <svg width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-sage-600" viewBox="0 0 10 10">
                      <path d="M2 5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-terra w-full text-center block">
              Book a Consultation
            </a>
            <p className="text-center text-xs text-stone-400 mt-3">No commitment · Free quote</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-white/50 rounded-full"/>
        </div>
      </div>
    </section>
  );
}
