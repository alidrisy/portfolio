import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/routing";

export default function RootPage() {
  // Redirect to the default locale page
  redirect(`/${defaultLocale}`);
}
