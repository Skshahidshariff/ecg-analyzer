"use client"

import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            title={t.navbar.toggleDarkMode}
            className="fixed bottom-8 left-8 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 z-40"
            aria-label={t.navbar.toggleDarkMode}
        >
            {theme === "dark" ? (
                <Sun className="h-6 w-6" />
            ) : (
                <Moon className="h-6 w-6" />
            )}
        </button>
    )
}
