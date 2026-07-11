"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/components/language-context"

export default function ForgotPasswordPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)
    const { t } = useLanguage()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
            const res = await fetch(`${apiUrl}/forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.detail || "Failed to send OTP")
            }

            setSuccess(true)
            // Store email in session storage for the next page
            sessionStorage.setItem("reset_email", email)
            
            // Store OTP if returned (for development/testing)
            if (data.otp_for_testing) {
                setOtp(data.otp_for_testing)
                sessionStorage.setItem("dev_otp", data.otp_for_testing)
            } else {
                // Clear any previous dev OTP if not in dev mode
                setOtp("")
                sessionStorage.removeItem("dev_otp")
            }
            
            // Redirect to OTP verification page after 5 seconds
            setTimeout(() => {
                router.push("/verify-otp")
            }, 5000)

        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background p-4">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center text-green-600">
                            {t.auth.otpSent}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-center text-muted-foreground">
                            {`Check your email for the 4-digit OTP. You will be redirected shortly.`}
                        </p>
                        
                        {otp && (
                            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                <p className="text-xs text-muted-foreground text-center mb-2">
                                    {`Development Mode - Your OTP:`}
                                </p>
                                <p className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 tracking-widest">
                                    {otp}
                                </p>
                                <p className="text-xs text-muted-foreground text-center mt-2">
                                    {`(This is shown for testing purposes only)`}
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        {t.auth.forgotPasswordTitle}
                    </CardTitle>
                    <CardDescription className="text-center">
                        {t.auth.forgotPasswordDesc}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 rounded-md text-center">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <label htmlFor="email">{t.auth.email}</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? t.auth.sendingOTP : t.auth.sendOTP}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-muted-foreground">
                        {`Remember your password? `}
                        <Link href="/login" className="text-primary hover:underline">
                            {t.auth.loginLink}
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
