import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const slugs = ["pietro-messina", "orsola-papasogli-tacca", "ascanio-ruschi"];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

const professionistaMap: Record<string, string> = {
  "pietro-messina": "pietro",
  "orsola-papasogli-tacca": "orsola",
  "ascanio-ruschi": "ascanio",
};

import itMessages from "../../../../../messages/it.json";
import enMessages from "../../../../../messages/en.json";
import frMessages from "../../../../../messages/fr.json";

const allMessages = { it: itMessages, en: enMessages, fr: frMessages } as const;

export default async function ProfessionistaPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale });

  const key = professionistaMap[slug];
  if (!key) notFound();

  const name = t(`professionisti.${key}.name`);
  const bio = t(`professionisti.${key}.bio`);
  const role = t(`professionisti.${key}.role`);
  const messages = allMessages[locale as keyof typeof allMessages] as any;
  const areeDettaglio: { titolo: string; descrizione: string }[] | undefined = messages.professionisti[key]?.areeDettaglio;
  const settori: string[] | undefined = messages.professionisti[key]?.settori;
  const lingue: string | undefined = messages.professionisti[key]?.lingue;
  const aree: string[] = messages.professionisti[key].aree;

  return (
    <div>
      <section className="relative min-h-[35vh] lg:min-h-[45vh] flex items-center overflow-hidden">
        <Image
          src="/images/professionisti-header.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-2">
            {name}
          </h1>
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-medium tracking-wide uppercase">{role}</span>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="w-full aspect-[3/4] relative overflow-hidden rounded shadow-lg ring-1 ring-accent/20">
              <Image
                src={`/images/avv-${slug}.jpg`}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

          </div>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-heading">{name}</h2>
              <p className="text-sm text-accent font-medium mt-1">{role}</p>
            </div>

            <div className="relative pl-4 lg:pl-5 border-l-2 border-accent/40">
              <p className="text-sm text-body/80 leading-relaxed italic">{bio}</p>
            </div>

            <div>
              <h3 className="text-[11px] sm:text-xs font-semibold tracking-widest text-accent uppercase mb-5 lg:mb-6 flex items-center gap-3">
                <span className="w-5 lg:w-6 h-px bg-accent/40 shrink-0" />
                Aree di competenza
              </h3>
              {areeDettaglio ? (
                <div className="space-y-6">
                  {areeDettaglio.map((area, i) => (
                    <div
                      key={i}
                      className="group pl-3 lg:pl-4 border-l-2 border-accent/20 hover:border-accent transition-colors"
                    >
                      <h4 className="text-base font-semibold text-heading mb-2">{area.titolo}</h4>
                      <p className="text-sm text-body/70 leading-relaxed">{area.descrizione}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {aree.map((area: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-body/80">
                      <span className="text-accent mt-0.5">•</span>
                      {area}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lingue && (
              <div>
                <p className="text-sm text-body/70 italic">
                  {lingue}
                </p>
              </div>
            )}

            {settori && (
              <div>
                <h3 className="text-[11px] sm:text-xs font-semibold tracking-widest text-accent uppercase mb-3 lg:mb-4 flex items-center gap-3">
                  <span className="w-5 lg:w-6 h-px bg-accent/40 shrink-0" />
                  Settori di consulenza
                </h3>
                <p className="text-sm text-body/70 mb-4">
                  È consulente di aziende che operano nei seguenti settori:
                </p>
                <div className="flex flex-wrap gap-2">
                  {settori.map((s, i) => (
                    <span
                      key={i}
                      className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium text-accent bg-accent/5 rounded-full border border-accent/10 leading-relaxed"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6">
              <div className="bg-accent/5 rounded-lg p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-heading mb-1">{t("home.contattiTitle")}</p>
                  <p className="text-sm text-body/70">Per maggiori informazioni o per richiedere un appuntamento.</p>
                </div>
                <Link
                  href="/contatti"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 sm:py-2.5 text-sm font-medium text-white bg-accent rounded hover:bg-accent-light transition-colors shrink-0"
                >
                  {t("nav.contatti")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
