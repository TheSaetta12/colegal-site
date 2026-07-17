import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = await getTranslations({ locale, namespace: "meta" });
  const c = await getTranslations({ locale, namespace: "cookiePolicy" });

  return {
    title: `${c("title")} | ${m("title")}`,
    description: m("description"),
  };
}

export default async function CookiePolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "cookiePolicy" });

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
            <p className="text-xs text-muted">
              {t("updated")}
            </p>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">{t("s1Heading")}</h2>
              <p>
                {t("s1Content")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">{t("s2Heading")}</h2>
              <p>
                {t("s2Content")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">{t("s3Heading")}</h2>
              <p>
                {t("s3Content")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">{t("s4Heading")}</h2>
              <p>
                {t("s4Content")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">{t("s5Heading")}</h2>

              <h3 className="text-lg font-serif font-bold text-heading mt-6 mb-3">{t("s5Sub1Heading")}</h3>
              <p>
                {t("s5Sub1Content")}
              </p>

              <h3 className="text-lg font-serif font-bold text-heading mt-6 mb-3">{t("s5Sub2Heading")}</h3>
              <p>
                {t("s5Sub2Content")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">{t("s6Heading")}</h2>

              <div className="overflow-x-auto border border-border mb-6">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left px-4 py-3 font-semibold">{t("tableColNome")}</th>
                      <th className="text-left px-4 py-3 font-semibold">{t("tableColScadenza")}</th>
                      <th className="text-left px-4 py-3 font-semibold">{t("tableColFunzione")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#f9f9f9]"><td colSpan={3} className="px-4 py-2 font-semibold text-accent">{t("tComplianz")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">complianz_consent_status</td><td className="px-4 py-2">{t("days365")}</td><td className="px-4 py-2">{t("tSalvaPreferenze")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_marketing</td><td className="px-4 py-2">{t("days365")}</td><td className="px-4 py-2">{t("tSalvaPreferenze")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">complianz_policy_id</td><td className="px-4 py-2">{t("days365")}</td><td className="px-4 py-2">{t("tRegistraId")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_banner-status</td><td className="px-4 py-2">{t("days365")}</td><td className="px-4 py-2">{t("tBannerDismissed")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_policy_id</td><td className="px-4 py-2">{t("days365")}</td><td className="px-4 py-2">{t("tRegistraId")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_statistics</td><td className="px-4 py-2">{t("days365")}</td><td className="px-4 py-2">{t("tSalvaPreferenze")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_preferences</td><td className="px-4 py-2">{t("days365")}</td><td className="px-4 py-2">{t("tSalvaPreferenze")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_functional</td><td className="px-4 py-2">{t("days365")}</td><td className="px-4 py-2">{t("tSalvaPreferenze")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_consented_services</td><td className="px-4 py-2">{t("days365")}</td><td className="px-4 py-2">{t("tSalvaPreferenze")}</td></tr>
                    <tr className="bg-[#f9f9f9]"><td colSpan={3} className="px-4 py-2 font-semibold text-accent">{t("tGoogleFonts")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">Google Fonts API</td><td className="px-4 py-2">{t("nessuno")}</td><td className="px-4 py-2">{t("tRichiediIp")}</td></tr>
                    <tr className="bg-[#f9f9f9]"><td colSpan={3} className="px-4 py-2 font-semibold text-accent">{t("tYouTube")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">GPS</td><td className="px-4 py-2">{t("sessione")}</td><td className="px-4 py-2">{t("tSalvaPosizione")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">YSC</td><td className="px-4 py-2">{t("sessione")}</td><td className="px-4 py-2">{t("tStoreInteraction")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">PREF</td><td className="px-4 py-2">{t("months8")}</td><td className="px-4 py-2">{t("tSalvaPreferenzeUtente")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2 font-semibold" colSpan={3}>{t("tFunzionale")}</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">VISITOR_INFO1_LIVE</td><td className="px-4 py-2">{t("months6")}</td><td className="px-4 py-2">{t("tLarghezzaBanda")}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">{t("s7Heading")}</h2>
              <p className="mb-3">
                {t("s7Content")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">{t("s8Heading")}</h2>
              <p>
                {t("s8Content")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">{t("s9Heading")}</h2>
              <p className="mb-3">{t("s9Intro")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("s9Li1")}</li>
                <li>{t("s9Li2")}</li>
                <li>{t("s9Li3")}</li>
                <li>{t("s9Li4")}</li>
                <li>{t("s9Li5")}</li>
                <li>{t("s9Li6")}</li>
              </ul>
              <p className="mt-3">
                {t("s9Outro")}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">{t("s10Heading")}</h2>
              <p className="mb-1">{t("s10Intro")}</p>
              <div className="mt-3 p-4 bg-[#f9f9f9] border border-border text-xs">
                <p className="font-semibold text-heading">{t("s10Nome")}</p>
                <p>{t("s10Indirizzo")}</p>
                <p>{t("s10Sito")}</p>
                <p>{t("s10Email")}</p>
                <p>{t("s10Telefono")}</p>
              </div>
              <p className="mt-3 text-xs text-muted">
                {t("s10Sync")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
