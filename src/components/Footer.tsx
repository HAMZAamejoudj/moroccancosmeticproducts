"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

function FooterLogoCard({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="group w-full self-start">
      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:p-6 w-full transition-all duration-300 ease-out group-hover:bg-white group-hover:border-white/30 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)] group-hover:-translate-y-1">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

export default function Footer() {
  const { dict, locale } = useTranslation();

  const paymentTitle = locale === "fr" ? "Moyens de Paiement" : locale === "ar" ? "طرق الدفع" : "Payment Methods";
  const partnersTitle = locale === "fr" ? "Nos Partenaires" : locale === "ar" ? "شركاؤنا" : "Our Partners";

  const address = locale === "fr" ? (
    <>
      <span>Lot 377 N°3/6 sidi ghanem</span>
      <br />
      <span>Zone industrielle, 40110 Marrakech</span>
      <br />
      <em className="text-xs text-cream/50 block mt-1">Notre usine est située à Agadir</em>
    </>
  ) : locale === "ar" ? (
    <>
      <span>بقعة 377 رقم 3/6 سيدي غانم</span>
      <br />
      <span>المنطقة الصناعية، 40110 مراكش</span>
      <br />
      <em className="text-xs text-cream/50 block mt-1">مصنعنا يقع في أكادير</em>
    </>
  ) : (
    <>
      <span>Lot 377 N°3/6 sidi ghanem</span>
      <br />
      <span>Zone industriel, 40110 Marrakesh</span>
      <br />
      <em className="text-xs text-cream/50 block mt-1">Our factory is located in Agadir</em>
    </>
  );

  return (
    <footer id="contact" className="bg-gradient-to-b from-[#181611] to-[#100F0C] text-cream pt-20 pb-10 relative overflow-hidden border-t border-white/10">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Branding and Socials */}
          <div className="space-y-6 flex flex-col items-start text-start">
            {/* Enlarged Logo Card */}
            <div className="relative h-24 sm:h-28 w-56 sm:w-64 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg border border-white/30">
              <Image
                src="/assets/img/moroccan-cosmetic-logo.webp"
                alt="Moroccan Cosmetics Wholesale"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 224px, 256px"
                priority
              />
            </div>
            <p className="text-sm text-cream/70 leading-relaxed max-w-sm">
              {dict.Footer.description}
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/moroccanorganic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors text-cream"
                aria-label="Instagram Profile"
              >
                <i className="fab fa-instagram text-lg" />
              </a>
              <a
                href="https://www.tiktok.com/@moroccanorganica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors text-cream"
                aria-label="Facebook Profile"
              >
                <i className="fab fa-facebook-f text-lg" />
              </a>
              <a
                href="https://www.tiktok.com/@moroccanorganica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors text-cream"
                aria-label="TikTok Profile"
              >
                <i className="fab fa-tiktok text-lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Payment Methods */}
          <div className="flex flex-col items-start text-start">
            <p className="text-lg font-serif font-bold mb-6 text-cream border-s-2 border-accent ps-3">
              {paymentTitle}
            </p>
            <FooterLogoCard src="/image/payment-methods.webp" alt={paymentTitle} width={208} height={213} />
          </div>

          {/* Column 3: Logistics Partners */}
          <div className="flex flex-col items-start text-start">
            <p className="text-lg font-serif font-bold mb-6 text-cream border-s-2 border-accent ps-3">
              {partnersTitle}
            </p>
            <FooterLogoCard src="/image/shipping-partners.webp" alt={partnersTitle} width={208} height={213} />
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col items-start text-start space-y-6">
            <p className="text-lg font-serif font-bold mb-6 text-cream border-s-2 border-accent ps-3">
              {dict.Footer.contact_info}
            </p>
            <ul className="space-y-4 text-sm text-cream/80 w-full">
              <li className="flex items-start gap-3 text-start">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  {address}
                </div>
              </li>
              <li className="flex items-center gap-3 text-start">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+212641517831" className="hover:text-accent transition-colors" dir="ltr">
                  0641517831
                </a>
              </li>
              <li className="flex items-center gap-3 text-start">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:inquiry@moroccanorganica.com"
                  className="hover:text-accent transition-colors break-all"
                >
                  inquiry@moroccanorganica.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs md:text-sm text-cream/40">
          <p>&copy; {new Date().getFullYear()} Moroccan Cosmetics products. {dict.Footer.rights_reserved}</p>
        </div>
      </div>
    </footer>
  );
}
