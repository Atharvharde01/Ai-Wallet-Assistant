import { useState } from 'react'

export default function TransactionSimulator({ onAnalyze }) {
  const [amount, setAmount] = useState('')
  const [txType, setTxType] = useState('Transfer')
  const [recipient, setRecipient] = useState('')

  const handleAnalyze = () => {
    if (onAnalyze) {
      onAnalyze({ amount, txType, recipient })
    }
  }

  return (
    <section className="glass rounded-xl p-8 shadow-xl overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-light/20 blur-3xl rounded-full pointer-events-none"></div>

      <h2 className="font-headline text-2xl font-bold tracking-tight mb-8">Simulate Transaction</h2>

      <div className="space-y-6">
        {/* Amount + Type row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Amount */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
              Amount (ETH)
            </label>
            <div className="relative group">
              <input
                className="w-full bg-surface-container-low border-b-2 border-outline-variant/15 focus:border-primary focus:ring-0 px-4 py-3 rounded-t-lg transition-all outline-none text-lg font-headline"
                placeholder="0.00"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-outline font-bold text-sm">ETH</div>
            </div>
          </div>

          {/* Transaction Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
              Transaction Type
            </label>
            <select
              className="w-full bg-surface-container-low border-b-2 border-outline-variant/15 focus:border-primary focus:ring-0 px-4 py-3 rounded-t-lg transition-all outline-none appearance-none cursor-pointer"
              value={txType}
              onChange={(e) => setTxType(e.target.value)}
            >
              <option>Transfer</option>
              <option>Contract Call</option>
              <option>Token Approval</option>
            </select>
          </div>
        </div>

        {/* Recipient Address */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
            Recipient Address
          </label>
          <input
            className="w-full bg-surface-container-low border-b-2 border-outline-variant/15 focus:border-primary focus:ring-0 px-4 py-3 rounded-t-lg transition-all outline-none font-mono text-sm"
            placeholder="0x..."
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>

        {/* Analyze Button */}
        <button
          className="w-full py-4 rounded-xl btn-primary text-lg font-headline font-bold transition-transform active:scale-95"
          style={{ boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)' }}
          onClick={handleAnalyze}
        >
          Analyze Transaction
        </button>
      </div>
    </section>
  )
}
