import { useState, useRef, useEffect } from 'react'

const initialMessages = [
  {
    id: 1,
    role: 'user',
    text: 'What happens if I sign this transaction?',
    time: '12:44 PM',
  },
  {
    id: 2,
    role: 'assistant',
    text: 'If you sign, the contract gains <strong>unlimited spending allowance</strong> for your USDT. Historical data shows this contract address is associated with 14 documented rug pulls in the last 48 hours. I strongly advise against signing.',
    time: 'AI Assistant • Just now',
  },
]

export default function ChatAssistant() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg = {
      id: Date.now(),
      role: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        role: 'assistant',
        text: 'I\'m analyzing your query. Based on on-chain data and known contract patterns, I\'ll have a detailed response shortly. Stay safe — never sign transactions you don\'t fully understand.',
        time: 'AI Assistant • Just now',
      }
      setMessages((prev) => [...prev, aiMsg])
    }, 1200)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <aside className="lg:col-span-2 h-full sticky top-28">
      <div className="glass rounded-xl h-[calc(100vh-160px)] flex flex-col shadow-xl overflow-hidden"
        style={{ boxShadow: '0 0 20px rgba(20, 184, 166, 0.15)' }}>

        {/* Chat Header */}
        <div className="p-6 border-b border-outline-variant/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--gradient-primary)' }}>
                <span className="material-symbols-outlined text-white">auto_awesome</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-success border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h3 className="font-headline font-bold text-sm">Vault Assistant</h3>
              <p className="text-[10px] uppercase font-bold text-primary tracking-widest">Always Active</p>
            </div>
          </div>
          <button className="text-outline hover:text-primary transition-colors duration-200">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 chat-scroll">
          {messages.map((msg) =>
            msg.role === 'user' ? (
              <div key={msg.id} className="flex flex-col items-end gap-2 animate-fade-in">
                <div className="p-4 rounded-2xl rounded-tr-none text-sm max-w-[85%] shadow-sm text-white"
                  style={{ background: 'var(--gradient-primary)' }}>
                  {msg.text}
                </div>
                <span className="text-[10px] font-bold text-outline mr-1">{msg.time}</span>
              </div>
            ) : (
              <div key={msg.id} className="flex flex-col items-start gap-2 animate-fade-in">
                <div className="flex gap-2 items-start">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant/10 p-4 rounded-2xl rounded-tl-none text-sm max-w-[85%] shadow-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                </div>
                <span className="text-[10px] font-bold text-outline ml-10">{msg.time}</span>
              </div>
            )
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-6 bg-surface-container-lowest/50 backdrop-blur-sm border-t border-outline-variant/10">
          <div className="relative flex items-center">
            <input
              className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3.5 pr-12 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              placeholder="Ask: What happens if I sign this?"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="absolute right-2 w-10 h-10 rounded-lg flex items-center justify-center text-white hover:brightness-110 transition-colors"
              style={{ background: 'var(--gradient-primary)' }}
              onClick={handleSend}
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </div>
          <p className="mt-3 text-[10px] text-center text-outline font-medium tracking-wide">
            AI-driven simulation may not capture 100% of risks.
          </p>
        </div>
      </div>
    </aside>
  )
}
