import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: `Privacy Policy | ${t("title")}`,
    description: t("description"),
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-sm text-body/80 leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">
                Informazioni sul Trattamento dei Dati Personali
              </h2>
              <p className="mb-3">
                degli utenti che consultano il sito web dello Studio CoLegal Avvocati Firenze degli Avvocati
                Pietro Messina, Orsola Papàsogli Tacca, Ascanio Ruschi ai sensi dell&apos;articolo 13 del Regolamento (UE) 2016/679.
              </p>
              <p>
                Ai sensi del Regolamento (UE) 2016/679 (di seguito &ldquo;Regolamento&rdquo;), questa pagina descrive le modalità
                di trattamento dei dati personali degli utenti (di seguito &ldquo;Utenti&rdquo;) che consultano il sito web dello
                Studio CoLegal Avvocati Firenze degli Avvocati Pietro Messina, Orsola Papàsogli Tacca e Ascanio Ruschi
                (di seguito &ldquo;Studio CoLegal&rdquo;) accessibile per via telematica al seguente indirizzo: www.studiocolegal.it.
              </p>
            </div>

            <div>
              <p className="mb-3">
                Il sito www.studiocolegal.it è stato sviluppato per fornire informazioni sui Professionisti che compongono
                lo Studio CoLegal, sulle tipologie di attività e servizi forniti, nonché per dare la possibilità agli
                interessati di inviare richieste di informazioni, anche finalizzate all&apos;eventuale conferimento di
                incarichi professionali.
              </p>
              <p>
                Il sito presenta infine una sezione con indicato l&apos;indirizzo email a cui gli Utenti possono volontariamente
                inviare la propria candidatura se interessati ad una collaborazione con lo Studio CoLegal.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">
                Titolare del trattamento
              </h2>
              <p className="mb-3">
                L&apos;informativa è resa dal Titolare del trattamento in regime di contitolarità (avvocati Pietro Messina,
                Orsola Papasogli Tacca e Ascanio Ruschi con studio in Firenze, Piazza Madonna degli Aldobrandini, n. 8,
                email: info@studiocolegal.it; tel: 055.289321) solo per il sito Internet www.studiocolegal.it e non anche
                per altri siti web eventualmente consultati.
              </p>
              <p>
                Per esercitare i diritti previsti dagli artt. 15 e ss. del GDPR, gli Utenti possono rivolgersi al Titolare
                inviando una email all&apos;indirizzo: info@studiocolegal.it. La comunicazione deve contenere il nominativo,
                l&apos;indirizzo, indirizzo email e/o i numeri di telefono, al fine di permettere la corretta gestione della richiesta.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">
                Dati personali raccolti
              </h2>
              <p className="mb-3">I dati personali raccolti dal Titolare del trattamento sono:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>
                  dati tecnici di navigazione, quali, a titolo di esempio: browser utilizzato, ora e luogo di accesso,
                  tipologia di dispositivo e di sistema operativo utilizzati per visitare il sito, tempo trascorso
                  all&apos;interno del sito, numero e sequenza delle pagine visitate all&apos;interno del sito; tali dati non sono
                  raccolti per identificare o registrare l&apos;interessato, ma indirettamente, per associazione con altri dati
                  raccolti dal Titolare, potrebbero consentire la Sua identificazione;
                </li>
                <li>
                  i dati identificativi e di contatto degli Utenti (es. nome e cognome, indirizzo email, numero di telefono)
                  inclusi nelle comunicazioni e nelle richieste trasmesse allo Studio CoLegal, nonché gli ulteriori dati
                  necessari a rispondere e ad eseguire le specifiche richieste degli Utenti.
                </li>
              </ul>
              <p>
                Gli Utenti dovranno comunicare solo dati aggiornati, pertinenti e non eccedenti le specifiche finalità del
                trattamento. Nel caso in cui gli Utenti si trovino nella necessità di comunicare dati di terzi, essi
                dovranno assolvere gli adempimenti di legge in materia di tutela dei dati personali e, in particolare,
                informare opportunamente e tempestivamente i terzi della comunicazione dei loro dati al Titolare del
                trattamento, nonché delle caratteristiche del trattamento da parte dello stesso Titolare del trattamento.
                Eventuali dati non necessari saranno immediatamente cancellati o anonimizzati. I dati sono raccolti al
                momento di accesso e di permanenza sul sito o, successivamente, in quanto forniti dall&apos;interessato.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-heading mb-4">
                Finalità del trattamento dei dati personali
              </h2>
              <p className="mb-3">Il trattamento dei dati personali è finalizzato a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  garantire l&apos;accesso al sito internet e il miglioramento dell&apos;esperienza di navigazione;
                </li>
                <li>
                  consentire l&apos;invio di richieste di informazione dirette ai singoli professionisti dello Studio CoLegal,
                  anche finalizzate all&apos;eventuale conferimento di incarichi professionali. I Dati saranno trattati per
                  rispondere alle richieste che gli Utenti potranno trasmettere ai recapiti disponibili sul Sito: a tal
                  fine, è necessario che gli Utenti comunichino i loro dati di contatto in quanto, in mancanza, non sarà
                  possibile allo Studio CoLegal dare loro riscontro.
                </li>
                <li>
                  valutare le eventuali candidature ricevute. Nel Sito è presente uno spazio che contiene una sezione con
                  indicato l&apos;indirizzo email cui gli Utenti interessati ad una collaborazione con lo Studio CoLegal possono
                  inviare volontariamente la loro candidatura. In tal caso, i dati personali vengono trattati esclusivamente
                  per valutare la Candidatura pervenuta. Per il trattamento di tali dati personali è presente la relativa
                  informativa ex art. 13 GDPR.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
