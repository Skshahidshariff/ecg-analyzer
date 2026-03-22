import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
      {/* <div className="inline-flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full text-xs font-medium mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Announcing v2.0 AI ECG Recognition
      </div> */}
      <h1 className="text-5xl md:text-7xl font-light tracking-tight text-balance max-w-4xl mb-8 leading-[1.1]">
        Advanced ECG Analysis for Healthcare Platforms
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
        Upload your ECG and get the analysis
      </p>
    </section>
  )
}
