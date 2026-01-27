"use client"

import { Plus, Minus, Leaf, Zap } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import { useCart } from "@/lib/cart-context"

// Demo merchant ID for checkout orders (fallback if not provided)
const DEMO_MERCHANT_ID = "AAAA1111-1111-1111-1111-111111111111"

interface Product {
  id: number
  name: string
  quantity: string
  price: number
  image: string
  freshnessScore?: number
  stockedTime?: string
  weight?: string
  deliveryEta?: string
  merchantId?: string
  productId?: string
}

interface ProductCardProps {
  product: Product
  variant?: "compact" | "full"
}

export function ProductCard({ product, variant = "compact" }: ProductCardProps) {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const { addItem, updateQuantity, getItemCount } = useCart()
  const qty = getItemCount(product.id)

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      image: product.image,
      weight: product.weight,
      merchantId: product.merchantId || DEMO_MERCHANT_ID,
      productId: product.productId || `PROD-${product.id}-${Date.now()}`,
    })
  }

  const handleIncrement = () => {
    updateQuantity(product.id, qty + 1)
  }

  const handleDecrement = () => {
    updateQuantity(product.id, qty - 1)
  }

  const FreshnessBadge = ({ score }: { score: number }) => {
    const color =
      score >= 90
        ? "text-emerald-600 bg-emerald-50 border-emerald-200"
        : score >= 70
          ? "text-green-600 bg-green-50 border-green-200"
          : "text-yellow-600 bg-yellow-50 border-yellow-200"
    return (
      <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold ${color} border shadow-sm`}>
        <Leaf className="w-3 h-3" />
        <span>
          {score}% {t("product.fresh")}
        </span>
      </div>
    )
  }

  const QtySelector = () => (
    <div className="flex items-center gap-1 bg-primary rounded-xl overflow-hidden shadow-lg">
      <button
        onClick={handleDecrement}
        className="w-8 h-8 flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors active:scale-90"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-6 text-center text-sm font-bold text-primary-foreground">{qty}</span>
      <button
        onClick={handleIncrement}
        className="w-8 h-8 flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors active:scale-90"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  )

  if (variant === "full") {
    return (
      <div
        className="bg-card rounded-2xl border border-border/50 p-3 sm:p-4 flex items-center gap-3 sm:gap-4
        shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_8px_-4px_rgba(0,0,0,0.04)]
        transition-all duration-300 
        hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.12),0_8px_16px_-8px_rgba(0,0,0,0.08)] 
        hover:border-primary/30 hover:-translate-y-1
        group"
      >
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-muted to-muted/50 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={96}
            height={96}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0 min-h-[80px] sm:min-h-[96px] flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-bold text-foreground text-[15px] sm:text-[16px] line-clamp-1">{product.name}</h4>
              <div className="flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground mt-0.5">
                {product.weight && <span className="font-semibold text-foreground/70">{product.weight}</span>}
                {product.stockedTime && (
                  <span className="text-green-600">
                    • {t("product.stocked")} {product.stockedTime}
                  </span>
                )}
              </div>
            </div>
            {product.freshnessScore && <FreshnessBadge score={product.freshnessScore} />}
          </div>
          {product.deliveryEta && (
            <div className="flex items-center gap-1 text-[12px] text-primary font-semibold mt-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>{product.deliveryEta}</span>
            </div>
          )}
          <div className="flex items-center justify-between mt-auto pt-2">
            <span className="font-bold text-foreground text-[17px] sm:text-[18px]">₹{product.price}</span>
            {qty > 0 ? (
              <QtySelector />
            ) : (
              <button
                onClick={handleAdd}
                className="px-5 py-2 border-2 font-bold rounded-xl text-[13px] sm:text-[14px]
                  transition-all duration-300 ease-out
                  border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg
                  active:scale-95"
              >
                {t("product.add")}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Compact variant
  return (
    <div
      className="bg-card rounded-2xl border border-border/50 p-3 min-w-[140px] flex-shrink-0 
      shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_4px_8px_-4px_rgba(0,0,0,0.04)]
      transition-all duration-300 
      hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.12),0_8px_16px_-8px_rgba(0,0,0,0.08)] 
      hover:border-primary/30 hover:-translate-y-2
      group"
    >
      <div className="relative w-full aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden mb-2">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={120}
          height={120}
          className="h-full object-cover w-full transition-transform duration-500 group-hover:scale-110"
        />
        {product.freshnessScore && (
          <div className="absolute top-2 left-2">
            <FreshnessBadge score={product.freshnessScore} />
          </div>
        )}
      </div>
      <h4 className="font-semibold text-foreground text-[14px] truncate">{product.name}</h4>
      <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
        <span className="font-medium">{product.weight || product.quantity}</span>
      </div>
      {product.deliveryEta && (
        <div className="flex items-center gap-1 text-[11px] text-primary font-semibold mt-0.5">
          <Zap className="w-3 h-3" />
          <span>{product.deliveryEta}</span>
        </div>
      )}
      <div className="flex items-center justify-between mt-2">
        <span className="font-bold text-foreground text-[15px]">₹{product.price}</span>
        {qty > 0 ? (
          <QtySelector />
        ) : (
          <button
            onClick={handleAdd}
            className="w-8 h-8 rounded-xl flex items-center justify-center 
              transition-all duration-300 ease-out
              bg-primary hover:bg-primary/90 hover:scale-110 hover:shadow-lg
              active:scale-90 shadow-md"
          >
            <Plus className="w-4 h-4 text-primary-foreground" />
          </button>
        )}
      </div>
    </div>
  )
}
