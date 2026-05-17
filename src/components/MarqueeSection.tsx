import { useEffect, useRef, useState } from 'react'

const ROW1 = [
  { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
  { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Rest Assured', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg' },
  { name: 'TestNG', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Maven', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
]

const ROW2 = [
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'JIRA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Cucumber', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Splunk', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/splunk/splunk-original-wordmark.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Bitbucket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
]

// Triple each row for seamless infinite scroll
const R1 = [...ROW1, ...ROW1, ...ROW1]
const R2 = [...ROW2, ...ROW2, ...ROW2]

function ToolCard({ name, icon }: { name: string; icon: string }) {
  const [iconFailed, setIconFailed] = useState(false)
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl"
      style={{
        background: 'rgba(215,226,234,0.04)',
        border: '1px solid rgba(215,226,234,0.1)',
        minWidth: 160,
      }}
    >
      {!iconFailed ? (
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 object-contain flex-shrink-0"
          onError={() => setIconFailed(true)}
          style={{ filter: 'brightness(0.9)' }}
        />
      ) : (
        <div
          className="w-8 h-8 rounded flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #646973, #BBCCD7)' }}
        />
      )}
      <span
        className="text-[#D7E2EA] font-medium uppercase tracking-wider whitespace-nowrap"
        style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
      >
        {name}
      </span>
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function onScroll() {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.25
      setOffset(raw)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-16 overflow-hidden"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      {/* Label */}
      <p
        className="text-center text-[#D7E2EA]/40 font-light uppercase tracking-[0.4em] mb-12"
        style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)' }}
      >
        Tools &amp; Technologies
      </p>

      {/* Row 1 — scrolls right */}
      <div
        className="flex gap-4 mb-4"
        style={{
          transform: `translateX(${offset - 300}px)`,
          willChange: 'transform',
        }}
      >
        {R1.map((tool, i) => <ToolCard key={i} {...tool} />)}
      </div>

      {/* Row 2 — scrolls left */}
      <div
        className="flex gap-4"
        style={{
          transform: `translateX(${-(offset - 300)}px)`,
          willChange: 'transform',
        }}
      >
        {R2.map((tool, i) => <ToolCard key={i} {...tool} />)}
      </div>
    </section>
  )
}
