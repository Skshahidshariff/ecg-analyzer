"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, ActivitySquare, ArrowLeft, TrendingUp, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-context"

interface Activity {
    _id: string
    user_email: string
    action: string
    timestamp: string
    details: Record<string, any>
}

interface ActivityStats {
    totalActions: number
    actionsByType: Record<string, number>
    dailyTrend: Record<string, number>
    todayActions: number
    mostCommonAction: string
}

const ACTION_LABELS: Record<string, string> = {
    account_created: "Account Created",
    login_successful: "Login Successful",
    ecg_analyzed: "ECG Analyzed",
    favorite_toggled: "Favorite Toggled",
    pdf_downloaded: "PDF Downloaded",
    feedback_submitted: "Feedback Submitted",
    history_accessed: "History Accessed"
}

const ACTION_COLORS: Record<string, string> = {
    account_created: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    login_successful: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    ecg_analyzed: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    favorite_toggled: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    pdf_downloaded: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    feedback_submitted: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    history_accessed: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
}

export default function ActivityPage() {
    const router = useRouter()
    const { t } = useLanguage()
    const [activities, setActivities] = useState<Activity[]>([])
    const [stats, setStats] = useState<ActivityStats | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    
    // Filter states
    const [actionFilter, setActionFilter] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    useEffect(() => {
        const fetchActivityData = async () => {
            const email = localStorage.getItem("email")
            if (!email) {
                router.push("/login")
                return
            }

            try {
                // Fetch activity log
                const response = await fetch(`http://127.0.0.1:8000/activity/log/${email}?limit=100`)
                if (!response.ok) throw new Error("Failed to fetch activities")
                const data = await response.json()
                setActivities(data.activities || [])

                // Fetch statistics
                const statsResponse = await fetch(`http://127.0.0.1:8000/activity/statistics/${email}`)
                if (!statsResponse.ok) throw new Error("Failed to fetch statistics")
                const statsData = await statsResponse.json()
                setStats(statsData)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchActivityData()
    }, [router])

    const getActionLabel = (action: string): string => {
        return (t.activity?.[action as keyof typeof t.activity] as string) || ACTION_LABELS[action] || action
    }

    const getActionColor = (action: string): string => {
        return ACTION_COLORS[action] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }

    const formatDate = (isoString: string) => {
        // Ensure we treat timestamps without explicit timezone as UTC.
        const ci = /([+-]\d{2}:\d{2}|Z)$/.test(isoString) ? isoString : `${isoString}Z`
        const date = new Date(ci)

        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"

        return date.toLocaleString(undefined, {
            timeZone: userTimezone,
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    }

    const filteredActivities = activities.filter(act => {
        if (actionFilter && act.action !== actionFilter) return false
        
        if (startDate) {
            const start = new Date(startDate)
            if (new Date(act.timestamp) < start) return false
        }
        
        if (endDate) {
            const end = new Date(endDate)
            end.setHours(23, 59, 59, 999)
            if (new Date(act.timestamp) > end) return false
        }
        
        return true
    })

    const clearFilters = () => {
        setActionFilter("")
        setStartDate("")
        setEndDate("")
    }

    const getDetailSummary = (details: Record<string, any>) => {
        const entries = Object.entries(details)
            .filter(([key]) => key !== "email")
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ")
        return entries || "No details"
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="mb-8">
                    <Button variant="ghost" size="sm" asChild className="mb-4">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t.activity?.backToHome}
                        </Link>
                    </Button>
                    <div className="flex items-center gap-3 mb-2">
                        <ActivitySquare className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl font-light">{t.activity?.title}</h1>
                    </div>
                    <p className="text-muted-foreground">
                        {t.activity?.description}
                    </p>
                </div>

                {/* Stats Cards */}
                {stats && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">{t.activity?.totalActions}</p>
                                        <p className="text-3xl font-bold mt-2">{stats.totalActions}</p>
                                    </div>
                                    <Zap className="h-8 w-8 text-primary opacity-50" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">{t.activity?.todayActions}</p>
                                        <p className="text-3xl font-bold mt-2">{stats.todayActions}</p>
                                    </div>
                                    <TrendingUp className="h-8 w-8 text-green-500 opacity-50" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-2">
                            <CardContent className="p-6">
                                <div>
                                    <p className="text-sm text-muted-foreground">{t.activity?.mostCommonAction}</p>
                                    <p className="text-2xl font-bold mt-2">
                                        {getActionLabel(stats.mostCommonAction || "")}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        {stats.actionsByType?.[stats.mostCommonAction || ""] || 0} times
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Filter Section */}
                <Card className="mb-8 p-6">
                    <h2 className="text-lg font-medium mb-4">{t.activity?.filterByAction}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t.activity?.action}</label>
                            <select
                                value={actionFilter}
                                onChange={(e) => setActionFilter(e.target.value)}
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                            >
                                <option value="">{t.activity?.allActions}</option>
                                {Object.entries(ACTION_LABELS).map(([key, label]) => (
                                    <option key={key} value={key}>{label}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t.activity?.fromDate}</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t.activity?.toDate}</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                            />
                        </div>
                    </div>

                    {(actionFilter || startDate || endDate) && (
                        <Button
                            onClick={clearFilters}
                            variant="outline"
                            size="sm"
                        >
                            {t.activity?.clearFilters}
                        </Button>
                    )}
                    
                    <p className="text-xs text-muted-foreground mt-2">
                        Showing {filteredActivities.length} of {activities.length} activities
                    </p>
                </Card>

                {/* Activities List */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                        <p className="text-muted-foreground">{t.activity?.loading}</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <p className="text-red-500">{error}</p>
                    </div>
                ) : activities.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <ActivitySquare className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h2 className="text-2xl font-light mb-2">{t.activity?.noActivities}</h2>
                        <p className="text-muted-foreground mb-8">
                            {t.activity?.noActivitiesDesc}
                        </p>
                    </div>
                ) : filteredActivities.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">{t.activity?.noFilterResults}</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filteredActivities.map((activity) => (
                            <Card key={activity._id} className="overflow-hidden hover:shadow-md transition-shadow">
                                <CardContent className="p-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getActionColor(activity.action)}`}>
                                                    {getActionLabel(activity.action)}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {formatDate(activity.timestamp)}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {getDetailSummary(activity.details)}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
