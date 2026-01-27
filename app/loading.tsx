import {
  HeroBannerSkeleton,
  PromoCardsSkeleton,
  CategoryGridSkeleton,
  SmartRestockSkeleton,
  FreshDropsSkeleton,
} from "@/components/skeletons"

export default function Loading() {
  return (
    <main className="min-h-screen pb-24">
      {/* Header skeleton */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 lg:px-8 py-3 max-w-7xl mx-auto">
          <div className="h-12 w-32 bg-muted rounded animate-pulse" />
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
            <div className="h-5 w-5 bg-muted rounded animate-pulse" />
            <div className="flex-1">
              <div className="h-4 bg-muted rounded w-32 mb-1" />
              <div className="h-3 bg-muted rounded w-48" />
            </div>
          </div>
          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <div className="h-11 bg-muted rounded-xl animate-pulse" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-16 bg-muted rounded-lg animate-pulse" />
            <div className="h-9 w-24 bg-muted rounded-lg animate-pulse" />
          </div>
        </div>
      </header>

      {/* Search bar skeleton (mobile) */}
      <div className="px-4 py-3 md:hidden">
        <div className="h-11 bg-muted rounded-xl animate-pulse" />
      </div>

      {/* Hero banner skeleton */}
      <section className="px-4 lg:px-8 mt-4 max-w-7xl mx-auto">
        <HeroBannerSkeleton />
      </section>

      {/* Promo cards skeleton */}
      <PromoCardsSkeleton />

      {/* Category grid skeleton */}
      <CategoryGridSkeleton />

      {/* Smart restock skeleton */}
      <SmartRestockSkeleton />

      {/* Fresh drops skeleton */}
      <FreshDropsSkeleton />

      {/* Cart footer skeleton */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="h-14 bg-muted rounded-2xl animate-pulse" />
        </div>
      </div>
    </main>
  )
}
