import './index.css'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <div style={{ backgroundColor: '#0C0C0C', overflowX: 'clip', position: 'relative' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  )
}

export default App
