"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Star, Clock, MapPin, BadgeCheck, Zap, Phone, Share2, Heart, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { CartFooter } from "@/components/cart-footer"
import { merchantsAPI, productsAPI } from "@/lib/api/client"

interface Merchant {
    id: string
    businessName: string
    logoUrl?: string
    address?: string
    city?: string
    phone?: string
    rating?: number
    isVerified?: boolean
}

interface Product {
    id: string
    name: string
    price: number
    quantity?: string
    imageUrl?: string
    freshnessScore?: number
    category?: string
}


export default function ShopDetailClient({ id }: { id: string }) {
    const searchParams = useSearchParams()
    const highlightedProductId = searchParams.get("product")
    const [merchant, setMerchant] = useState<Merchant | null>(null)
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isFavorite, setIsFavorite] = useState(false)
    const productRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)
            try {
                // Fetch merchant details and products in parallel
                const [merchantData, productsData] = await Promise.all([
                    merchantsAPI.getById(id),
                    merchantsAPI.getProducts(id)
                ])
                setMerchant(merchantData)
                setProducts(productsData || [])
            } catch (err) {
                console.error("Error fetching shop data:", err)
                setError("Failed to load shop details")
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [id])

    // Scroll to highlighted product when data is loaded
    useEffect(() => {
        if (!isLoading && highlightedProductId && productRefs.current[highlightedProductId]) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                productRefs.current[highlightedProductId]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            }, 300)
        }
    }, [isLoading, highlightedProductId, products])

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <p className="text-muted-foreground">Loading shop...</p>
                </div>
            </div>
        )
    }

    if (error || !merchant) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center">
                <div className="text-center">
                    <p className="text-destructive mb-4">{error || "Shop not found"}</p>
                    <Link href="/shops">
                        <Button variant="outline">Back to Shops</Button>
                    </Link>
                </div>
            </div>
        )
    }

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
                            <h1 className="text-lg font-bold">{merchant.businessName}</h1>
                            <p className="text-xs text-muted-foreground">{products.length} products</p>
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
                                src={merchant.logoUrl || "/placeholder-logo.png"}
                                alt={merchant.businessName || "Shop logo"}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h2 className="font-bold text-lg">{merchant.businessName}</h2>
                                {merchant.isVerified && <BadgeCheck className="w-5 h-5 text-blue-500" />}
                            </div>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground flex-wrap">
                                <span className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    {merchant.rating || 4.0} (50)
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    1 km
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    15 mins
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-4">
                        <div className="flex-1">
                            <p className="text-xs text-muted-foreground">Address</p>
                            <p className="text-sm">{merchant.address || merchant.city || "Pune, Maharashtra"}</p>
                        </div>
                        {merchant.phone && (
                            <a href={`tel:${merchant.phone}`}>
                                <Button variant="outline" size="sm" className="rounded-full gap-2 bg-transparent">
                                    <Phone className="w-4 h-4" />
                                    Call
                                </Button>
                            </a>
                        )}
                    </div>
                </div>

                {/* Products */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Products</h3>
                    {products.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground">
                            <p>No products available yet</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {products.map((product, index) => {
                                const isHighlighted = highlightedProductId === product.id
                                return (
                                    <div
                                        key={product.id}
                                        ref={(el) => { productRefs.current[product.id] = el }}
                                        style={{ animationDelay: `${index * 50}ms` }}
                                        className={`animate-in fade-in slide-in-from-bottom-4 duration-500 transition-all ${isHighlighted
                                            ? "ring-2 ring-primary ring-offset-2 rounded-2xl scale-105 shadow-lg"
                                            : ""
                                            }`}
                                    >
                                        <ProductCard
                                            product={{
                                                id: parseInt(product.id),
                                                name: product.name,
                                                quantity: product.quantity || "1 unit",
                                                price: product.price,
                                                image: product.imageUrl || "/generic-food-product.png",
                                                freshnessScore: product.freshnessScore || 95,
                                                stockedTime: "20m ago",
                                                deliveryEta: "15 mins",
                                            }}
                                            variant="compact"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </main>

            <CartFooter />
        </div>
    )
}
