"use client";
import { PiScribbleLoopBold } from "react-icons/pi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { PiDotFill } from "react-icons/pi";
import Link from "next/link";

const services = [
  { id: "01", title: "Web design" },
  { id: "02", title: "Logo design" },
  { id: "03", title: "AD Shooting" },
  { id: "04", title: "SEO" },
  { id: "05", title: "Marketing" }
];

function Service() {
  return (
    <section className="w-full py-20 select-none">

      {/* Marquee Top Line */}
      <div className="marquee-container mb-4">
        <div className="marquee-content marquee-left">
          {[...Array(8)].map((_, i) => (
            <span key={`top-${i}`} className="marquee-text">
              <PiScribbleLoopBold className="icon-gap text-purple-300" size={30} />
              <span className="outline-text">WHAT WE DO</span>
              <PiDotFill className="icon-gap text-purple-600" size={30} />
              OUR SERVICES
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Bottom Line */}
      <div className="marquee-container mb-16">
        <div className="marquee-content marquee-right">
          {[...Array(8)].map((_, i) => (
            <span key={`bottom-${i}`} className="marquee-text">
              <PiScribbleLoopBold className="icon-gap text-purple-300" size={30} />
              <span className="outline-text">WHAT WE DO</span>
              <PiDotFill className="icon-gap text-purple-600" size={30} />
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
      className="group flex items-center gap-12 px-8 py-14 border-y border-white/10 hover:border-yellow-300 transition-all duration-300"
    >
      <p className="text-5xl font-semibold text-yellow-300 group-hover:text-yellow-300">
        {service.id}
      </p>

      <h2 className="text-4xl font-bold uppercase tracking-wide group-hover:text-yellow-300">
        {service.title}
      </h2>

      <FaArrowAltCircleRight
        size={35}
        className="ml-auto group-hover:text-yellow-300 transition"
      />
    </Link>
  ))}
</div>

    </section>
  );
}

export default Service;
