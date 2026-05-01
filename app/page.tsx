import AsoebiSection from "./component/AsoebiSection";
import EventsSection from "./component/EventsSection";
import FooterSection from "./component/FooterSection";
import GiftSection from "./component/GiftSection";
import HeroSection from "./component/HeroSection";
import InvitationSection from "./component/InvitationSection";
import RsvpSection from "./component/RsvpSection";
import ScriptureSection from "./component/ScriptureSection";
import StorySection from "./component/StorySection";

export default function Home() {
  return (
    <main className="page-atmosphere relative overflow-hidden">
      <HeroSection />
      <InvitationSection />
      <StorySection />
      <ScriptureSection />
      <EventsSection />
      <AsoebiSection />
      <GiftSection />
      <RsvpSection />
      <FooterSection />
    </main>
  );
}
