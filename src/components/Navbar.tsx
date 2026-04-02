'use client';
import { useState, useEffect } from 'react';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      scrolled ? 'bg-white/95 backdrop-blur shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex flex-col leading-none">
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-terra-600' : 'text-white'}`}>
            Ready Set
          </span>
          <span className={`font-display italic text-xl transition-colors ${scrolled ? 'text-terra-400' : 'text-terra-200'}`}>
            ReDesign
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map(n => (
            <a key={n.href} href={n.href}
              className={`text-[12px] font-medium tracking-wide transition-colors hover:text-terra-500 ${scrolled ? 'text-stone-600' : 'text-white/80'}`}>
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn-terra text-[12px] !py-2.5 !px-5">
            Book Free Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 flex flex-col gap-1.5" aria-label="Menu">
          <span className={`block w-5 h-0.5 transition-all ${open ? 'translate-y-2 rotate-45' : ''} ${scrolled ? 'bg-stone-700' : 'bg-white'}`}/>
          <span className={`block w-5 h-0.5 transition-opacity ${open ? 'opacity-0' : ''} ${scrolled ? 'bg-stone-700' : 'bg-white'}`}/>
          <span className={`block w-5 h-0.5 transition-all ${open ? '-translate-y-2 -rotate-45' : ''} ${scrolled ? 'bg-stone-700' : 'bg-white'}`}/>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-6 flex flex-col gap-5">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-stone-700 hover:text-terra-500">
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-terra text-center">
            Book Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
