export default function AIInsight() {
  return (
    <section className="glass rounded-xl p-8 shadow-2xl relative overflow-hidden">
      {/* Risk Badge */}
      <div className="absolute top-0 right-0 p-6">
        <span className="flex items-center gap-2 bg-error/10 text-error px-4 py-1.5 rounded-full font-headline font-bold text-sm border border-error/20"
          style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}>
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
            warning
          </span>
          High Risk
        </span>
      </div>

      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">psychology</span>
        </div>
        <h2 className="font-headline text-2xl font-bold tracking-tight">AI Insight</h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Explanation */}
        <div className="md:col-span-8 space-y-4">
          <div className="p-5 bg-surface-container-low rounded-xl border-l-4 border-primary">
            <p className="text-sm leading-relaxed text-on-surface">
              The proposed transaction interacts with an unverified smart contract deployed 2 hours ago. The{' '}
              <span className="font-bold text-primary">approve()</span>{' '}
              function request grants unlimited access to your USDT balance. This pattern is consistent with a
              "drainer" exploit commonly used in phishing campaigns.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              Verified AI Audit
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              Analysis time: 0.4s
            </span>
          </div>
        </div>

        {/* Recommendation */}
        <div className="md:col-span-4 flex flex-col justify-center items-center text-center p-6 bg-error-container rounded-xl border border-error/10">
          <span className="text-[10px] uppercase tracking-widest font-black text-error mb-2">Recommendation</span>
          <span className="font-headline text-xl font-extrabold text-error leading-tight">REJECT &amp; CLOSE</span>
        </div>
      </div>

      {/* Decision Buttons */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        <button className="py-4 rounded-xl border-2 border-error text-error font-headline font-bold hover:bg-error hover:text-white transition-all duration-200">
          Cancel
        </button>
        <button className="py-4 rounded-xl bg-success text-white font-headline font-bold hover:brightness-110 transition-all duration-200"
          style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)' }}>
          Proceed
        </button>
      </div>
    </section>
  )
}
