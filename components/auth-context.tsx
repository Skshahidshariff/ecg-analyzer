"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

export interface AuthContextType {
  username: string | null
  email: string | null
  role: string | null
  profileImage: string | null
  isLoggedIn: boolean
  login: (username: string, email: string, role?: string) => Promise<void>
  logout: () => void
  setProfileImage: (image: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [role, setRole] = useState<string | null>(null)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username")
    const storedEmail = localStorage.getItem("email")
    const storedRole = localStorage.getItem("role")

    if (storedUsername && storedEmail) {
      setUsername(storedUsername)
      setEmail(storedEmail)
      setRole(storedRole)
      setIsLoggedIn(true)

      // Fetch profile image
      if (storedEmail) {
        fetchProfileImage(storedEmail)
      }
    }

    // Listen for storage changes (logout from other tabs)
    const handleStorageChange = () => {
      const newUsername = localStorage.getItem("username")
      const newEmail = localStorage.getItem("email")
      const newRole = localStorage.getItem("role")

      setUsername(newUsername)
      setEmail(newEmail)
      setRole(newRole)
      setProfileImage(null)
      setIsLoggedIn(!!newUsername && !!newEmail)
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const fetchProfileImage = async (userEmail: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
      const response = await fetch(
        `${apiUrl}/user/profile/${userEmail}`,
        { mode: "cors" }
      )
      if (response.ok) {
        const data = await response.json()
        if (data.profile_image) {
          setProfileImage(data.profile_image)
        }
      }
    } catch (error) {
      // Silently fail - profile image is optional
      console.debug("Profile image fetch failed (optional):", error)
    }
  }

  const login = async (
    newUsername: string,
    newEmail: string,
    newRole: string = "user"
  ) => {
    setUsername(newUsername)
    setEmail(newEmail)
    setRole(newRole)
    setIsLoggedIn(true)

    // Store in localStorage
    localStorage.setItem("username", newUsername)
    localStorage.setItem("email", newEmail)
    localStorage.setItem("role", newRole)

    // Fetch profile image
    await fetchProfileImage(newEmail)

    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("auth-change"))
  }

  const logout = () => {
    setUsername(null)
    setEmail(null)
    setRole(null)
    setProfileImage(null)
    setIsLoggedIn(false)

    // Clear localStorage
    localStorage.removeItem("username")
    localStorage.removeItem("email")
    localStorage.removeItem("role")

    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("auth-change"))
  }

  const value: AuthContextType = {
    username,
    email,
    role,
    profileImage,
    isLoggedIn,
    login,
    logout,
    setProfileImage,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
