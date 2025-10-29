import { PiScribbleLoopBold } from "react-icons/pi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { PiDotFill } from "react-icons/pi";
import Link from "next/link";

const services = [
  { id: "01", title: "Web design" },
  { id: "02", title: "Logo design" },
  { id: "03", title: "AD Shooting" },
  // { id: "04", title: "SEO" },
  { id: "04", title: "Marketing" },
];

function Service() {
  return (
    <section className="w-full py-4 sm:py-5 select-none overflow-hidden">

      {/* Marquee Top Line */}
      <div className="marquee-container mb-3 sm:mb-4">
        <div className="marquee-content marquee-left">
          {[...Array(8)].map((_, i) => (
            <span
              key={`top-${i}`}
              className="marquee-text whitespace-nowrap text-sm sm:text-base md:text-lg"
            >
              <PiScribbleLoopBold className="mx-2 text-purple-300" size={22} />
              <span className="outline-text">WHAT WE DO</span>
              <PiDotFill className="mx-2 text-purple-600" size={22} />
              OUR SERVICES
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Bottom Line */}
      <div className="marquee-container mb-10 sm:mb-16">
        <div className="marquee-content marquee-right">
          {[...Array(8)].map((_, i) => (
            <span
              key={`bottom-${i}`}
              className="marquee-text whitespace-nowrap text-sm sm:text-base md:text-lg"
            >
              <PiScribbleLoopBold className="mx-2 text-purple-300" size={22} />
              <span className="outline-text">WHAT WE DO</span>
              <PiDotFill className="mx-2 text-purple-600" size={22} />
              OUR SERVICES
            </span>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 text-white">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="group flex items-center gap-6 sm:gap-12 px-4 sm:px-8 py-10 sm:py-14 border-y border-white/10 hover:border-yellow-300 transition-all duration-300"
          >
            <p className="text-3xl sm:text-5xl font-semibold text-yellow-300 group-hover:text-yellow-300">
              {service.id}
            </p>

            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-wide group-hover:text-yellow-300">
              {service.title}
            </h2>

            <FaArrowAltCircleRight
              size={28}
              className="ml-auto group-hover:text-yellow-300 transition sm:size-[35px]"
            />
          </Link>
        ))}
      </div>

    </section>
  );
}

export default Service;
