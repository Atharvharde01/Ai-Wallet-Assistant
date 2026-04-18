const badges = [
  { icon: 'security', label: 'Built for Web3 Safety' },
  { icon: 'account_balance_wallet', label: 'MetaMask Compatible' },
  { icon: 'bolt', label: 'Powered by Groq & Gemini' },
]

export default function TrustBanner() {
  return (
    <section id="security" className="max-w-7xl mx-auto px-8 mb-32 border-t border-outline-variant/10 pt-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        {badges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-2 font-headline font-black text-xl">
            <span className="material-symbols-outlined text-primary">{badge.icon}</span>
            {badge.label}
          </div>
        ))}
      </div>
    </section>
  )
}
