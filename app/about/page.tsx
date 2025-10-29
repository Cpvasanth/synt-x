import Image from "next/image";
import ServicesSection from "../component/ServicesSection";
import FaqSection from "../component/FaqSection";

function AboutPage() {
  return (
    <main className="bg-black text-gray-200 min-h-screen py-20 px-6">
      <section className="container mx-auto max-w-5xl flex flex-col gap-10 mt-20">
        
        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-bold text-center">
          About <span className="text-[#adbd47]">Us</span>
        </h1>

        {/* Description */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between text-lg leading-relaxed text-gray-300">
          <p>
            Founded in 2025, <span className="font-semibold text-white">Syntx Tech</span> specializes in crafting high-performance digital experiences for brands aiming to lead tomorrow’s markets. The team combines multidisciplinary expertise in UI engineering, digital product strategy, web performance optimization, and visual identity development. Every project begins with a detailed discovery phase to understand business goals, audience behavior, and the competitive landscape.
          </p>

          <p>
            A dedicated designer and a technical lead guide each engagement, ensuring that every interface choice supports usability, conversion, and long-term scalability. Through a refined blend of aesthetics, precision engineering, and strategic thinking, Syntx Tech transforms ambitious ideas into immersive web solutions that strengthen brand presence and drive measurable growth.
          </p>
        </div>

        {/* Team Section */}
        {/* <div className="pt-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center">
            Meet Our <span className="text-[#adbd47]">Team</span>
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-sm shadow-[#adbd47]/20 p-2">
            <Image
              src="/team/group.png"
              alt="Our Team"
              width={900}
              height={600}
              className="rounded-xl cover"
            />
          </div>
        </div> */}

        {/* Services Section */}
        <ServicesSection />
        {/* FAQ Section */}
        <FaqSection />

      </section>
    </main>
  );
}

export default AboutPage;
