"use client"

import { useState, useRef, useMemo } from "react"
import Image from "next/image"
import {
  Star,
  Clock,
  Flame,
  ChevronRight,
  Grid3X3,
  LayoutList,
  X,
  ChevronDown,
  ShoppingBag,
  Plus,
  Minus,
  Check,
  Zap,
  Sparkles,
  Store,
  Navigation,
  Heart,
  Share2,
  BadgeCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const nearbyShops = [
  {
    id: 1,
    name: "Sharma Kirana Store",
    logo: "/indian-grocery-store-logo-orange.jpg",
    distance: "0.3 km",
    deliveryTime: "8 mins",
    rating: 4.5,
    reviewCount: 128,
    isOpen: true,
    liveStock: 342,
    tags: ["Groceries", "Dairy", "Snacks"],
    isVerified: true,
    isFeatured: true,
    discount: "10% OFF",
  },
  {
    id: 2,
    name: "Fresh Mart Express",
    logo: "/fresh-mart-grocery-store-logo-green.jpg",
    distance: "0.5 km",
    deliveryTime: "10 mins",
    rating: 4.8,
    reviewCount: 256,
    isOpen: true,
    liveStock: 518,
    tags: ["Vegetables", "Fruits", "Organic"],
    isVerified: true,
    isFeatured: true,
    discount: "Free Delivery",
  },
  {
    id: 3,
    name: "Gupta General Store",
    logo: "/general-store-logo-blue.jpg",
    distance: "0.7 km",
    deliveryTime: "12 mins",
    rating: 4.2,
    reviewCount: 89,
    isOpen: true,
    liveStock: 276,
    tags: ["Essentials", "Household", "Personal Care"],
    isVerified: false,
    isFeatured: false,
    discount: null,
  },
  {
    id: 4,
    name: "Daily Needs Corner",
    logo: "/daily-needs-store-logo-yellow.jpg",
    distance: "1.0 km",
    deliveryTime: "15 mins",
    rating: 4.6,
    reviewCount: 178,
    isOpen: false,
    liveStock: 0,
    tags: ["Groceries", "Bakery", "Beverages"],
    isVerified: true,
    isFeatured: false,
    discount: null,
  },
  {
    id: 5,
    name: "Super Saver Mart",
    logo: "/super-saver-mart-logo-red.jpg",
    distance: "1.2 km",
    deliveryTime: "18 mins",
    rating: 4.4,
    reviewCount: 203,
    isOpen: true,
    liveStock: 421,
    tags: ["Bulk", "Wholesale", "Groceries"],
    isVerified: true,
    isFeatured: false,
    discount: "5% Cashback",
  },
  {
    id: 6,
    name: "Green Valley Organics",
    logo: "/organic-store-logo-green-leaf.jpg",
    distance: "1.5 km",
    deliveryTime: "20 mins",
    rating: 4.9,
    reviewCount: 312,
    isOpen: true,
    liveStock: 189,
    tags: ["Organic", "Health", "Natural"],
    isVerified: true,
    isFeatured: true,
    discount: "New Store",
  },
]

const shopInventory = [
  {
    id: 1,
    name: "Amul Taza Milk",
    weight: "1L",
    price: 60,
    originalPrice: 65,
    image: "/amul-milk-packet-white-background.jpg",
    category: "Dairy",
    inStock: true,
    freshness: 95,
    rating: 4.5,
    deliveryTime: 8,
  },
  {
    id: 2,
    name: "Whole Wheat Bread",
    weight: "400g",
    price: 45,
    originalPrice: 50,
    image: "/brown-bread-loaf-white-background.jpg",
    category: "Bakery",
    inStock: true,
    freshness: 88,
    rating: 4.2,
    deliveryTime: 10,
  },
  {
    id: 3,
    name: "Farm Fresh Eggs",
    weight: "12 pcs",
    price: 84,
    originalPrice: 90,
    image: "/farm-eggs-brown-white-background.jpg",
    category: "Dairy",
    inStock: true,
    freshness: 92,
    rating: 4.8,
    deliveryTime: 8,
  },
  {
    id: 4,
    name: "Aashirvaad Atta",
    weight: "5kg",
    price: 280,
    originalPrice: 310,
    image: "/aashirvaad-atta-flour-packet.jpg",
    category: "Staples",
    inStock: true,
    freshness: 100,
    rating: 4.6,
    deliveryTime: 12,
  },
  {
    id: 5,
    name: "Tata Salt",
    weight: "1kg",
    price: 28,
    originalPrice: 28,
    image: "/tata-salt-packet.jpg",
    category: "Staples",
    inStock: true,
    freshness: 100,
    rating: 4.3,
    deliveryTime: 8,
  },
  {
    id: 6,
    name: "Fortune Sunflower Oil",
    weight: "1L",
    price: 145,
    originalPrice: 160,
    image: "/fortune-sunflower-oil-bottle.jpg",
    category: "Cooking",
    inStock: false,
    freshness: 100,
    rating: 4.4,
    deliveryTime: 15,
  },
  {
    id: 7,
    name: "Fresh Tomatoes",
    weight: "500g",
    price: 35,
    originalPrice: 40,
    image: "/fresh-red-tomatoes.jpg",
    category: "Vegetables",
    inStock: true,
    freshness: 90,
    rating: 4.7,
    deliveryTime: 6,
  },
  {
    id: 8,
    name: "Green Capsicum",
    weight: "250g",
    price: 25,
    originalPrice: 30,
    image: "/green-capsicum-vegetable.jpg",
    category: "Vegetables",
    inStock: true,
    freshness: 87,
    rating: 4.1,
    deliveryTime: 6,
  },
]

const categories = ["All", "Dairy", "Bakery", "Staples", "Cooking", "Vegetables", "Fruits", "Snacks"]
const sortOptions = ["Fastest Delivery", "Nearest", "Lowest Price", "Highest Rated"]

// Premium Featured Shop Card
function FeaturedShopCard({ shop, onClick }: { shop: (typeof nearbyShops)[0]; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-w-[260px] sm:min-w-[280px] flex-shrink-0 cursor-pointer group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-orange-400/10 to-amber-300/20 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className={`relative bg-white/80 backdrop-blur-xl rounded-[20px] overflow-hidden
        border border-white/60 
        shadow-[0_4px_20px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)]
        hover:shadow-[0_16px_32px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.06)]
        transition-all duration-500 ease-out
        ${isHovered ? "-translate-y-1" : ""}`}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-orange-400 to-amber-400" />

        {shop.discount && (
          <div className="absolute top-3 right-3 z-10">
            <div className="px-2 py-1 bg-gradient-to-r from-primary to-orange-500 text-white text-[10px] font-bold rounded-full shadow-lg shadow-primary/30 flex items-center gap-0.5">
              <Zap className="w-2.5 h-2.5" />
              {shop.discount}
            </div>
          </div>
        )}

        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-orange-400/40 rounded-xl blur-md opacity-60" />
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-white ring-2 ring-white shadow-lg">
                <Image
                  src={shop.logo || "/placeholder.svg"}
                  alt={shop.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-[14px] text-foreground truncate">{shop.name}</h3>
                {shop.isVerified && <BadgeCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
              </div>

              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-amber-50 rounded-full">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-[11px] font-semibold text-amber-700">{shop.rating}</span>
                </div>
                <span className="text-[10px] text-muted-foreground">({shop.reviewCount})</span>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                  <Navigation className="w-3 h-3 text-primary" />
                  <span className="font-medium">{shop.distance}</span>
                </div>
                <div className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                <div className="flex items-center gap-0.5 text-[10px]">
                  <Clock className="w-3 h-3 text-green-600" />
                  <span className="font-semibold text-green-700">{shop.deliveryTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100/80">
            <div className="flex items-center gap-1 px-2 py-0.5 bg-orange-50 rounded-md">
              <Flame className="w-3 h-3 text-orange-500" />
              <span className="text-[10px] font-semibold text-orange-700">{shop.liveStock} in stock</span>
            </div>

            <Button
              size="sm"
              className="h-7 px-3 text-[10px] font-semibold rounded-lg gap-1 bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white shadow-md shadow-primary/20 transition-all duration-300 group/btn"
            >
              <Store className="w-3 h-3" />
              View
              <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Premium Shop Card for Grid/List
function ShopCard({
  shop,
  onClick,
  variant = "grid",
}: { shop: (typeof nearbyShops)[0]; onClick: () => void; variant?: "grid" | "list" }) {
  const [isLiked, setIsLiked] = useState(false)

  if (variant === "list") {
    return (
      <div
        onClick={onClick}
        className="relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group
          border border-gray-100/80
          shadow-[0_2px_8px_rgba(0,0,0,0.04)]
          hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
          hover:border-primary/20
          transition-all duration-300 ease-out"
      >
        <div className="flex items-center gap-3 p-3">
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-100">
              <Image
                src={shop.logo || "/placeholder.svg"}
                alt={shop.name}
                width={48}
                height={48}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div
              className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white shadow-sm ${shop.isOpen ? "bg-green-500" : "bg-gray-400"}`}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold text-[13px] text-foreground truncate group-hover:text-primary transition-colors">
                {shop.name}
              </h3>
              {shop.isVerified && <BadgeCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
              {shop.discount && (
                <span className="px-1.5 py-0.5 bg-primary/10 text-primary text-[9px] font-semibold rounded-full">
                  {shop.discount}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 mt-0.5">
              <div className="flex items-center gap-0.5">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-[11px] font-medium">{shop.rating}</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-[11px] text-muted-foreground">{shop.distance}</span>
              <span className="text-gray-300">|</span>
              <span className="text-[11px] font-medium text-green-600">{shop.deliveryTime}</span>
              {shop.isOpen && (
                <>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-0.5 text-[10px] font-medium text-orange-600">
                    <Flame className="w-2.5 h-2.5" />
                    {shop.liveStock}
                  </span>
                </>
              )}
            </div>
          </div>

          <Button
            size="sm"
            disabled={!shop.isOpen}
            className={`h-8 px-4 text-[11px] font-semibold rounded-lg transition-all duration-300
              ${
                shop.isOpen
                  ? "bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md"
                  : "bg-gray-100 text-gray-400"
              }`}
          >
            {shop.isOpen ? "View" : "Closed"}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={onClick}
      className="relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group
        border border-gray-100/80
        shadow-[0_2px_12px_rgba(0,0,0,0.04)]
        hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
        hover:border-primary/20 hover:-translate-y-1
        transition-all duration-300 ease-out"
    >
      {shop.discount && (
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-gradient-to-r from-primary to-orange-500 text-white text-[9px] font-bold rounded-full shadow-sm">
          {shop.discount}
        </div>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation()
          setIsLiked(!isLiked)
        }}
        className="absolute top-2 right-2 z-10 w-7 h-7 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 transition-transform"
      >
        <Heart className={`w-3.5 h-3.5 transition-colors ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
      </button>

      <div className="p-3">
        <div className="flex items-start gap-2.5">
          <div className="relative flex-shrink-0">
            <div className="w-11 h-11 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-100 shadow-sm">
              <Image
                src={shop.logo || "/placeholder.svg"}
                alt={shop.name}
                width={44}
                height={44}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div
              className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white shadow-sm ${shop.isOpen ? "bg-green-500" : "bg-gray-400"}`}
            >
              {shop.isOpen && <div className="w-full h-full rounded-full bg-green-400 animate-ping opacity-75" />}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-[12px] text-foreground truncate group-hover:text-primary transition-colors">
                {shop.name}
              </h3>
              {shop.isVerified && <BadgeCheck className="w-3 h-3 text-primary flex-shrink-0" />}
            </div>

            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="flex items-center gap-0.5">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-[10px] font-semibold">{shop.rating}</span>
              </div>
              <span className="text-[10px] text-muted-foreground">• {shop.distance}</span>
              <span className="text-[10px] font-medium text-green-600">• {shop.deliveryTime}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-gray-100">
          {shop.isOpen ? (
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-orange-50/80 rounded">
              <Flame className="w-3 h-3 text-orange-500" />
              <span className="text-[10px] font-semibold text-orange-700">{shop.liveStock}</span>
            </div>
          ) : (
            <span className="text-[10px] text-gray-400 font-medium">Closed</span>
          )}

          <Button
            size="sm"
            disabled={!shop.isOpen}
            className={`h-6 px-2.5 text-[10px] font-semibold rounded-md gap-0.5 transition-all duration-300
              ${shop.isOpen ? "bg-primary hover:bg-primary/90 text-white shadow-sm" : "bg-gray-100 text-gray-400"}`}
          >
            {shop.isOpen ? (
              <>
                View
                <ChevronRight className="w-2.5 h-2.5" />
              </>
            ) : (
              "Closed"
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

// Shop Detail Panel Component
function ShopDetailPanel({ shop, onClose }: { shop: (typeof nearbyShops)[0] | null; onClose: () => void }) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeSort, setActiveSort] = useState("Fastest Delivery")
  const [cart, setCart] = useState<Record<number, number>>({})

  const filteredInventory = useMemo(() => {
    let items = shopInventory.filter((item) => activeCategory === "All" || item.category === activeCategory)

    // Apply sorting based on activeSort
    switch (activeSort) {
      case "Fastest Delivery":
        items = [...items].sort((a, b) => a.deliveryTime - b.deliveryTime)
        break
      case "Lowest Price":
        items = [...items].sort((a, b) => a.price - b.price)
        break
      case "Highest Rated":
        items = [...items].sort((a, b) => b.rating - a.rating)
        break
      case "Nearest":
        // For nearest, we use delivery time as proxy (shorter = nearer)
        items = [...items].sort((a, b) => a.deliveryTime - b.deliveryTime)
        break
      default:
        break
    }

    return items
  }, [activeCategory, activeSort])

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = shopInventory.find((i) => i.id === Number(id))
    return sum + (item ? item.price * qty : 0)
  }, 0)

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  const addToCart = (id: number) => {
    const item = shopInventory.find((i) => i.id === id)
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
    if (item) {
      window.dispatchEvent(new CustomEvent("cart-updated", { detail: { price: item.price } }))
    }
  }

  const removeFromCart = (id: number) => {
    const item = shopInventory.find((i) => i.id === id)
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[id] > 1) {
        newCart[id]--
      } else {
        delete newCart[id]
      }
      return newCart
    })
    if (item) {
      window.dispatchEvent(new CustomEvent("cart-removed", { detail: { price: item.price } }))
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-[500px] md:w-[560px] bg-gradient-to-b from-background to-gray-50/50 z-50 shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header with glassmorphism */}
        <div className="relative flex items-center justify-between p-4 sm:p-5 border-b border-gray-100/80 bg-white/80 backdrop-blur-xl sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-white ring-2 ring-white shadow-lg">
                <Image
                  src={shop.logo || "/placeholder.svg"}
                  alt={shop.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-[17px]">{shop.name}</h2>
                {shop.isVerified && <BadgeCheck className="w-4 h-4 text-primary" />}
              </div>
              <div className="flex items-center gap-2 text-[12px] text-muted-foreground mt-0.5">
                <span className="flex items-center gap-0.5 font-medium text-amber-600">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {shop.rating}
                </span>
                <span>•</span>
                <span>{shop.distance}</span>
                <span>•</span>
                <span className="text-green-600 font-semibold">{shop.deliveryTime}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Share2 className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-gray-100/80 bg-white/50 backdrop-blur-sm space-y-3">
          {/* Categories with premium pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-[12px] font-semibold whitespace-nowrap transition-all duration-300
                  ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-primary to-orange-500 text-white shadow-lg shadow-primary/25"
                      : "bg-white text-muted-foreground hover:bg-gray-50 border border-gray-200 hover:border-primary/30"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-muted-foreground">
              <span className="font-medium text-foreground">{filteredInventory.length}</span> products available
            </p>
            <div className="relative">
              <select
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 rounded-xl bg-white border border-gray-200 text-[12px] font-medium text-foreground hover:border-primary/30 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {sortOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-2 gap-3">
            {filteredInventory.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border border-gray-100 overflow-hidden
                  shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                  hover:-translate-y-0.5 transition-all duration-300 ${!item.inStock ? "opacity-60" : ""}`}
              >
                {/* Image */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white p-3">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain p-2" />
                  {item.inStock && (
                    <div className="absolute top-2 left-2 flex items-center gap-0.5 px-2 py-0.5 bg-green-500 text-white text-[9px] font-bold rounded-full shadow-sm">
                      <Check className="w-2.5 h-2.5" />
                      {item.freshness}% Fresh
                    </div>
                  )}
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="px-3 py-1.5 bg-gray-900 text-white text-[10px] font-bold rounded-full">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-3">
                  <p className="text-[10px] text-muted-foreground font-medium">{item.weight}</p>
                  <h4 className="text-[13px] font-semibold text-foreground line-clamp-2 mt-0.5 leading-tight">
                    {item.name}
                  </h4>

                  <div className="flex items-center justify-between mt-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[15px] font-bold text-foreground">₹{item.price}</span>
                      {item.originalPrice > item.price && (
                        <span className="text-[11px] text-muted-foreground line-through">₹{item.originalPrice}</span>
                      )}
                    </div>

                    {item.inStock &&
                      (cart[item.id] ? (
                        <div className="flex items-center gap-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-xl overflow-hidden shadow-lg shadow-primary/20">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              removeFromCart(item.id)
                            }}
                            className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-[13px] font-bold text-white">{cart[item.id]}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              addToCart(item.id)
                            }}
                            className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            addToCart(item.id)
                          }}
                          className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Cart Bar */}
        {cartCount > 0 && (
          <div className="p-4 border-t border-gray-100 bg-white/90 backdrop-blur-xl shadow-[0_-8px_32px_rgba(0,0,0,0.08)]">
            <button className="relative w-full overflow-hidden flex items-center justify-between bg-gradient-to-r from-primary via-orange-500 to-amber-500 text-white rounded-2xl px-5 py-4 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 group">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <ShoppingBag className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-white text-primary text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                    {cartCount}
                  </span>
                </div>
                <div className="text-left">
                  <span className="block font-bold text-[15px]">View Cart</span>
                  <span className="block text-[11px] text-white/80">{cartCount} items added</span>
                </div>
              </div>
              <div className="relative flex items-center gap-2">
                <span className="font-bold text-[18px]">₹{cartTotal}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  )
}

// Main Component
export function NearbyShops() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedShop, setSelectedShop] = useState<(typeof nearbyShops)[0] | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const openShops = nearbyShops.filter((shop) => shop.isOpen)
  const featuredShops = nearbyShops.filter((shop) => shop.isFeatured && shop.isOpen)

  return (
    <>
      <section className="mt-4 sm:mt-5 px-3 sm:px-4 lg:px-8 max-w-7xl mx-auto">
        {/* Featured Shops Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-br from-primary/10 to-orange-100 rounded-lg">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-foreground tracking-tight">
                Nearby Kirana Shops
              </h2>
              <p className="text-[11px] text-muted-foreground">Quick delivery from local stores</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-[11px] text-primary font-medium h-7 px-2 gap-0.5">
            See all
            <ChevronRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Featured Shops Horizontal Scroll */}
        <div ref={scrollRef} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-3 px-3 sm:-mx-4 sm:px-4">
          {featuredShops.map((shop) => (
            <FeaturedShopCard key={shop.id} shop={shop} onClick={() => setSelectedShop(shop)} />
          ))}
        </div>
      </section>

      {/* All Shops Section */}
      <section className="mt-5 sm:mt-6 px-3 sm:px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-br from-blue-500/10 to-indigo-100 rounded-lg">
              <Store className="w-4 h-4 text-blue-600" />
            </div>
            <h2 className="text-[16px] sm:text-[18px] font-bold text-foreground tracking-tight">All Shops Near You</h2>
            <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[11px] sm:text-xs font-semibold rounded-full">
              {openShops.length} shops
            </span>
          </div>

          <div className="flex items-center gap-1.5 p-0.5 bg-gray-100/80 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-md transition-all duration-200 ${
                viewMode === "grid" ? "bg-white shadow-sm text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-md transition-all duration-200 ${
                viewMode === "list" ? "bg-white shadow-sm text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <LayoutList className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3"
              : "flex flex-col gap-2"
          }`}
        >
          {openShops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} onClick={() => setSelectedShop(shop)} variant={viewMode} />
          ))}
        </div>
      </section>

      {/* Shop Detail Panel */}
      {selectedShop && <ShopDetailPanel shop={selectedShop} onClose={() => setSelectedShop(null)} />}
    </>
  )
}
