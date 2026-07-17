"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `url('/images/footer-bg.jpg') center/cover no-repeat`,
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <img src="/images/logo-white.png" alt="Studio CoLegal" className="h-12 lg:h-16 w-auto mb-5" />
            <div className="flex items-start gap-2 mb-1">
              <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <a
                href="https://www.google.com/maps?q=Piazza+Madonna+degli+Aldobrandini+8+Firenze"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-accent transition"
              >
                {t("header.indirizzo")}
              </a>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.143 15 12.75 15 1.464 0 2.862-.263 4.156-.747M6.75 6.75c0-2.49 1.061-4.5 3.75-4.5 2.689 0 3.75 2.01 3.75 4.5m-7.5 0h7.5M3 6.75c0 8.284 6.143 15 12.75 15 1.464 0 2.862-.263 4.156-.747" />
              </svg>
              <p className="text-sm text-white/60">{t("header.telefono")}</p>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:info@studiocolegal.it" className="text-sm text-accent hover:underline">{t("header.email")}</a>
            </div>
            <p className="text-xs text-white/40 mt-4 mb-3">{t("footer.seguici")}</p>
            <div className="flex gap-2">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-accent text-white hover:bg-accent-light transition" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-accent text-white hover:bg-accent-light transition" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-accent text-white hover:bg-accent-light transition" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">{t("footer.ambiti")}</h4>
            <ul className="space-y-2">
              <li><Link href="/attivita#dir-imp" className="text-xs text-white/60 hover:text-accent transition">{t("ambiti.impresa")}</Link></li>
              <li><Link href="/attivita#dir-ind" className="text-xs text-white/60 hover:text-accent transition">{t("ambiti.industriale")}</Link></li>
              <li><Link href="/attivita#dir-imm" className="text-xs text-white/60 hover:text-accent transition">{t("ambiti.immobiliare")}</Link></li>
              <li><Link href="/attivita#dir-ban" className="text-xs text-white/60 hover:text-accent transition">{t("ambiti.bancario")}</Link></li>
              <li><Link href="/attivita#no-profit" className="text-xs text-white/60 hover:text-accent transition">{t("ambiti.terzosettore")}</Link></li>
              <li><Link href="/attivita#privacy" className="text-xs text-white/60 hover:text-accent transition">{t("ambiti.privacy")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">{t("footer.links")}</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-xs text-white/60 hover:text-accent transition">{t("footer.privacy")}</Link></li>
              <li><Link href="/cookie-policy-ue" className="text-xs text-white/60 hover:text-accent transition">{t("footer.cookie")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-5">{t("footer.contatti")}</h4>
            <a
              href="tel:+39055289321"
              className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent w-full sm:w-auto px-5 py-3 sm:px-4 sm:py-2 text-sm font-semibold hover:bg-accent hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t("header.telefono")}
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-4 text-center text-xs text-white/30">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
