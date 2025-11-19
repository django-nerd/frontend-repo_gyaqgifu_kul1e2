import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-white/5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-3 text-left text-white/90">
        <span>{q}</span>
        <ChevronDown className={`h-5 w-5 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-white/70">{a}</div>}
    </div>
  )
}

function FAQ() {
  const faqs = [
    { q: 'Is Loyalino easy to set up?', a: 'Yes. Install in minutes with guided setup. No developer needed.' },
    { q: 'Does it work with Shopify Checkout?', a: 'Absolutely. Customers can redeem points directly in cart and checkout.' },
    { q: 'Can I customize the design?', a: 'Yes. Widgets adopt your brand colors and typography with flexible settings.' },
    { q: 'How is pricing calculated?', a: 'Simple monthly plans with clear limits and no hidden fees.' },
  ]
  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <h2 className="text-center text-white text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
