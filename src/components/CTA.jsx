import { ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-white text-3xl sm:text-4xl font-semibold">
          Ready to turn shoppers into loyal customers?
        </h2>
        <p className="mt-3 text-white/70">Install Loyalino on your Shopify store and launch a beautiful loyalty program in minutes.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow hover:shadow-lg transition">
            Add to Shopify
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-medium border border-white/15 hover:bg-white/15 transition">
            View pricing
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
