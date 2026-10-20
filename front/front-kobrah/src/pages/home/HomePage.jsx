import AboutPreview from './AboutPreview'
import ClaimSteps from './ClaimSteps'
import HeroSection from './HeroSection'
import QuickServices from './QuickServices'
import ServicesTabs from './ServicesTabs'
import StatsBand from './StatsBand'
import WhyUs from './WhyUs'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickServices />
      <AboutPreview />
      <ServicesTabs />
      <StatsBand />
      <WhyUs />
      <ClaimSteps />
    </>
  )
}
