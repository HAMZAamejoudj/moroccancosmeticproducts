"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/context/LanguageContext";
import { getLanguage, languages, type LanguageFlag } from "@/lib/languages";

function FlagBadge({ Flag, className }: { Flag: LanguageFlag; className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden rounded-sm shrink-0 ${className ?? ""}`}>
      <Flag className="h-3.5 w-auto" />
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { dict, locale } = useTranslation();
  const currentLanguage = getLanguage(locale);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
    setIsOpen(false);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.includes("/#")) {
      const hash = href.split("#")[1];
      const element = document.getElementById(hash);
      if (element) {
        e.preventDefault();
        setIsOpen(false);
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    } else {
      setIsOpen(false);
    }
  };

  const links = [
    { name: dict.Navbar.home, href: `/${locale}` },
    { name: dict.Navbar.about, href: `/${locale}/about` },
    { name: dict.Navbar.benefits, href: `/${locale}/benefits-moroccan-beauty-products` },
    { name: dict.Navbar.blog, href: `/${locale}/blog` },
    { name: dict.Navbar.contact, href: `/${locale}/contact` },
  ];

  const languageButtonClass =
    "text-primary border-primary/20 bg-primary/5 hover:bg-primary/10";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-primary/10 py-3 transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            <div className="shrink-0 relative h-14 sm:h-16 w-36 sm:w-44 md:w-48 lg:w-52 transition-transform duration-300 hover:scale-105 z-10">
              <Link href={`/${locale}`} onClick={(e) => handleScrollTo(e as any, `/${locale}`)} className="block relative h-full w-full">
                <Image
                  src="/assets/img/moroccan-cosmetic-logo.webp"
                  alt="Moroccan Cosmetic Products"
                  fill
                  sizes="(max-width: 640px) 150px, (max-width: 1024px) 190px, 220px"
                  className="object-contain object-left rtl:object-right transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-10 absolute left-1/2 -translate-x-1/2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e as any, link.href)}
                  className="relative font-medium text-base tracking-wider transition-colors duration-300 py-2 group whitespace-nowrap text-primary hover:text-accent"
                >
                  {link.name}
                  <span className="absolute bottom-0 start-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4 z-10">
              <a
                href="https://wa.me/212641517831"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg bg-[#25D366] text-white hover:bg-[#20ba59]"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>{dict.Navbar.whatsapp}</span>
              </a>

              <div className="relative group">
                <button
                  type="button"
                  aria-label="Select language"
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold tracking-wider transition-all border ${languageButtonClass}`}
                >
                  <FlagBadge Flag={currentLanguage.Flag} />
                  <span className="uppercase">{currentLanguage.code}</span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-75" />
                </button>
                <div className="absolute end-0 mt-2 min-w-[9.5rem] bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-primary/5">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => switchLocale(lang.code)}
                      className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-xs hover:bg-sand transition-colors font-semibold text-start ${
                        locale === lang.code ? "text-accent font-bold bg-sand/60" : "text-primary"
                      }`}
                    >
                      <FlagBadge Flag={lang.Flag} className="rounded-[3px]" />
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center z-10">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-colors focus:outline-none text-primary hover:bg-sand"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden bg-white shadow-2xl border-b border-sand py-6 px-4"
          >
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e as any, link.href)}
                  className="block text-primary hover:text-accent font-medium text-lg py-2 px-3 rounded-lg hover:bg-sand transition-all"
                >
                  {link.name}
                </Link>
              ))}

              <div className="h-px bg-primary/10 my-2" />

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary/50 px-1">
                  {dict.Navbar.language}
                </span>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => switchLocale(lang.code)}
                      className={`flex flex-1 items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                        locale === lang.code
                          ? "bg-accent border-accent text-primary"
                          : "bg-transparent border-primary/10 text-primary hover:bg-sand"
                      }`}
                    >
                      <FlagBadge Flag={lang.Flag} className="rounded-[3px]" />
                      <span>{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
