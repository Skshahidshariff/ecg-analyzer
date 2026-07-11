"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, History, ArrowLeft, Download, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-context"

interface PredictionData {
    _id: string
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
    is_favorite?: boolean
}

export default function HistoryPage() {
    const router = useRouter()
    const { t } = useLanguage()
    const [predictions, setPredictions] = useState<PredictionData[]>([])
    const [filteredPredictions, setFilteredPredictions] = useState<PredictionData[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [loadingFavorite, setLoadingFavorite] = useState<string | null>(null)
    
    // Filter states
    const [searchTerm, setSearchTerm] = useState("")
    const [rhythmFilter, setRhythmFilter] = useState("")
    const [minConfidence, setMinConfidence] = useState("")
    const [maxConfidence, setMaxConfidence] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

    useEffect(() => {
        const fetchHistory = async () => {
            // Check if user is logged in
            const email = localStorage.getItem("email")

            if (!email) {
                router.push("/login")
                return
            }

            try {
                const response = await fetch(`http://127.0.0.1:8000/predictions/history/${email}`)
                if (!response.ok) {
                    throw new Error("Failed to fetch predictions")
                }

                const data = await response.json()
                setPredictions(data.predictions || [])
                setFilteredPredictions(data.predictions || [])
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchHistory()
    }, [router])

    // Apply filters whenever any filter changes
    useEffect(() => {
        let filtered = predictions

        // Favorites filter
        if (showFavoritesOnly) {
            filtered = filtered.filter(pred => pred.is_favorite === true)
        }

        // Search filter
        if (searchTerm.trim()) {
            const search = searchTerm.toLowerCase()
            filtered = filtered.filter(pred =>
                pred.username.toLowerCase().includes(search) ||
                pred.image_filename.toLowerCase().includes(search)
            )
        }

        // Rhythm filter
        if (rhythmFilter) {
            filtered = filtered.filter(pred => pred.rhythm === rhythmFilter)
        }

        // Confidence filter
        if (minConfidence) {
            const minConf = parseFloat(minConfidence)
            filtered = filtered.filter(pred => {
                const confStr = pred.confidence.replace("%", "").trim()
                const confValue = parseFloat(confStr)
                return confValue >= minConf
            })
        }

        if (maxConfidence) {
            const maxConf = parseFloat(maxConfidence)
            filtered = filtered.filter(pred => {
                const confStr = pred.confidence.replace("%", "").trim()
                const confValue = parseFloat(confStr)
                return confValue <= maxConf
            })
        }

        // Date range filter
        if (startDate) {
            const start = new Date(startDate)
            filtered = filtered.filter(pred => {
                const predDate = new Date(pred.created_at)
                return predDate >= start
            })
        }

        if (endDate) {
            const end = new Date(endDate)
            end.setHours(23, 59, 59, 999)
            filtered = filtered.filter(pred => {
                const predDate = new Date(pred.created_at)
                return predDate <= end
            })
        }

        setFilteredPredictions(filtered)
    }, [searchTerm, rhythmFilter, minConfidence, maxConfidence, startDate, endDate, showFavoritesOnly, predictions])

    const clearFilters = () => {
        setSearchTerm("")
        setRhythmFilter("")
        setMinConfidence("")
        setMaxConfidence("")
        setStartDate("")
        setEndDate("")
    }

    // Get unique rhythm types for filter dropdown
    const rhythmTypes = Array.from(new Set(predictions.map(p => p.rhythm)))

    const formatDate = (isoString: string, timezoneOffset: number = 0) => {
        // Parse the ISO string (in UTC) and apply the timezone offset
        const date = new Date(isoString)
        const utcTime = date.getTime()
        // Offset is in minutes, convert to milliseconds
        const localTime = new Date(utcTime + timezoneOffset * 60 * 1000)
        
        // Format the adjusted local time
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

    const downloadPDF = async (predictionId: string, username: string) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/predictions/pdf/${predictionId}`)
            if (!response.ok) {
                throw new Error("Failed to download PDF")
            }
            
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = url
            link.download = `ECG_Analysis_${username}_${new Date().getTime()}.pdf`
            document.body.appendChild(link)
            link.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(link)
        } catch (error) {
            console.error("PDF download failed:", error)
            alert("Failed to download PDF. Please try again.")
        }
    }

    const toggleFavorite = async (predictionId: string, currentFavoriteStatus: boolean) => {
        const email = localStorage.getItem("email")
        if (!email) return

        setLoadingFavorite(predictionId)
        try {
            const response = await fetch(`http://127.0.0.1:8000/predictions/toggle-favorite/${predictionId}?email=${email}`, {
                method: "POST",
            })
            if (!response.ok) {
                throw new Error("Failed to toggle favorite")
            }

            const data = await response.json()
            
            // Update the predictions with the new favorite status
            setPredictions(predictions.map(pred =>
                pred._id === predictionId ? { ...pred, is_favorite: data.is_favorite } : pred
            ))
        } catch (error) {
            console.error("Toggle favorite failed:", error)
            alert("Failed to update favorite status. Please try again.")
        } finally {
            setLoadingFavorite(null)
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="mb-8">
                    <Button variant="ghost" size="sm" asChild className="mb-4">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t.history.backToHome}
                        </Link>
                    </Button>
                    <div className="flex items-center gap-3 mb-2">
                        <History className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl font-light">{t.history.title}</h1>
                    </div>
                    <p className="text-muted-foreground">
                        {t.history.description}
                    </p>
                </div>

                {/* Search and Filter Section */}
                <Card className="mb-8 p-6">
                    <h2 className="text-lg font-medium mb-4">{t.history?.description}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        {/* Search Input */}
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t.history?.action}</label>
                            <input
                                type="text"
                                placeholder="Search by name or file..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                            />
                        </div>

                        {/* Favorites Filter */}
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t.history?.viewAllActions}</label>
                            <div className="flex items-center h-10">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={showFavoritesOnly}
                                        onChange={(e) => setShowFavoritesOnly(e.target.checked)}
                                        className="w-4 h-4 rounded border-input"
                                    />
                                    <span className="text-sm">{t.history.filterFavorites}</span>
                                </label>
                            </div>
                        </div>

                        {/* Rhythm Filter */}
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t.history?.rhythm}</label>
                            <select
                                value={rhythmFilter}
                                onChange={(e) => setRhythmFilter(e.target.value)}
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                            >
                                <option value="">{t.history?.allActions}</option>
                                {rhythmTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        {/* Min Confidence */}
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t.history?.confidence} (%)</label>
                            <input
                                type="number"
                                placeholder="Min confidence"
                                value={minConfidence}
                                onChange={(e) => setMinConfidence(e.target.value)}
                                min="0"
                                max="100"
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                            />
                        </div>

                        {/* Max Confidence */}
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t.history?.confidence} (%)</label>
                            <input
                                type="number"
                                placeholder="Max confidence"
                                value={maxConfidence}
                                onChange={(e) => setMaxConfidence(e.target.value)}
                                min="0"
                                max="100"
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                            />
                        </div>

                        {/* Start Date */}
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t.history?.fromDate}</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                            />
                        </div>

                        {/* End Date */}
                        <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">{t.history?.toDate}</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                            />
                        </div>
                    </div>

                    {/* Clear Filters Button */}
                    {(searchTerm || rhythmFilter || minConfidence || maxConfidence || startDate || endDate) && (
                        <Button
                            onClick={clearFilters}
                            variant="outline"
                            size="sm"
                        >
                            {t.history?.clearFilters}
                        </Button>
                    )}
                    
                    <p className="text-xs text-muted-foreground mt-2">
                        Showing {filteredPredictions.length} of {predictions.length} predictions
                    </p>
                </Card>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                        <p className="text-muted-foreground">{t.history.loading}</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <p className="text-red-500">{error}</p>
                    </div>
                ) : predictions.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <History className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h2 className="text-2xl font-light mb-2">{t.history.noPredictions}</h2>
                        <p className="text-muted-foreground mb-8">
                            {t.history.noPredictionsDesc}
                        </p>
                        <Button asChild className="rounded-full px-8">
                            <Link href="/">{t.history.analyzeECG}</Link>
                        </Button>
                    </div>
                ) : filteredPredictions.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">{t.history?.noFilterResults}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPredictions.map((pred, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs text-muted-foreground">
                                                {formatDate(pred.created_at, pred.timezone_offset || 0)}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-medium mb-1">{pred.rhythm}</h3>
                                        <p className="text-sm text-muted-foreground">{pred.image_filename}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                            <span className="text-sm text-muted-foreground">{t.history.confidence}</span>
                                            <span className="text-lg font-medium">{pred.confidence}</span>
                                        </div>

                                        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                            <span className="text-sm text-muted-foreground">{t.history.heartRate}</span>
                                            <span className="text-lg font-medium">
                                                {pred.prediction_data.heartRate}
                                            </span>
                                        </div>

                                        <div className="pt-4 border-t space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">{t.history.prInterval}</span>
                                                <span className="font-medium">{pred.prediction_data.intervals.pr}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">{t.history.qrsDuration}</span>
                                                <span className="font-medium">{pred.prediction_data.intervals.qrs}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">{t.history.qtc}</span>
                                                <span className="font-medium">{pred.prediction_data.intervals.qtc}</span>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t">
                                            <div className="flex gap-2">
                                                <Button
                                                    onClick={() => downloadPDF(pred._id, pred.username)}
                                                    className="flex-1"
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    <Download className="mr-2 h-4 w-4" />
                                                    {t.history.downloadPDF}
                                                </Button>
                                                <Button
                                                    onClick={() => toggleFavorite(pred._id, pred.is_favorite || false)}
                                                    disabled={loadingFavorite === pred._id}
                                                    className="flex-shrink-0"
                                                    variant={pred.is_favorite ? "default" : "outline"}
                                                    size="sm"
                                                    title={pred.is_favorite ? t.history.removeFavorite : t.history.markFavorite}
                                                >
                                                    <Heart
                                                        className={`h-4 w-4 ${pred.is_favorite ? "fill-current" : ""}`}
                                                    />
                                                </Button>
                                            </div>
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
