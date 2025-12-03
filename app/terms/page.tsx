"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-muted rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-bold">Terms of Service</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-sm sm:prose max-w-none">
          <p className="text-muted-foreground text-sm mb-6">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Samaan's services, you accept and agree to be bound by these Terms of Service. If
              you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Services Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              Samaan provides an online platform connecting users with local kirana stores for grocery delivery. We
              facilitate orders, payments, and delivery logistics to ensure a seamless shopping experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must provide accurate and complete information when creating an account. You are responsible for
              maintaining the confidentiality of your account credentials and for all activities under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Orders and Payments</h2>
            <p className="text-muted-foreground leading-relaxed">
              All orders are subject to availability and confirmation. Prices are subject to change without notice.
              Payments are processed securely through our payment partners. Refunds are processed according to our
              refund policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              Delivery times are estimates and may vary based on factors beyond our control. We strive to deliver within
              the promised timeframe but cannot guarantee exact delivery times.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at support@samaan.app
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
