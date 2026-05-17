import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import LiveProjectButton from './LiveProjectButton'

const PROJECTS = [
  {
    num: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
]

const TOTAL = PROJECTS.length

function ProjectCard({
  project,
  index,
  progress,
}: {
  project: (typeof PROJECTS)[0]
  index: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03
  const scale = useTransform(progress, [0, 1], [1, targetScale])

  const borderRadius = 'clamp(30px, 5vw, 60px)'

  return (
    <div className="h-[85vh] flex items-start justify-center" style={{ paddingTop: index * 28 }}>
      <motion.div
        className="sticky top-24 md:top-32 w-full border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
        style={{
          scale,
          backgroundColor: '#0C0C0C',
          borderRadius,
          transformOrigin: 'top center',
        }}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <span
            className="font-black text-[#D7E2EA] leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
          >
            {project.num}
          </span>
          <div className="flex flex-col">
            <span
              className="text-[#D7E2EA] font-light uppercase tracking-widest"
              style={{ fontSize: 'clamp(0.6rem, 1.2vw, 1rem)', opacity: 0.6 }}
            >
              {project.category}
            </span>
            <span
              className="text-[#D7E2EA] font-medium uppercase"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
            >
              {project.name}
            </span>
          </div>
          <div className="ml-auto">
            <LiveProjectButton />
          </div>
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left col — 40% — two stacked images */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.col1[0]}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover"
              style={{
                height: 'clamp(130px, 16vw, 230px)',
                borderRadius,
              }}
            />
            <img
              src={project.col1[1]}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover"
              style={{
                height: 'clamp(160px, 22vw, 340px)',
                borderRadius,
              }}
            />
          </div>

          {/* Right col — 60% — tall single image */}
          <div style={{ width: '60%' }}>
            <img
              src={project.col2}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover"
              style={{
                height: 'clamp(310px, 40vw, 590px)',
                borderRadius,
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      ref={containerRef}
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 pt-20 pb-20"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn y={40} className="mb-16 sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {PROJECTS.map((project, i) => (
        <ProjectCard
          key={project.num}
          project={project}
          index={i}
          progress={scrollYProgress}
        />
      ))}
    </section>
  )
}
