import React from 'react';
import { FiArrowUpRight, FiClock } from 'react-icons/fi';

// 1. Define the type for our service card data
type Service = {
  id: number;
  title: string;
  description: string;
  bgColor: string; // Tailwind background color class
};

// 2. Data for the three service cards
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

// 3. The main component
const ServicesSection: React.FC = () => {
  return (
    <section className=" text-white py-20 px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl relative">
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Your website is
          <br />
          in 
          <span className="font-cursive outline-white"> good hands</span>
        </h2>

        {/* Handwritten SEO Text */}
        {/* NOTE: For the handwritten font, you'll need to import a font 
          like 'Caveat' or 'Kalam' from Google Fonts and add it to your tailwind.config.js.
          This example uses a generic 'font-cursive' as a placeholder.
        */}
        <div 
          className="absolute top-0 right-0 md:right-1/4 lg:right-1/3 text-xl md:text-2xl transform -rotate-12 -mt-8"
          style={{ fontFamily: 'cursive' }} // Replace with your imported font, e.g., 'font-caveat'
        >
          <p>We do SEO as well</p>
          {/* The swirl is best added as an SVG */}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className={`${service.bgColor} text-gray-900 rounded-2xl p-6 md:p-8 flex flex-col`}
            >
              {/* Number Circle */}
              <div className="mb-4">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 bg-opacity-70 rounded-full text-lg font-semibold text-gray-700">
                  {service.id}
                </span>
              </div>
              
              {/* Card Content */}
              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-base text-gray-800">
                {service.description}
              </p>
            </article>
          ))}
        </div>

      </div>

    <section className=" text-white py-16 px-6 lg:py-24 lg:px-8">
      {/* Main card container */}
      <div className="container mx-auto max-w-6xl bg-zinc-900 rounded-3xl p-8 md:p-12 lg:p-16">
        
        {/* Grid for two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- Left Column --- */}
          <div className="flex flex-col gap-8">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Get an instant
              <br />
              website{' '}
              {/* This span creates the "stroked" text effect */}
              <span className="[text-stroke:1px_white] text-transparent">
                estimate
              </span>
            </h2>
            
            {/* Button & Time Row */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Button */}
              <a
                href="#" // Change this to your calculator's URL
                className="group relative inline-flex items-center justify-center gap-3 bg-black text-white py-3 pl-6 pr-14 rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors duration-300"
              >
                <span className="font-medium">Get my estimate</span>
                
                {/* Yellow animated circle */}
                <div className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-black transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowUpRight className="h-5 w-5" />
                </div>
              </a>
              
              {/* Time Tag */}
              <div className="flex items-center gap-2 text-neutral-400">
                <FiClock className="h-5 w-5" />
                <span className="text-sm">1 minute</span>
              </div>
            </div>
          </div>
          
          {/* --- Right Column --- */}
          <div>
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
              Curious about the cost of your website project? Our online
              calculator gives you a{' '}
              <strong className="text-white font-medium">
                quick and accurate estimate based on your specific needs
              </strong>
              . Simply select your desired features, and get an
              instant price range—no waiting, no hassle. Try it now and start
              planning your perfect website today!
            </p>
          </div>
          
        </div>
      </div>
    </section>
</section> 
  );
};

export default ServicesSection;