import Spline from '@splinetool/react-spline'
import { ArrowRight, Star } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-yellow-300" />
              <span>Shopify loyalty & rewards</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Turn every order into a relationship with Loyalino
            </h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              Launch a modern loyalty and rewards program that boosts repeat purchases, increases AOV, and turns shoppers into superfans.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow hover:shadow-lg transition">
                Add to Shopify
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-medium border border-white/15 hover:bg-white/15 transition">
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={`https://i.pravatar.cc/64?img=${i+5}`} alt="avatar" className="h-8 w-8 rounded-full border border-white/10" />
                ))}
              </div>
              <p className="text-sm">Loved by growing Shopify brands</p>
            </div>
          </div>

          <div className="lg:col-span-5"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
