"use client"

import React from "react"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/components/language-context"
import { AuthProvider } from "@/components/auth-context"
import { Navbar } from "@/components/navbar"
import { ThemeToggle } from "@/components/theme-toggle"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <AuthProvider>
                <LanguageProvider>
                    <Navbar />
                    <ThemeToggle />
                    <main className="pt-16">
                        {children}
                    </main>
                </LanguageProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}
