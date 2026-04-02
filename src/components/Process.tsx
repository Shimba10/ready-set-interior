interface Step { step: string; title: string; body: string; }

export default function Process({ steps }: { steps: Step[] }) {
  return (
    <section id="process" className="py-28 bg-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="pill mb-5 block w-fit mx-auto">Simple Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            How It Works
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            From first contact to finished Design Plan — the whole thing fits in a single afternoon.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-terra-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {/* Circle */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-terra-200 flex flex-col items-center justify-center mx-auto mb-6 shadow-sm relative z-10 group-hover:border-terra-400 transition-colors">
                  <span className="text-terra-400 text-[10px] font-medium tracking-widest uppercase">Step</span>
                  <span className="font-display text-2xl font-bold text-terra-600">{s.step}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-stone-800 mb-3">{s.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{s.body}</p>

                {/* Arrow mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2 text-terra-300 text-xl">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The unique promise */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🛍️', title: 'You Shop Where YOU Want', body: "We never buy things for you. No markups, no surprises. Shop at IKEA, Target, local stores — wherever your budget and taste take you." },
            { icon: '📋', title: 'Plan in Hand Before We Leave', body: "Unlike hourly designers who take weeks to send a plan, your complete Design Plan is handed to you on the same day as your appointment." },
            { icon: '📧', title: 'Free Follow-Up Emails', body: "Have questions after we leave? Email us at no extra charge. We're here to make sure your project turns out exactly as planned." },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-xl p-7 border border-stone-100">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h4 className="font-display text-lg font-bold text-stone-800 mb-2">{item.title}</h4>
              <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
