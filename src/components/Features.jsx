const features = [
  {
    icon: 'translate',
    iconBg: 'bg-primary-container',
    iconColor: 'text-on-primary-container',
    glowColor: 'bg-primary/10',
    title: 'Transaction Explanation',
    description:
      'AI translates raw hex data and complex calls into simple, conversational human language.',
  },
  {
    icon: 'security',
    iconBg: 'bg-error-container',
    iconColor: 'text-on-error-container',
    glowColor: 'bg-error/10',
    title: 'Risk Detection',
    description:
      'Real-time alerts for honeypots, malicious approve() calls, and suspicious contract origins.',
  },
  {
    icon: 'forum',
    iconBg: 'bg-primary',
    iconColor: 'text-on-primary',
    glowColor: 'bg-accent/10',
    title: 'AI Assistant Chat',
    description:
      'Interactive Q&A sidebar. Ask your wallet anything about the transaction before you sign it.',
  },
  {
    icon: 'analytics',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
    glowColor: 'bg-secondary/10',
    title: 'Real-time Analysis',
    description:
      'Deep-scan analysis that simulates transaction results to predict your final balance change.',
  },
]

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-8 mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Master Your <span className="gradient-text">Web3 Security</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Powerful AI features designed to turn complex smart contracts into clear,
          actionable human language.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group bg-surface-container-low p-8 rounded-xxl hover:bg-surface-container-highest transition-all duration-300 relative overflow-hidden card-hover"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div
              className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <span
                className={`material-symbols-outlined ${feature.iconColor}`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {feature.icon}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {feature.description}
            </p>

            <div
              className={`absolute -bottom-4 -right-4 w-24 h-24 ${feature.glowColor} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
