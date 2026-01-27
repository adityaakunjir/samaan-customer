"use client"

import { ShoppingBag, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import { useCart } from "@/lib/cart-context"

export function CartFooter() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const { totalItems, totalPrice } = useCart()

  const [isGlowing, setIsGlowing] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [prevItemCount, setPrevItemCount] = useState(totalItems)

  useEffect(() => {
    if (totalItems > 0) {
      const timer = setTimeout(() => setIsVisible(true), 100)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [totalItems])

  useEffect(() => {
    if (totalItems > prevItemCount) {
      setIsGlowing(true)
      setTimeout(() => setIsGlowing(false), 600)
    }
    setPrevItemCount(totalItems)
  }, [totalItems, prevItemCount])

  if (totalItems === 0) {
    return null
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 z-50 transition-all duration-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="max-w-2xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-2xl scale-y-150 -z-10 rounded-3xl" />

        <Link
          href="/cart"
          className={`relative w-full overflow-hidden block
            bg-gradient-to-r from-primary via-primary to-orange-500
            text-primary-foreground py-4 sm:py-5 px-6 sm:px-8
            rounded-2xl sm:rounded-3xl font-semibold 
            shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5),0_4px_20px_-5px_rgba(249,115,22,0.3)]
            transition-all duration-300 ease-out
            hover:shadow-[0_15px_50px_-10px_rgba(249,115,22,0.6),0_8px_30px_-5px_rgba(249,115,22,0.4)]
            hover:scale-[1.02]
            active:scale-[0.98]
            group
            ${isGlowing ? "ring-4 ring-white/60 shadow-[0_15px_60px_rgba(255,255,255,0.4)]" : ""}`}
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl sm:rounded-3xl" />

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative bg-white/20 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-inner">
                <ShoppingBag
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${isGlowing ? "animate-bounce" : "group-hover:scale-110"}`}
                />
                <span
                  className={`absolute -top-2 -right-2 min-w-[22px] h-[22px] sm:min-w-[26px] sm:h-[26px]
                    bg-white text-primary text-[11px] sm:text-xs font-bold 
                    rounded-full flex items-center justify-center 
                    shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                    border-2 border-primary/20
                    transition-all duration-300
                    ${isGlowing ? "scale-125 animate-pulse bg-yellow-300" : ""}`}
                >
                  {totalItems}
                </span>
              </div>

              <div className="flex flex-col items-start">
                <span className="text-[15px] sm:text-base font-bold tracking-wide">{t("cart.viewCart")}</span>
                <span className="text-[11px] sm:text-xs opacity-80 font-medium">
                  {totalItems} {t("cart.itemsAdded")}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex flex-col items-end">
                <span className="text-[11px] sm:text-xs opacity-70 font-medium">{t("cart.total")}</span>
                <span
                  className={`text-lg sm:text-xl font-bold tracking-tight transition-all duration-300 ${isGlowing ? "scale-110" : ""}`}
                >
                  ₹{totalPrice}
                </span>
              </div>

              <div className="bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg sm:rounded-xl group-hover:bg-white/30 transition-colors">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
