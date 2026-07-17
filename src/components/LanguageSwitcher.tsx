"use client";

import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "it", label: "Italiano" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

const flags: Record<string, string> = {
  it: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3Crect width='1' height='2' fill='%23009246'/%3E%3Crect x='1' width='1' height='2' fill='%23fff'/%3E%3Crect x='2' width='1' height='2' fill='%23ce2b37'/%3E%3C/svg%3E",
  en: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3CclipPath id='a'%3E%3Cpath d='M0 0h60v30H0z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M0 0h60v30H0z' fill='%23012169'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23c8102e' stroke-width='4'/%3E%3C/g%3E%3C/svg%3E",
  fr: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3Crect width='1' height='2' fill='%230021b0'/%3E%3Crect x='1' width='1' height='2' fill='%23fff'/%3E%3Crect x='2' width='1' height='2' fill='%23ce2b37'/%3E%3C/svg%3E",
};

type Props = {
  scrolled?: boolean;
};

export default function LanguageSwitcher({ scrolled }: Props) {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchTo = (lang: string) => {
    setIsOpen(false);
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    const path = window.location.pathname;
    const clean = path.replace(/^\/(it|en|fr)(\/|$)/, "/") || "/";
    window.location.href = `/${lang}${clean === "/" ? "" : clean}`;
  };

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 text-xs font-semibold px-2 py-1.5 rounded transition ${
          scrolled
            ? "text-heading hover:text-accent"
            : "text-white/80 hover:text-white"
        }`}
      >
        <img src={flags[current.code]} alt="" className="w-5 h-3.5 rounded-sm object-cover" />
        <span>{current.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1.5 w-40 bg-white shadow-md min-w-48 py-2 z-50">
          {languages.map((lang) => {
            const isActive = locale === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => switchTo(lang.code)}
                className={`flex items-center gap-3 w-full text-left px-5 py-2.5 text-xs transition ${
                  isActive
                    ? "text-accent font-semibold"
                    : "text-body hover:text-accent hover:bg-gray-50"
                }`}
              >
                <img src={flags[lang.code]} alt="" className="w-5 h-3.5 rounded-sm object-cover shrink-0" />
                <span>{lang.label}</span>
                {isActive && (
                  <svg className="w-3.5 h-3.5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
