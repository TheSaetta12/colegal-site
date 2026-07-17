"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";

export default function HeroSlider() {
  const t = useTranslations("hero");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slides = [
    { super: t("super1"), main: t("title1") },
    { super: t("super2"), main: t("subtitle2") },
  ];

  return (
    <section className="relative bg-primary min-h-[70vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 bg-black/55 z-10" />
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `url('/images/hero-bg.jpg') center top/cover no-repeat`,
        }}
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-28 lg:py-36">
        <div className="relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-[26rem]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 absolute inset-0 ${
                i === currentSlide ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              aria-hidden={i !== currentSlide}
            >
              <div className="max-w-3xl flex flex-col justify-center h-full">
                <div>
                  {slide.super && (
                    <div className="text-accent text-xs sm:text-sm lg:text-base font-semibold tracking-[0.15em] uppercase mb-3 sm:mb-4">
                      {slide.super}
                    </div>
                  )}
                  <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif text-white leading-tight whitespace-pre-line">
                    {slide.main}
                  </h1>
                </div>
                <div className="mt-8 sm:mt-12">
                  <a
                    href="#about"
                    className="inline-block text-accent text-xs font-semibold tracking-[0.2em] uppercase hover:text-accent-light transition border-b border-accent pb-1"
                  >
                    {t("cta")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 transition-all duration-500 ${
              i === currentSlide ? "bg-accent w-10 sm:w-14" : "bg-white/30 w-6 sm:w-8 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
