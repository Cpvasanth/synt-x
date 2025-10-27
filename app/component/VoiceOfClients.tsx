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
    img: "/clients/client2.jpg"
  },
  {
    name: "Maya Fernandez",
    role: "Founder, UrbanLens",
    feedback:
      "The photography and AD shooting delivered captured our essence perfectly. Absolutely thrilled with the results.",
    img: "/clients/client3.jpg"
  }
];

function VoiceOfClients() {
  return (
    <section className="w-full py-24 px-12 overflow-hidden">
      
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white tracking-wide">
          <span className="outline-text">VOICE</span> OF OUR CLIENTS
        </h2>
      </div>

      {/* Infinite Scroll Testimonials */}
      <div className="testimonial-track">
        <div className="testimonial-slide">
          {testimonials.concat(testimonials).map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
            >
              <PiQuotesFill className="text-yellow-300 text-5xl mb-4" />
              <p className="text-white/90 text-lg leading-relaxed">{t.feedback}</p>

              <div className="flex items-center mt-8 gap-4">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={55}
                  height={55}
                  className="rounded-full border border-blue-200 object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-white/60 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* Logo Footer */}
    <div className="flex justify-center mt-20 gap-16">
      <Image
        src="/logo.svg"
        alt="SYNT-X Logo"
        width={60}
        height={60}
        className="opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    <Image
        src="/redbull-logo.svg" 
        alt="Red Bull Logo"
        width={60}
        height={60}
        className="opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    <Image
        src="/logo.svg" 
        alt="SYNT-X Logo"
        width={60}
        height={60}
        className="opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    <Image
        src="/logo.svg" 
        alt="SYNT-X Logo"
        width={60}
        height={60}
        className="opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    </div>

    </section>
  );
}

export default VoiceOfClients;
