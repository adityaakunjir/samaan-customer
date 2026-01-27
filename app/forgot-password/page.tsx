"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ForgotPasswordPage() {
  const [method, setMethod] = useState<"phone" | "email">("phone")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Check your {method === "phone" ? "phone" : "inbox"}</h1>
          <p className="text-muted-foreground mb-8">
            We've sent a {method === "phone" ? "verification code to" : "password reset link to"}{" "}
            <span className="font-medium text-foreground">{method === "phone" ? `+91 ${phone}` : email}</span>
          </p>
          <Link href="/login">
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 rounded-xl font-semibold">
              Back to Login
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/login" className="p-2 hover:bg-muted rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-bold">Reset Password</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <Image src="/images/samaan-logo.png" alt="Samaan" width={120} height={40} className="h-10 w-auto mx-auto" />
          </Link>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Forgot Password?</h2>
          <p className="text-muted-foreground text-sm sm:text-base">No worries, we'll help you reset it</p>
        </div>

        {/* Method Toggle */}
        <div className="flex gap-2 p-1.5 bg-muted/50 rounded-xl mb-6">
          <button
            onClick={() => setMethod("phone")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-sm transition-all ${
              method === "phone"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Phone className="w-4 h-4" />
            Phone
          </button>
          <button
            onClick={() => setMethod("email")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-sm transition-all ${
              method === "email"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Mail className="w-4 h-4" />
            Email
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {method === "phone" ? (
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <div className="flex h-12 sm:h-14 rounded-xl border-2 border-border focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 overflow-hidden bg-muted/30">
                <div className="flex items-center px-4 bg-muted/50 border-r border-border">
                  <span className="text-sm font-semibold text-muted-foreground">+91</span>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Enter 10-digit number"
                  className="flex-1 px-4 bg-transparent text-base focus:outline-none"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-12 sm:h-14 pl-12 pr-4 rounded-xl border-2 border-border bg-muted/30 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-base"
                />
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading || (method === "phone" ? phone.length !== 10 : !email.includes("@"))}
            className="w-full h-12 sm:h-14 bg-primary hover:bg-primary/90 rounded-xl font-bold text-base shadow-lg disabled:opacity-60"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Sending...</span>
              </div>
            ) : method === "phone" ? (
              "Send OTP"
            ) : (
              "Send Reset Link"
            )}
          </Button>
        </form>

        <p className="text-center mt-8 text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">
            Login
          </Link>
        </p>
      </main>
    </div>
  )
}
