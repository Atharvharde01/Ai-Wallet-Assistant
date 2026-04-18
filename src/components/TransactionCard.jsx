export default function TransactionCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-accent/20 to-secondary/10 blur-3xl opacity-50 rounded-full" />

      <div className="relative glass rounded-xxl p-8 overflow-hidden" style={{ boxShadow: 'var(--shadow-glow)' }}>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Signature Request
              </p>
              <p className="font-headline font-bold">Swap 0.5 ETH for VAULT</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
        </div>

        {/* AI Analysis Content */}
        <div className="space-y-6">
          <div className="bg-surface-container-lowest/60 p-5 rounded-xl border border-outline-variant/10">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined text-primary text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                AI Explanation
              </span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              &quot;You are authorizing Uniswap V3 to spend 0.5 ETH in exchange for
              4,200 VAULT tokens. The contract verified as legitimate. Slippage is set
              to 0.5%.&quot;
            </p>
          </div>

          {/* Risk Alert */}
          <div className="bg-error-container/30 p-5 rounded-xl border border-error/20 flex items-start gap-3">
            <span className="material-symbols-outlined text-error mt-0.5">warning</span>
            <div>
              <p className="text-sm font-bold text-error">Low Liquidity Warning</p>
              <p className="text-xs text-on-error-container/80">
                The pool liquidity for this pair is below $10k. High price impact likely.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Simulation */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="h-12 bg-surface-container-highest rounded-xl animate-pulse" />
          <div className="h-12 bg-primary/20 rounded-xl animate-pulse" />
        </div>

        {/* Decorative Floating Element */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl" />
      </div>
    </div>
  )
}
