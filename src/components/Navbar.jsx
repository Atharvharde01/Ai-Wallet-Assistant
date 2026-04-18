export default function Navbar({ onOpenDashboard }) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b" style={{ background: 'var(--navbar-bg)', borderColor: 'var(--navbar-border)' }}>
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto font-body text-sm tracking-wide">
        <div className="font-headline text-xl font-bold tracking-tighter text-on-surface">
          ETHEREAL VAULT
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a className="text-primary font-bold border-b-2 border-primary/50 pb-1" href="#features">
            Features
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#how-it-works">
            How it Works
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">

          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-200" href="#demo">
            Demo
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="btn-primary px-5 py-2.5 rounded-xl text-sm" onClick={onOpenDashboard}>
            Connect Wallet
          </button>
          <button className="hidden lg:block px-5 py-2.5 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary/5 transition-all duration-200" onClick={onOpenDashboard}>
            Try Demo
          </button>
        </div>
      </div>
    </nav>
  )
}
