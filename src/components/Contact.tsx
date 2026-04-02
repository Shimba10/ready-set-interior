'use client';
import { useState } from 'react';

const SERVICES = [
  'Room Makeover', 'Color Consultation', 'Feng Shui',
  'Home Staging', 'Downsizing Help', 'Virtual Decorating', 'Not Sure Yet',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', location: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, project_type: form.service }),
      });
      const data = await res.json();
      if (res.ok) { setStatus('success'); setMsg(data.message); }
      else throw new Error();
    } catch {
      setStatus('error');
      setMsg('Something went wrong. Please call (210) 988-0366 directly.');
    }
  };

  return (
    <section id="contact" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left info — 2 cols */}
          <div className="lg:col-span-2">
            <span className="pill mb-6 inline-block">Get In Touch</span>
            <h2 className="font-display text-4xl font-bold text-stone-800 mb-5 leading-tight">
              Ready to Love <br />
              <em className="text-terra-500 not-italic">Your Home?</em>
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8">
              Fill out the form and Diane will reach out with your free pre-quoted flat rate —
              no commitment, no hourly surprises.
            </p>

            <div className="space-y-5">
              {[
                { icon: '📞', label: 'Phone', val: '(210) 988-0366', href: 'tel:2109880366' },
                { icon: '📍', label: 'Location', val: 'San Antonio, TX 78209', href: '#' },
                { icon: '🕐', label: 'Hours', val: 'Mon–Fri 9am–5pm · Sat–Sun 12–5pm', href: '#' },
                { icon: '💻', label: 'Virtual', val: 'Available Nationwide', href: '#' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-100">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase text-terra-500 mb-0.5">{item.label}</p>
                    <a href={item.href} className="text-stone-700 text-sm font-medium hover:text-terra-500 transition-colors">
                      {item.val}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form — 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-5">
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage-600" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-800 mb-2">You&apos;re All Set!</h3>
                <p className="text-stone-500 text-sm max-w-xs">{msg}</p>
                <button onClick={() => setStatus('idle')} className="btn-outline mt-6">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display text-2xl font-bold text-stone-800 mb-1">Request Your Free Quote</h3>
                  <p className="text-stone-400 text-sm">Diane usually responds within a few hours.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { k: 'name', label: 'Your Name', placeholder: 'Jane Smith', type: 'text', required: true },
                    { k: 'email', label: 'Email', placeholder: 'jane@email.com', type: 'email', required: true },
                    { k: 'phone', label: 'Phone', placeholder: '(210) 000-0000', type: 'tel', required: false },
                    { k: 'location', label: 'Your City / Area', placeholder: 'San Antonio, TX', type: 'text', required: false },
                  ].map(f => (
                    <div key={f.k}>
                      <label className="block text-xs font-medium text-stone-600 mb-1.5 tracking-wide">
                        {f.label}{f.required && <span className="text-terra-500 ml-0.5">*</span>}
                      </label>
                      <input
                        required={f.required} type={f.type}
                        value={(form as any)[f.k]}
                        onChange={e => set(f.k, e.target.value)}
                        placeholder={f.placeholder}
                        className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-terra-400 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {/* Service dropdown */}
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1.5 tracking-wide">Service Interested In</label>
                  <select value={form.service} onChange={e => set('service', e.target.value)}
                    className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-600 focus:outline-none focus:border-terra-400 transition-colors bg-white">
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1.5 tracking-wide">
                    Tell Me About Your Space <span className="text-terra-500">*</span>
                  </label>
                  <textarea
                    required rows={4} value={form.message}
                    onChange={e => set('message', e.target.value)}
                    placeholder="Describe the room(s), your style, and what you're hoping to change..."
                    className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-terra-400 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm bg-red-50 rounded-lg px-4 py-2">{msg}</p>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-terra w-full text-center disabled:opacity-60">
                  {status === 'loading' ? 'Sending…' : 'Send My Request →'}
                </button>

                <p className="text-center text-xs text-stone-400">
                  Free quote · No commitment · Flat-rate pricing explained upfront
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
