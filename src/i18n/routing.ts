import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en", "fr"],
  defaultLocale: "it",
  localePrefix: "always",
});
