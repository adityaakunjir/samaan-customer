"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { Suspense } from "react"

function AuthErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const errorDescription = searchParams.get("error_description")

  return (
    <div className="w-full max-w-md text-center">
      <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-border/50 p-8">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">Authentication Error</h2>
        <p className="text-muted-foreground mb-4">Something went wrong during authentication. Please try again.</p>

        {(error || errorDescription) && (
          <div className="bg-muted/50 rounded-xl p-4 mb-6 text-left">
            {error && (
              <p className="text-sm text-foreground font-medium mb-1">
                Error: <span className="text-destructive">{error}</span>
              </p>
            )}
            {errorDescription && <p className="text-sm text-muted-foreground">{errorDescription}</p>}
          </div>
        )}

        <div className="flex flex-col gap-3">
          <Link href="/login">
            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl">
              Try Again
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full h-12 rounded-xl bg-transparent">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function AuthErrorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4">
      <Suspense
        fallback={
          <div className="w-full max-w-md text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-border/50 p-8">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse" />
              <div className="h-8 bg-muted rounded-lg mb-3 animate-pulse" />
              <div className="h-4 bg-muted rounded-lg animate-pulse" />
            </div>
          </div>
        }
      >
        <AuthErrorContent />
      </Suspense>
    </main>
  )
}
