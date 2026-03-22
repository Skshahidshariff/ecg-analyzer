"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import { GoogleTranslate } from "@/components/google-translate"
import { LogOut, Menu, X, User, Heart } from "lucide-react"

export function Navbar() {
  const router = useRouter()
  const [username, setUsername] = useState<string | null>(null)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const storedUsername = localStorage.getItem("username")
    const storedEmail = localStorage.getItem("email")
    const storedRole = localStorage.getItem("role")
    setUsername(storedUsername)
    setUserEmail(storedEmail)
    setUserRole(storedRole)

    // Fetch profile image if user is logged in
    if (storedEmail) {
      fetchProfileImage(storedEmail)
    }
  }, [])

  const fetchProfileImage = async (email: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/user/profile/${email}`)
      if (response.ok) {
        const data = await response.json()
        if (data.profile_image) {
          setProfileImage(data.profile_image)
        }
      }
    } catch (error) {
      console.error("Error fetching profile image:", error)
    }
  }

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const profileButton = document.querySelector("[data-profile-button]")
      const profileMenu = document.querySelector("[data-profile-menu]")
      if (profileButton && profileMenu && !profileButton.contains(e.target as Node) && !profileMenu.contains(e.target as Node)) {
        setProfileMenuOpen(false)
      }
    }

    if (profileMenuOpen) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [profileMenuOpen])

  const handleLogout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("email")
    localStorage.removeItem("role")
    setUsername(null)
    setUserRole(null)
    router.push("/")
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight hover:opacity-80 transition">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <span className="hidden sm:inline text-lg">{t.navbar.title}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {username ? (
            <>
              {userRole !== "admin" ? (
                <>
                  {/* Analysis Section */}
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/">Home</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/#analyze">Analyze</Link>
                  </Button>

                  {/* Data Section */}
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/history">History</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/statistics">Stats</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/activity">Activity</Link>
                  </Button>

                  {/* Feedback Section */}
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/feedback">Feedback</Link>
                  </Button>
                </>
              ) : null}

              {/* Admin Section */}
              {userRole === "admin" && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/admin">Admin</Link>
                </Button>
              )}
            </>
          ) : null}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <GoogleTranslate />

          {/* Desktop Login/Logout */}
          <div className="hidden md:flex items-center gap-2">
            {username ? (
              <>
                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    data-profile-button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="w-10 h-10 rounded-full hover:opacity-80 transition overflow-hidden"
                  >
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {username?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {profileMenuOpen && (
                    <div data-profile-menu className="absolute right-0 mt-2 w-48 bg-background border rounded-lg shadow-lg z-50">
                      <Link
                        href="/profile"
                        className="block px-4 py-3 text-sm hover:bg-muted"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        👤 View Profile
                      </Link>
                      <div className="border-t px-4 py-2 flex gap-2">
                        <button
                          onClick={() => {
                            handleLogout()
                            setProfileMenuOpen(false)
                          }}
                          className="flex-1 text-left text-sm hover:opacity-80 text-red-600 dark:text-red-400"
                        >
                          🚪 Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {username ? (
              <>
                <div className="px-3 py-3 rounded-lg bg-muted text-sm font-medium flex flex-col items-center gap-2">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {username.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/profile">Edit Profile</Link>
                  </Button>
                </div>

                <div className="space-y-1 pt-2 border-t">
                  <p className="text-xs font-semibold text-muted-foreground px-3 py-2">ANALYSIS</p>
                  <Button variant="ghost" size="sm" asChild className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/">Home</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/#analyze">Analyze ECG</Link>
                  </Button>
                </div>

                <div className="space-y-1 pt-2 border-t">
                  <p className="text-xs font-semibold text-muted-foreground px-3 py-2">DATA & INSIGHTS</p>
                  <Button variant="ghost" size="sm" asChild className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/history">History</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/statistics">Statistics</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/activity">Activity Log</Link>
                  </Button>
                </div>

                <div className="space-y-1 pt-2 border-t">
                  <p className="text-xs font-semibold text-muted-foreground px-3 py-2">FEEDBACK</p>
                  <Button variant="ghost" size="sm" asChild className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/feedback">Send Feedback</Link>
                  </Button>
                  {userRole === "admin" && (
                    <Button variant="ghost" size="sm" asChild className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                      <Link href="/admin">Admin</Link>
                    </Button>
                  )}
                </div>

                <div className="pt-2 border-t">
                  <Button 
                    size="sm" 
                    variant="destructive"
                    onClick={handleLogout}
                    className="w-full justify-start"
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                  <Link href="/login">Login</Link>
                </Button>
                <Button size="sm" asChild className="w-full justify-start">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
