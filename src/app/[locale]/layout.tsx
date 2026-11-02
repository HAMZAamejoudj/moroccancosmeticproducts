import type { Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/app/globals.css";
import { getDictionary, hasLocale, Locale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import { buildPageMetadata } from "@/lib/seo";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    return {};
  }

  const dict = await getDictionary(locale as Locale);
  const homeMeta = dict.Meta.home;

  return buildPageMetadata({
    locale: locale as Locale,
    path: "",
    title: homeMeta.title,
    description: homeMeta.description,
    keywords: homeMeta.keywords,
  });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          precedence="default"
        />
      </head>
      <body className="font-sans antialiased text-primary bg-sand">
        <GoogleAnalytics />
        <LanguageProvider dict={dict} locale={locale}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
