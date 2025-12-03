"use client"

import { ProductCard } from "@/components/product-card"
import { Flame, Clock } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

const freshProducts = [
  {
    id: 1,
    name: "Local Red Tomato",
    quantity: "1 kg",
    price: 150,
    image: "/fresh-red-tomato-white-background.jpg",
    freshnessScore: 98,
    stockedTime: "20m ago",
    weight: "1 kg",
    deliveryEta: "8 mins",
  },
  {
    id: 2,
    name: "Green Capsicum",
    quantity: "500g",
    price: 80,
    image: "/green-capsicum-vegetable.jpg",
    freshnessScore: 95,
    stockedTime: "35m ago",
    weight: "500g",
    deliveryEta: "10 mins",
  },
  {
    id: 3,
    name: "Fresh Spinach",
    quantity: "250g",
    price: 40,
    image: "/fresh-spinach-leaves-bundle.jpg",
    freshnessScore: 99,
    stockedTime: "10m ago",
    weight: "250g",
    deliveryEta: "8 mins",
  },
]

export function FreshDropsSection() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

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
        {freshProducts.map((product, index) => (
          <div
            key={product.id}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <ProductCard product={product} variant="full" />
          </div>
        ))}
      </div>
    </section>
  )
}
