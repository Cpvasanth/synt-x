"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { services } from "../data/services";
import FaqSection from "../component/FaqSection";


export default function ServicesPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const found = entries.find((e) => e.isIntersecting);
        if (found) setActive(Number(found.target.getAttribute("data-index")));
      },
      {
        root: el,
        threshold: 0.5,
      }
    );

    Array.from(el.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const handleDotClick = (i: number) => {
    const el = scrollRef.current;
    if (el)
      el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <main className="bg-black text-white h-screen w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r 
        from-gray-900 via-purple-950 to-gray-900 animate-gradient-bg opacity-70"
      />

      {/* Scroll Area */}
      <div
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((s, i) => {
          const isActive = active === i;
          const translateX = i < active ? -120 : i > active ? 120 : 0;
          const rotateY = i < active ? 10 : i > active ? -10 : 0;
          const scale = isActive ? 1 : 0.85;
          const opacity = isActive ? 1 : 0.4;

          return (
            <div
              key={s.slug}
              data-index={i}
              className="snap-center min-w-full h-full flex items-center justify-center"
            >
              <Link
                href={`/services/${s.slug}`}
                className={`group w-[60vw] max-w-[600px] h-[60vh] 
                  rounded-3xl bg-gradient-to-br ${s.color} 
                  backdrop-blur-lg border border-white/20 
                  flex flex-col justify-between shadow-2xl p-10 
                  transition-all duration-700`}
                style={{
                  transform: `
                      perspective(1200px)
                      translateX(${translateX}px)
                      rotateY(${rotateY}deg)
                      scale(${scale})
                    `,
                  opacity,
                }}
              >
                <h2 className="text-4xl font-bold uppercase">{s.name}</h2>
                <p className="text-white/80 text-lg mt-3">
                  {s.description}
                </p>

                <div className="self-end font-semibold bg-white/10 py-2 px-4 rounded-full group-hover:bg-white/20">
                  View More →
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {services.map((s, i) => (
          <button
            key={s.slug}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === active ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
      <FaqSection />
    </main>
  );
}
