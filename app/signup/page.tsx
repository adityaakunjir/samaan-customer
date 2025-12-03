"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ShoppingBag,
  Clock,
  Shield,
  AlertCircle,
  Loader2,
} from "lucide-react"

const features = [
  { icon: Clock, text: "Delivery in 10-15 minutes" },
  { icon: ShoppingBag, text: "1000+ products from local stores" },
  { icon: Shield, text: "Safe & secure payments" },
]

export default function SignupPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [signupMethod, setSignupMethod] = useState<"phone" | "email">("phone")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showOtpInput, setShowOtpInput] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePhoneOtpSignup = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Placeholder: In production, implement your own auth
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setShowOtpInput(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignup = async () => {
    setIsLoading(true)
    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      // Placeholder: In production, implement your own auth
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSuccessMessage("Account created successfully! You can now login.")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign up. Please try again.")
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
      router.push("/")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignup = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Placeholder: In production, implement your own OAuth
      setError("Google signup is not configured. Please use email or phone.")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign up with Google.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms && !showOtpInput) {
      setError("Please agree to the terms and conditions")
      return
    }

    if (showOtpInput) {
      handleVerifyOtp()
      return
    }

    if (signupMethod === "phone") {
      handlePhoneOtpSignup()
    } else {
      handleEmailSignup()
    }
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      if (value && index < 5) {
        document.getElementById(`signup-otp-${index + 1}`)?.focus()
      }
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`signup-otp-${index - 1}`)?.focus()
    }
  }

  const handleResendOtp = async () => {
    setError(null)
    await handlePhoneOtpSignup()
  }

  const isPhoneValid = phoneNumber.length === 10 && formData.fullName.length > 2
  const isEmailFormValid =
    formData.fullName.length > 2 &&
    formData.email.includes("@") &&
    formData.password.length >= 6 &&
    formData.password === formData.confirmPassword

  // Success state for email signup
  if (successMessage) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-border/50 p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Account Created!</h2>
            <p className="text-muted-foreground mb-6">{successMessage}</p>
            <Link href="/login">
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl">
                Go to Login
              </Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col lg:flex-row">
      {/* Left Side - Branding (Desktop Only) */}
      <div
        className={`hidden lg:flex lg:w-1/2 xl:w-[45%] bg-gradient-to-br from-primary via-primary to-orange-500 relative overflow-hidden transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/images/samaan-logo.png"
                alt="Samaan"
                width={140}
                height={44}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
                Join the Samaan
                <br />
                <span className="text-white/90">family today.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-md">
                Sign up now and get your first delivery free. Shop from your favorite local stores.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 text-white/90 transition-all duration-500 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">Trusted by 50,000+ users</span>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
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
            <div className="text-center mb-6 lg:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 tracking-tight">
                {showOtpInput ? "Verify OTP" : "Create Account"}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                {showOtpInput
                  ? `Enter the 6-digit code sent to +91 ${phoneNumber}`
                  : "Sign up to start ordering groceries"}
              </p>
            </div>

            {/* Signup Card */}
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
                        setSignupMethod("phone")
                        setError(null)
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        signupMethod === "phone"
                          ? "bg-card text-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Phone className="w-4 h-4" />
                      Phone
                    </button>
                    <button
                      onClick={() => {
                        setSignupMethod("email")
                        setError(null)
                      }}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        signupMethod === "email"
                          ? "bg-card text-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name - Common for both methods */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Enter your full name"
                          className="w-full h-12 sm:h-14 pl-12 pr-4 rounded-xl border-2 border-border/60 bg-background text-base font-medium
                            focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary
                            transition-all duration-200 placeholder:text-muted-foreground/60
                            group-hover:border-border"
                        />
                      </div>
                    </div>

                    {signupMethod === "phone" ? (
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                        <div className="relative group">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2.5 text-muted-foreground">
                            <span className="text-sm font-semibold text-foreground">+91</span>
                            <div className="w-px h-6 bg-border" />
                          </div>
                          <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                            placeholder="Enter 10-digit number"
                            className="w-full h-12 sm:h-14 pl-[76px] pr-4 rounded-xl border-2 border-border/60 bg-background text-base font-medium
                              focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary
                              transition-all duration-200 placeholder:text-muted-foreground/60
                              group-hover:border-border"
                            maxLength={10}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="you@example.com"
                              className="w-full h-12 sm:h-14 pl-12 pr-4 rounded-xl border-2 border-border/60 bg-background text-base font-medium
                                focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary
                                transition-all duration-200 placeholder:text-muted-foreground/60
                                group-hover:border-border"
                            />
                          </div>
                        </div>

                        {/* Password */}
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
                          <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                              type={showPassword ? "text" : "password"}
                              value={formData.password}
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                              placeholder="Create a password (min 6 chars)"
                              className="w-full h-12 sm:h-14 pl-12 pr-14 rounded-xl border-2 border-border/60 bg-background text-base font-medium
                                focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary
                                transition-all duration-200 placeholder:text-muted-foreground/60
                                group-hover:border-border"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Confirm Password</label>
                          <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              value={formData.confirmPassword}
                              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                              placeholder="Confirm your password"
                              className="w-full h-12 sm:h-14 pl-12 pr-14 rounded-xl border-2 border-border/60 bg-background text-base font-medium
                                focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary
                                transition-all duration-200 placeholder:text-muted-foreground/60
                                group-hover:border-border"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/20"
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={
                        isLoading || !agreedToTerms || (signupMethod === "phone" ? !isPhoneValid : !isEmailFormValid)
                      }
                      className="w-full h-12 sm:h-14 bg-primary hover:bg-primary/90
                        text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40
                        transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100
                        text-base"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Please wait...</span>
                        </div>
                      ) : signupMethod === "phone" ? (
                        "Send OTP"
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </form>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border/60" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-card px-4 text-sm text-muted-foreground">or continue with</span>
                    </div>
                  </div>

                  {/* Google Signup */}
                  <button
                    type="button"
                    onClick={handleGoogleSignup}
                    disabled={isLoading}
                    className="w-full h-12 sm:h-14 flex items-center justify-center gap-3 rounded-xl border-2 border-border/60 bg-background
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
                    Continue with Google
                  </button>
                </>
              ) : (
                /* OTP Input */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex justify-center gap-2 sm:gap-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`signup-otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl sm:text-2xl font-bold rounded-xl border-2 border-border/60 bg-background
                          focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary
                          transition-all duration-200"
                      />
                    ))}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || otp.some((digit) => !digit)}
                    className="w-full h-12 sm:h-14 bg-primary hover:bg-primary/90
                      text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40
                      transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100
                      text-base"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Verifying...</span>
                      </div>
                    ) : (
                      "Verify & Create Account"
                    )}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={isLoading}
                      className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors disabled:opacity-60"
                    >
                      Resend OTP
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
                    Change phone number
                  </button>
                </form>
              )}
            </div>

            {/* Login Link */}
            {!showOtpInput && (
              <p className="text-center mt-6 text-muted-foreground text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                  Login
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
