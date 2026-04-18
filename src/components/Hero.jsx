import TransactionCard from './TransactionCard'

const avatars = [
  {
    alt: 'close up profile photo of a smiling professional woman with glowing skin',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqieJreOVhVOwYcX5X4DzRWBWQfaGkJ1-jHDGiBx1oMnU20eKEkAZVnRmfGZ-Xlm4hiumumavwzdWJzmjbVyli6amDsc2FiVJJl0nI3ei6L8b72oS-WNWKNINkr7mlYFjmngeTaG600ep8dmKcNOPAfRVQmjGkh0vDi-3S3qaaDPczXdU1EFL2VucpHhbKpRntsIJBt4kfDV_D2pHzrea3VXF6EqaLEc6l04I4MlyQOWG0vplYreGP73SUXnAo3JzlSQpiUYqV8cU',
  },
  {
    alt: 'close up profile photo of a modern man in a creative studio environment',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuEvmsKPISu1dRm5amcEU-SWmJxxbF3d8evQ4jNeYdNasV1JCgORfPL2XJbnyLZsuUWWiLb8R4M7Dd3el59hSkrTuWfdmYK3H6Of9o6L5jGloA9uSCvFVup6yRMeOiaTbsTlGixibAGYRypSTTOmTSyeCXDcXWGJzMgsEDRa8hz5t3JvymVAcyjD0g7OuVv5RnYhQLPKTAMP49IHULBDqsMh7nPXygh-_zg_b52ezE6ZvBSxAqLQhKK4riVqBKl1VpwxlsxZFmUzU',
  },
  {
    alt: 'professional corporate headshot of a woman with a confident gaze',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAL3nF-as11nY9WGdCgNvS1bW2iv1aAyBsmpk4hdu6Og-VylHJK48qaRTIlmU6MnHj-7WXp09wqNnRhgiKtaoCF3YQZTAkRyN9swz_32A3ymOPdJBqDGZuIj-KfK2Y-hx1H9W_vs_UHfo01CRp-pjKB7714iwRwO74cMQfZg92mXlVJaib4E3lb-Q4SY-IhYNlE4ZVe4QcqIFLLcO6NAO-ycWN1CrQfrV0PPO8sHGAYNZ2SDp2zlC0i96R9V_Dp3Uzyf1D55z2LN8',
  },
]

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center mb-32">
      <div>
        <span className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-xs font-bold tracking-widest uppercase mb-6">
          AI Safety Protocol v2.4
        </span>

        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Understand Every Transaction{' '}
          <span className="gradient-text">Before You Sign</span>
        </h1>

        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
          The world&apos;s first AI-powered wallet assistant that explains, warns, and
          protects you from risky blockchain actions using real-time contract analysis.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="btn-primary px-8 py-4 rounded-xl text-lg">
            Connect Wallet
          </button>
          <button className="px-8 py-4 bg-surface-container-low border border-outline-variant/20 text-on-surface rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all duration-200 card-hover">
            Try Demo
          </button>
        </div>

        <div className="mt-12 flex items-center gap-4 text-sm text-on-surface-variant font-medium">
          <span className="flex -space-x-2">
            {avatars.map((avatar, i) => (
              <img
                key={i}
                className="w-8 h-8 rounded-full border-2 border-surface"
                alt={avatar.alt}
                src={avatar.src}
              />
            ))}
          </span>
          <span>Trusted by 10k+ crypto enthusiasts</span>
        </div>
      </div>

      {/* Hero Visual: Glassmorphic Transaction Card */}
      <TransactionCard />
    </section>
  )
}
