import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'

function InitialsAvatar() {
  return (
    <div
      className="w-full h-full rounded-full flex items-center justify-center select-none"
      style={{
        background: 'linear-gradient(135deg, #1a0a2e 0%, #3b0d6e 40%, #6b21a8 70%, #be4c00 100%)',
        boxShadow: '0 0 80px rgba(118,33,177,0.4), 0 0 160px rgba(118,33,177,0.15)',
      }}
    >
      <span
        className="font-black uppercase tracking-tighter"
        style={{
          fontSize: 'clamp(4rem, 10vw, 10rem)',
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
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
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

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center
              text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
              mt-6 sm:mt-4 md:-mt-5"
          >
            Hi, i&apos;m akhil
          </h1>
        </FadeIn>
      </div>

      {/* Avatar — centered */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-4"
      >
        <Magnet
          padding={60}
          strength={4}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div
            className="rounded-full overflow-hidden border-2 border-[#D7E2EA]/20"
            style={{
              width: 'clamp(160px, 22vw, 320px)',
              height: 'clamp(160px, 22vw, 320px)',
            }}
          >
            <InitialsAvatar />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex-1 flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            5+ years engineering quality at scale — automation, testing &amp; SDET
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
