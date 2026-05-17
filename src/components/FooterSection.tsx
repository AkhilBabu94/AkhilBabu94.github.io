import { Mail, ExternalLink } from 'lucide-react'
import FadeIn from './FadeIn'

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-16 sm:py-20
        border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <FadeIn y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2rem, 8vw, 80px)' }}
          >
            Let&apos;s Work Together
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <a
              href="mailto:akhilbabu94@gmail.com"
              className="flex items-center gap-2 text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200
                font-medium tracking-wide uppercase text-sm sm:text-base"
            >
              <Mail size={18} />
              akhilbabu94@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-babu-09340285/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200
                font-medium tracking-wide uppercase text-sm sm:text-base"
            >
              <ExternalLink size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/AkhilBabu94"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200
                font-medium tracking-wide uppercase text-sm sm:text-base"
            >
              <ExternalLink size={18} />
              GitHub
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p
            className="text-[#D7E2EA]/40 font-light uppercase tracking-widest text-xs sm:text-sm text-center"
          >
            © 2026 Akhil Babu · SDET Engineer
          </p>
        </FadeIn>
      </div>
    </footer>
  )
}
