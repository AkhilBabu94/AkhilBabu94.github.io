import FadeIn from './FadeIn'

const SERVICES = [
  {
    num: '01',
    name: 'Automation Framework Design',
    desc: 'Building scalable test automation frameworks from scratch — BDD, Selenium, Cypress, Rest Assured — with ramp-up times under 4 hours, enabling even non-technical team members to contribute.',
  },
  {
    num: '02',
    name: 'API Test Automation',
    desc: 'End-to-end API testing using Rest Assured, Postman and Serenity — validating contracts, performance and data integrity across microservices and distributed systems.',
  },
  {
    num: '03',
    name: 'Performance & Load Testing',
    desc: 'Identifying bottlenecks before production using HP LoadRunner and custom performance suites — ensuring systems scale reliably under real-world conditions.',
  },
  {
    num: '04',
    name: 'CI/CD Test Integration',
    desc: 'Embedding test suites into Jenkins, GitLab CI and GitHub Actions pipelines for continuous quality gates — catching regressions early and enabling faster, confident releases.',
  },
  {
    num: '05',
    name: 'Agile QA Consulting',
    desc: 'In-sprint functional testing, defect triage and stakeholder collaboration within agile timelines — ensuring product quality aligns with sprint goals and release schedules.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C]
            mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          What I Do
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10
                py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {s.num}
              </span>
              <div className="flex flex-col justify-center pt-2 sm:pt-3">
                <p
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </p>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl mt-1"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
