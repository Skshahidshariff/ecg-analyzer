"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-context"
import type { Language } from "@/lib/translations"

// Supported languages
const LANGUAGES: { code: Language; name: string }[] = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "pt", name: "Português" },
    { code: "hi", name: "हिन्दी" },
    { code: "zh", name: "中文" },
    { code: "ja", name: "日本語" },
    { code: "ru", name: "Русский" },
    { code: "ar", name: "العربية" },
]

export function GoogleTranslate() {
    const { language, setLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang)
        setIsOpen(false)
    }

    const currentLanguageName = LANGUAGES.find((l) => l.code === language)?.name || "English"

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-accent text-sm font-medium transition-colors"
                aria-label="Select language"
            >
                <span className="w-4 h-4">🌐</span>
                <span className="hidden sm:inline">{currentLanguageName}</span>
                <span className="inline sm:hidden">{language.toUpperCase()}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                                language === lang.code
                                    ? "bg-primary text-primary-foreground font-semibold"
                                    : "hover:bg-accent"
                            }`}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
