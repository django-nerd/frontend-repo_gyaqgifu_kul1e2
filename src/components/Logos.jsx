function Logos() {
  const brands = ['Acme', 'Nord', 'Mondo', 'Aura', 'Nova', 'Flow']
  return (
    <section className="py-12 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-white/60 text-sm">Trusted by fast-growing Shopify brands</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-70">
          {brands.map((b) => (
            <div key={b} className="h-10 rounded-xl border border-white/10 bg-white/5 text-white/60 grid place-items-center text-sm">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
