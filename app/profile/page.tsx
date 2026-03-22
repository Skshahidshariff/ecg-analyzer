"use client"

import React, { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-context"
import { ArrowLeft, User, Mail, Clock, Upload as UploadIcon } from "lucide-react"

interface UserProfile {
  username: string
  email: string
  profile_image?: string
  created_at?: string
}

export default function ProfilePage() {
  const router = useRouter()
  const { t } = useLanguage()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [username, setUsername] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState("")
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      const storedUsername = localStorage.getItem("username")
      const storedEmail = localStorage.getItem("email")

      if (!storedUsername || !storedEmail) {
        router.push("/login")
        return
      }

      // Fetch profile including image from backend
      try {
        const response = await fetch(`http://127.0.0.1:8000/user/profile/${storedEmail}`)
        if (response.ok) {
          const data = await response.json()
          setProfile(data)
          setUsername(storedUsername)
          if (data.profile_image) {
            setPreviewImage(data.profile_image)
          }
        } else {
          // Fallback to local storage
          setProfile({
            username: storedUsername,
            email: storedEmail,
          })
          setUsername(storedUsername)
        }
      } catch (error) {
        console.error("Error fetching profile:", error)
        setProfile({
          username: storedUsername,
          email: storedEmail,
        })
        setUsername(storedUsername)
      }
      setLoading(false)
    }

    fetchProfile()
  }, [router])

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessage("Image must be less than 5MB")
      return
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setMessage("Please select a valid image file")
      return
    }

    setUploadingImage(true)
    setMessage("")

    try {
      const reader = new FileReader()
      reader.onload = async (event) => {
        const base64Image = event.target?.result as string

        // Upload to backend
        const response = await fetch("http://127.0.0.1:8000/user/upload-profile-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: profile?.email,
            profile_image: base64Image,
          }),
        })

        if (response.ok) {
          setPreviewImage(base64Image)
          setProfile({
            ...profile!,
            profile_image: base64Image,
          })
          setMessage("Profile image updated successfully!")
          setTimeout(() => setMessage(""), 3000)
        } else {
          const error = await response.json()
          setMessage(error.detail || "Failed to upload image")
        }
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error("Error uploading image:", error)
      setMessage("Error uploading image")
    } finally {
      setUploadingImage(false)
    }
  }

  const handleUpdateUsername = async () => {
    if (!username.trim()) {
      setMessage("Username cannot be empty")
      return
    }

    if (username === profile?.username) {
      setEditing(false)
      return
    }

    setIsSaving(true)
    setMessage("")

    try {
      const response = await fetch("http://127.0.0.1:8000/user/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: profile?.email,
          new_username: username,
        }),
      })

      if (response.ok) {
        localStorage.setItem("username", username)
        setProfile({
          ...profile!,
          username,
        })
        setEditing(false)
        setMessage("Profile updated successfully!")
        setTimeout(() => setMessage(""), 3000)
      } else {
        const error = await response.json()
        setMessage(error.detail || "Failed to update profile")
      }
    } catch (error) {
      console.error("Error updating profile:", error)
      setMessage("Error updating profile")
    } finally {
      setIsSaving(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container max-w-2xl mx-auto py-12 px-6">
          <div className="text-center py-20">
            <p className="text-muted-foreground">Loading profile...</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto py-12 px-6">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>

        <h1 className="text-3xl font-bold mb-8">User Profile</h1>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.includes("successfully")
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}
          >
            {message}
          </div>
        )}

        <div className="grid gap-6">
          {/* Profile Avatar Card */}
          <Card>
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="relative">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover bg-muted"
                  />
                ) : (
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white text-6xl font-bold">
                    {profile?.username?.charAt(0).toUpperCase()}
                  </div>
                )}
                {/* Camera Icon Button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadingImage}
                  className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition shadow-lg"
                  title="Change profile picture"
                >
                  <UploadIcon className="w-5 h-5" />
                </button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                disabled={uploadingImage}
              />
            </CardContent>
          </Card>

          {/* Username Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Username
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!editing ? (
                <div className="flex justify-between items-center">
                  <p className="text-lg">{profile?.username}</p>
                  <Button size="sm" onClick={() => setEditing(true)}>
                    Edit
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter new username"
                    disabled={isSaving}
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleUpdateUsername} disabled={isSaving}>
                      {isSaving ? "Saving..." : "Save"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditing(false)
                        setUsername(profile?.username || "")
                      }}
                      disabled={isSaving}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{profile?.email}</p>
              <p className="text-sm text-muted-foreground mt-2">Email cannot be changed</p>
            </CardContent>
          </Card>

          {/* Account Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Account Type</p>
                <p className="text-lg font-medium">ECG Analysis User</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="text-lg font-medium text-green-600">Active</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
