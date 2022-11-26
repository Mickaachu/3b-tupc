import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import AboutContent from "../components/AboutContent";
import CallToAction from "../components/CTA";

export default function TUPC() {
  return (
    <div>
      <Hero />
      <OurVision />
      <OurMission />
      <AboutContent/>
      <CallToAction/>
    </div>
  );
}
