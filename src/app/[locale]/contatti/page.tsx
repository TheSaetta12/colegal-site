import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContattiPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <Image
          src="/images/contatti-header.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white">
            {t("contatti.title")}
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-heading mb-3">
                  {t("contatti.heading")}
                </h2>
                <a
                  href="https://www.google.com/maps?q=Piazza+Madonna+degli+Aldobrandini+8+Firenze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-body/80 leading-relaxed hover:text-accent transition"
                >
                  {t("contatti.indirizzo")}
                </a>
              </div>
              <div className="space-y-4">
                <a href={`tel:${t("contatti.telefono")}`} className="flex items-center gap-3 text-sm text-body/80 hover:text-accent transition group">
                  <span className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <span><span className="font-semibold text-heading">Phone</span> {t("contatti.telefono")}</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-body/80">
                  <span className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <span><span className="font-semibold text-heading">Fax</span> {t("contatti.fax")}</span>
                </div>
                <a href="mailto:info@studiocolegal.it" className="flex items-center gap-3 text-sm text-body/80 hover:text-accent transition group">
                  <span className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>
                  </span>
                  <span><span className="font-semibold text-heading">Email</span> {t("contatti.email")}</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-body/80">
                  <span className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </span>
                  <span><span className="font-semibold text-heading">Website</span> {t("contatti.sito")}</span>
                </div>
              </div>
            </div>
              <div className="lg:col-span-3 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] rounded overflow-hidden shadow-lg">
              <Image
                src="/images/contatti-form-bg.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
              <div className="relative z-10 p-6 sm:p-8 lg:p-14 h-full flex flex-col justify-center">
                <h3 className="text-white text-lg sm:text-xl font-serif font-bold mb-6 lg:mb-8">
                  {t("home.contattiTitle")}
                </h3>
                <ContactForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
