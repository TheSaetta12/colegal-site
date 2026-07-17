import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const ambitiSections = [
  { key: "impresa", id: "dir-imp" },
  { key: "industriale", id: "dir-ind" },
  { key: "immobiliare", id: "dir-imm" },
  { key: "bancario", id: "dir-ban" },
  { key: "terzosettore", id: "no-profit" },
  { key: "privacy", id: "privacy" },
];

export default function AttivitaPage() {
  const t = useTranslations();

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <Image
          src="/images/attivita-header-new.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white">
            {t("attivita.title")}
          </h1>
        </div>
      </section>

      <section className="py-10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {ambitiSections.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="text-xs font-semibold text-heading hover:text-accent transition uppercase tracking-wider"
              >
                {t(`ambiti.${a.key}`)}
              </a>
            ))}
          </div>
        </div>
      </section>

      {ambitiSections.map((a, i) => {
        const section = t.raw(`attivita.${a.key}`);
        return (
          <section key={a.id} id={a.id} className={`py-16 lg:py-20 ${i % 2 === 0 ? "bg-main" : "bg-light-bg"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-heading mb-6">
                  {section.title}
                </h2>
                <p className="text-sm text-body/80 leading-relaxed mb-5">
                  {section.content}
                </p>
                {section.content2 && (
                  <p className="text-sm text-body/80 leading-relaxed mb-5">
                    {section.content2}
                  </p>
                )}
                {section.content3 && (
                  <p className="text-sm text-body/80 leading-relaxed mb-5">
                    {section.content3}
                  </p>
                )}
                {section.focus && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
                      Focus
                    </h3>
                    <p className="text-sm text-body/80 leading-relaxed mb-5">
                      {section.focus}
                    </p>
                    {section.focus2 && (
                      <p className="text-sm text-body/80 leading-relaxed">
                        {section.focus2}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative h-72 lg:h-[500px] rounded overflow-hidden shadow-lg">
              <Image
                src="/images/attivita-section.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-10">
                {t("home.contattiTitle")}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
