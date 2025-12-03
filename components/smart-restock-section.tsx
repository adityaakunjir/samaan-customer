"use client"

import { Sparkles, Plus, Minus, Leaf, Zap } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { useCart } from "@/lib/cart-context"

const restockProducts = [
  {
    id: 1,
    name: "Amul Milk",
    weight: "1L",
    price: 150,
    image: "/amul-milk-packet-white-background.jpg",
    freshnessScore: 95,
    deliveryEta: "8 mins",
  },
  {
    id: 2,
    name: "Brown Bread",
    weight: "400g",
    price: 180,
    image: "/brown-bread-loaf-white-background.jpg",
    freshnessScore: 88,
    deliveryEta: "10 mins",
  },
  {
    id: 3,
    name: "Farm Eggs",
    weight: "6 pcs",
    price: 50,
    image: "/farm-eggs-brown-white-background.jpg",
    freshnessScore: 92,
    deliveryEta: "8 mins",
  },
  {
    id: 4,
    name: "Butter",
    weight: "100g",
    price: 200,
    image: "/butter-block-yellow-white-background.jpg",
    freshnessScore: 90,
    deliveryEta: "12 mins",
  },
  {
    id: 5,
    name: "Curd",
    weight: "400g",
    price: 45,
    image: "/curd-yogurt-cup-white-background.jpg",
    freshnessScore: 85,
    deliveryEta: "8 mins",
  },
  {
    id: 6,
    name: "Paneer",
    weight: "200g",
    price: 90,
    image: "/paneer-cheese-cubes.jpg",
    freshnessScore: 94,
    deliveryEta: "10 mins",
  },
  {
    id: 7,
    name: "Cheese",
    weight: "10 slices",
    price: 120,
    image: "/cheese-slices-packet.jpg",
    freshnessScore: 91,
    deliveryEta: "12 mins",
  },
]

function MiniProductCard({ product }: { product: (typeof restockProducts)[0] }) {
  const { addItem, updateQuantity, getItemCount } = useCart()
  const qty = getItemCount(product.id)

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      quantity: product.weight,
      price: product.price,
      image: product.image,
      weight: product.weight,
    })
  }

  const handleIncrement = () => {
    updateQuantity(product.id, qty + 1)
  }

  const handleDecrement = () => {
    updateQuantity(product.id, qty - 1)
  }

  const badgeColor =
    product.freshnessScore >= 90
      ? "text-emerald-600 bg-emerald-50 border-emerald-200"
      : product.freshnessScore >= 80
        ? "text-green-600 bg-green-50 border-green-200"
        : "text-yellow-600 bg-yellow-50 border-yellow-200"

  return (
    <div
      className="bg-card rounded-xl sm:rounded-2xl border border-border/50 p-2 sm:p-2.5 min-w-[100px] w-[100px] sm:min-w-[115px] sm:w-[115px] flex-shrink-0
      shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_8px_-4px_rgba(0,0,0,0.04)]
      transition-all duration-300 ease-out 
      hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.12),0_8px_16px_-8px_rgba(0,0,0,0.08)] 
      hover:-translate-y-1.5 hover:border-primary/30
      group"
    >
      <div className="relative w-full h-14 sm:h-16 bg-gradient-to-br from-muted to-muted/50 rounded-lg sm:rounded-xl overflow-hidden mb-1.5">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={80}
          height={56}
          className="h-full object-cover w-full transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={`absolute top-1 left-1 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold ${badgeColor} border shadow-sm`}
        >
          <Leaf className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
          {product.freshnessScore}%
        </div>
      </div>
      <h4 className="font-semibold text-foreground text-[12px] sm:text-[13px] truncate leading-tight">
        {product.name}
      </h4>
      <p className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">{product.weight}</p>
      <div className="flex items-center gap-0.5 text-[9px] sm:text-[10px] text-primary font-semibold mt-0.5">
        <Zap className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
        {product.deliveryEta}
      </div>
      <div className="flex items-center justify-between mt-1.5">
        <span className="font-bold text-foreground text-[13px] sm:text-[14px]">₹{product.price}</span>
        {qty > 0 ? (
          <div className="flex items-center bg-primary rounded-lg overflow-hidden shadow-md">
            <button
              onClick={handleDecrement}
              className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors active:scale-90"
            >
              <Minus className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
            </button>
            <span className="w-4 sm:w-5 text-center text-[10px] sm:text-[11px] font-bold text-primary-foreground">
              {qty}
            </span>
            <button
              onClick={handleIncrement}
              className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors active:scale-90"
            >
              <Plus className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center 
              transition-all duration-300 ease-out
              bg-primary hover:bg-primary/90 hover:scale-110 hover:shadow-lg
              active:scale-90 shadow-md"
          >
            <Plus className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary-foreground" />
          </button>
        )}
      </div>
    </div>
  )
}

export function SmartRestockSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isHovered) return

    const interval = setInterval(() => {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
      const currentScroll = scrollContainer.scrollLeft
      const cardWidth = 120

      if (currentScroll >= maxScroll - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        scrollContainer.scrollTo({ left: currentScroll + cardWidth, behavior: "smooth" })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className="mt-6 sm:mt-8 lg:mt-10 px-3 sm:px-4 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="px-2.5 sm:px-3 py-1 bg-gradient-to-r from-primary/10 to-orange-500/10 text-primary text-[10px] sm:text-[11px] font-bold rounded-full border border-primary/20 shadow-sm">
            Recommended for you
          </span>
          <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-foreground flex items-center gap-1.5 sm:gap-2">
            Smart Restock
            <span className="inline-flex items-center gap-1 text-primary bg-primary/10 px-2 py-0.5 rounded-lg">
              AI
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </span>
          </h3>
          <div className="relative hidden sm:block">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="p-1.5 text-primary hover:text-primary/80 hover:bg-primary/10 rounded-lg transition-all duration-200"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            {showTooltip && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 px-3 py-2 bg-foreground text-background text-[12px] rounded-xl shadow-xl whitespace-nowrap animate-in fade-in zoom-in-95 duration-200">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"></div>
                AI learns your buying habits
              </div>
            )}
          </div>
        </div>
        <button className="text-primary font-semibold text-[12px] sm:text-[14px] hover:underline transition-all duration-200 hover:text-primary/80">
          See all →
        </button>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-2.5 sm:gap-3 overflow-x-auto hide-scrollbar pb-2"
      >
        {restockProducts.map((product) => (
          <MiniProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
