import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CostCalculator from "@/components/CostCalculator";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: `Richiedi un Preventivo | ${t("title")}`,
    description: t("description"),
  };
}

export default async function GetQuotePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <section className="bg-[#0f1625] pt-20 md:pt-28 pb-16 md:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase block mb-3">
              CALCOLATORE DI COSTI
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-3">
              Richiedi un Preventivo per le Tue Tasse
            </h1>
            <p className="text-white/50 text-sm md:text-base">
              Calcolatore Fiscale Gratuito
            </p>
          </div>
        </div>
      </section>

      <section className="-mt-28 md:-mt-40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
            <div className="relative min-h-[320px] lg:min-h-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/get-quote-hero.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="bg-white">
              <CostCalculator />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#edeef0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white border border-border/40 p-8 md:p-10 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent/10">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">TARIFFA BASE DA</p>
              <p className="text-4xl md:text-5xl font-serif font-bold text-heading mb-4">€250</p>
              <p className="text-xs text-body/60 leading-relaxed">
                Il cliente e l&apos;avvocato concordano la tariffa oraria prima di iniziare il caso.
              </p>
            </div>
            <div className="bg-white border-2 border-accent/30 p-8 md:p-10 text-center hover:shadow-xl transition-shadow duration-300 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-semibold uppercase tracking-widest px-4 py-1">
                Più richiesto
              </span>
              <div className="w-14 h-14 mx-auto mb-6 mt-2 flex items-center justify-center rounded-full bg-accent/10">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">TARIFFA STANDARD DA</p>
              <p className="text-4xl md:text-5xl font-serif font-bold text-heading mb-4">€500</p>
              <p className="text-xs text-body/60 leading-relaxed">
                Una tariffa fissa viene offerta se il caso è relativamente semplice o di routine.
              </p>
            </div>
            <div className="bg-white border border-border/40 p-8 md:p-10 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent/10">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">TARIFFA PREMIUM DA</p>
              <p className="text-4xl md:text-5xl font-serif font-bold text-heading mb-4">€750</p>
              <p className="text-xs text-body/60 leading-relaxed">
                Ti aggiorneremo formalmente sullo stato dei costi, sia sostenuti che previsti, su base mensile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
