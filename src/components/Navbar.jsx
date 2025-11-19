import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-6 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border border-white/10 shadow-lg">
          <div className="px-4 lg:px-6 py-3 flex items-center justify-between">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400 text-white grid place-items-center shadow-[0_8px_30px_rgb(2,132,199,0.25)]">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Loyalino</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#how" className="hover:text-white transition">How it works</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#faq" className="hover:text-white transition">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-white/80 hover:text-white text-sm">Docs</a>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition">
                Add to Shopify
              </a>
            </div>

            <button className="md:hidden text-white/90" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2 text-white/90">
              <a href="#features" className="block">Features</a>
              <a href="#how" className="block">How it works</a>
              <a href="#pricing" className="block">Pricing</a>
              <a href="#faq" className="block">FAQ</a>
              <a href="#cta" className="inline-flex items-center justify-center w-full rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition">
                Add to Shopify
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
