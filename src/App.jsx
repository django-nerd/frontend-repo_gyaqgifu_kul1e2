import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <footer className="py-12 text-center text-white/50 text-sm bg-slate-950">
        © {new Date().getFullYear()} Loyalino — Loyalty & Rewards for Shopify
      </footer>
    </div>
  )
}

export default App
