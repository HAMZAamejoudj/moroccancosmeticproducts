import { GB, FR, MA } from "country-flag-icons/react/3x2";
import type { Locale } from "@/dictionaries";

export type LanguageFlag = typeof GB;

export const languages: {
  code: Locale;
  label: string;
  Flag: LanguageFlag;
}[] = [
  { code: "en", label: "English", Flag: GB },
  { code: "fr", label: "Français", Flag: FR },
  { code: "ar", label: "العربية", Flag: MA },
];

export function getLanguage(code: string) {
  return languages.find((lang) => lang.code === code) ?? languages[0];
}
