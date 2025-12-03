"use client"

import { useState } from "react"
import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, Clock, MapPin, BadgeCheck, Zap, Phone, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { CartFooter } from "@/components/cart-footer"

const shopsData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Sharma Kirana Store",
    logo: "/indian-grocery-store-logo-orange.jpg",
    distance: "0.3 km",
    deliveryTime: "8 mins",
    rating: 4.5,
    reviewCount: 128,
    isOpen: true,
    tags: ["Groceries", "Dairy", "Snacks"],
    isVerified: true,
    discount: "10% OFF",
    address: "123, Main Road, Near Bus Stand, Pune",
    phone: "+91 98765 43210",
    products: [
      {
        id: 1,
        name: "Amul Taaza Milk",
        quantity: "500ml",
        price: 30,
        image: "/amul-milk-packet-white-background.jpg",
        freshnessScore: 98,
        stockedTime: "15m ago",
        deliveryEta: "8 mins",
      },
      {
        id: 2,
        name: "Brown Bread",
        quantity: "400g",
        price: 45,
        image: "/brown-bread-loaf-white-background.jpg",
        freshnessScore: 95,
        stockedTime: "30m ago",
        deliveryEta: "8 mins",
      },
      {
        id: 3,
        name: "Farm Fresh Eggs",
        quantity: "6 pcs",
        price: 60,
        image: "/farm-eggs-brown-white-background.jpg",
        freshnessScore: 99,
        stockedTime: "10m ago",
        deliveryEta: "8 mins",
      },
      {
        id: 4,
        name: "Amul Butter",
        quantity: "100g",
        price: 55,
        image: "/butter-block-yellow-white-background.jpg",
        freshnessScore: 97,
        stockedTime: "20m ago",
        deliveryEta: "8 mins",
      },
    ],
  },
  "2": {
    id: 2,
    name: "Fresh Mart Express",
    logo: "/fresh-mart-grocery-store-logo-green.jpg",
    distance: "0.5 km",
    deliveryTime: "10 mins",
    rating: 4.8,
    reviewCount: 256,
    isOpen: true,
    tags: ["Vegetables", "Fruits", "Organic"],
    isVerified: true,
    discount: "Free Delivery",
    address: "45, Green Plaza, Sector 12, Pune",
    phone: "+91 98765 43211",
    products: [
      {
        id: 1,
        name: "Local Red Tomato",
        quantity: "1 kg",
        price: 150,
        image: "/fresh-red-tomato-white-background.jpg",
        freshnessScore: 98,
        stockedTime: "20m ago",
        deliveryEta: "10 mins",
      },
      {
        id: 2,
        name: "Green Capsicum",
        quantity: "500g",
        price: 80,
        image: "/green-capsicum-vegetable.jpg",
        freshnessScore: 95,
        stockedTime: "35m ago",
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
        deliveryEta: "10 mins",
      },
    ],
  },
}

// Default shop data
const defaultShop = {
  id: 0,
  name: "Local Store",
  logo: "/placeholder.svg",
  distance: "1 km",
  deliveryTime: "15 mins",
  rating: 4.0,
  reviewCount: 50,
  isOpen: true,
  tags: ["Groceries"],
  isVerified: false,
  discount: null,
  address: "Pune, Maharashtra",
  phone: "+91 00000 00000",
  products: [
    {
      id: 1,
      name: "Product 1",
      quantity: "500g",
      price: 99,
      image: "/assorted-grocery-products.png",
      freshnessScore: 95,
      stockedTime: "20m ago",
      deliveryEta: "15 mins",
    },
  ],
}

export default function ShopDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const shop = shopsData[id] || defaultShop
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/shops" className="p-2 hover:bg-muted rounded-xl transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-lg font-bold">{shop.name}</h1>
              <p className="text-xs text-muted-foreground">{shop.products.length} products</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 hover:bg-muted rounded-xl transition-colors"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
            </button>
            <button className="p-2 hover:bg-muted rounded-xl transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Shop Info Card */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-4">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-muted/50 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={shop.logo || "/placeholder.svg"}
                alt={shop.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-lg">{shop.name}</h2>
                {shop.isVerified && <BadgeCheck className="w-5 h-5 text-blue-500" />}
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  {shop.rating} ({shop.reviewCount})
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {shop.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {shop.deliveryTime}
                </span>
              </div>
              {shop.discount && (
                <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  <Zap className="w-3 h-3" />
                  {shop.discount}
                </span>
              )}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-4">
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Address</p>
              <p className="text-sm">{shop.address}</p>
            </div>
            <a href={`tel:${shop.phone}`}>
              <Button variant="outline" size="sm" className="rounded-full gap-2 bg-transparent">
                <Phone className="w-4 h-4" />
                Call
              </Button>
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold text-lg mb-4">Products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {shop.products.map((product: any, index: number) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 50}ms` }}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <ProductCard product={product} variant="compact" />
              </div>
            ))}
          </div>
        </div>
      </main>

      <CartFooter />
    </div>
  )
}
