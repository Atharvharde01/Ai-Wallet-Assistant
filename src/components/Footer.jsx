const footerLinks = [
  { label: 'GitHub', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-12 px-8 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto font-body text-xs uppercase tracking-widest">
        <div className="font-headline font-black text-on-surface text-lg">
          ETHEREAL VAULT
        </div>

        <div className="flex items-center gap-8 text-on-surface-variant">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className="hover:text-primary underline-offset-4 hover:underline transition-colors duration-200"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-on-surface-variant">
          © 2024 Ethereal Vault. Powered by Groq &amp; Gemini.
        </div>
      </div>
    </footer>
  )
}
