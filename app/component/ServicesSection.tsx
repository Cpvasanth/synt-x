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
      <section className="text-white py-16 px-6 sm:py-20 lg:px-8">
        <div className="container mx-auto max-w-6xl relative">

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-16 leading-tight">
            Your website is<br />
            in <span className="font-cursive outline-white">good hands</span>
          </h2>

          {/* SEO tagline, visible only on large screens */}
          <div
            className="hidden md:block absolute top-4 right-6 lg:right-1/4 text-xl md:text-2xl transform -rotate-12"
            style={{ fontFamily: 'cursive' }}
          >
            <p>We do SEO as well</p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {services.map(service => (
              <article
                key={service.id}
                className={`${service.bgColor} text-gray-900 rounded-2xl p-6 flex flex-col`}
              >
                <div className="mb-3 sm:mb-4">
                  <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 bg-opacity-70 rounded-full font-semibold text-gray-700">
                    {service.id}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Estimate section */}
      <section className="text-white py-16 px-6 sm:py-20 lg:py-24 lg:px-8">
        <div className="container mx-auto max-w-6xl bg-zinc-900 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">

            <div className="flex flex-col gap-6 sm:gap-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Get an instant<br />
                website{' '}
                <span className="[text-stroke:1px_white] text-transparent">
                  estimate
                </span>
              </h2>

              {/* Button and time tag */}
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#"
                  className="group relative inline-flex items-center justify-center gap-3 bg-black text-white py-3 pl-6 pr-14 rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors duration-300"
                >
                  <span className="font-medium text-sm sm:text-base">
                    Get my estimate
                  </span>
                  <div className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-black transition-transform duration-300 group-hover:translate-x-1">
                    <FiArrowUpRight className="h-5 w-5" />
                  </div>
                </a>

                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <FiClock className="h-5 w-5" />
                  <span>1 minute</span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed">
              Curious about the cost of your website project? Our online
              calculator gives you a{' '}
              <strong className="text-white font-medium">
                quick and accurate estimate based on your specific needs
              </strong>
              . Simply select your desired features, and get an instant price
              range. Try it now and start planning your perfect website today.
            </p>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
