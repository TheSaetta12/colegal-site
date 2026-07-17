import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HeroSlider from "@/components/HeroSlider";
import AmbitoCard from "@/components/AmbitoCard";
import ProfessionistaCard from "@/components/ProfessionistaCard";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "@/navigation";

const ambitiConfig = [
  { key: "impresa", id: "dir-imp" },
  { key: "industriale", id: "dir-ind" },
  { key: "immobiliare", id: "dir-imm" },
  { key: "bancario", id: "dir-ban" },
  { key: "terzosettore", id: "no-profit" },
  { key: "privacy", id: "privacy" },
];

const professionisti = [
  { slug: "pietro-messina", key: "pietro" },
  { slug: "orsola-papasogli-tacca", key: "orsola" },
  { slug: "ascanio-ruschi", key: "ascanio" },
];

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      type: "website",
    },
  };
}

const CtaButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="group inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-3 text-sm font-semibold tracking-widest hover:bg-accent hover:text-white transition uppercase"
  >
    {children}
    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </Link>
);

const SectionImage = ({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) => (
  <div className="relative overflow-hidden">
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      priority={priority}
      className="w-full aspect-[4/3] object-cover object-center transition-transform duration-700 hover:scale-105"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  </div>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase block mb-4">
    {children}
  </span>
);

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Studio Legale CoLegal",
    description: t("meta.description"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Piazza Madonna degli Aldobrandini, n. 8",
      addressLocality: "Firenze",
      postalCode: "50123",
      addressCountry: "IT",
    },
    telephone: "(+39) 055.289321",
    email: "info@studiocolegal.it",
    url: `https://www.studiocolegal.it/${locale}`,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSlider />

      <ScrollReveal>
        <section id="about" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <SectionHeading>{t("home.studioTitle")}</SectionHeading>
                <p className="text-sm lg:text-base text-body/80 leading-relaxed mb-10">
                  {t("home.studioDesc")}
                </p>
                <CtaButton href="/contatti">{t("home.studioCta")}</CtaButton>
              </div>
              <div className="mt-10 lg:mt-0">
                <SectionImage src="/images/home-studio.jpg" alt="Studio Legale CoLegal" priority />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 lg:py-28 bg-[#f8f7f4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="lg:order-2">
                <SectionHeading>{t("home.ambitiTitle")}</SectionHeading>
                <div>
                  {ambitiConfig.map((ambito) => (
                    <AmbitoCard
                      key={ambito.key}
                      title={t(`ambiti.${ambito.key}`)}
                      href={`/attivita#${ambito.id}`}
                    />
                  ))}
                </div>
                <div className="mt-8">
                  <CtaButton href="/attivita">{t("home.ambitiCta")}</CtaButton>
                </div>
              </div>
              <div className="lg:order-1 mt-10 lg:mt-0">
                <SectionImage src="/images/home-ambiti.jpg" alt="I Nostri Ambiti" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase block mb-2">
                {t("home.professionistiTitle")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif text-heading">
                {t("home.professionistiSubtitle")}
              </h2>
              <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
              {professionisti.map((p) => (
                <ProfessionistaCard
                  key={p.slug}
                  name={t(`professionisti.${p.key}.name`)}
                  competenze={t(`professionisti.${p.key}.competenze`)}
                  slug={p.slug}
                  cta={t("home.professionistiCta")}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="contatti" className="py-20 lg:py-28 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="lg:order-2">
                <SectionHeading>{t("home.contattiTitle")}</SectionHeading>
                <h2 className="text-3xl lg:text-4xl font-serif mb-12">
                  {t("home.contattiTitle")}
                </h2>
                <ContactForm dark />
              </div>
              <div className="lg:order-1 mt-10 lg:mt-0">
                <SectionImage src="/images/home-contatti.jpg" alt="Contattaci" />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
