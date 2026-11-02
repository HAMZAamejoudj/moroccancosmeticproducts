"use client";

import { useTranslation } from "@/context/LanguageContext";
import { Sprout, BadgeCheck, Handshake, Globe, PackageCheck, FlaskConical } from "lucide-react";

export default function TrustTicker() {
  const { locale } = useTranslation();

  const items = [
    {
      icon: Sprout,
      en: "100% Pure and Organic",
      fr: "100% Pur et Biologique",
      ar: "نقي وعضوي 100٪",
    },
    {
      icon: BadgeCheck,
      en: "ISO 22716 and GMP Certified",
      fr: "Certifié ISO 22716 et BPF",
      ar: "معتمد ISO 22716 و GMP",
    },
    {
      icon: Handshake,
      en: "Direct Cooperative Sourcing",
      fr: "Approvisionnement Direct Coopératives",
      ar: "مصدر مباشر من التعاونيات",
    },
    {
      icon: Globe,
      en: "Worldwide Door-to-Door Shipping",
      fr: "Livraison Mondiale Porte-à-Porte",
      ar: "شحن دولي حتى باب المستودع",
    },
    {
      icon: PackageCheck,
      en: "Turnkey Private Label (OEM / ODM)",
      fr: "Marque Blanche Clé en Main (OEM)",
      ar: "علامة خاصة متكاملة (OEM/ODM)",
    },
    {
      icon: FlaskConical,
      en: "Lab Tested (CoA and SDS Guaranteed)",
      fr: "Analysé en Labo (CoA et FDS Garantis)",
      ar: "فحص مخبري (CoA و SDS مضمون)",
    },
  ];

  return (
    <div className="bg-primary text-cream border-y border-white/10 py-4.5 overflow-hidden relative shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const text = locale === "fr" ? item.fr : locale === "ar" ? item.ar : item.en;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2.5 text-center px-1.5 py-1 group"
              >
                <Icon className="w-5 h-5 text-accent shrink-0 stroke-[2.2] transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xs sm:text-[13px] font-semibold text-white/95 leading-tight">
                  {text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

