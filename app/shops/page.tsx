"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, Clock, MapPin, Search, BadgeCheck, Zap, ChevronRight, SlidersHorizontal } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

const allShops = [
  {
    id: 1,
    name: "Sharma Kirana Store",
    logo: "/indian-grocery-store-logo-orange.jpg",
    distance: 0.3,
    deliveryTime: 8,
    rating: 4.5,
    reviewCount: 128,
    isOpen: true,
    tags: ["Groceries", "Dairy", "Snacks"],
    isVerified: true,
    discount: "10% OFF",
    minOrder: 99,
  },
  {
    id: 2,
    name: "Fresh Mart Express",
    logo: "/fresh-mart-grocery-store-logo-green.jpg",
    distance: 0.5,
    deliveryTime: 10,
    rating: 4.8,
    reviewCount: 256,
    isOpen: true,
    tags: ["Vegetables", "Fruits", "Organic"],
    isVerified: true,
    discount: "Free Delivery",
    minOrder: 149,
  },
  {
    id: 3,
    name: "Gupta General Store",
    logo: "/general-store-logo-blue.jpg",
    distance: 0.7,
    deliveryTime: 12,
    rating: 4.2,
    reviewCount: 89,
    isOpen: true,
    tags: ["Essentials", "Household", "Personal Care"],
    isVerified: false,
    discount: null,
    minOrder: 49,
  },
  {
    id: 4,
    name: "Daily Needs Corner",
    logo: "/daily-needs-store-logo-yellow.jpg",
    distance: 1.0,
    deliveryTime: 15,
    rating: 4.6,
    reviewCount: 178,
    isOpen: false,
    tags: ["Groceries", "Bakery", "Beverages"],
    isVerified: true,
    discount: null,
    minOrder: 99,
  },
  {
    id: 5,
    name: "Super Saver Mart",
    logo: "/super-saver-mart-logo-red.jpg",
    distance: 1.2,
    deliveryTime: 18,
    rating: 4.4,
    reviewCount: 203,
    isOpen: true,
    tags: ["Bulk", "Wholesale", "Groceries"],
    isVerified: true,
    discount: "5% Cashback",
    minOrder: 199,
  },
  {
    id: 6,
    name: "Green Basket",
    logo: "/organic-store-logo-green.jpg",
    distance: 1.5,
    deliveryTime: 20,
    rating: 4.7,
    reviewCount: 156,
    isOpen: true,
    tags: ["Organic", "Fresh", "Healthy"],
    isVerified: true,
    discount: "20% on Organic",
    minOrder: 249,
  },
]

type FilterType = "all" | "open" | "verified"
type SortType = "nearest" | "rating" | "fastest" | "price"

export default function ShopsPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState<FilterType>("all")
  const [sortBy, setSortBy] = useState<SortType>("nearest")

  const filteredAndSortedShops = useMemo(() => {
    let shops = allShops.filter((shop) => {
      const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesFilter =
        filter === "all" || (filter === "open" && shop.isOpen) || (filter === "verified" && shop.isVerified)
      return matchesSearch && matchesFilter
    })

    switch (sortBy) {
      case "nearest":
        shops = [...shops].sort((a, b) => a.distance - b.distance)
        break
      case "rating":
        shops = [...shops].sort((a, b) => b.rating - a.rating)
        break
      case "fastest":
        shops = [...shops].sort((a, b) => a.deliveryTime - b.deliveryTime)
        break
      case "price":
        shops = [...shops].sort((a, b) => a.minOrder - b.minOrder)
        break
    }

    return shops
  }, [searchQuery, filter, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-muted rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-bold">{t("shops.title")}</h1>
            <p className="text-xs text-muted-foreground">{filteredAndSortedShops.length} shops</p>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="sticky top-[57px] z-40 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-3">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("shops.searchProducts")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-11 pr-4 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {[
              { id: "all", label: t("shops.all") },
              { id: "open", label: t("shops.openNow") },
              { id: "verified", label: t("shops.verified") },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as FilterType)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  filter === f.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{t("category.sortBy")}:</span>
            </div>
            {[
              { id: "nearest", label: t("shops.nearest"), icon: MapPin },
              { id: "rating", label: t("shops.highRated"), icon: Star },
              { id: "fastest", label: t("shops.fastDelivery"), icon: Clock },
              { id: "price", label: t("shops.lowestPrice"), icon: Zap },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setSortBy(s.id as SortType)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1.5 ${
                  sortBy === s.id
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "bg-muted/50 hover:bg-muted text-muted-foreground border border-transparent"
                }`}
              >
                <s.icon className="w-3 h-3" />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {filteredAndSortedShops.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t("search.noResults")}</p>
          </div>
        ) : (
          filteredAndSortedShops.map((shop, index) => (
            <Link
              href={`/shops/${shop.id}`}
              key={shop.id}
              style={{ animationDelay: `${index * 50}ms` }}
              className="block animate-in fade-in slide-in-from-bottom-4 duration-500 bg-card rounded-2xl border border-border/50 shadow-sm p-4 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-muted/50 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={shop.logo || "/placeholder.svg"}
                    alt={shop.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-semibold truncate group-hover:text-primary transition-colors">
                          {shop.name}
                        </h3>
                        {shop.isVerified && <BadgeCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />}
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          {shop.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {shop.distance} km
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {shop.deliveryTime} {t("product.mins")}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] font-medium ${
                          shop.isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {shop.isOpen ? t("shops.open") : t("shops.closed")}
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    {shop.discount && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {shop.discount}
                      </span>
                    )}
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-[10px] rounded-full">
                      {t("shops.minOrder")} ₹{shop.minOrder}
                    </span>
                    {shop.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-[10px] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </main>
    </div>
  )
}
