export default function DemoPreview() {
  return (
    <section id="demo" className="max-w-5xl mx-auto px-8 mb-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          See It <span className="gradient-text">In Action</span>
        </h2>
      </div>

      <div className="relative bg-inverse-surface rounded-[2rem] p-1 overflow-hidden group" style={{ boxShadow: 'var(--shadow-xl)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />

        <div className="relative bg-[#0f172a] rounded-[1.8rem] overflow-hidden border border-white/5 grid md:grid-cols-[300px_1fr]">
          {/* Sidebar Mockup */}
          <div className="p-6 border-r border-white/10 hidden md:block">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#eab308]" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-white/5 rounded w-3/4" />
              <div className="h-4 bg-white/5 rounded w-1/2" />
              <div className="h-4 bg-white/5 rounded w-2/3" />
              <div className="pt-8 flex flex-col gap-3">
                <div className="h-10 bg-white/10 rounded-lg" />
                <div className="h-10 bg-white/10 rounded-lg" />
                <div className="h-10 bg-white/10 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Main Interface Mockup */}
          <div className="p-8 md:p-12">
            <div className="max-w-xl mx-auto space-y-8">
              {/* Explanation Panel */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-light">info</span>
                  <h5 className="font-headline font-bold text-white text-lg">
                    Contract Explanation
                  </h5>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <p className="text-white/70 leading-relaxed">
                    &quot;This transaction is interacting with the{' '}
                    <span className="text-primary-light font-mono">OpenSea: Seaport</span>{' '}
                    protocol. You are listing 1 NFT for 0.5 ETH. Note: This action gives the
                    protocol permission to transfer your NFT if the price is met.&quot;
                  </p>
                </div>
              </div>

              {/* Risk Alert Panel */}
              <div className="bg-error/15 border-2 border-error/50 p-6 rounded-2xl flex items-start gap-4">
                <span className="material-symbols-outlined text-error text-3xl">
                  report_problem
                </span>
                <div>
                  <h5 className="text-error font-bold text-lg mb-1 uppercase tracking-tight">
                    HIGH RISK DETECTED
                  </h5>
                  <p className="text-error/90 text-sm">
                    The destination address has been flagged for phishing activities. We strongly
                    recommend rejecting this signature request.
                  </p>
                </div>
              </div>

              {/* Recommendation Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex-1 bg-error text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">block</span> Reject &amp; Close
                </button>
                <button className="flex-1 bg-white/10 text-white font-bold py-4 rounded-xl hover:bg-white/20 transition-all">
                  Continue Anyway
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
