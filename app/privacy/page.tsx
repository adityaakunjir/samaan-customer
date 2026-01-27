"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-muted rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-bold">Privacy Policy</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-sm sm:prose max-w-none">
          <p className="text-muted-foreground text-sm mb-6">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly, such as your name, phone number, email address, delivery
              address, and payment information. We also collect usage data to improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your information to process orders, provide customer support, send order updates, improve our
              services, and personalize your shopping experience with relevant recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We share your information with delivery partners and kirana stores to fulfill your orders. We do not sell
              your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your personal information. Payment data is
              encrypted and processed through secure payment gateways.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete your personal information. You can manage your preferences
              in the app settings or contact us for assistance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For privacy-related questions, please contact us at privacy@samaan.app
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
