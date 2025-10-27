import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row justify-evenly items-center py-25 px-6">
      <div className="max-w-4xl flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
        Websites Engineered for
        <span className="block underline decoration-yellow-300 decoration-wavy">
            Tomorrow’s market Leaders
        </span>
        </h1>

        <p className="text-xl text-gray-200">
          We craft aesthetic, functional, and user-centric websites that help
          businesses thrive in the digital world.
        </p>

        <button
          type="button"
          className="group mx-auto lg:mx-0 flex items-center gap-3 w-fit px-8 py-3 text-lg font-medium rounded-full bg-[#563655] hover:bg-[#6c436b] transition-colors"
        >
          Ask for a quote
          <span className="flex items-center justify-center p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition">
            <MdArrowOutward size={20} />
          </span>
        </button>
      </div>

      <div className="flex flex-row lg:flex-col items-center gap-6 mt-10 lg:mt-0">
        <h3 className="text-lg font-semibold rotate-90 tracking-widest uppercase hidden lg:block mb-9">
          Follow us
        </h3>

        <ul className="flex flex-row lg:flex-col gap-4">
          {[ 
            { Icon: FaInstagram, href: "https://www.instagram.com/syntx.tech/" },
            { Icon: FaLinkedin, href: "https://www.linkedin.com/company/syntx-tech/" },
            { Icon: FaYoutube, href: "https://www.youtube.com/@syntxtech" }
          ].map(({ Icon, href }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Icon size={28} className="text-[#adbd47]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
