"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface UserAnalysisCount {
    user_email: string
    count: number
}

export default function AdminPage() {
    const router = useRouter()
    const [isAdmin, setIsAdmin] = useState(false)
    const [totalUsers, setTotalUsers] = useState(0)
    const [analysisCounts, setAnalysisCounts] = useState<UserAnalysisCount[]>([])
    const [feedbacks, setFeedbacks] = useState<Array<{ username: string; email: string; message: string; created_at?: string }>>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const storedRole = localStorage.getItem("role")
        const storedEmail = localStorage.getItem("email")

        if (storedRole !== "admin" || storedEmail !== "ecgadmin@gmail.com") {
            router.push("/")
            return
        }

        setIsAdmin(true)
        fetchSummary(storedEmail)
        fetchFeedbacks(storedEmail)
    }, [router])

    const fetchSummary = async (adminEmail: string) => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/admin/users-overview?admin_email=${encodeURIComponent(adminEmail)}`)
            const data = await res.json()
            if (!res.ok) throw new Error(data.detail || "Failed to load admin summary")
            setTotalUsers(data.totalUsers || 0)
            setAnalysisCounts(data.analysisCounts || [])
        } catch (err: any) {
            setError(err.message)
        }
    }

    const fetchFeedbacks = async (adminEmail: string) => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/admin/feedback?admin_email=${encodeURIComponent(adminEmail)}`)
            const data = await res.json()
            if (!res.ok) throw new Error(data.detail || "Failed to load feedback")
            setFeedbacks(data.feedbacks || [])
        } catch (err: any) {
            setError(err.message)
        }
    }

    if (!isAdmin) {
        return null
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto p-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
                </div>

                {error && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Total Users</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-4xl font-bold">{totalUsers}</p>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>User Analysis Count</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {analysisCounts.map((item) => (
                                    <li key={item.user_email} className="flex justify-between">
                                        <span>{item.user_email}</span>
                                        <span className="font-semibold">{item.count}</span>
                                    </li>
                                ))}
                                {analysisCounts.length === 0 && <p>No analysis data yet.</p>}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>All User Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {feedbacks.map((fb, idx) => (
                                <div key={idx} className="p-4 border rounded-md">
                                    <p className="font-medium">{fb.username} ({fb.email})</p>
                                    <p className="mb-2 text-sm text-muted-foreground">{fb.created_at ? new Date(fb.created_at).toLocaleString() : "No timestamp"}</p>
                                    <p>{fb.message}</p>
                                </div>
                            ))}
                            {feedbacks.length === 0 && <p>No feedback yet.</p>}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
