import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = await getTranslations({ locale, namespace: "meta" });
  const p = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: `${p("title")} | ${m("title")}`,
    description: m("description"),
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white">
            {t("title")}
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-sm text-body/80 leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">
                {t("s1Heading")}
              </h2>
              <p className="mb-3">
                {t("s1P1")}
              </p>
              <p>
                {t("s1P2")}
              </p>
            </div>

            <div>
              <p className="mb-3">
                {t("s2P1")}
              </p>
              <p>
                {t("s2P2")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">
                {t("s3Heading")}
              </h2>
              <p className="mb-3">
                {t("s3P1")}
              </p>
              <p>
                {t("s3P2")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">
                {t("s4Heading")}
              </h2>
              <p className="mb-3">{t("s4Intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  {t("s4Li1")}
                </li>
                <li>
                  {t("s4Li2")}
                </li>
              </ul>
              <p>
                {t("s4Outro")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">
                {t("s5Heading")}
              </h2>
              <p className="mb-3">{t("s5Intro")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {t("s5Li1")}
                </li>
                <li>
                  {t("s5Li2")}
                </li>
                <li>
                  {t("s5Li3")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
