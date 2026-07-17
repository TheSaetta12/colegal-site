import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: `Cookie Policy (UE) | ${t("title")}`,
    description: t("description"),
  };
}

export default async function CookiePolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white">
            Cookie Policy (UE)
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-sm text-body/80 leading-relaxed">
            <p className="text-xs text-muted">
              Questa politica sui cookie è stata aggiornata l&apos;ultima volta il 2 Luglio 2022 e si applica ai cittadini
              e ai residenti permanenti legali dello Spazio Economico Europeo e della Svizzera.
            </p>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">1. Introduzione</h2>
              <p>
                Il nostro sito web, https://studiocolegal.it (di seguito: &ldquo;il sito web&rdquo;) utilizza i cookie e altre
                tecnologie correlate (per comodità tutte le tecnologie sono definite &ldquo;cookie&rdquo;). I cookie vengono anche
                inseriti da terze parti che abbiamo ingaggiato. Nel documento sottostante ti informiamo sull&apos;uso dei
                cookie sul nostro sito web.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">2. Cosa sono i cookie?</h2>
              <p>
                I cookie sono dei semplici file spediti assieme alle pagine di questo sito e salvati dal tuo browser
                sul disco rigido del tuo computer o altri dispositivi. Le informazioni raccolte in essi possono venire
                rispediti ai nostri server oppure ai server di terze parti durante la prossima visita.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">3. Cosa sono gli script?</h2>
              <p>
                Uno script è un pezzo di codice usato per far funzionare correttamente ed interattivamente il nostro
                sito. Questo codice viene eseguito sui nostri server o sul tuo dispositivo.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">4. Cos&apos;è un web beacon?</h2>
              <p>
                Un web beacon (o pixel tag) è un piccolo, invisibile pezzo di testo o immagine su un sito che viene
                usato per monitorare il traffico di un sito web. Per fare questo, diversi dati su di te vengono
                conservati utilizzando dei web beacon.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">5. Cookie</h2>

              <h3 className="text-lg font-serif font-bold text-heading mt-6 mb-3">5.1 Cookie tecnici o funzionali</h3>
              <p>
                Alcuni cookie assicurano il corretto funzionamento del sito e che le tue preferenze rimangano valide.
                Piazzando cookie funzionali, rendiamo più facile per te visitare il nostro sito web. In questo modo non
                devi inserire ripetutamente le stesse informazioni quando visiti il nostro sito web. Possiamo piazzare
                questi cookie senza il tuo consenso.
              </p>

              <h3 className="text-lg font-serif font-bold text-heading mt-6 mb-3">5.2 Cookie di marketing/tracciamento</h3>
              <p>
                I cookie di marketing/tracciamento sono cookie o qualsiasi altra forma di memorizzazione locale,
                utilizzati per creare profili utente per visualizzare pubblicità o per tracciare l&apos;utente su questo
                sito web o su diversi siti web per scopi di marketing simili.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">6. Cookie piazzati</h2>

              <div className="overflow-x-auto border border-border mb-6">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left px-4 py-3 font-semibold">Nome</th>
                      <th className="text-left px-4 py-3 font-semibold">Scadenza</th>
                      <th className="text-left px-4 py-3 font-semibold">Funzione</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#f9f9f9]"><td colSpan={3} className="px-4 py-2 font-semibold text-accent">Complianz (Funzionale)</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">complianz_consent_status</td><td className="px-4 py-2">365 giorni</td><td className="px-4 py-2">Salvare le preferenze del consenso ai cookie</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_marketing</td><td className="px-4 py-2">365 giorni</td><td className="px-4 py-2">Salvare le preferenze del consenso ai cookie</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">complianz_policy_id</td><td className="px-4 py-2">365 giorni</td><td className="px-4 py-2">Registrare l&apos;ID della cookie policy accettata</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_banner-status</td><td className="px-4 py-2">365 giorni</td><td className="px-4 py-2">Store if the cookie banner has been dismissed</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_policy_id</td><td className="px-4 py-2">365 giorni</td><td className="px-4 py-2">Registrare l&apos;ID della cookie policy accettata</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_statistics</td><td className="px-4 py-2">365 giorni</td><td className="px-4 py-2">Salvare le preferenze del consenso ai cookie</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_preferences</td><td className="px-4 py-2">365 giorni</td><td className="px-4 py-2">Salvare le preferenze del consenso ai cookie</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_functional</td><td className="px-4 py-2">365 giorni</td><td className="px-4 py-2">Salvare le preferenze del consenso ai cookie</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">cmplz_consented_services</td><td className="px-4 py-2">365 giorni</td><td className="px-4 py-2">Salvare le preferenze del consenso ai cookie</td></tr>
                    <tr className="bg-[#f9f9f9]"><td colSpan={3} className="px-4 py-2 font-semibold text-accent">Google Fonts (Pubblicità/Tracciamento)</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">Google Fonts API</td><td className="px-4 py-2">nessuno</td><td className="px-4 py-2">Richiedere l&apos;indirizzo IP dell&apos;utente</td></tr>
                    <tr className="bg-[#f9f9f9]"><td colSpan={3} className="px-4 py-2 font-semibold text-accent">YouTube (Pubblicità/Tracciamento, Funzionale)</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">GPS</td><td className="px-4 py-2">sessione</td><td className="px-4 py-2">Salvare i dati di posizione</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">YSC</td><td className="px-4 py-2">sessione</td><td className="px-4 py-2">Store and track interaction</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">PREF</td><td className="px-4 py-2">8 mesi</td><td className="px-4 py-2">Salvare le preferenze utente</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2 font-semibold" colSpan={3}>Funzionale</td></tr>
                    <tr className="border-t border-border"><td className="px-4 py-2">VISITOR_INFO1_LIVE</td><td className="px-4 py-2">6 mesi</td><td className="px-4 py-2">Larghezza di banda stimata</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">7. Consenso</h2>
              <p className="mb-3">
                Quando visiti il sito web per la prima volta, noi mostreremo un popup con una spiegazione dei cookie.
                Appena clicchi su &ldquo;Salva preferenze&rdquo;, dai il permesso a noi di usare le categorie di cookie e plugin
                come descritto in questa dichiarazione relativa ai popup e cookie. Puoi disabilitare i cookie attraverso
                il tuo browser, ma prendi in considerazione, che il nostro sito web potrebbe non funzionare più correttamente.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">8. Abilitare/disabilitare e cancellazione dei cookie</h2>
              <p>
                Puoi usare il tuo browser per cancellare automaticamente o manualmente i cookie. È anche possibile
                specificare che determinati cookie non possono essere piazzati. Un&apos;altra opzione è quella di modificare
                le impostazioni del tuo browser internet in modo da ricevere un messaggio ogni volta che viene inserito
                un cookie. Per ulteriori informazioni su queste opzioni, consultare le istruzioni nella sezione Guida
                del tuo browser. Ricorda che il nostro sito potrebbe non funzionare correttamente se tutti i cookie
                sono disabilitati. Se cancelli i cookie nel tuo browser, saranno ripositi nuovamente dopo il tuo
                permesso quando visiterai nuovamente il nostro sito.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">9. I tuoi diritti con rispetto ai dati personali</h2>
              <p className="mb-3">Hai i seguenti diritti relativi ai tuoi dati personali:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hai il diritto di sapere quando i tuoi dati personali sono necessari, cosa succede ad essi, quanto a lungo verranno mantenuti.</li>
                <li>Diritto di accesso: hai il diritto ad accedere ai tuoi dati personali dei quali siamo a conoscenza.</li>
                <li>Diritto di rettifica: hai il diritto di completare, correggere, cancellare o bloccare i tuoi dati personali quando lo desideri.</li>
                <li>Se ci darai il consenso per elaborare i tuoi dati, hai il diritto di revocare questo consenso e di eliminare i tuoi dati personali.</li>
                <li>Diritto di trasferire i tuoi dati: hai il diritto di richiedere tutti i tuoi dati dal controllore e trasferirli tutti quanti ad un altro controllore.</li>
                <li>Diritto di opposizione: hai il diritto di opporti al trattamento dei tuoi dati. Noi rispetteremo questa scelta, a meno che non ci siano delle basi valide per trattarli.</li>
              </ul>
              <p className="mt-3">
                Per esercitare questi diritti, non esitate a contattarci. Si prega di fare riferimento ai dettagli di
                contatto in fondo a questa Cookie Policy. Se hai un reclamo su come gestiamo i tuoi dati, vorremmo
                sentirti, ma hai anche il diritto di presentare un reclamo all&apos;autorità di vigilanza (l&apos;Autorità per
                la Protezione dei Dati).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">10. Dettagli di contatto</h2>
              <p className="mb-1">Per domande e/o commenti riguardo la Cookie Policy e questa dichiarazione, per favore contattaci usando i seguenti dati di contatto:</p>
              <div className="mt-3 p-4 bg-[#f9f9f9] border border-border text-xs">
                <p className="font-semibold text-heading">Studio CoLegal</p>
                <p>Piazza Madonna degli Aldobrandini, n. 8 &ndash; Firenze, Italia</p>
                <p>Sito web: https://studiocolegal.it</p>
                <p>Email: info@studiocolegal.it</p>
                <p>Numero di telefono: 055.289321</p>
              </div>
              <p className="mt-3 text-xs text-muted">
                Questa politica sui cookie è stata sincronizzata con cookiedatabase.org il 2 Luglio 2022.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
