import { useTranslations } from "next-intl";
import HeroSlider from "@/components/HeroSlider";
import AmbitoCard from "@/components/AmbitoCard";
import ProfessionistaCard from "@/components/ProfessionistaCard";
import ContactForm from "@/components/ContactForm";
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

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <HeroSlider />

      <section id="about" className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase block mb-3">
            {t("home.studioTitle")}
          </span>
          <p className="text-sm text-body/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            {t("home.studioDesc")}
          </p>
          <Link
            href="/contatti"
            className="inline-block border-2 border-accent text-accent px-8 py-3 text-sm font-semibold tracking-widest hover:bg-accent hover:text-white transition uppercase"
          >
            {t("home.studioCta")}
          </Link>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase block text-center mb-8">
            {t("home.ambitiTitle")}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ambitiConfig.map((ambito) => (
              <AmbitoCard
                key={ambito.key}
                title={t(`ambiti.${ambito.key}`)}
                href={`/attivita#${ambito.id}`}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/attivita"
              className="inline-block border-2 border-accent text-accent px-8 py-3 text-sm font-semibold tracking-widest hover:bg-accent hover:text-white transition uppercase"
            >
              {t("home.ambitiCta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase block mb-2">
              {t("home.professionistiTitle")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-heading">
              {t("home.professionistiSubtitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {professionisti.map((p) => (
              <ProfessionistaCard
                key={p.slug}
                name={t(`professionisti.${p.key}.name`)}
                competenze={t(`professionisti.${p.key}.competenze`)}
                slug={p.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase block text-center mb-3">
            {t("home.contattiTitle")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-heading text-center mb-12">
            {t("home.contattiTitle")}
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
