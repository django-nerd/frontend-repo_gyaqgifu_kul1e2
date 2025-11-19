import { MousePointerClick, ShoppingCart, Award } from 'lucide-react'

function HowItWorks() {
  const steps = [
    { icon: MousePointerClick, title: 'Install in minutes', desc: 'Connect to your store and go live with guided setup.' },
    { icon: ShoppingCart, title: 'Reward more actions', desc: 'Automatically grant points for key moments across the journey.' },
    { icon: Award, title: 'Grow repeat purchases', desc: 'Turn shoppers into loyal customers and drive LTV.' },
  ]

  return (
    <section id="how" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Launch fast, scale effortlessly</h2>
            <p className="mt-3 text-white/70">Built for Shopify from day one. Everything just works — from customer accounts to checkout.</p>
            <ul className="mt-6 space-y-4">
              {steps.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-white/10 text-white grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{title}</h3>
                    <p className="text-white/70 text-sm">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
