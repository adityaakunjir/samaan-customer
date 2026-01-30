"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"

// Extend Window interface for Google Sign-In
declare global {
  interface Window {
    google: any
  }
}

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowLeft,
  Phone,
  Sparkles,
  Shield,
  Zap,
  Star,
  AlertCircle,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

function LoginContent() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect") || "/"

  const [showPassword, setShowPassword] = useState(false)
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone")
  const [isLoading, setIsLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showOtpInput, setShowOtpInput] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [mounted, setMounted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [otpTarget, setOtpTarget] = useState<"phone" | "email">("phone")
  const [useEmailOtp, setUseEmailOtp] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePhoneOtpLogin = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Placeholder: In production, implement your own auth
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setShowOtpInput(true)
      setOtpTarget("phone")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailOtpLogin = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Placeholder: In production, implement your own auth
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setShowOtpInput(true)
      setOtpTarget("email")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailPasswordLogin = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { authAPI } = await import("@/lib/api/client")
      const response = await authAPI.login(email, password)
      if (response.success) {
        router.push(redirectTo)
      } else {
        setError(response.message || "Invalid email or password.")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid email or password.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    setIsLoading(true)
    setError(null)
    const otpCode = otp.join("")

    try {
      // Placeholder: In production, implement your own OTP verification
      await new Promise((resolve) => setTimeout(resolve, 1000))
      if (otpCode.length !== 6) {
        throw new Error("Please enter a valid 6-digit OTP")
      }
      router.push(redirectTo)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Load Google Sign-In script
    const loadGoogleScript = () => {
      if (document.getElementById("google-signin-script")) return

      const script = document.createElement("script")
      script.id = "google-signin-script"
      script.src = "https://accounts.google.com/gsi/client"
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    }

    loadGoogleScript()
  }, [])

  const handleGoogleCallback = async (response: any) => {
    setIsLoading(true)
    setError(null)

    try {
      const { authAPI } = await import("@/lib/api/client")
      const result = await authAPI.googleLogin(response.credential)

      if (result.success) {
        router.push(redirectTo)
      } else {
        setError(result.message || "Google login failed")
        setIsLoading(false)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to login with Google.")
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    setError(null)

    try {
      if (!window.google) {
        setError("Google Sign-In is loading. Please wait a moment and try again.")
        setIsLoading(false)
        return
      }

      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
      if (!clientId) {
        setError("Google login is not configured. Please use email or phone.")
        setIsLoading(false)
        return
      }

      // Initialize Google Sign-In
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleCallback,
      })

      // Trigger Google Sign-In popup
      window.google.accounts.id.prompt()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to initialize Google login.")
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (showOtpInput) {
      await handleVerifyOtp()
      return
    }

    if (loginMethod === "phone") {
      await handlePhoneOtpLogin()
    } else {
      if (useEmailOtp) {
        await handleEmailOtpLogin()
      } else {
        await handleEmailPasswordLogin()
      }
    }
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleResendOtp = async () => {
    setError(null)
    if (otpTarget === "phone") {
      await handlePhoneOtpLogin()
    } else {
      await handleEmailOtpLogin()
    }
  }

  const features = [
    { icon: Zap, textKey: "promo.in10Minutes" },
    { icon: Shield, textKey: "checkout.paymentMethod" },
    { icon: Sparkles, textKey: "promo.freshProduce" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col lg:flex-row">
      {/* Left Side - Branding (Desktop Only) */}
      <div
        className={`hidden lg:flex lg:w-1/2 xl:w-[45%] bg-gradient-to-br from-primary via-primary to-orange-500 relative overflow-hidden transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/images/samaan-logo.png"
                alt="Samaan"
                width={140}
                height={44}
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
                {t("hero.freshVegetables")},
                <br />
                <span className="text-white/90">{t("promo.fastDelivery")}.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-md">{t("auth.loginSubtitle")}</p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{t(feature.textKey)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              ))}
            </div>
            <span className="text-white/80 text-sm">{t("auth.trustedBy")}</span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex flex-col min-h-screen lg:min-h-0">
        {/* Mobile Header */}
        <header className="px-4 sm:px-6 py-4 flex items-center justify-between lg:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="p-2.5 rounded-xl bg-muted/80 group-hover:bg-primary/10 transition-all duration-200 group-hover:scale-105">
              <ArrowLeft className="w-4 h-4 group-hover:text-primary transition-colors" />
            </div>
          </Link>
          <Image
            src="/images/samaan-logo.png"
            alt="Samaan"
            width={100}
            height={32}
            className="h-7 w-auto object-contain"
          />
          <div className="w-10" />
        </header>

        {/* Desktop Back Button */}
        <div className="hidden lg:flex items-center justify-between p-6 xl:p-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="p-2.5 rounded-xl bg-muted/80 group-hover:bg-primary/10 transition-all duration-200 group-hover:scale-105">
              <ArrowLeft className="w-4 h-4 group-hover:text-primary transition-colors" />
            </div>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8">
          <div
            className={`w-full max-w-[420px] transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {/* Welcome Section */}
            <div className="text-center mb-8 lg:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 tracking-tight">
                {showOtpInput ? t("auth.verifyOtp") : t("auth.welcomeBack")}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                {showOtpInput
                  ? otpTarget === "phone"
                    ? `${t("auth.otpSent")} +91 ${phoneNumber}`
                    : `${t("auth.otpSent")} ${email}`
                  : t("auth.loginSubtitle")}
              </p>
            </div>

            {/* Demo Account Info */}
            <div className="mb-4 p-4 rounded-xl border-2 border-primary/30 bg-primary/5">
              <p className="text-sm font-semibold text-primary">Demo Account:</p>
              <p className="text-sm text-primary">Email: customer1@demo.com</p>
              <p className="text-sm text-primary">Password: Demo@123</p>
            </div>

            {/* Login Card */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-border/50 p-6 sm:p-8">
              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              {!showOtpInput ? (
                <>
                  {/* Method Toggle */}
                  <div className="flex bg-muted/60 rounded-2xl p-1.5 mb-6">
                    <button
                      onClick={() => {
                        setLoginMethod("phone")
                        setShowOtpInput(false)
                        setError(null)
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${loginMethod === "phone"
                        ? "bg-card text-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      <Phone className="w-4 h-4" />
                      {t("auth.phone")}
                    </button>
                    <button
                      onClick={() => {
                        setLoginMethod("email")
                        setShowOtpInput(false)
                        setError(null)
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${loginMethod === "email"
                        ? "bg-card text-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      <Mail className="w-4 h-4" />
                      {t("auth.email")}
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {loginMethod === "phone" ? (
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2.5">
                          {t("auth.enterPhone")}
                        </label>
                        <div className="relative group">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2.5 text-muted-foreground">
                            <span className="text-sm font-semibold text-foreground">+91</span>
                            <div className="w-px h-6 bg-border" />
                          </div>
                          <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                            placeholder={t("auth.enterPhone")}
                            className="w-full h-14 pl-[76px] pr-4 rounded-xl border-2 border-border/60 bg-background text-base font-medium
                              focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary
                              transition-all duration-200 placeholder:text-muted-foreground/60
                              group-hover:border-border"
                            maxLength={10}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2.5">
                            {t("auth.enterEmail")}
                          </label>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder={t("auth.enterEmail")}
                              className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-border/60 bg-background text-base font-medium
                                focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary
                                transition-all duration-200 placeholder:text-muted-foreground/60
                                group-hover:border-border"
                            />
                          </div>
                        </div>

                        {!useEmailOtp && (
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2.5">
                              {t("auth.enterPassword")}
                            </label>
                            <div className="relative group">
                              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                              <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={t("auth.enterPassword")}
                                className="w-full h-14 pl-12 pr-14 rounded-xl border-2 border-border/60 bg-background text-base font-medium
                                  focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary
                                  transition-all duration-200 placeholder:text-muted-foreground/60
                                  group-hover:border-border"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                              >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setUseEmailOtp(!useEmailOtp)}
                            className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
                          >
                            {useEmailOtp ? "Use password instead" : "Login with OTP"}
                          </button>
                          {!useEmailOtp && (
                            <Link
                              href="/forgot-password"
                              className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
                            >
                              {t("auth.forgotPassword")}
                            </Link>
                          )}
                        </div>
                      </>
                    )}

                    <Button
                      type="submit"
                      disabled={
                        isLoading ||
                        (loginMethod === "phone" && phoneNumber.length !== 10) ||
                        (loginMethod === "email" && !email)
                      }
                      className="w-full h-14 bg-primary hover:bg-primary/90
                        text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40
                        transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100
                        text-base"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>{t("misc.loading")}</span>
                        </div>
                      ) : loginMethod === "phone" || useEmailOtp ? (
                        t("auth.sendOtp")
                      ) : (
                        t("auth.login")
                      )}
                    </Button>
                  </form>

                  {/* Divider - only show if Google is configured */}
                  {process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID && (
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border/60" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-card px-4 text-sm text-muted-foreground">{t("auth.or")}</span>
                      </div>
                    </div>
                  )}

                  {/* Google Login - only show if configured */}
                  {process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID && (
                    <div id="google-signin-button" className="w-full">
                      <button
                        type="button"
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                        className="w-full h-14 flex items-center justify-center gap-3 rounded-xl border-2 border-border/60 bg-background
                        text-base font-semibold text-foreground
                        hover:bg-muted/50 hover:border-border
                        transition-all duration-200
                        disabled:opacity-60"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        {t("auth.continueWithGoogle")}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                /* OTP Input */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex justify-center gap-2 sm:gap-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-bold rounded-xl border-2 border-border/60 bg-background
                          focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary
                          transition-all duration-200"
                      />
                    ))}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || otp.some((digit) => !digit)}
                    className="w-full h-14 bg-primary hover:bg-primary/90
                      text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40
                      transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100
                      text-base"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{t("misc.loading")}</span>
                      </div>
                    ) : (
                      t("auth.verifyAndLogin")
                    )}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={isLoading}
                      className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors disabled:opacity-60"
                    >
                      {t("auth.resendOtp")}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setShowOtpInput(false)
                      setOtp(["", "", "", "", "", ""])
                      setError(null)
                    }}
                    className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("auth.changeNumber")}
                  </button>
                </form>
              )}
            </div>

            {/* Sign Up Link */}
            {!showOtpInput && (
              <p className="text-center mt-6 text-muted-foreground text-sm">
                {t("auth.noAccount")}{" "}
                <Link href="/signup" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                  {t("auth.signUp")}
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LoginContent />
    </Suspense>
  )
}
