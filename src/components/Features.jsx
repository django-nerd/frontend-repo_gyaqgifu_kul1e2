import { Gift, GaugeCircle, Wallet, ChartBar, CheckCircle2 } from 'lucide-react'

function Features() {
  const items = [
    {
      icon: Gift,
      title: 'Points, tiers & perks',
      desc: 'Reward purchases, reviews, referrals and more with customizable earning rules.'
    },
    {
      icon: Wallet,
      title: 'Seamless checkout rewards',
      desc: 'Customers redeem points directly in cart and checkout for a frictionless experience.'
    },
    {
      icon: GaugeCircle,
      title: 'Brand-first design',
      desc: 'Beautiful onsite widgets that match your brand and feel native to Shopify.'
    },
    {
      icon: ChartBar,
      title: 'Insights that drive growth',
      desc: 'Track repeat rate, lift in AOV, and LTV impact with clear analytics.'
    },
  ]

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-transparent to-slate-950/30" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to build loyalty</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Designed for modern ecommerce teams who want more repeat purchases, not more complexity.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400 text-white grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="text-white/70 text-sm mt-2">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-300 text-xs">
                <CheckCircle2 className="h-4 w-4" />
                <span>No developer required</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
