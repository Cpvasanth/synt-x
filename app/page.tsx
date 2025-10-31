import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Service from "./component/Service";
import VoiceOfClients from "./component/VoiceOfClients";
import ServicesSection from "./component/ServicesSection";
import FaqSection from "./component/FaqSection";

export default function Home() {
  return (
    <div className="mt-12">
      <main className="flex flex-col items-center">
        {/* testing hero section */}
        <Hero />
        <Projects />
        <Service />
        <VoiceOfClients />
        <ServicesSection />
        <FaqSection />
      </main>
    </div>
  );
}
