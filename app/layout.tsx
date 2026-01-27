import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { CartProvider } from "@/lib/cart-context"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Updated metadata for Samaan
export const metadata: Metadata = {
  title: "Samaan - Groceries Delivered in Minutes",
  description:
    "Get fresh groceries delivered to your doorstep in 12 minutes. AI-powered smart restock, freshness guaranteed.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#F97316",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased min-h-screen`}>
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
