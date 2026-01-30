"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Filter, ChevronDown, Grid3X3, LayoutList, X, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { CartFooter } from "@/components/cart-footer"
import { productsAPI } from "@/lib/api/client"

interface Product {
    id: number
    name: string
    quantity: string
    price: number
    image: string
    freshnessScore: number
    stockedTime: string
    deliveryEta: string
    rating: number
    productId: string
    merchantId: string
}

// Category slug to display name mapping
const categoryNames: Record<string, string> = {
    "dairy-bread-eggs": "Dairy, Bread & Eggs",
    "fruits-vegetables": "Fruits & Vegetables",
    "snacks-beverages": "Snacks & Beverages",
    "cooking-essentials": "Cooking Essentials",
    "instant-food": "Instant Food",
    "personal-care": "Personal Care",
}

type SortOption = "relevance" | "price-low" | "price-high" | "rating" | "freshness"
type PriceRange = "all" | "under-50" | "50-100" | "above-100"

export default function CategoryClient({ slug }: { slug: string }) {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [sortBy, setSortBy] = useState<SortOption>("relevance")
    const [priceRange, setPriceRange] = useState<PriceRange>("all")
    const [minRating, setMinRating] = useState<number>(0)
    const [showFiltersModal, setShowFiltersModal] = useState(false)
    const [showSortModal, setShowSortModal] = useState(false)
    const [showPriceModal, setShowPriceModal] = useState(false)
    const [showRatingModal, setShowRatingModal] = useState(false)
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    const categoryName = categoryNames[slug] || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

    // Fetch products from API
    useEffect(() => {
        async function fetchProducts() {
            setLoading(true)
            try {
                // Try to fetch by category first, fallback to all products
                let apiProducts
                try {
                    apiProducts = await productsAPI.getByCategory(slug)
                } catch {
                    // If category endpoint fails, get all products
                    apiProducts = await productsAPI.getAll()
                }

                // Transform API products to our format
                const transformedProducts: Product[] = (apiProducts || []).map((p: any, index: number) => ({
                    id: 1000 + index, // Local cart ID
                    name: p.name,
                    quantity: p.unit || "1 unit",
                    price: p.price,
                    image: p.imageUrl || "/generic-food-product.png",
                    freshnessScore: 85 + Math.floor(Math.random() * 15),
                    stockedTime: `${10 + Math.floor(Math.random() * 30)}m ago`,
                    deliveryEta: `${8 + Math.floor(Math.random() * 5)} mins`,
                    rating: 4 + Math.random() * 0.9,
                    productId: p.id, // Real backend GUID
                    merchantId: p.merchantId, // Real merchant GUID
                }))
                setProducts(transformedProducts)
            } catch (error) {
                console.error("Failed to fetch products:", error)
                setProducts([])
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [slug])

    const filteredAndSortedProducts = useMemo(() => {
        let result = [...products]

        // Apply price filter
        if (priceRange !== "all") {
            result = result.filter((p) => {
                if (priceRange === "under-50") return p.price < 50
                if (priceRange === "50-100") return p.price >= 50 && p.price <= 100
                if (priceRange === "above-100") return p.price > 100
                return true
            })
        }

        // Apply rating filter
        if (minRating > 0) {
            result = result.filter((p) => (p.rating || 0) >= minRating)
        }

        // Apply sorting
        switch (sortBy) {
            case "price-low":
                result.sort((a, b) => a.price - b.price)
                break
            case "price-high":
                result.sort((a, b) => b.price - a.price)
                break
            case "rating":
                result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
                break
            case "freshness":
                result.sort((a, b) => (b.freshnessScore || 0) - (a.freshnessScore || 0))
                break
            default:
                break
        }

        return result
    }, [products, sortBy, priceRange, minRating])

    const activeFiltersCount = (priceRange !== "all" ? 1 : 0) + (minRating > 0 ? 1 : 0)

    const clearAllFilters = () => {
        setPriceRange("all")
        setMinRating(0)
        setSortBy("relevance")
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-muted rounded-xl transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex-1">
                        <h1 className="text-lg font-bold">{categoryName}</h1>
                        <p className="text-xs text-muted-foreground">
                            {loading ? "Loading..." : `${filteredAndSortedProducts.length} products`}
                        </p>
                    </div>
                </div>
            </header>

            {/* Filters Bar */}
            <div className="sticky top-[57px] z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                        <Button
                            variant="outline"
                            size="sm"
                            className={`rounded-full gap-1.5 flex-shrink-0 ${activeFiltersCount > 0 ? "bg-primary/10 border-primary text-primary" : "bg-transparent"}`}
                            onClick={() => setShowFiltersModal(true)}
                        >
                            <Filter className="w-3.5 h-3.5" />
                            Filters
                            {activeFiltersCount > 0 && (
                                <span className="w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                                    {activeFiltersCount}
                                </span>
                            )}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className={`rounded-full gap-1.5 flex-shrink-0 ${sortBy !== "relevance" ? "bg-primary/10 border-primary text-primary" : "bg-transparent"}`}
                            onClick={() => setShowSortModal(true)}
                        >
                            Sort by
                            <ChevronDown className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className={`rounded-full flex-shrink-0 ${priceRange !== "all" ? "bg-primary/10 border-primary text-primary" : "bg-transparent"}`}
                            onClick={() => setShowPriceModal(true)}
                        >
                            Price
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className={`rounded-full flex-shrink-0 ${minRating > 0 ? "bg-primary/10 border-primary text-primary" : "bg-transparent"}`}
                            onClick={() => setShowRatingModal(true)}
                        >
                            Rating
                        </Button>
                        {activeFiltersCount > 0 && (
                            <Button variant="ghost" size="sm" className="rounded-full text-primary" onClick={clearAllFilters}>
                                Clear all
                            </Button>
                        )}
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                        >
                            <Grid3X3 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                        >
                            <LayoutList className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <main className="max-w-7xl mx-auto px-4 py-6 pb-32">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                ) : filteredAndSortedProducts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
                            <Filter className="w-12 h-12 text-muted-foreground" />
                        </div>
                        <h2 className="text-xl font-bold mb-2">No products found</h2>
                        <p className="text-muted-foreground mb-6">Try adjusting your filters</p>
                        <Button onClick={clearAllFilters} className="rounded-full">
                            Clear Filters
                        </Button>
                    </div>
                ) : (
                    <div
                        className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}
                    >
                        {filteredAndSortedProducts.map((product, index) => (
                            <div
                                key={product.id}
                                style={{ animationDelay: `${index * 50}ms` }}
                                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                            >
                                <ProductCard product={product} variant={viewMode === "list" ? "full" : "compact"} />
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* CartFooter */}
            <CartFooter />

            {showSortModal && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4">
                    <div className="bg-background rounded-t-3xl sm:rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
                        <div className="flex items-center justify-between p-4 border-b border-border">
                            <h3 className="font-bold text-lg">Sort by</h3>
                            <button onClick={() => setShowSortModal(false)} className="p-2 hover:bg-muted rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4 space-y-2">
                            {[
                                { id: "relevance", label: "Relevance" },
                                { id: "price-low", label: "Price: Low to High" },
                                { id: "price-high", label: "Price: High to Low" },
                                { id: "rating", label: "Highest Rated" },
                                { id: "freshness", label: "Freshness" },
                            ].map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => {
                                        setSortBy(option.id as SortOption)
                                        setShowSortModal(false)
                                    }}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors ${sortBy === option.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                        }`}
                                >
                                    <span className="font-medium">{option.label}</span>
                                    {sortBy === option.id && <Check className="w-5 h-5" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {showPriceModal && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4">
                    <div className="bg-background rounded-t-3xl sm:rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
                        <div className="flex items-center justify-between p-4 border-b border-border">
                            <h3 className="font-bold text-lg">Price Range</h3>
                            <button onClick={() => setShowPriceModal(false)} className="p-2 hover:bg-muted rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4 space-y-2">
                            {[
                                { id: "all", label: "All Prices" },
                                { id: "under-50", label: "Under ₹50" },
                                { id: "50-100", label: "₹50 - ₹100" },
                                { id: "above-100", label: "Above ₹100" },
                            ].map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => {
                                        setPriceRange(option.id as PriceRange)
                                        setShowPriceModal(false)
                                    }}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors ${priceRange === option.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                        }`}
                                >
                                    <span className="font-medium">{option.label}</span>
                                    {priceRange === option.id && <Check className="w-5 h-5" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {showRatingModal && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4">
                    <div className="bg-background rounded-t-3xl sm:rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
                        <div className="flex items-center justify-between p-4 border-b border-border">
                            <h3 className="font-bold text-lg">Minimum Rating</h3>
                            <button onClick={() => setShowRatingModal(false)} className="p-2 hover:bg-muted rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4 space-y-2">
                            {[
                                { id: 0, label: "All Ratings" },
                                { id: 4, label: "4★ & above" },
                                { id: 4.5, label: "4.5★ & above" },
                            ].map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => {
                                        setMinRating(option.id)
                                        setShowRatingModal(false)
                                    }}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors ${minRating === option.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                        }`}
                                >
                                    <span className="font-medium">{option.label}</span>
                                    {minRating === option.id && <Check className="w-5 h-5" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {showFiltersModal && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4">
                    <div className="bg-background rounded-t-3xl sm:rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
                        <div className="flex items-center justify-between p-4 border-b border-border">
                            <h3 className="font-bold text-lg">All Filters</h3>
                            <button onClick={() => setShowFiltersModal(false)} className="p-2 hover:bg-muted rounded-full">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4 space-y-6 overflow-y-auto max-h-[60vh]">
                            {/* Price Range Section */}
                            <div>
                                <h4 className="font-semibold mb-3">Price Range</h4>
                                <div className="space-y-2">
                                    {[
                                        { id: "all", label: "All Prices" },
                                        { id: "under-50", label: "Under ₹50" },
                                        { id: "50-100", label: "₹50 - ₹100" },
                                        { id: "above-100", label: "Above ₹100" },
                                    ].map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => setPriceRange(option.id as PriceRange)}
                                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${priceRange === option.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                                }`}
                                        >
                                            <span>{option.label}</span>
                                            {priceRange === option.id && <Check className="w-4 h-4" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Rating Section */}
                            <div>
                                <h4 className="font-semibold mb-3">Minimum Rating</h4>
                                <div className="space-y-2">
                                    {[
                                        { id: 0, label: "All Ratings" },
                                        { id: 4, label: "4★ & above" },
                                        { id: 4.5, label: "4.5★ & above" },
                                    ].map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => setMinRating(option.id)}
                                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${minRating === option.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                                }`}
                                        >
                                            <span>{option.label}</span>
                                            {minRating === option.id && <Check className="w-4 h-4" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-border flex gap-3">
                            <Button variant="outline" className="flex-1 rounded-xl bg-transparent" onClick={clearAllFilters}>
                                Clear All
                            </Button>
                            <Button className="flex-1 rounded-xl bg-primary" onClick={() => setShowFiltersModal(false)}>
                                Apply Filters
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
