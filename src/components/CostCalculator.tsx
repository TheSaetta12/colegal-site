"use client";

import { useState, useMemo, useRef } from "react";

const INDUSTRY_VALUES: Record<string, number> = {
  Energia: 400,
  "Bancario e Finanziario": 600,
  "Alimentare, Agricolo e Cosmetico": 700,
  "Sanitario e Farmaceutico": 500,
  "Tecnologia Informatica": 650,
  "Media e Telecomunicazioni": 800,
  "Vendita al Dettaglio e Beni di Consumo": 900,
};

const YEAR_VALUES: Record<string, number> = {
  "2013/2014": 1000,
  "2014/2015": 1200,
  "2015/2016": 1500,
  "2016/2017": 1900,
  "2017/2018": 2400,
  "2018/2019": 3000,
  "2019/2020": 3700,
  "2020/2021": 4500,
  "2021/2022": 5400,
  "2022/2023": 6400,
  "2023/2024": 7500,
  "2024/2025": 8700,
  "2025/2026": 10000,
};

export default function CostCalculator() {
  const [step, setStep] = useState<"calculator" | "contact">("calculator");
  const [industry, setIndustry] = useState("Energia");
  const [workers, setWorkers] = useState(18);
  const [income, setIncome] = useState("");
  const [year, setYear] = useState("2022/2023");
  const [resident, setResident] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const displayTotal = useMemo(() => {
    const indVal = INDUSTRY_VALUES[industry] ?? 0;
    const workVal = workers * 1 + 1;
    const incVal = (parseFloat(income) || 0) * 10;
    const yearVal = YEAR_VALUES[year] ?? 0;
    const resVal = resident ? 10 : 0;
    return indVal + workVal + incVal + yearVal * resVal;
  }, [industry, workers, income, year, resident]);

  const handleNext = () => {
    setStep("contact");
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="p-8 md:p-10" ref={contactRef}>
      <div className={`transition-opacity duration-500 ${step === "calculator" ? "block" : "hidden"}`}>
        <>
          <p className="text-xs font-semibold text-heading mb-6 uppercase tracking-wider">
            Invia i dettagli
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
            <div>
              <label className="block text-xs text-body/70 mb-1.5">Settore</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full border border-border bg-white px-4 py-3 text-sm text-heading focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition"
              >
                <option value="" disabled>Seleziona...</option>
                <option value="Energia">Energia</option>
                <option value="Bancario e Finanziario">Bancario e Finanziario</option>
                <option value="Alimentare, Agricolo e Cosmetico">Alimentare, Agricolo e Cosmetico</option>
                <option value="Sanitario e Farmaceutico">Sanitario e Farmaceutico</option>
                <option value="Tecnologia Informatica">Tecnologia Informatica</option>
                <option value="Media e Telecomunicazioni">Media e Telecomunicazioni</option>
                <option value="Vendita al Dettaglio e Beni di Consumo">Vendita al Dettaglio e Beni di Consumo</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-body/70 mb-1.5">N. approssimativo di lavoratori</label>
              <div className="flex items-center gap-3 pt-1">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={workers}
                  onChange={(e) => setWorkers(Number(e.target.value))}
                  className="w-full accent-accent h-1.5"
                />
                <span className="text-lg font-serif font-bold text-accent min-w-[3ch] text-center">{workers}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border my-6" />

          <p className="text-xs font-semibold text-heading mb-4 uppercase tracking-wider">
            Definisci il reddito aziendale
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
            <div>
              <label className="block text-xs text-body/70 mb-1.5">Inserisci il tuo reddito imponibile</label>
              <input
                type="text"
                placeholder="€"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full border border-border bg-white px-4 py-3 text-sm text-heading focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition placeholder:text-muted"
              />
            </div>
            <div>
              <label className="block text-xs text-body/70 mb-1.5">Seleziona l&apos;anno fiscale</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full border border-border bg-white px-4 py-3 text-sm text-heading focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition"
              >
                <option value="" disabled>Seleziona...</option>
                <option value="2013/2014">2013/2014</option>
                <option value="2014/2015">2014/2015</option>
                <option value="2015/2016">2015/2016</option>
                <option value="2016/2017">2016/2017</option>
                <option value="2017/2018">2017/2018</option>
                <option value="2018/2019">2018/2019</option>
                <option value="2019/2020">2019/2020</option>
                <option value="2020/2021">2020/2021</option>
                <option value="2021/2022">2021/2022</option>
                <option value="2022/2023">2022/2023</option>
                <option value="2023/2024">2023/2024</option>
                <option value="2024/2025">2024/2025</option>
                <option value="2025/2026">2025/2026</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs text-body/70 mb-1.5">Residente</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setResident(!resident)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 ${
                  resident ? "bg-accent" : "bg-border"
                }`}
                role="switch"
                aria-checked={resident}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
                    resident ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${resident ? "text-accent" : "text-body/70"}`}>
                {resident ? "Sì" : "No"}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-8 pt-5 border-t border-border gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-body/70 uppercase tracking-wider">Totale</span>
              <span className="text-3xl font-serif font-bold text-heading">
                €{displayTotal.toLocaleString()}
              </span>
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="w-full sm:w-auto border-2 border-accent text-accent px-8 py-3 text-xs font-semibold tracking-wider hover:bg-accent hover:text-white transition uppercase"
            >
              Avanti
            </button>
          </div>
        </>
      </div>

      <div className={`transition-opacity duration-500 ${step === "contact" ? "block" : "hidden"}`}>
        <>
          <p className="text-xs font-semibold text-heading mb-6 uppercase tracking-wider">
            Inserisci i tuoi dati
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="text" placeholder="Nome *" required className="w-full border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition" />
              </div>
              <div>
                <input type="email" placeholder="Email *" required className="w-full border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition" />
              </div>
              <div>
                <input type="tel" placeholder="Telefono" className="w-full border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition" />
              </div>
              <div>
                <input type="text" placeholder="Indirizzo" className="w-full border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition" />
              </div>
              <div>
                <input type="text" placeholder="Data preferita per il servizio" className="w-full border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition" />
              </div>
              <div>
                <select className="w-full border border-border bg-white px-4 py-3 text-sm text-heading focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition">
                  <option value="">Orario preferito per il servizio</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <textarea placeholder="Messaggio" rows={4} className="w-full border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition resize-none" />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
              <button
                type="button"
                onClick={() => setStep("calculator")}
                className="w-full sm:w-auto text-sm text-body/60 hover:text-heading transition"
              >
                &larr; Indietro
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto bg-accent text-white px-8 py-3 text-xs font-semibold tracking-wider hover:bg-accent-light transition uppercase"
              >
                Invia Richiesta
              </button>
            </div>
          </form>
        </>
      </div>
    </div>
  );
}
