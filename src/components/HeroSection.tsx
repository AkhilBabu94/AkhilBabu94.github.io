import { useState } from 'react'
import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png'

function Portrait() {
  const [imgFailed, setImgFailed] = useState(false)

  if (!imgFailed) {
    return (
      <img
        src={PORTRAIT_URL}
        alt="Akhil Babu"
        className="h-full w-auto object-contain mx-auto"
        onError={() => setImgFailed(true)}
      />
    )
  }

  return (
    <div
      className="rounded-full flex items-center justify-center mx-auto"
      style={{
        width: 'clamp(180px, 22vw, 320px)',
        height: 'clamp(180px, 22vw, 320px)',
        background: 'linear-gradient(135deg, #1a0a2e 0%, #3b0d6e 40%, #6b21a8 70%, #be4c00 100%)',
        boxShadow: '0 0 80px rgba(118,33,177,0.4), 0 0 160px rgba(118,33,177,0.15)',
      }}
    >
      <span
        className="font-black uppercase"
        style={{
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          background: 'linear-gradient(180deg, #ffffff 0%, #BBCCD7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        AB
      </span>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>

      {/* Subtle background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(187,204,215,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Central glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <nav className="relative z-20 flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider
                text-sm md:text-lg lg:text-[1.4rem]
                transition-opacity duration-200 hover:opacity-70"
            >
              {item}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero heading — smaller so portrait fits below */}
      <div className="overflow-hidden relative z-20">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center mt-4"
            style={{ fontSize: 'clamp(2.8rem, 8.5vw, 9rem)' }}
          >
            Hi, i&apos;m akhil
          </h1>
        </FadeIn>
      </div>

      {/* Portrait — in normal flow, fills remaining space */}
      <div className="flex-1 flex items-center justify-center relative z-10 py-4 overflow-hidden">
        <FadeIn delay={0.5} y={30} className="h-full flex items-center justify-center">
          <Magnet
            padding={80}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="h-full flex items-center justify-center"
          >
            <div
              className="h-full flex items-center justify-center"
              style={{ maxWidth: 'clamp(200px, 28vw, 420px)' }}
            >
              <Portrait />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            9+ years engineering quality at scale — automation, testing &amp; SDET
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
