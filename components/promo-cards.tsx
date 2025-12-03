"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const promoCards = [
  {
    id: 1,
    title: "Pharmacy at",
    titleLine2: "your doorstep!",
    subtitle: "Medicines, health essentials & more",
    cta: "Order Now",
    bgColor: "bg-gradient-to-br from-cyan-400 via-cyan-500 to-teal-500",
    textColor: "text-white",
    ctaVariant: "white" as const,
    icon: "💊",
  },
  {
    id: 2,
    title: "Pet Care supplies",
    titleLine2: "in minutes",
    subtitle: "Food, treats, toys & more",
    cta: "Order Now",
    bgColor: "bg-gradient-to-br from-amber-300 via-amber-400 to-orange-400",
    textColor: "text-foreground",
    ctaVariant: "dark" as const,
    icon: "🐕",
  },
  {
    id: 3,
    title: "No time for",
    titleLine2: "a grocery run?",
    subtitle: "Get essentials in minutes",
    cta: "Order Now",
    bgColor: "bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300",
    textColor: "text-foreground",
    ctaVariant: "dark" as const,
    icon: "🛒",
  },
]

export function PromoCards() {
  return (
    <section className="mt-4 sm:mt-6 lg:mt-8 px-3 sm:px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
        {promoCards.map((card, index) => (
          <div
            key={card.id}
            className={`${card.bgColor} rounded-2xl sm:rounded-3xl p-5 sm:p-6 relative overflow-hidden min-h-[160px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-between
            shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1),0_8px_16px_-8px_rgba(0,0,0,0.1)]
            transition-all duration-500 ease-out
            hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.15),0_12px_24px_-12px_rgba(0,0,0,0.1)]
            hover:-translate-y-2 hover:scale-[1.02]
            group cursor-pointer`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full blur-2xl transform -translate-x-8 translate-y-8" />

            {/* Icon */}
            <div className="absolute top-4 right-4 text-3xl sm:text-4xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500">
              {card.icon}
            </div>

            <div className="relative z-10">
              <h3
                className={`text-xl sm:text-2xl md:text-[28px] font-bold ${card.textColor} leading-tight tracking-tight`}
              >
                {card.title}
                <br />
                {card.titleLine2}
              </h3>
              <p className={`text-[12px] sm:text-[14px] ${card.textColor} opacity-75 mt-2`}>{card.subtitle}</p>
            </div>

            <Button
              className={`mt-4 w-fit text-[12px] sm:text-[14px] font-semibold rounded-xl px-4 sm:px-5 h-10 sm:h-11 gap-2 group/btn transition-all duration-300 ${
                card.ctaVariant === "white"
                  ? "bg-white text-foreground hover:bg-white/90 shadow-lg hover:shadow-xl"
                  : "bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl"
              }`}
            >
              {card.cta}
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
