import {
  FAQ,
  Featured,
  FinancilaFreedom,
  HeroSection,
  ProgramsSection,
  Registrations,
} from '@/components';
import About from '@/components/UI/About';
import Contribute from '@/components/UI/Contribute';
import HasabTechEducation from '@/components/UI/HasabTechEducation';
import MeetTheTeam from '@/components/UI/MeetTheTeam';
import ResourcesSection from '@/components/UI/Resources';
import ServicesSection from '@/components/UI/Services';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <About />
      <ServicesSection />
      <HasabTechEducation />
      <ProgramsSection />
      <FinancilaFreedom />
      <Registrations />
      <ResourcesSection />
      <Contribute />
      <MeetTheTeam />
      <FAQ />
      {/* <JoinCommunity /> */}
    </main>
  );
}
