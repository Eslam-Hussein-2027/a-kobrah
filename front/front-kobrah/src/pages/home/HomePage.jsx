import ClaimSteps from './ClaimSteps'
import NetworkHero from './network/NetworkHero'
import ProofSection from './ProofSection'
import WhyUs from './WhyUs'

export default function HomePage() {
  return (
    <>
      <NetworkHero />
      <ProofSection />
      <WhyUs />
      <ClaimSteps />
    </>
  )
}
