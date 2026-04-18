const steps = [
  {
    icon: 'link',
    borderColor: 'border-primary-light',
    title: '1. Connect',
    description: 'Link your favorite wallet with our secure extension or mobile app.',
  },
  {
    icon: 'ads_click',
    borderColor: 'border-accent',
    title: '2. Initiate',
    description: 'Start any transaction on any dApp exactly as you normally would.',
  },
  {
    icon: 'psychology',
    borderColor: 'border-secondary',
    title: '3. Analyze',
    description: 'Ethereal AI scans the contract code and history in milliseconds.',
  },
  {
    icon: 'verified',
    borderColor: 'border-primary',
    title: '4. Decide',
    description: 'Review the clear explanation and sign with total peace of mind.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface-container-low/40 py-24 mb-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">
              Your Intelligent <span className="gradient-text">Guardrail</span>
            </h2>
            <p className="text-on-surface-variant">
              Four simple steps to absolute transaction confidence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connecting Gradient Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] z-0" style={{ background: 'var(--gradient-primary)' }} />

          {steps.map((step) => (
            <div key={step.title} className="relative z-10">
              <div
                className={`w-20 h-20 rounded-full bg-surface border-4 ${step.borderColor} flex items-center justify-center mb-6`}
                style={{ boxShadow: 'var(--shadow-lg)' }}
              >
                <span className="material-symbols-outlined text-primary text-3xl">
                  {step.icon}
                </span>
              </div>
              <h4 className="font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-sm text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
