"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Hero: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

useEffect(() => {
  if (!vantaRef.current || vantaEffect.current) return;

  const threeScript = document.createElement("script");
  threeScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
  threeScript.onload = () => {
    const vantaScript = document.createElement("script");
    vantaScript.src =
      "https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js";
    vantaScript.onload = () => {
      if (!(window as any).VANTA) return;

      vantaEffect.current = (window as any).VANTA.WAVES({
        el: vantaRef.current,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        // ✅ Strong visible waves
        waveHeight: 25,
        waveSpeed: 0.75,
        zoom: 0.8,

        // 🎨 Black & White
        color: 0x000000,          // black waves 0xffffff
        backgroundColor: 0xffffff // White background
      });
    };

    document.body.appendChild(vantaScript);
  };

  document.body.appendChild(threeScript);

  return () => vantaEffect.current?.destroy();
}, []);














  return (
    <div ref={vantaRef} className={`relative w-full bg-black overflow-hidden `}>
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row justify-evenly items-center py-28 px-6">
        {/* ... your content unchanged ... */}
        <div className="max-w-4xl flex flex-col gap-6 text-center lg:text-left" >
        <h1 className="text-3xl uppercase text-center lg:text-left lg:text-7xl font-bold leading-tight text-white/80 drop-shadow-[0_0_18px_rgba(255,255,255,0.45)]">
          Websites Engineered for<span className="relative z-10"> Tomorrow’s Market Leaders</span>
        </h1>



          <p className="text-xl text-gray-200  leading-">
            We craft aesthetic, functional, and user-centric websites that help
            businesses thrive in the digital world.
          </p>
          <Link
            href="/contact"
            className="group mx-auto lg:mx-0 flex items-center gap-3 w-fit px-8 py-3 text-lg font-medium rounded-full bg-yellow-700 hover:bg-yellow-800 transition-colors"
          >
            Ask for a quote
            <span className="flex items-center justify-center p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition">
              <MdArrowOutward size={20} />
            </span>
          </Link>
        </div>
        <div className="flex flex-row lg:flex-col items-center gap-6 mt-10 lg:mt-0">
          <h3 className="text-lg font-semibold rotate-90 tracking-widest uppercase hidden lg:block mb-9 text-white">
            Follow us
          </h3>
          <ul className="flex flex-row lg:flex-col gap-4">
            {[
              { Icon: FaInstagram, href: "https://www.instagram.com/syntx.tech/" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/company/syntx-tech/" },
              { Icon: FaYoutube, href: "https://www.youtube.com/@syntxtech" },
            ].map(({ Icon, href }, index) => (
              <li key={index}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Icon size={28} className="text-yellow-400" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
