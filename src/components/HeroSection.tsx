import { motion } from 'framer-motion'
import ContactButton from './ContactButton'

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Contact']
const SKILLS = ['Selenium', 'Cypress', 'Java', 'Rest Assured', 'Jenkins', 'AWS', 'BDD', 'SQL']

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
})

function Avatar() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 'clamp(200px, 26vw, 340px)', height: 'clamp(200px, 26vw, 340px)' }}
    >
      {/* Pulse rings */}
      <div className="ring" />
      <div className="ring" />
      <div className="ring" />

      {/* Outer orbit */}
      <div
        className="orbit-ring"
        style={{ width: '140%', height: '140%', top: '-20%', left: '-20%', animation: 'spin-slow 18s linear infinite' }}
      >
        <div className="orbit-dot" />
      </div>

      {/* Inner orbit */}
      <div
        className="orbit-ring"
        style={{ width: '116%', height: '116%', top: '-8%', left: '-8%', animation: 'spin-slow-rev 12s linear infinite', borderColor: 'rgba(190,76,0,0.25)' }}
      >
        <div className="orbit-dot" style={{ background: '#be4c00', boxShadow: '0 0 8px #be4c00' }} />
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.4) 0%, transparent 70%)', filter: 'blur(24px)', transform: 'scale(1.5)' }}
      />

      {/* Avatar */}
      <div
        className="relative z-10 rounded-full flex items-center justify-center w-full h-full"
        style={{
          background: 'linear-gradient(145deg, #1a0a2e 0%, #3b0d6e 40%, #6b21a8 75%, #be4c00 100%)',
          border: '1.5px solid rgba(187,204,215,0.2)',
          boxShadow: '0 0 60px rgba(109,40,217,0.5), inset 0 0 40px rgba(0,0,0,0.4)',
        }}
      >
        <span
          className="font-black"
          style={{
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            background: 'linear-gradient(160deg, #fff 30%, #BBCCD7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AB
        </span>
      </div>

      {/* SDET badge */}
      <div className="float-badge absolute z-20" style={{ top: '-4%', right: '-14%' }}>
        <div
          className="px-3 py-1.5 rounded-full text-white font-medium uppercase tracking-widest whitespace-nowrap"
          style={{
            fontSize: 'clamp(0.5rem, 0.85vw, 0.72rem)',
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 4px 20px rgba(181,1,167,0.35)',
          }}
        >
          SDET Engineer
        </div>
      </div>

      {/* Company badge */}
      <div
        className="absolute z-20"
        style={{ bottom: '4%', left: '-16%', animation: 'float-badge 3.5s ease-in-out infinite', animationDelay: '1.5s' }}
      >
        <div
          className="px-3 py-1.5 rounded-full font-medium uppercase tracking-widest whitespace-nowrap"
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
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Background grid dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(187,204,215,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Center glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw', height: '70vw',
          background: 'radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Navbar */}
      <motion.nav
        {...anim(0)}
        className="relative z-20 flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {item}
          </a>
        ))}
      </motion.nav>

      {/* Heading */}
      <div className="overflow-hidden relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center
            text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
            mt-4 sm:mt-2 md:-mt-4"
        >
          Hi, i&apos;m akhil
        </motion.h1>
      </div>

      {/* Avatar centred */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          <Avatar />
        </motion.div>
      </div>

      {/* Skills ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="relative z-20 flex flex-wrap justify-center gap-2 px-6 mb-4"
      >
        {SKILLS.map((s) => (
          <span
            key={s}
            className="px-3 py-1 rounded-full font-light uppercase tracking-widest"
            style={{
              fontSize: 'clamp(0.5rem, 0.85vw, 0.7rem)',
              background: 'rgba(187,204,215,0.06)',
              border: '1px solid rgba(187,204,215,0.12)',
              color: '#D7E2EA',
            }}
          >
            {s}
          </span>
        ))}
      </motion.div>

      {/* Bottom bar */}
      <div className="relative z-20 flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <motion.p
          {...anim(0.35)}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          5+ years engineering quality at scale — automation, testing &amp; SDET
        </motion.p>

        <motion.div {...anim(0.5)}>
          <ContactButton />
        </motion.div>
      </div>
    </section>
  )
}
