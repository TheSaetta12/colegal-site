"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

const languages = [
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

type Props = {
  scrolled?: boolean;
};

export default function LanguageSwitcher({ scrolled }: Props) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex gap-0.5">
      {languages.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => router.replace(pathname, { locale: lang.code as any })}
            className={`text-xs font-semibold px-1.5 py-1 rounded transition ${
              isActive
                ? "text-accent"
                : scrolled
                  ? "text-muted hover:text-body"
                  : "text-white/60 hover:text-white"
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
