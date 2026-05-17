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
    <div className="relative flex items-center justify-center mx-auto">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(109,40,217,0.5) 0%, transparent 70%)',
          filter: 'blur(28px)',
          transform: 'scale(1.4)',
        }}
      />
      {/* Circle */}
      <div
        className="relative rounded-full flex flex-col items-center justify-center gap-1"
        style={{
          width: 'clamp(180px, 22vw, 300px)',
          height: 'clamp(180px, 22vw, 300px)',
          background: 'linear-gradient(145deg, #1a0a2e 0%, #3b0d6e 35%, #7c3aed 70%, #ea580c 100%)',
          border: '1.5px solid rgba(187,204,215,0.2)',
          boxShadow: '0 0 60px rgba(124,58,237,0.45), inset 0 0 30px rgba(0,0,0,0.3)',
        }}
      >
        <span
          className="font-black leading-none"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            background: 'linear-gradient(160deg, #fff 20%, #BBCCD7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AB
        </span>
        {/* Happy wave */}
        <span style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', lineHeight: 1 }}>👋</span>
      </div>

      {/* Floating SDET badge */}
      <div
        className="float-badge absolute z-10"
        style={{ top: '4%', right: '-8%' }}
      >
        <div
          className="px-3 py-1 rounded-full text-white font-medium uppercase tracking-widest whitespace-nowrap"
          style={{
            fontSize: 'clamp(0.5rem, 0.85vw, 0.7rem)',
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 4px 16px rgba(181,1,167,0.35)',
          }}
        >
          SDET Engineer
        </div>
      </div>

      {/* Morgan Stanley badge */}
      <div
        className="absolute z-10"
        style={{
          bottom: '6%',
          left: '-10%',
          animation: 'float-badge 3.5s ease-in-out infinite',
          animationDelay: '1.2s',
        }}
      >
        <div
          className="px-3 py-1 rounded-full font-medium uppercase tracking-widest whitespace-nowrap"
          style={{
            fontSize: 'clamp(0.45rem, 0.75vw, 0.65rem)',
            background: 'rgba(12,12,12,0.9)',
            border: '1px solid rgba(187,204,215,0.2)',
            color: '#BBCCD7',
            backdropFilter: 'blur(10px)',
          }}
        >
          @ Morgan Stanley
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>

      {/* Background dot grid */}
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
          background: 'radial-gradient(circle, rgba(109,40,217,0.09) 0%, transparent 70%)',
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

      {/* Heading */}
      <div className="overflow-hidden relative z-20 mt-4">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center"
            style={{ fontSize: 'clamp(2.8rem, 8.5vw, 9rem)' }}
          >
            Hi, i&apos;m akhil
          </h1>
        </FadeIn>
      </div>

      {/* Subtitle — right below the heading */}
      <FadeIn delay={0.28} y={20} className="relative z-20 text-center mt-3 px-6">
        <p
          className="text-[#D7E2EA] font-light uppercase tracking-widest leading-snug mx-auto"
          style={{ fontSize: 'clamp(0.65rem, 1.3vw, 1.1rem)', maxWidth: 480 }}
        >
          9+ years engineering quality at scale — automation, testing &amp; SDET
        </p>
      </FadeIn>

      {/* Portrait — fills remaining space */}
      <div className="flex-1 flex items-center justify-center relative z-10 py-3 overflow-hidden">
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
              style={{ maxWidth: 'clamp(200px, 26vw, 400px)' }}
            >
              <Portrait />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar — contact only */}
      <div className="relative z-20 flex items-end justify-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.6} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
