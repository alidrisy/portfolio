import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "@/i18n/routing";

export default getRequestConfig(async ({ locale }) => {
  // Validate that incoming locale is supported
  const validLocale =
    locale && locales.includes(locale as "en" | "ar")
      ? (locale as "en" | "ar")
      : defaultLocale;

  const messages = (await import(`../../messages/${validLocale}.json`))
    .default;

  return {
    messages,
    timeZone: "UTC",
  };
});
