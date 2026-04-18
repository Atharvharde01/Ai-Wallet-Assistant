import DashboardNavbar from '../components/dashboard/DashboardNavbar'
import DashboardFooter from '../components/dashboard/DashboardFooter'
import TransactionSimulator from '../components/dashboard/TransactionSimulator'
import AIInsight from '../components/dashboard/AIInsight'
import ChatAssistant from '../components/dashboard/ChatAssistant'

export default function Dashboard({ onBack }) {
  const handleAnalyze = ({ amount, txType, recipient }) => {
    console.log('Analyzing transaction:', { amount, txType, recipient })
    // TODO: wire up to your AI backend
  }

  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Background orbs */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <DashboardNavbar onBack={onBack} />

      <main className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left/Center: Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <TransactionSimulator onAnalyze={handleAnalyze} />
            <AIInsight />
          </div>

          {/* Right: AI Chat Panel */}
          <ChatAssistant />
        </div>
      </main>

      <DashboardFooter />
    </div>
  )
}
