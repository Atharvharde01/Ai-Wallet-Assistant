import { useState } from 'react'

export default function DashboardNavbar({ onBack }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-2xl shadow-[0_24px_48px_rgba(30,26,29,0.06)]"
      style={{ background: 'rgba(255,255,255,0.6)' }}>
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          <button className="font-headline text-xl font-bold tracking-tighter text-on-surface hover:text-primary transition-colors" onClick={onBack}>
            ETHEREAL VAULT
          </button>
          <nav className="hidden md:flex items-center gap-6 font-body text-sm tracking-wide">
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#features">Features</a>
            <a className="text-primary font-bold border-b-2 border-primary/50 pb-1" href="#how-it-works">How it Works</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#security">Security</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#demo">Demo</a>
          </nav>
        </div>

        {/* Right: Status + Wallet + Disconnect */}
        <div className="flex items-center gap-4">
          {/* Network Badge */}
          <div className="hidden sm:flex items-center bg-secondary-container px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs font-bold text-on-secondary-container">Sepolia</span>
          </div>

          {/* Wallet Address */}
          <div className="hidden sm:flex items-center gap-2 bg-surface-container-lowest px-4 py-1.5 rounded-xl border border-outline-variant/10 shadow-sm">
            <span className="material-symbols-outlined text-primary text-lg">account_balance_wallet</span>
            <span className="text-xs font-headline font-medium text-on-surface-variant uppercase">0x123...abc</span>
          </div>

          {/* Disconnect */}
          <button className="btn-primary px-5 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95" onClick={onBack}>
            Disconnect
          </button>

          {/* Mobile menu toggle */}
          <button className="md:hidden text-on-surface-variant" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden px-8 pb-4 space-y-3 font-body text-sm">
          <a className="block text-on-surface-variant hover:text-primary" href="#features">Features</a>
          <a className="block text-primary font-bold" href="#how-it-works">How it Works</a>
          <a className="block text-on-surface-variant hover:text-primary" href="#security">Security</a>
          <a className="block text-on-surface-variant hover:text-primary" href="#demo">Demo</a>
        </div>
      )}
    </header>
  )
}
