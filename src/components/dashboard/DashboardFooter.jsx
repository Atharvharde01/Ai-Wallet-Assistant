const footerLinks = [
  { label: 'GitHub', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

export default function DashboardFooter() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto py-12 px-8">
        <span className="font-headline font-black text-on-surface text-lg">ETHEREAL VAULT</span>

        <div className="flex flex-wrap justify-center gap-8 font-label text-xs uppercase tracking-widest text-on-surface-variant">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className="hover:text-primary underline-offset-4 hover:underline transition-all duration-200"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
          © 2024 Ethereal Vault. Powered by Groq &amp; Gemini.
        </p>
      </div>
    </footer>
  )
}
