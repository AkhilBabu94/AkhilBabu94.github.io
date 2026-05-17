import FadeIn from './FadeIn'

const EXPERIENCES = [
  {
    title: 'Senior Automation Test Developer',
    company: 'Morgan Stanley',
    period: 'Aug 2022 – Present',
    location: 'Bengaluru, Karnataka, India',
    highlights: [
      'Designed and developed an automation framework from scratch for functional, performance, memory leak, UI testing and release automation — ramp-up time under 4 hours, enabling even non-technical folks to write automation.',
      'Conduct in-sprint functional testing for timely defect identification, collaborating closely with developers and stakeholders to validate feature functionality within agile timelines.',
      'Develop, maintain and execute Cypress (JavaScript) regression test pack to ensure system stability, identifying issues early and updating test cases with every new feature.',
      'Divided the existing automation pack into 4 parallel suites, cutting execution time from 8 hours to 2 hours.',
      'Implemented API-level test data fetching, eliminating manual data feeding and significantly improving efficiency.',
    ],
  },
  {
    title: 'Consultant',
    company: 'Genpact Headstrong (Client: Goldman Sachs)',
    period: 'Apr 2021 – Aug 2022',
    location: 'Bangalore, India',
    highlights: [
      'Designed automation test cases using Java 8, Selenium with Serenity Framework.',
      'Built API automation using Serenity with JBehave and Rest Assured — cut execution time from over 2 hours to under 30 minutes.',
      'Introduced end-to-end automation with Java 8 features and Excel integration, reducing testing time by 90%.',
      'Trained multiple Genpact employees for client projects, increasing selection rate by 100%.',
      'Set up and maintained QA environment servers for 30 different services.',
    ],
  },
  {
    title: 'Associate Consultant',
    company: 'Capgemini India (Client: Morgan Stanley)',
    period: 'Oct 2016 – Apr 2021',
    location: 'Pune, India · Aguascalientes, Mexico (Onsite)',
    highlights: [
      'Built automation framework using BDD (Cucumber, Gherkin, Java 8) — reduced execution time by 75% across 600+ test cases.',
      'Worked on Rest API services with Rest Assured and performance testing with HP LoadRunner.',
      'Executed automated smoke and regression suites with 500+ test cases in UFT.',
      'Completed onsite testing in Mexico, delivering 7-module application to production impacting 1000s of users.',
      'Mentored 5–6 team members across domain, process and tooling; authored 200+ test scenarios in HP-ALM.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn y={40} className="mb-16 sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px hidden sm:block"
          style={{ background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)', left: '11px' }}
        />

        <div className="flex flex-col gap-16 sm:gap-20">
          {EXPERIENCES.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.12} y={40}>
              <div className="flex gap-6 sm:gap-10">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0" style={{ marginTop: 6 }}>
                  <div
                    className="w-6 h-6 rounded-full border-2 border-[#BBCCD7] flex-shrink-0"
                    style={{ background: '#0C0C0C', boxShadow: '0 0 0 4px rgba(187,204,215,0.12)' }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-[#D7E2EA] font-bold uppercase tracking-wide"
                        style={{ fontSize: 'clamp(1rem, 2.2vw, 1.5rem)' }}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className="font-medium tracking-wide mt-0.5"
                        style={{
                          fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                          background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p
                        className="text-[#D7E2EA]/60 font-light uppercase tracking-widest"
                        style={{ fontSize: 'clamp(0.65rem, 1.1vw, 0.85rem)' }}
                      >
                        {exp.period}
                      </p>
                      <p
                        className="text-[#D7E2EA]/40 font-light"
                        style={{ fontSize: 'clamp(0.6rem, 1vw, 0.75rem)' }}
                      >
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="w-full h-px mb-4"
                    style={{ background: 'rgba(215,226,234,0.1)' }}
                  />

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span
                          className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                          style={{ background: '#BBCCD7' }}
                        />
                        <p
                          className="text-[#D7E2EA]/70 font-light leading-relaxed"
                          style={{ fontSize: 'clamp(0.82rem, 1.4vw, 1rem)' }}
                        >
                          {h}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
