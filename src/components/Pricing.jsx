import { Check } from 'lucide-react'

function Pricing() {
  const features = [
    'Unlimited members',
    'Email & SMS capture',
    'Points & tiers',
    'Referral rewards',
    'Checkout redemption',
    'Basic analytics',
  ]

  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade as you grow.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
            <h3 className="text-white font-medium">Starter</h3>
            <p className="mt-1 text-sm text-white/70">For new stores</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-semibold text-white">Free</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2 text-white/80"><Check className="h-4 w-4 text-emerald-400" /> {f}</li>
              ))}
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow hover:shadow-lg transition">Get started</a>
          </div>

          <div className="rounded-2xl border-2 border-cyan-400/60 bg-gradient-to-b from-white/10 to-white/5 p-6 text-white/90 shadow-xl">
            <div className="inline-block rounded-full bg-cyan-400/20 text-cyan-200 text-xs px-2 py-0.5 mb-2">Most popular</div>
            <h3 className="text-white font-medium">Growth</h3>
            <p className="mt-1 text-sm text-white/70">For scaling brands</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-semibold text-white">$149</span>
              <span className="text-white/60">/mo</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {features.concat(['Advanced analytics', 'Priority support']).map(f => (
                <li key={f} className="flex items-center gap-2 text-white/80"><Check className="h-4 w-4 text-emerald-400" /> {f}</li>
              ))}
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow hover:shadow-lg transition">Start free trial</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
            <h3 className="text-white font-medium">Enterprise</h3>
            <p className="mt-1 text-sm text-white/70">Custom needs</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-semibold text-white">Let’s talk</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {features.concat(['SLA & SSO', 'Dedicated manager']).map(f => (
                <li key={f} className="flex items-center gap-2 text-white/80"><Check className="h-4 w-4 text-emerald-400" /> {f}</li>
              ))}
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium border border-white/15 hover:bg-white/15 transition">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
