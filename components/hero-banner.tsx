"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function HeroBanner() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const banners = [
    {
      id: 1,
      titleKey: "hero.freshVegetables",
      subtitleKey: "hero.farmToTable",
      ctaKey: "hero.shopNow",
      ctaLink: "/category/fruits-vegetables",
      bgColor: "from-emerald-500 via-emerald-500 to-green-600",
      image: "/grocery-items-vegetables-fruits-milk-scattered-art.jpg",
      badgeKey: "promo.freeDelivery",
      badgeIcon: "delivery",
    },
    {
      id: 2,
      titleKey: "hero.freshVegetables",
      subtitleKey: "promo.directFromFarms",
      ctaKey: "hero.orderNow",
      ctaLink: "/category/fruits-vegetables",
      bgColor: "from-green-500 via-green-500 to-emerald-600",
      image: "/fresh-vegetables-water-splash-dark-green-backgroun.jpg",
      badgeKey: "promo.freshProduce",
      badgeIcon: "organic",
    },
    {
      id: 3,
      titleKey: "hero.dailyEssentials",
      subtitleKey: "hero.milkBreadEggs",
      ctaKey: "hero.explore",
      ctaLink: "/category/dairy-bread-eggs",
      bgColor: "from-teal-500 via-teal-500 to-cyan-600",
      image: "/grocery-essentials-milk-bread-eggs-dark-background.jpg",
      badgeKey: "promo.fastDelivery",
      badgeIcon: "fresh",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("left")

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("left")
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % banners.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [banners.length])

  const handleDotClick = (index: number) => {
    if (index === activeIndex) return
    setSlideDirection(index > activeIndex ? "left" : "right")
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex(index)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <div className="relative">
      <div
        className={`relative h-[180px] xs:h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r ${banners[activeIndex].bgColor} shadow-xl sm:shadow-2xl transition-all duration-500 ease-out`}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-black/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-between">
          <div
            className={`flex-1 px-5 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-6 md:py-8
              transition-all duration-300 ease-out
              ${
                isAnimating
                  ? slideDirection === "left"
                    ? "opacity-0 -translate-x-8"
                    : "opacity-0 translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
          >
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 border border-white/20">
              <Leaf className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {t(banners[activeIndex].badgeKey)}
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md">
              {t(banners[activeIndex].titleKey)}
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/90 mt-1.5 sm:mt-2 md:mt-3 drop-shadow-sm max-w-md">
              {t(banners[activeIndex].subtitleKey)}
            </p>

            <Link href={banners[activeIndex].ctaLink}>
              <Button
                className="mt-4 sm:mt-5 md:mt-6 w-fit bg-white text-gray-900 hover:bg-white/95 font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 h-auto text-xs sm:text-sm md:text-base rounded-full shadow-lg 
                transition-all duration-300 ease-out gap-2
                hover:shadow-xl hover:scale-105
                active:scale-95"
              >
                {t(banners[activeIndex].ctaKey)}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="hidden sm:flex items-center justify-end h-full flex-shrink-0 pr-6 md:pr-10 lg:pr-14">
            <div
              className={`relative rounded-xl overflow-hidden border-4 border-gray-900/80 shadow-2xl
                transition-all duration-300 ease-out
                ${
                  isAnimating
                    ? slideDirection === "left"
                      ? "opacity-0 translate-x-8 scale-95"
                      : "opacity-0 -translate-x-8 scale-95"
                    : "opacity-100 translate-x-0 scale-100"
                }`}
            >
              <img
                src={banners[activeIndex].image || "/placeholder.svg"}
                alt={t(banners[activeIndex].titleKey)}
                className="h-[120px] sm:h-[140px] md:h-[180px] lg:h-[220px] xl:h-[260px] w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ease-out
              hover:scale-125
              ${index === activeIndex ? "bg-primary w-5 sm:w-6 shadow-md" : "bg-gray-300 w-2 hover:bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  )
}
