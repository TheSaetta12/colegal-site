"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

type FormData = {
  nome: string;
  email: string;
  telefono: string;
  oggetto: string;
  messaggio: string;
};

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  dark?: boolean;
};

export default function ContactForm({ dark }: Props) {
  const t = useTranslations("contatti.form");
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefono: "",
    oggetto: "",
    messaggio: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Errore invio");

      setStatus("success");
      setFormData({ nome: "", email: "", telefono: "", oggetto: "", messaggio: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const isSubmitting = status === "loading";

  const inputBase = dark
    ? "w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
    : "w-full border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition";

  const selectBase = dark
    ? "w-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition"
    : "w-full border border-border bg-white px-4 py-3 text-sm text-heading focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="nome"
          type="text"
          placeholder={t("nome")}
          required
          value={formData.nome}
          onChange={handleChange}
          className={inputBase}
        />
        <input
          name="email"
          type="email"
          placeholder={t("email")}
          required
          value={formData.email}
          onChange={handleChange}
          className={inputBase}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="telefono"
          type="tel"
          placeholder={t("telefono")}
          value={formData.telefono}
          onChange={handleChange}
          className={inputBase}
        />
        <select
          name="oggetto"
          value={formData.oggetto}
          onChange={handleChange}
          className={selectBase}
        >
          <option value="" className={dark ? "text-white/40 bg-primary" : "text-muted"}>{t("scegli")}</option>
          <option className={dark ? "bg-primary" : ""}>Diritto di impresa e commerciale</option>
          <option className={dark ? "bg-primary" : ""}>Diritto industriale e proprietà intellettuale</option>
          <option className={dark ? "bg-primary" : ""}>Diritto immobiliare e delle costruzioni</option>
          <option className={dark ? "bg-primary" : ""}>Diritto bancario</option>
          <option className={dark ? "bg-primary" : ""}>Enti del terzo settore - no profit</option>
          <option className={dark ? "bg-primary" : ""}>Privacy</option>
        </select>
      </div>
      <textarea
        name="messaggio"
        placeholder={t("messaggio")}
        rows={5}
        required
        value={formData.messaggio}
        onChange={handleChange}
        className={`${inputBase} resize-none`}
      />
      <label className={`flex items-start gap-2 text-xs ${dark ? "text-white/60" : "text-muted"}`}>
        <input type="checkbox" required className="mt-0.5 accent-accent" />
        <span>{t("privacy")}</span>
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-white px-6 py-3 text-sm font-semibold tracking-widest hover:bg-accent-light transition uppercase disabled:opacity-50"
      >
        {status === "loading" ? "Invio..." : status === "success" ? "✓ Inviato" : status === "error" ? "Errore, riprova" : t("invia")}
      </button>
    </form>
  );
}
