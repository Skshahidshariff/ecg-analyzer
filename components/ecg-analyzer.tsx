"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Upload, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-context"

export function ECGAnalyzer() {
  const [file, setFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const { t, language } = useLanguage()

  // Restore state from sessionStorage on component mount
  useEffect(() => {
    const savedImagePreview = sessionStorage.getItem("ecg_imagePreview")
    const savedResult = sessionStorage.getItem("ecg_analysisResult")
    const savedFileName = sessionStorage.getItem("ecg_fileName")

    if (savedImagePreview) {
      setImagePreview(savedImagePreview)
    }
    if (savedResult) {
      setResult(JSON.parse(savedResult))
    }
    if (savedFileName) {
      setFileName(savedFileName)
    }
  }, [])

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0]
      
      // Check file type
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"]
      if (!allowedTypes.includes(uploadedFile.type)) {
        alert("❌ Invalid file type. Please upload only JPEG, JPG, or PNG images.")
        return
      }
      
      // Check file size (10MB = 10485760 bytes)
      const maxSize = 10 * 1024 * 1024 // 10MB
      if (uploadedFile.size > maxSize) {
        alert(`❌ File size too large. Maximum allowed size is 10MB. Your file is ${(uploadedFile.size / (1024 * 1024)).toFixed(2)}MB.`)
        return
      }
      
      setFile(uploadedFile)
      setFileName(uploadedFile.name)
      setResult(null)
      
      // Clear saved result from sessionStorage
      sessionStorage.removeItem("ecg_analysisResult")
      
      // Create image preview
      const reader = new FileReader()
      reader.onloadend = () => {
        const preview = reader.result as string
        setImagePreview(preview)
        // Save to sessionStorage
        sessionStorage.setItem("ecg_imagePreview", preview)
        sessionStorage.setItem("ecg_fileName", uploadedFile.name)
      }
      reader.readAsDataURL(uploadedFile)
    }
  }

  const runAnalysis = async () => {
    if (!file) return
    setAnalyzing(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      // Include user info if logged in
      const email = localStorage.getItem("email")
      const username = localStorage.getItem("username")

      if (email && username) {
        formData.append("user_email", email)
        formData.append("username", username)
      }

      // Include selected language
      formData.append("language", language)

      // Get user's timezone offset (in minutes from UTC)
      const timezoneOffset = new Date().getTimezoneOffset()

      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
        headers: {
          "X-Timezone-Offset": String(-timezoneOffset), // Negate because getTimezoneOffset returns opposite sign
        }
      })

      // Handle different response statuses
      if (!response.ok) {
        let errorMessage = "Failed to analyze image."
        
        try {
          const errorData = await response.json()
          // Backend returns detailed error messages
          if (errorData.detail) {
            errorMessage = errorData.detail
          }
        } catch {
          // If can't parse JSON, use status-based message
          if (response.status === 400) {
            errorMessage = "❌ Please upload a valid ECG report image. Make sure the image shows ECG waves clearly."
          } else if (response.status === 503) {
            errorMessage = "⚠️ Backend server is not ready. Please try again in a moment."
          } else if (response.status === 500) {
            errorMessage = "⚠️ Server error. Please ensure the backend server is running."
          }
        }

        alert(errorMessage)
        return
      }

      const data = await response.json()
      setResult(data)
      // Save result to sessionStorage
      sessionStorage.setItem("ecg_analysisResult", JSON.stringify(data))

      // Show save status if user is logged in
      if (data.saved) {
        console.log("✅ Prediction saved to your history!")
      }
    } catch (error) {
      console.error("Analysis failed:", error)
      if (error instanceof TypeError && error.message.includes("fetch")) {
        alert("❌ Cannot connect to server. Please ensure the backend is running at http://127.0.0.1:8000")
      } else {
        alert("❌ An unexpected error occurred. Please try again.")
      }
    } finally {
      setAnalyzing(false)
    }
  }

  return (
    <div className="space-y-8">
      <Card className="border-dashed border-2 bg-transparent overflow-hidden">
        <CardContent className="p-0">
          <label className="flex flex-col items-center justify-center py-20 cursor-pointer hover:bg-muted/30 transition-colors">
            <input type="file" className="hidden" onChange={handleUpload} accept=".jpg,.jpeg,.png,image/jpeg,image/png" />
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6">
              <Upload className="w-8 h-8 text-primary/60" />
            </div>
            <p className="text-lg font-medium mb-1">{file ? file.name : t.home.clickUpload}</p>
            <p className="text-muted-foreground text-sm">{t.home.fileType}</p>
          </label>
        </CardContent>
      </Card>

      {imagePreview && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <Card className="border-2 bg-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-black/5 dark:bg-black/20 flex items-center justify-center min-h-96">
                <img 
                  src={imagePreview} 
                  alt="Uploaded ECG" 
                  className="max-w-full max-h-96 object-contain p-4"
                />
              </div>
            </CardContent>
          </Card>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">✓ Image selected: <span className="font-medium text-foreground">{fileName}</span></p>
            <button
              onClick={() => {
                setFile(null)
                setImagePreview(null)
                setFileName(null)
                setResult(null)
                // Clear sessionStorage
                sessionStorage.removeItem("ecg_imagePreview")
                sessionStorage.removeItem("ecg_fileName")
                sessionStorage.removeItem("ecg_analysisResult")
              }}
              className="text-sm text-destructive hover:text-destructive/80 font-medium"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={runAnalysis}
          disabled={!file || analyzing}
          className="rounded-full px-12 h-14 text-lg"
        >
          {analyzing ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              {t.home.processing}
            </>
          ) : (
            t.home.runAnalysis
          )}
        </Button>
      </div>

      {result && (
        <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-6">
            {/* <CheckCircle2 className="w-6 h-6 text-green-500" /> */}
            <h3 className="text-2xl font-light">{t.results.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background p-6 rounded-2xl border">
              <p className="text-muted-foreground text-sm font-medium mb-1">{t.results.heartRate}</p>
              <p className="text-3xl font-light">{result.heartRate}</p>
            </div>
            <div className="bg-background p-6 rounded-2xl border">
              <p className="text-muted-foreground text-sm font-medium mb-1">{t.results.rhythm}</p>
              <p className="text-2xl font-light text-pretty">{result.rhythm}</p>
            </div>
            <div className="bg-background p-6 rounded-2xl border">
              <p className="text-muted-foreground text-sm font-medium mb-1">{t.results.confidence}</p>
              <p className="text-3xl font-light">{result.confidence}</p>
            </div>
          </div>

          <div className="bg-background p-8 rounded-2xl border">
            <div className="flex justify-between items-start mb-6">
              <h4 className="font-medium text-lg">{t.results.clinicalSummary}</h4>
              {/* <Badge variant="outline">AI Generated</Badge> */}
            </div>
<p className="text-muted-foreground leading-relaxed text-lg mb-8 italic whitespace-pre-line">
  {result.summary}
</p>
            <div className="grid grid-cols-3 gap-4 border-t pt-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{t.results.prInterval}</p>
                <p className="text-lg">{result.intervals.pr}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{t.results.qrsDuration}</p>
                <p className="text-lg">{result.intervals.qrs}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{t.results.qtc}</p>
                <p className="text-lg">{result.intervals.qtc}</p>
              </div>
            </div>
          </div>

          {/* YouTube Educational Resources */}
          {result.youtubeResources && result.youtubeResources.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-light mb-6">{t.results.resources}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.youtubeResources.map((video: any, index: number) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      if (video.url) {
                        console.log('Opening YouTube video:', video.url);
                        window.open(video.url, '_blank', 'noopener,noreferrer');
                      } else {
                        console.log('No URL found for video:', video);
                      }
                    }}
                    className="bg-background rounded-lg border overflow-hidden hover:shadow-md transition-all hover:border-primary/50 group cursor-pointer p-4 flex flex-col justify-between hover:bg-muted/30 text-left h-full"
                  >
                    <div>
                      <div className="flex items-start gap-2 mb-3">
                        <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.175c-3.674-1.002-9.156-1.002-12.83 0C5.021 4.177 4.482 5.645 4.482 8v8c0 2.355.539 3.823 2.303 4.825 3.674 1.002 9.156 1.002 12.83 0 1.764-1.002 2.303-2.47 2.303-4.825V8c0-2.355-.539-3.823-2.303-4.825zM9.75 15.75V8.25L15.75 12l-6 3.75z" />
                        </svg>
                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">{video.title}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{video.description}</p>
                    </div>
                    <div className="text-xs text-primary font-medium group-hover:underline">
                      Watch on YouTube →
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-muted">
                <p className="text-sm text-muted-foreground">
                  <strong>📺 Resources:</strong> Click any video to learn more on YouTube. Always consult a healthcare professional for medical advice.
                </p>
              </div>
            </div>
          )}

          {/* <div className="mt-8 flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
            <AlertCircle className="w-5 h-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Note: This is an AI-generated analysis and should not be used as a primary diagnostic tool. Always consult
              a medical professional.
            </p>
          </div> */}
        </div>
      )}
    </div>
  )
}