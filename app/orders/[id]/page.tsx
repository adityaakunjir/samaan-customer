import { Suspense } from "react"
import OrderDetailWrapper from "./OrderDetailWrapper"
import { Loader2 } from "lucide-react"

// Generate a fallback page for static export
export function generateStaticParams() {
  return [{ id: '_fallback' }]
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  )
}

export default function OrderDetailPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <OrderDetailWrapper />
    </Suspense>
  )
}
