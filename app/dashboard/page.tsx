"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2, History, ArrowLeft, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-context"

interface Feedback {
    username: string
    message: string
    created_at?: string
}

interface PredictionData {
    user_email: string
    username: string
    prediction_data: {
        rhythm: string
        confidence: string
        summary: string
        heartRate: string
        intervals: {
            pr: string
            qrs: string
            qtc: string
        }
    }
    image_filename: string
    rhythm: string
    confidence: string
    created_at: string
    timezone_offset?: number
}

export default function DashboardPage() {
    const router = useRouter()
    const { t } = useLanguage()
    
    // Feedback state
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
    const [message, setMessage] = useState("")
    const [feedbackLoading, setFeedbackLoading] = useState(false)
    
    // History state
    const [predictions, setPredictions] = useState<PredictionData[]>([])
    const [historyLoading, setHistoryLoading] = useState(true)
    const [error, setError] = useState("")
    
    // User state
    const [user, setUser] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)

    useEffect(() => {
        const username = localStorage.getItem("username")
        const userEmail = localStorage.getItem("email")
        
        if (!username || !userEmail) {
            router.push("/login")
            return
        }
        
        setUser(username)
        setEmail(userEmail)
        
        fetchFeedbacks()
        fetchHistory(userEmail)
    }, [router])

    const fetchFeedbacks = async () => {
        try {
            const res = await fetch("http://127.0.0.1:8000/feedback")
            if (res.ok) {
                const data = await res.json()
                setFeedbacks(data.feedbacks)
            }
        } catch (error) {
            console.error("Failed to fetch feedback", error)
        }
    }

    const fetchHistory = async (userEmail: string) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/predictions/history/${userEmail}`)
            if (!response.ok) {
                throw new Error("Failed to fetch predictions")
            }
            const data = await response.json()
            setPredictions(data.predictions || [])
        } catch (err: any) {
            setError(err.message)
        } finally {
            setHistoryLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!user) {
            alert("Please login to submit feedback")
            return
        }
        setFeedbackLoading(true)
        try {
            const res = await fetch("http://127.0.0.1:8000/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: user, message }),
            })

            if (res.ok) {
                setMessage("")
                fetchFeedbacks()
                alert(t.feedback?.success || "Feedback submitted!")
            } else {
                alert(t.feedback?.error || "Error submitting feedback")
            }
        } catch (error) {
            console.error(error)
            alert("Error submitting feedback")
        } finally {
            setFeedbackLoading(false)
        }
    }

    const formatDate = (isoString: string, timezoneOffset: number = 0) => {
        const date = new Date(isoString)
        const utcTime = date.getTime()
        const localTime = new Date(utcTime + timezoneOffset * 60 * 1000)
        
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        }
        
        return localTime.toLocaleString("en-US", options)
    }

    return (
        <main className="min-h-screen flex flex-col">
            <div className="flex-1 container max-w-7xl mx-auto py-8 px-6">
                {/* Header */}
                <div className="mb-8">
                    <Button variant="ghost" size="sm" asChild className="mb-4">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t.history?.backToHome || "Back to Home"}
                        </Link>
                    </Button>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column: Feedback */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <MessageSquare className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-light">{t.feedback?.title || "Feedback"}</h2>
                        </div>

                        {/* Feedback Form */}
                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle className="text-lg">{t.feedback?.sendFeedback || "Send Feedback"}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <Textarea
                                        placeholder={`${t.feedback?.message || "Message"}...`}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        rows={3}
                                    />
                                    <Button type="submit" disabled={feedbackLoading} className="w-full">
                                        {feedbackLoading ? "Submitting..." : (t.feedback?.submit || "Submit")}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Feedback List */}
                        <h3 className="text-lg font-medium mb-4">{t.feedback?.history || "Feedback History"}</h3>
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {feedbacks.length === 0 ? (
                                <p className="text-sm text-muted-foreground text-center py-8">No feedback yet.</p>
                            ) : (
                                feedbacks.map((fb, idx) => (
                                    <Card key={idx} className="p-4">
                                        <p className="text-sm mb-2">{fb.message}</p>
                                        <p className="text-xs text-muted-foreground">
                                            — {fb.username} {fb.created_at && `on ${new Date(fb.created_at).toLocaleDateString()}`}
                                        </p>
                                    </Card>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Right Column: History */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <History className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-light">{t.history?.title || "Analysis History"}</h2>
                        </div>

                        {historyLoading ? (
                            <div className="flex flex-col items-center justify-center py-20">
                                <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                                <p className="text-sm text-muted-foreground">{t.history?.loading || "Loading..."}</p>
                            </div>
                        ) : error ? (
                            <div className="text-center py-20">
                                <p className="text-sm text-red-500">{error}</p>
                            </div>
                        ) : predictions.length === 0 ? (
                            <div className="text-center py-20 bg-muted/30 rounded-lg">
                                <History className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                                <h3 className="text-sm font-medium mb-1">{t.history?.noPredictions || "No predictions yet"}</h3>
                                <p className="text-xs text-muted-foreground mb-4">
                                    {t.history?.noPredictionsDesc || "Start analyzing ECG images"}
                                </p>
                                <Button asChild size="sm" className="rounded-full">
                                    <Link href="/">{t.history?.analyzeECG || "Analyze ECG"}</Link>
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-3 max-h-96 overflow-y-auto">
                                {predictions.map((pred, index) => (
                                    <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                                        <div className="mb-3">
                                            <p className="text-xs text-muted-foreground mb-1">
                                                {formatDate(pred.created_at, pred.timezone_offset || 0)}
                                            </p>
                                            <h4 className="font-medium text-sm">{pred.rhythm}</h4>
                                            <p className="text-xs text-muted-foreground">{pred.image_filename}</p>
                                        </div>

                                        <div className="space-y-2 text-xs">
                                            <div className="flex justify-between p-2 bg-muted/50 rounded">
                                                <span className="text-muted-foreground">{t.history?.confidence || "Confidence"}</span>
                                                <span className="font-medium">{pred.confidence}</span>
                                            </div>

                                            <div className="flex justify-between p-2 bg-muted/50 rounded">
                                                <span className="text-muted-foreground">{t.history?.heartRate || "Heart Rate"}</span>
                                                <span className="font-medium">{pred.prediction_data.heartRate}</span>
                                            </div>

                                            <div className="pt-2 border-t space-y-1">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">{t.history?.prInterval || "PR Interval"}</span>
                                                    <span className="font-medium">{pred.prediction_data.intervals.pr}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">{t.history?.qrsDuration || "QRS"}</span>
                                                    <span className="font-medium">{pred.prediction_data.intervals.qrs}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">{t.history?.qtc || "QTc"}</span>
                                                    <span className="font-medium">{pred.prediction_data.intervals.qtc}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
