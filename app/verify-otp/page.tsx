"use client"

import { useState, useEffect } from "react"
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

export default function VerifyOTPPage() {
    const router = useRouter()
    const [otp, setOtp] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [devOtp, setDevOtp] = useState("") // For development/testing
    const [loading, setLoading] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        // Get email from session storage
        const storedEmail = sessionStorage.getItem("reset_email")
        if (!storedEmail) {
            router.push("/forgot-password")
        } else {
            setEmail(storedEmail)
        }
        
        // Get OTP from session storage if in development mode
        const storedOtp = sessionStorage.getItem("dev_otp")
        if (storedOtp) {
            setDevOtp(storedOtp)
        } else {
            setDevOtp("")
        }
    }, [router])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            if (otp.length !== 4 || !/^\d+$/.test(otp)) {
                throw new Error("OTP must be exactly 4 digits")
            }

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
            const res = await fetch(`${apiUrl}/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.detail || "Invalid or expired OTP")
            }

            // Store verification token for reset password
            sessionStorage.setItem("otp_verified", "true")
            sessionStorage.setItem("reset_token", data.token || email)
            
            // Redirect to reset password page
            router.push("/reset-password")

        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleFillOTP = () => {
        setOtp(devOtp)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        {t.auth.verifyOTPTitle}
                    </CardTitle>
                    <CardDescription className="text-center">
                        {t.auth.verifyOTPDesc}
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
                                value={email}
                                disabled
                                className="bg-muted"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="otp">{t.auth.otpCode}</label>
                            <Input
                                id="otp"
                                type="text"
                                inputMode="numeric"
                                placeholder="0000"
                                maxLength={4}
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                                required
                                className="text-center text-2xl tracking-widest"
                            />
                        </div>

                        {devOtp && (
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                <p className="text-xs text-muted-foreground text-center mb-2">
                                    {`Development Mode - Your OTP is:`}
                                </p>
                                <p className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400 tracking-widest mb-2">
                                    {devOtp}
                                </p>
                                <Button
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    onClick={handleFillOTP}
                                    className="w-full"
                                >
                                    {`Auto-fill OTP`}
                                </Button>
                            </div>
                        )}

                        <Button type="submit" className="w-full" disabled={loading || otp.length !== 4}>
                            {loading ? t.auth.verifyingOTP : t.auth.verifyOTP}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-muted-foreground">
                        {`Didn't receive the OTP? `}
                        <Link href="/forgot-password" className="text-primary hover:underline">
                            {`Resend`}
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
