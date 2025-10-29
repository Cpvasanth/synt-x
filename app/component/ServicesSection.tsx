import React from 'react';
import { FiArrowUpRight, FiClock } from 'react-icons/fi';

type Service = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Experienced designers",
    description: "We have high-end designers ready to conceive stunning designs matching your brand style.",
    bgColor: "bg-purple-300",
  },
  {
    id: 2,
    title: "eCommerce experts",
    description: "Our functional consultants can help you setting-up all your products in your eCommerce.",
    bgColor: "bg-lime-300",
  },
  {
    id: 3,
    title: "Front-end developers",
    description: "Our front-end developers implement tailor-made features to take your website to the next level.",
    bgColor: "bg-cyan-300",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <>
      {/* Services */}
      <section className="text-white py-2 px-4 sm:py-16 md:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
            Your website is<br/>
            in <span className="font-cursive">good hands</span>
          </h2>

          {/* SEO tagline (hidden on mobile) */}
          <div className="hidden lg:block absolute top-6 right-10 text-xl rotate-[-12deg] font-cursive">
            <p>We do SEO as well</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <article
                key={service.id}
                className={`${service.bgColor} text-gray-900 rounded-xl p-5 flex flex-col`}
              >
                <div className="mb-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full font-semibold text-gray-700">
                    {service.id}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-800">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Estimate */}
      <section className="text-white py-12 px-4 sm:py-16 md:px-6">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-2xl p-6 sm:p-10">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            <div className="flex flex-col gap-5 sm:gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Get an instant<br />
                website <span className="text-transparent [text-stroke:1px_white]">
                  estimate
                </span>
              </h2>

              {/* Button */}
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 bg-black text-white py-3 px-6 rounded-full border border-neutral-700 hover:border-neutral-500 transition"
                >
                  <span className="text-sm font-medium">
                    Get my estimate
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300 text-black transition-transform group-hover:translate-x-1">
                    <FiArrowUpRight className="w-5 h-5" />
                  </div>
                </a>

                <div className="flex items-center gap-2 text-neutral-400 text-xs sm:text-sm">
                  <FiClock className="w-4 h-4" />
                  <span>1 minute</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-neutral-300">
              Curious about the cost of your website project? Our online calculator
              gives you a <strong className="text-white">quick and accurate estimate</strong> 
              based on your needs. Select your features and get instant pricing.
            </p>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
