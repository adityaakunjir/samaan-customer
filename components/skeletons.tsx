// Skeleton components for loading states

export function ProductCardSkeleton({ variant = "compact" }: { variant?: "compact" | "full" }) {
  if (variant === "full") {
    return (
      <div
        className="bg-card rounded-[16px] border border-[rgba(0,0,0,0.05)] p-3 flex items-center gap-3 
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] animate-pulse"
      >
        {/* Image skeleton */}
        <div className="relative w-20 h-20 bg-muted rounded-[12px] flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skeleton-shimmer" />
        </div>
        <div className="flex-1 min-w-0 space-y-2">
          {/* Title */}
          <div className="h-4 bg-muted rounded-[8px] w-3/4" />
          {/* Subtitle */}
          <div className="h-3 bg-muted rounded-[8px] w-1/2" />
          {/* Price and button row */}
          <div className="flex items-center justify-between mt-2">
            <div className="h-5 bg-muted rounded-[8px] w-16" />
            <div className="h-8 bg-muted rounded-[12px] w-16" />
          </div>
        </div>
      </div>
    )
  }

  // Compact variant
  return (
    <div
      className="bg-card rounded-[16px] border border-[rgba(0,0,0,0.05)] p-3 min-w-[140px] flex-shrink-0 
      shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] animate-pulse"
    >
      {/* Image skeleton */}
      <div className="relative w-full aspect-square bg-muted rounded-[12px] mb-2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skeleton-shimmer" />
      </div>
      {/* Title */}
      <div className="h-4 bg-muted rounded-[8px] w-3/4 mb-1" />
      {/* Weight */}
      <div className="h-3 bg-muted rounded-[8px] w-1/2 mb-1" />
      {/* ETA */}
      <div className="h-3 bg-muted rounded-[8px] w-2/3 mb-2" />
      {/* Price and button */}
      <div className="flex items-center justify-between">
        <div className="h-5 bg-muted rounded-[8px] w-12" />
        <div className="w-7 h-7 bg-muted rounded-[10px]" />
      </div>
    </div>
  )
}

export function MiniProductCardSkeleton() {
  return (
    <div
      className="bg-card rounded-[14px] border border-[rgba(0,0,0,0.05)] p-2 min-w-[100px] w-[100px] flex-shrink-0 
      shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] animate-pulse"
    >
      {/* Image skeleton */}
      <div className="relative w-full h-14 bg-muted rounded-[10px] mb-1.5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skeleton-shimmer" />
      </div>
      {/* Title */}
      <div className="h-3 bg-muted rounded-[6px] w-full mb-1" />
      {/* Weight & ETA */}
      <div className="h-2 bg-muted rounded-[6px] w-2/3 mb-1" />
      <div className="h-2 bg-muted rounded-[6px] w-1/2 mb-1.5" />
      {/* Price and button */}
      <div className="flex items-center justify-between">
        <div className="h-3.5 bg-muted rounded-[6px] w-10" />
        <div className="w-5 h-5 bg-muted rounded-[8px]" />
      </div>
    </div>
  )
}

export function HeroBannerSkeleton() {
  return (
    <div className="relative">
      <div
        className="relative h-[200px] md:h-[280px] lg:h-[320px] rounded-[20px] overflow-hidden bg-muted animate-pulse
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skeleton-shimmer" />

        {/* Content skeleton */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-10 lg:px-14 max-w-2xl">
          <div className="bg-white/10 rounded-[16px] p-4 md:p-6 space-y-3 md:space-y-4">
            {/* Title */}
            <div className="h-8 md:h-12 bg-white/20 rounded-[10px] w-3/4" />
            {/* Subtitle */}
            <div className="h-4 md:h-6 bg-white/20 rounded-[10px] w-full" />
            {/* Button */}
            <div className="h-10 md:h-12 bg-white/20 rounded-[12px] w-32 mt-2" />
          </div>
        </div>

        {/* Image skeleton */}
        <div className="absolute right-4 md:right-10 bottom-4 top-4 flex items-center">
          <div className="h-[140px] md:h-[200px] lg:h-[240px] w-[140px] md:w-[200px] lg:w-[240px] bg-white/10 rounded-[16px]" />
        </div>
      </div>

      {/* Dots skeleton */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="h-2 w-6 bg-muted rounded-full" />
        <div className="h-2 w-2 bg-muted rounded-full" />
        <div className="h-2 w-2 bg-muted rounded-full" />
      </div>
    </div>
  )
}

export function CategoryCardSkeleton() {
  return (
    <div className="flex flex-col items-center gap-2 flex-shrink-0 min-w-[100px] md:min-w-[120px] animate-pulse">
      <div
        className="w-24 h-24 md:w-28 md:h-28 bg-muted rounded-[16px] overflow-hidden relative
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]
        border border-[rgba(0,0,0,0.05)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skeleton-shimmer" />
      </div>
      {/* Label skeleton */}
      <div className="h-4 bg-muted rounded-[8px] w-16 md:w-20" />
    </div>
  )
}

export function CategoryGridSkeleton() {
  return (
    <section className="mt-8 px-4 lg:px-8 max-w-7xl mx-auto">
      {/* Title skeleton */}
      <div className="h-7 bg-muted rounded-[10px] w-48 mb-4 animate-pulse" />
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {Array.from({ length: 10 }).map((_, i) => (
          <CategoryCardSkeleton key={i} />
        ))}
      </div>
    </section>
  )
}

export function PromoCardsSkeleton() {
  return (
    <section className="mt-8 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-36 md:h-44 bg-muted rounded-[20px] animate-pulse relative overflow-hidden
            shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skeleton-shimmer" />
          </div>
        ))}
      </div>
    </section>
  )
}

export function SmartRestockSkeleton() {
  return (
    <section className="mt-8 px-4 lg:px-8 max-w-7xl mx-auto">
      {/* Header skeleton */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-5 bg-muted rounded-full w-32 animate-pulse" />
          <div className="h-5 bg-muted rounded-[10px] w-40 animate-pulse" />
        </div>
        <div className="h-4 bg-muted rounded-[8px] w-16 animate-pulse" />
      </div>
      {/* Products skeleton */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {Array.from({ length: 8 }).map((_, i) => (
          <MiniProductCardSkeleton key={i} />
        ))}
      </div>
    </section>
  )
}

export function FreshDropsSkeleton() {
  return (
    <section className="mt-8 px-4 lg:px-8 max-w-7xl mx-auto">
      {/* Header skeleton */}
      <div className="flex items-center justify-between mb-4">
        <div className="h-6 bg-muted rounded-[10px] w-44 animate-pulse" />
        <div className="h-4 bg-muted rounded-[8px] w-16 animate-pulse" />
      </div>
      {/* Products grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} variant="full" />
        ))}
      </div>
    </section>
  )
}
