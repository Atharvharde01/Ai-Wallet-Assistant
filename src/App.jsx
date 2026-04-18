import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import DemoPreview from './components/DemoPreview'
import TrustBanner from './components/TrustBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      {/* Animated Gradient Orbs Background */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <Navbar />

      <main className="pt-32">
        <Hero />
        <Features />
        <HowItWorks />
        <DemoPreview />
        <TrustBanner />
      </main>

      <Footer />
    </div>
  )
}

export default App
