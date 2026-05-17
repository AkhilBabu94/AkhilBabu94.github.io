import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'

const ABOUT_TEXT =
  "With more than nine years of experience as an SDET engineer, i specialise in building automation frameworks from scratch, API testing, and driving quality across agile teams. I enjoy solving complex testing challenges and enabling teams to ship faster with confidence. Let's build something rock-solid together!"

const STATS = [
  { value: '9+', label: 'Years Experience' },
  { value: '600+', label: 'Test Cases Built' },
  { value: '90%', label: 'Time Saved via Automation' },
  { value: '3', label: 'Global Clients' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center
        px-5 sm:px-8 md:px-10 py-24"
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(118,33,177,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 sm:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[600px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Stats row */}
        <FadeIn delay={0.2} y={30} className="w-full max-w-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: 'rgba(215,226,234,0.1)' }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center py-8 px-4 gap-1"
                style={{ background: '#0C0C0C' }}
              >
                <span
                  className="font-black hero-heading leading-none"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[#D7E2EA]/60 font-light uppercase tracking-widest text-center"
                  style={{ fontSize: 'clamp(0.6rem, 1vw, 0.75rem)' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
