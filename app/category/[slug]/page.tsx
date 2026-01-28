import { Suspense } from "react"
import CategoryWrapper from "./CategoryWrapper"
import { Loader2 } from "lucide-react"

// Generate fallback pages for known categories + a fallback for static export
export function generateStaticParams() {
  return [
    { slug: 'dairy-bread-eggs' },
    { slug: 'fruits-vegetables' },
    { slug: 'snacks-beverages' },
    { slug: '_fallback' }
  ]
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  )
}

export default function CategoryPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CategoryWrapper />
    </Suspense>
  )
}
