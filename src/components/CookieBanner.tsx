"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function CookieBanner() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-white/10 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-white/70">
          <p className="font-semibold text-white text-sm mb-1">{t("title")}</p>
          <p>{t("desc")}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleAccept}
            className="bg-accent text-white px-5 py-2 text-xs font-semibold hover:bg-accent-light transition uppercase tracking-wider"
          >
            {t("accetta")}
          </button>
          <button
            onClick={() => { localStorage.setItem("cookie-consent", "rejected"); setVisible(false); }}
            className="border border-white/30 text-white/70 px-4 py-2 text-xs hover:bg-white/10 transition uppercase tracking-wider"
          >
            {t("nega")}
          </button>
        </div>
      </div>
    </div>
  );
}
