"use client"

import { ProductCard } from "@/components/product-card"
import { Flame, Clock, Loader2 } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import { useEffect, useState } from "react"
import { productsAPI } from "@/lib/api/client"

interface FreshProduct {
  id: number
  name: string
  quantity: string
  price: number
  image: string
  freshnessScore: number
  stockedTime: string
  weight: string
  deliveryEta: string
  merchantId: string
  productId: string
}

export function FreshDropsSection() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)
  const [products, setProducts] = useState<FreshProduct[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const apiProducts = await productsAPI.getAll()
        // Get last 3 products for fresh drops (different from smart restock)
        const freshProducts: FreshProduct[] = apiProducts.slice(-6, -3).map((p: any, index: number) => ({
          id: 100 + index, // Different IDs from smart restock
          name: p.name,
          quantity: p.unit || "1 unit",
          price: p.price,
          image: p.imageUrl || "/fresh-red-tomato-white-background.jpg",
          freshnessScore: 95 + Math.floor(Math.random() * 5),
          stockedTime: `${10 + Math.floor(Math.random() * 30)}m ago`,
          weight: p.unit || "1 unit",
          deliveryEta: `${8 + Math.floor(Math.random() * 4)} mins`,
          merchantId: p.merchantId,
          productId: p.id,
        }))
        setProducts(freshProducts.length > 0 ? freshProducts : [])
      } catch (error) {
        console.error("Failed to fetch fresh products:", error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className="mt-6 sm:mt-8 lg:mt-10 px-3 sm:px-4 lg:px-8 pb-4">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-foreground">{t("home.freshDrops")}</h3>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-600 text-[10px] sm:text-[11px] font-bold rounded-full border border-red-200">
            <Flame className="w-3 h-3" />
            Hot
          </span>
          <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-600 text-[10px] sm:text-[11px] font-medium rounded-full border border-green-200">
            <Clock className="w-3 h-3" />
            {t("product.stocked")}
          </span>
        </div>
        <Link
          href="/category/fruits-vegetables"
          className="text-primary font-semibold text-[12px] sm:text-[14px] hover:underline transition-all duration-200 hover:text-primary/80"
        >
          {t("home.seeAll")} →
        </Link>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {loading ? (
          <div className="col-span-full flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <ProductCard product={product} variant="full" />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-muted-foreground py-8">
            No fresh products available
          </div>
        )}
      </div>
    </section>
  )
}
