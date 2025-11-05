import {
  FAQ,
  Featured,
  FinancilaFreedom,
  HeroSection,
  ProgramsSection,
  Registrations,
} from '@/components';
import About from '@/components/UI/About';
import HasabTechEducation from '@/components/UI/HasabTechEducation';
import MeetTheTeam from '@/components/UI/MeetTheTeam';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <About />
      <HasabTechEducation />
      <ProgramsSection />
      <FinancilaFreedom />
      <Registrations />
      <MeetTheTeam />
      <FAQ />
      {/* <JoinCommunity /> */}
    </main>
  );
}
