"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

const categories = [
  {
    id: 1,
    name: "Dairy, Bread & Eggs",
    nameKey: "category.dairy",
    slug: "dairy-bread-eggs",
    image: "/milk-bread-eggs-dairy-products.jpg",
    gradient: "from-amber-100 via-orange-50 to-yellow-50",
  },
  {
    id: 2,
    name: "Fruits & Vegetables",
    nameKey: "category.fruitsVegetables",
    slug: "fruits-vegetables",
    image: "/fresh-fruits-vegetables-basket.jpg",
    gradient: "from-green-100 via-emerald-50 to-lime-50",
  },
  {
    id: 3,
    name: "Cold Drinks & Juices",
    nameKey: "category.beverages",
    slug: "cold-drinks-juices",
    image: "/pepsi-cola-cold-drinks-juices.jpg",
    gradient: "from-blue-100 via-cyan-50 to-sky-50",
  },
  {
    id: 4,
    name: "Snacks & Munchies",
    nameKey: "category.snacks",
    slug: "snacks-munchies",
    image: "/lays-chips-snacks-packets.jpg",
    gradient: "from-yellow-100 via-amber-50 to-orange-50",
  },
  {
    id: 5,
    name: "Breakfast & Cereals",
    nameKey: "category.groceryStaples",
    slug: "breakfast-cereals",
    image: "/kelloggs-cornflakes-breakfast-cereal.jpg",
    gradient: "from-orange-100 via-yellow-50 to-amber-50",
  },
  {
    id: 6,
    name: "Sweet Tooth",
    nameKey: "category.snacks",
    slug: "sweet-tooth",
    image: "/chocolates-sweets-candy.jpg",
    gradient: "from-pink-100 via-rose-50 to-red-50",
  },
  {
    id: 7,
    name: "Bakery & Biscuits",
    nameKey: "category.bakery",
    slug: "bakery-biscuits",
    image: "/oreo-biscuits-cookies-bakery.jpg",
    gradient: "from-amber-100 via-orange-50 to-yellow-50",
  },
  {
    id: 8,
    name: "Tea, Coffee & Drinks",
    nameKey: "category.beverages",
    slug: "tea-coffee-drinks",
    image: "/tea-coffee-bournvita-drinks.jpg",
    gradient: "from-stone-100 via-amber-50 to-brown-50",
  },
  {
    id: 9,
    name: "Atta, Rice & Dal",
    nameKey: "category.groceryStaples",
    slug: "atta-rice-dal",
    image: "/rice-atta-flour-dal-staples.jpg",
    gradient: "from-yellow-100 via-lime-50 to-green-50",
  },
  {
    id: 10,
    name: "Masala & Dry Fruits",
    nameKey: "category.groceryStaples",
    slug: "masala-dry-fruits",
    image: "/spices-masala-dry-fruits-almonds.jpg",
    gradient: "from-red-100 via-orange-50 to-amber-50",
  },
]

export function CategoryGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <section className="mt-6 sm:mt-8 lg:mt-10 px-3 sm:px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-foreground tracking-tight">
            {t("home.categories")}
          </h2>
          <p className="text-[12px] sm:text-[14px] text-muted-foreground mt-0.5">{t("misc.viewAll")}</p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button className="p-2 rounded-xl border border-border hover:bg-muted transition-colors">
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-xl border border-border hover:bg-muted transition-colors">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category, index) => (
          <Link
            href={`/category/${category.slug}`}
            key={category.id}
            className="flex flex-col items-center gap-2.5 sm:gap-3 group flex-shrink-0 min-w-[90px] sm:min-w-[110px] md:min-w-[130px]"
            onMouseEnter={() => setHoveredId(category.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className={`
                relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                bg-gradient-to-br ${category.gradient}
                rounded-2xl sm:rounded-3xl overflow-hidden p-2.5 sm:p-3 md:p-4
                transition-all duration-500 ease-out
                shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1),0_4px_10px_-2px_rgba(0,0,0,0.05),inset_0_-3px_8px_rgba(255,255,255,0.8),inset_0_3px_6px_rgba(255,255,255,0.95)]
                border-2 border-white/70
                group-hover:shadow-[0_16px_50px_-8px_rgba(0,0,0,0.15),0_8px_20px_-4px_rgba(0,0,0,0.08),inset_0_-3px_8px_rgba(255,255,255,0.8),inset_0_3px_6px_rgba(255,255,255,0.95)]
                group-hover:-translate-y-3 group-hover:scale-105
                group-active:scale-95 group-active:translate-y-0
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent rounded-2xl sm:rounded-3xl pointer-events-none" />

              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={120}
                height={120}
                className={`
                  relative z-10 w-full h-full object-contain drop-shadow-lg
                  transition-all duration-500 ease-out
                  ${hoveredId === category.id ? "scale-110" : "scale-100"}
                `}
              />
            </div>

            <span className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold text-foreground/80 text-center leading-tight max-w-[85px] sm:max-w-[100px] md:max-w-[120px] transition-all duration-300 group-hover:text-primary group-hover:font-bold">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
