import { Suspense } from "react"
import ShopDetailWrapper from "./ShopDetailWrapper"
import { Loader2 } from "lucide-react"

// Generate a fallback page for static export
export function generateStaticParams() {
  // Return a placeholder - real IDs will be handled client-side
  return [{ id: '_fallback' }]
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Loading shop...</p>
      </div>
    </div>
  )
}

export default function ShopDetailPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShopDetailWrapper />
    </Suspense>
  )
}
