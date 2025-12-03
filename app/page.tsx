import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { NearbyShops } from "@/components/nearby-shops"
import { CategoryGrid } from "@/components/category-grid"
import { SmartRestockSection } from "@/components/smart-restock-section"
import { FreshDropsSection } from "@/components/fresh-drops-section"
import { CartFooter } from "@/components/cart-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background pb-24 sm:pb-28 overflow-x-hidden">
      <Header />

      <div className="px-3 sm:px-4 lg:px-8 py-4 sm:py-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <HeroBanner />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        <NearbyShops />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
        <CategoryGrid />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <SmartRestockSection />
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
          <FreshDropsSection />
        </div>
      </div>

      <CartFooter />
    </main>
  )
}
