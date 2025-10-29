import Image from "next/image";
import { PiQuotesFill } from "react-icons/pi";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager, TechHive",
    feedback:
      "They transformed our brand presence with stunning designs and an intuitive user experience. Truly exceptional work.",
    img: "/clients/sara.png"
  },
  {
    name: "Daniel Carter",
    role: "CEO, VisionWorks",
    feedback:
      "Their creative approach to logo and web identity directly boosted our engagement and conversions.",
    img: "/clients/client2.png"
  },
  {
    name: "Maya Fernandez",
    role: "Founder, UrbanLens",
    feedback:
      "The photography and AD shooting delivered captured our essence perfectly. Absolutely thrilled with the results.",
    img: "/clients/client3.png"
  }
];

function VoiceOfClients() {
  return (
    // OPTIMIZATION: Reduced padding for mobile (px-6) and vertical padding (py-16)
    <section className="w-full text-white py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
      
      {/* Title */}
      {/* OPTIMIZATION: Reduced title size and margin for mobile */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
          <span className="t">VOICE</span> OF OUR CLIENTS
        </h2>
      </div>

      {/* Infinite Scroll Testimonials */}
      {/* NOTE: Your external CSS for these classes must also be responsive. */}
      <div className="testimonial-track">
        <div className="testimonial-slide">
          {testimonials.concat(testimonials).map((t, i) => (
            <div
              key={i}
              // This card's width should be set in your CSS file
              className="testimonial-card" 
            >
              {/* OPTIMIZATION: Reduced icon size on mobile */}
              <PiQuotesFill className="text-yellow-300 text-4xl md:text-5xl mb-4" />
              
              {/* OPTIMIZATION: Reduced text size on mobile */}
              <p className="text-white/90 text-base md:text-lg leading-relaxed">{t.feedback}</p>

              {/* OPTIMIZATION: Reduced margin-top on mobile */}
              <div className="flex items-center mt-6 md:mt-8 gap-4">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={55}
                  height={55}
                  // OPTIMIZATION: Made avatar slightly smaller on mobile
                  className="rounded-full border border-black object-cover w-12 h-12 md:w-[55px] md:h-[55px]"
                />
                <div>
                  <p className="text-white font-semibold text-sm md:text-base">{t.name}</p>
                  <p className="text-white/60 text-xs md:text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo Footer */}
      {/* OPTIMIZATION: Reduced margin-top and gap for mobile */}
      <div className="flex flex-wrap justify-center mt-16 md:mt-20 gap-10 md:gap-16">
        {/* OPTIMIZATION: Made logos smaller on mobile */}
        <Image
          src="/logo.svg"
          alt="SYNT-X Logo"
          width={60}
          height={60}
          className="w-10 h-10 md:w-[60px] md:h-[60px] opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
        <Image
          src="/vine.svg" 
          alt="Vine Logo"
          width={60}
          height={60}
          className="w-10 h-10 md:w-[60px] md:h-[60px] opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
        <Image
          src="/svg2.svg" 
          alt="SYNT-X Logo"
          width={60}
          height={60}
          className="text-white w-10 h-10 md:w-[60px] md:h-[60px] opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
        <Image
          src="/svg4.svg" 
          alt="SYNT-X Logo"
          width={60}
          height={60}
          className="w-10 h-10 md:w-[60px] md:h-[60px] opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </section>
  );
}

export default VoiceOfClients;