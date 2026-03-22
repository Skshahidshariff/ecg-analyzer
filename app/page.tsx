"use client"

import { Hero } from "@/components/hero" // Might need adaptation or just hide text in it
import { ECGAnalyzer } from "@/components/ecg-analyzer"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-context"

// If Hero contains text, I should probably pass props or move text here.
// But Hero component usually has its own text. I'll check Hero component later.
// For now, I'll update the text in page.tsx

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <section id="analyze" className="py-8 px-6 md:px-12 lg:px-24 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-4">{t.home.startAnalysis}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.home.uploadText}
            </p>
          </div>
          <ECGAnalyzer />
        </div>
      </section>
      <Footer />
    </main>
  )
}
