import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that incoming locale is supported
  const requested = await requestLocale;
  const locale =
    requested && locales.includes(requested as "en" | "ar")
      ? (requested as "en" | "ar")
      : defaultLocale;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
    timeZone: "UTC",
  };
});
