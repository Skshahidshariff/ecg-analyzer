"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import { ArrowUpRight, TrendingUp, Heart, Zap } from "lucide-react"

interface StatisticsData {
    totalAnalyses: number
    averageConfidence: number
    averageHeartRate: number
    rhythmDistribution: Record<string, number>
    confidenceDistribution: Record<string, number>
    recentTrends: Array<{
        date: string
        confidence: number
        heartRate: number
        rhythm: string
    }>
}

export default function StatisticsPage() {
    const router = useRouter()
    const { t } = useLanguage()
    const [statistics, setStatistics] = useState<StatisticsData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const email = localStorage.getItem("email")
                if (!email) {
                    router.push("/login")
                    return
                }

                const response = await fetch(`http://127.0.0.1:8000/predictions/statistics/${email}`)
                if (!response.ok) {
                    const errorText = await response.text()
                    console.error("API Error:", response.status, errorText)
                    throw new Error("Failed to fetch statistics")
                }

                const data = await response.json()
                console.log("Statistics data:", data)
                setStatistics(data)
            } catch (err) {
                console.error("Statistics fetch error:", err)
                setError(err instanceof Error ? err.message : "An error occurred")
            } finally {
                setLoading(false)
            }
        }

        fetchStatistics()
    }, [router])

    if (loading) {
        return (
            <main className="min-h-screen bg-background">
                <div className="pt-8 pb-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center py-20">
                            <p className="text-muted-foreground">{t.statistics.loading}</p>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    if (error || !statistics || statistics.totalAnalyses === 0) {
        return (
            <main className="min-h-screen bg-background">
                <div className="pt-8 pb-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <Button asChild className="mb-6" variant="outline">
                            <Link href="/">{t.statistics.backToHome}</Link>
                        </Button>
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <h2 className="text-2xl font-light mb-2">{t.statistics.noData}</h2>
                            <p className="text-muted-foreground mb-8">{t.statistics.noDataDesc}</p>
                            <Button asChild className="rounded-full px-8">
                                <Link href="/">{t.statistics.backToHome}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    const formatTrendDate = (isoString: string) => {
        const safeIso = /([+-]\d{2}:\d{2}|Z)$/.test(isoString) ? isoString : `${isoString}Z`
        const date = new Date(safeIso)
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"

        return {
            date: date.toLocaleDateString(undefined, { timeZone: userTimezone }),
            time: date.toLocaleTimeString(undefined, { timeZone: userTimezone })
        }
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="pt-8 pb-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">{t.statistics.title}</h1>
                            <p className="text-muted-foreground">{t.statistics.description}</p>
                        </div>
                        <Button asChild variant="outline">
                            <Link href="/">{t.statistics.backToHome}</Link>
                        </Button>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {t.statistics.totalAnalyses}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{statistics.totalAnalyses}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {t.statistics.averageConfidence}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-3xl font-bold">{statistics.averageConfidence.toFixed(1)}</p>
                                    <span className="text-muted-foreground">{t.statistics.percentage}</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {t.statistics.averageHeartRate}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-3xl font-bold">{statistics.averageHeartRate.toFixed(0)}</p>
                                    <span className="text-muted-foreground">{t.statistics.bpm}</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {t.statistics.rhythmDistribution}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">
                                    {Object.keys(statistics.rhythmDistribution).length}
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">types detected</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Distributions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Rhythm Distribution */}
                        <Card>
                            <CardHeader>
                                <CardTitle>{t.statistics.rhythmDistribution}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {Object.entries(statistics.rhythmDistribution).map(([rhythm, count]) => (
                                        <div key={rhythm} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <Heart className="h-4 w-4 text-primary" />
                                                <span className="font-medium">{rhythm}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-32 bg-muted h-2 rounded-full overflow-hidden">
                                                    <div
                                                        className="bg-primary h-full"
                                                        style={{
                                                            width: `${(count / statistics.totalAnalyses) * 100}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-sm text-muted-foreground">{count}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Confidence Distribution */}
                        <Card>
                            <CardHeader>
                                <CardTitle>{t.statistics.confidenceDistribution}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {Object.entries(statistics.confidenceDistribution).map(([range, count]) => (
                                        <div key={range} className="flex items-center justify-between">
                                            <span className="font-medium">{range}</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-32 bg-muted h-2 rounded-full overflow-hidden">
                                                    <div
                                                        className="bg-primary h-full"
                                                        style={{
                                                            width: `${(count / statistics.totalAnalyses) * 100}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-sm text-muted-foreground">{count}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Trends */}
                    {statistics.recentTrends.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>{t.statistics.recentTrends}</CardTitle>
                                <CardDescription>Last 10 analyses</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {statistics.recentTrends.map((trend, index) => (
                                        <div key={index} className="flex items-center justify-between pb-3 border-b last:border-b-0">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-sm font-medium">
                                                    {formatTrendDate(trend.date).date} at{" "}
                                                    {formatTrendDate(trend.date).time}
                                                </p>
                                                <p className="text-xs text-muted-foreground">{trend.rhythm}</p>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <div className="text-right">
                                                    <p className="text-sm font-medium">{trend.heartRate} BPM</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                                                    <span className="text-sm font-medium">{(trend.confidence * 100).toFixed(1)}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </main>
    )
}
