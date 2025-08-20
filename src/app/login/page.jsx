"use client"

import { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Globe, AlertCircle, LogIn, UserPlus, RefreshCw } from "lucide-react"

export default function LoginPage() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Clear any lingering error messages from previous attempts on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("error")) {
      const errorType = urlParams.get("error")
      const errorDesc = urlParams.get("error_description")
      setError(`Authentication failed: ${errorDesc || errorType}`)
      // Clear URL params to prevent re-processing on refresh
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  // If Auth0 SDK is still loading or user is already authenticated,
  // App.tsx should handle the redirect, so this component should not render its full form.
  // This prevents flickering or showing login form when it's not needed.
  if (isLoading || isAuthenticated) {
    console.log("LoginPage: SDK is loading or user is authenticated. Showing redirecting spinner.")
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting...</p>
        </div>
      </div>
    )
  }

  const handleLogin = async () => {
    setError("")
    setLoading(true)

    try {
      console.log("LoginPage: Initiating loginWithRedirect for login...")
      // *** CRITICAL FIX: Removed localStorage.clear() and sessionStorage.clear() from here ***
      await loginWithRedirect({
        authorizationParams: {
          login_hint: email || undefined, // Pass email if provided
          screen_hint: "login",
          scope: "openid profile email",
          redirect_uri: window.location.origin, // Ensure this matches Auth0 dashboard
        },
        appState: {
          returnTo: "/", // Always return to root after login
        },
      })
    } catch (err) {
      console.error("LoginPage: Login error during redirect initiation:", err)
      setError("Login failed. Please try again.")
      setLoading(false)
    }
  }

  const handleSignup = async () => {
    setError("")
    setLoading(true)

    try {
      console.log("LoginPage: Initiating loginWithRedirect for signup...")
      // *** CRITICAL FIX: Removed localStorage.clear() and sessionStorage.clear() from here ***
      await loginWithRedirect({
        authorizationParams: {
          login_hint: email || undefined, // Pass email if provided
          screen_hint: "signup",
          scope: "openid profile email",
          redirect_uri: window.location.origin, // Ensure this matches Auth0 dashboard
        },
        appState: {
          returnTo: "/", // Always return to root after signup
        },
      })
    } catch (err) {
      console.error("LoginPage: Signup error during redirect initiation:", err)
      setError("Signup failed. Please try again.")
      setLoading(false)
    }
  }

  const handleQuickLogin = async () => {
    setError("")
    setLoading(true)

    try {
      console.log("LoginPage: Initiating loginWithRedirect for quick login...")
      // *** CRITICAL FIX: Removed localStorage.clear() and sessionStorage.clear() from here ***
      await loginWithRedirect({
        authorizationParams: {
          scope: "openid profile email",
          redirect_uri: window.location.origin, // Ensure this matches Auth0 dashboard
        },
        appState: {
          returnTo: "/", // Always return to root after quick login
        },
      })
    } catch (err) {
      console.error("LoginPage: Quick login error during redirect initiation:", err)
      setError("Quick login failed. Please try again.")
      setLoading(false)
    }
  }

  const handleClearAndRefresh = () => {
    console.log("LoginPage: Clearing all storage and refreshing page.")
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md border-none shadow-lg">
        {" "}
        {/* Removed border */}
       <CardHeader className="text-center">
<div className="flex flex-col items-center mb-4">
  {/* Logo */}
  <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
    <img
      src="/logo.jpg"
      alt="Logo"
      className="w-19 h-19 object-contain"
      onError={(e) => {
        e.target.style.display = "none";
        e.target.nextSibling.style.display = "block";
      }}
    />
    <span className="text-white font-bold hidden">S</span>
  </div>

  {/* Text */}
  <div className="text-center leading-tight mt-1">
    <h1 className="text-3xl font-bold text-gray-900"> Project Validation Dashboard</h1>
    <p className="text-md text-gray-500"> Admin Panel</p>
  </div>
</div>


  <CardTitle className="text-2xl">Welcome </CardTitle>
  <CardDescription>Sign in to access your dashboard</CardDescription>
</CardHeader>

        <CardContent>
          <div className="space-y-4">
        

            <div className="space-y-2">
              <Label htmlFor="email">Email Address (Optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@sabza.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError("")
                }}
                disabled={loading}
                className="w-full border-gray-300" // Kept a subtle border for input
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 text-red-700 bg-red-50 border-red-200 rounded-md">
                {" "}
                {/* Removed border */}
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleLogin} disabled={loading}>
                <LogIn className="w-4 h-4 mr-2" />
                {loading ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Redirecting...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>

              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSignup} disabled={loading}>
                <UserPlus className="w-4 h-4 mr-2" />
                {loading ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Redirecting...
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" /> {/* Changed to light gray border */}
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full bg-transparent border-gray-300"
                onClick={handleQuickLogin}
                disabled={loading}
              >
                {" "}
                {/* Changed to light gray border */}
                {loading ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Redirecting...
                  </div>
                ) : (
                  "Quick Login (No Email)"
                )}
              </Button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
             
              <button onClick={handleClearAndRefresh} className="underline hover:text-gray-700 mt-1">
                Clear all data and retry
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
