'use client';
import { useEffect, useState } from "react";
import HeroContent from "./heroContent";
import ScrollIndicator from "./scrollIndicator";
import Tagline from "./tagline";
import HeroCanvas from "./HeroCanvas";


export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black px-4 sm:px-6">

        <HeroCanvas mouse={mouse} />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />

        <HeroContent />

        <ScrollIndicator />
      </section>

     <section>

        <Tagline />

      </section>
    </>
  );
}

