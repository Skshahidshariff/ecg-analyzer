"use client"

import React, { useState, useEffect } from "react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-context"

interface Feedback {
    username: string
    message: string
    created_at?: string
}

export default function FeedbackPage() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)

    // We need to access language context safely
    // If we haven't wrapped app yet, this might fail, but assuming we will wrap it.
    const { t } = useLanguage()

    useEffect(() => {
        const username = localStorage.getItem("username")
        const storedEmail = localStorage.getItem("email")
        setUser(username)
        setEmail(storedEmail)
        fetchFeedbacks(storedEmail)
    }, [])

    const fetchFeedbacks = async (userEmail: string | null = null) => {
        try {
            const query = userEmail ? `?email=${encodeURIComponent(userEmail)}` : ""
            const res = await fetch(`http://127.0.0.1:8000/feedback${query}`)
            if (res.ok) {
                const data = await res.json()
                setFeedbacks(data.feedbacks)
            }
        } catch (error) {
            console.error("Failed to fetch feedback", error)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!user || !email) {
            alert("Please login to submit feedback")
            return
        }
        setLoading(true)
        try {
            const res = await fetch("http://127.0.0.1:8000/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: user, email, message }),
            })

            if (res.ok) {
                setMessage("")
                fetchFeedbacks(email)
                alert(t.feedback.success || "Feedback submitted!")
            } else {
                alert(t.feedback.error || "Error submitting feedback")
            }
        } catch (error) {
            console.error(error)
            alert("Error submitting feedback")
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen flex flex-col">
            <div className="flex-1 container max-w-4xl mx-auto py-24 px-6">
                <h1 className="text-3xl font-light mb-8">{t.feedback.title || "Feedback"}</h1>

                {user ? (
                    <Card className="mb-12">
                        <CardHeader>
                            <CardTitle>{t.feedback.sendFeedback || "Send Feedback"}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <Textarea
                                    placeholder={`${t.feedback.message || "Message"}...`}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={4}
                                />
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Submitting..." : (t.feedback.submit || "Submit")}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="mb-10 text-center p-6 bg-muted rounded-xl">
                        Please login to send feedback.
                    </div>
                )}

                <h2 className="text-2xl font-light mb-6">{t.feedback.history || "Feedback History"}</h2>
                <div className="space-y-4">
                    {feedbacks.length === 0 ? (
                        <p className="text-muted-foreground">No feedback yet.</p>
                    ) : (
                        feedbacks.map((fb, idx) => (
                            <Card key={idx}>
                                <CardContent className="pt-6">
                                    <p className="text-lg mb-2">{fb.message}</p>
                                    <p className="text-sm text-muted-foreground">
                                        — {fb.username} {fb.created_at && `on ${new Date(fb.created_at).toLocaleDateString()}`}
                                    </p>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </main>
    )
}
