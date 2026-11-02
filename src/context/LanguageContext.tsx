"use client";

import React, { createContext, useContext } from "react";

interface LanguageContextProps {
  dict: any;
  locale: string;
}

const LanguageContext = createContext<LanguageContextProps | null>(null);

export function LanguageProvider({
  children,
  dict,
  locale,
}: {
  children: React.ReactNode;
  dict: any;
  locale: string;
}) {
  return (
    <LanguageContext.Provider value={{ dict, locale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
