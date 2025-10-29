"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-black flex justify-center items-center">
          <div className="relative w-full h-full">
            <Image
              src="/intro/intro_mobile.gif"
              alt="Website Intro"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* fade in main site after intro */}
      <div className={!showIntro ? "animate-fade-in" : "opacity-0"}>
        {children}
      </div>
    </>
  );
}
