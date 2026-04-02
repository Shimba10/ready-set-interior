export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <p className="font-display text-2xl font-bold text-white">Ready Set <em className="text-terra-400 not-italic">ReDesign</em></p>
              <p className="text-xs tracking-widest uppercase text-stone-500 mt-1">Flat-Rate Interior Design · Est. 2003</p>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-xs mb-6">
              Everyone deserves a beautiful home — no matter the size of your budget.
              Professional design advice at a flat rate, serving San Antonio TX and virtually nationwide.
            </p>
            <div className="space-y-2 text-sm">
              <p><a href="tel:2109880366" className="hover:text-terra-400 transition-colors">📞 (210) 988-0366</a></p>
              <p>📍 340 Treeline Park, San Antonio TX 78209</p>
              <p>🕐 Mon–Fri 9am–5pm · Sat–Sun 12–5pm</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4 tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {['Room Makeover', 'Color Consultation', 'Feng Shui', 'Home Staging', 'Downsizing Help', 'Virtual Decorating'].map(s => (
                <li key={s}><a href="#services" className="hover:text-terra-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[['How It Works', '#process'], ['Portfolio', '#portfolio'], ['Reviews', '#reviews'], ['About Diane', '#about'], ['Get a Quote', '#contact']].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-terra-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-stone-600">© {new Date().getFullYear()} Ready Set ReDesign. All rights reserved.</p>
          <p className="text-xs text-stone-600">Serving San Antonio TX · Columbus OH · Virtual Nationwide</p>
        </div>
      </div>
    </footer>
  );
}
