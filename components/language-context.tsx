"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations, Language } from "@/lib/translations";

type TranslationType = typeof translations[keyof typeof translations];

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Initialize with 'en' as default
    const [language, setLanguageState] = useState<Language>("en");
    const [isHydrated, setIsHydrated] = useState(false);

    // Load from localStorage once on mount (only on client)
    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && translations[savedLang]) {
            setLanguageState(savedLang);
        }
        setIsHydrated(true);
    }, []);

    const changeLanguage = (lang: Language) => {
        if (translations[lang]) {
            setLanguageState(lang);
            localStorage.setItem("language", lang);
        }
    };

    // Use 'en' as fallback if not yet hydrated
    const t = translations[language] || translations.en;

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
