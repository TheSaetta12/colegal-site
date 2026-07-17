"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const slides = [
  { titleKey: "hero.title" as const, subtitleKey: "hero.subtitle" as const },
];

export default function HeroSlider() {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const titles = [
    { super: "STUDIO LEGALE", main: "COLEGAL" },
    { super: "CORPORATE LAW", main: "COMPETENZA E COLLABORAZIONE\nIN UNA PAROLA, COLEGAL" },
  ];

  return (
    <section className="relative bg-primary min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `url('/images/hero-bg.jpg') center top/cover no-repeat`,
        }}
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40">
        {titles.map((slide, i) => (
          <div
            key={i}
            className={`transition-all duration-700 ${
              i === currentSlide
                ? "opacity-100 visible"
                : "opacity-0 invisible absolute top-1/2 -translate-y-1/2"
            }`}
          >
            <div className="max-w-3xl">
              {slide.super && (
                <div className="text-accent text-sm lg:text-base font-semibold tracking-[0.15em] uppercase mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {slide.super}
                </div>
              )}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                {slide.main}
              </h1>
            </div>
          </div>
        ))}
        <div className="mt-10 relative z-20">
          <a
            href="#about"
            className="inline-block text-accent text-xs font-semibold tracking-[0.2em] uppercase hover:text-accent-light transition border-b border-accent pb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            VIEW MORE
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-8 h-0.5 transition-all ${
              i === currentSlide ? "bg-accent w-12" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
