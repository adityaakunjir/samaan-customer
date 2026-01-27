"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { MapPin, ChevronDown, ShoppingCart, Menu, X, User, Bell, Clock, Package, LogOut, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import { AddressModal } from "@/components/address-modal"
import { useCart } from "@/lib/cart-context"
import { getUser, removeToken, productsAPI } from "@/lib/api/client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Address {
  id: string
  type: "home" | "office" | "other"
  label: string
  address: string
  isDefault?: boolean
}

interface SimpleUser {
  name: string
  email: string
}

interface Product {
  id: string
  name: string
  price: number
  imageUrl?: string
  category?: string
  merchantId?: string
}

export function Header() {
  const [displayText, setDisplayText] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [addressModalOpen, setAddressModalOpen] = useState(false)
  const [user, setUser] = useState<SimpleUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const [selectedAddress, setSelectedAddress] = useState<Address>({
    id: "1",
    type: "home",
    label: "Home",
    address: "402, Green Valley Apartments, Sector 12, Pune - 411001",
    isDefault: true,
  })
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)
  const { totalItems } = useCart()

  // Search state
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const mobileSearchRef = useRef<HTMLDivElement>(null)

  // Debounced search effect
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      setShowResults(false)
      return
    }

    const timeoutId = setTimeout(async () => {
      setIsSearching(true)
      try {
        const results = await productsAPI.search(searchQuery)
        setSearchResults(results || [])
        setShowResults(true)
      } catch (error) {
        console.error("Search error:", error)
        setSearchResults([])
      } finally {
        setIsSearching(false)
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current && !searchRef.current.contains(event.target as Node) &&
        mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      e.preventDefault()
      handleProductClick(searchResults[0])
    }
  }

  const handleProductClick = (product: Product) => {
    setShowResults(false)
    setSearchQuery("")
    // Navigate to shop page with the product highlighted, or product page if we had one
    if (product.merchantId) {
      router.push(`/shops/${product.merchantId}?product=${product.id}`)
    }
  }

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = getUser()
    if (storedUser) {
      setUser(storedUser)
    }
    setIsLoading(false)
  }, [])

  const handleLogout = async () => {
    removeToken()
    setUser(null)
    router.push("/")
    router.refresh()
  }

  const getUserDisplayName = () => {
    if (!user) return ""
    // Check FullName (capitalized from backend), then fullName, then name, then email
    return (user as any).FullName || (user as any).fullName || user.name || user.email?.split("@")[0] || "User"
  }

  useEffect(() => {
    if (isFocused) return

    let termIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId: NodeJS.Timeout

    const searchText = getTranslation(language, "header.search")

    const type = () => {
      const currentTerm = ["milk", "bread", "eggs", "chips", "Coke", "rice", "butter"][termIndex]

      if (!isDeleting) {
        setDisplayText(`${searchText} "${currentTerm.slice(0, charIndex + 1)}"...`)
        charIndex++

        if (charIndex === currentTerm.length) {
          isDeleting = true
          timeoutId = setTimeout(type, 1500)
        } else {
          timeoutId = setTimeout(type, 100)
        }
      } else {
        setDisplayText(`${searchText} "${currentTerm.slice(0, charIndex)}"...`)
        charIndex--

        if (charIndex === 0) {
          isDeleting = false
          termIndex = (termIndex + 1) % 7
          timeoutId = setTimeout(type, 300)
        } else {
          timeoutId = setTimeout(type, 50)
        }
      }
    }

    timeoutId = setTimeout(type, 500)

    return () => clearTimeout(timeoutId)
  }, [isFocused, language])

  const getShortAddress = (address: string, maxLength = 20) => {
    if (address.length <= maxLength) return address
    return address.substring(0, maxLength) + "..."
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2.5 sm:py-3">
          {/* Main header row */}
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <Link href="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
              <Image
                src="/images/samaan-logo.png"
                alt="Samaan"
                width={140}
                height={45}
                className="h-8 sm:h-10 w-auto object-contain"
                priority
              />
            </Link>

            <button
              onClick={() => setAddressModalOpen(true)}
              className="hidden sm:flex items-center gap-1 sm:gap-2 hover:bg-primary/5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all duration-200 flex-shrink min-w-0 group border border-transparent hover:border-primary/10"
            >
              <div className="p-1 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-[10px] sm:text-xs lg:text-sm font-bold text-foreground leading-tight truncate flex items-center gap-1">
                  {t("header.deliveryIn")} 12 {t("header.min")}
                  <span className="hidden sm:inline-flex items-center justify-center w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                </p>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <span className="text-[9px] sm:text-[10px] lg:text-[12px] text-muted-foreground truncate max-w-[80px] sm:max-w-[120px] lg:max-w-[180px]">
                    {getShortAddress(selectedAddress.address, 20)}
                  </span>
                  <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </button>

            {/* Desktop search bar */}
            <div className="flex-1 max-w-xl xl:max-w-2xl hidden md:block" ref={searchRef}>
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                  placeholder={searchQuery ? "" : (displayText || `${t("header.search")} "milk"...`)}
                  onFocus={() => {
                    setIsFocused(true)
                    if (searchResults.length > 0) setShowResults(true)
                  }}
                  onBlur={() => setIsFocused(false)}
                  className="w-full h-11 lg:h-12 pl-12 pr-4 rounded-2xl border-2 border-border/50 bg-muted/30 text-[14px] text-foreground placeholder:text-muted-foreground 
                    focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-background
                    transition-all duration-300
                    shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]
                    hover:border-border"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-primary/10 rounded-lg group-focus-within:bg-primary/20 transition-colors">
                  {isSearching ? (
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  )}
                </div>

                {/* Search Results Dropdown */}
                {showResults && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
                    {searchResults.length === 0 ? (
                      <div className="px-4 py-6 text-center text-muted-foreground">
                        <p className="text-sm">No products found for "{searchQuery}"</p>
                      </div>
                    ) : (
                      <div className="py-2">
                        {searchResults.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => handleProductClick(product)}
                            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left"
                          >
                            {product.imageUrl && (
                              <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-lg object-cover"
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                              {product.category && (
                                <p className="text-xs text-muted-foreground">{product.category}</p>
                              )}
                            </div>
                            <p className="text-sm font-semibold text-primary">₹{product.price}</p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 flex-shrink-0">
              <div className="hidden lg:block">
                <LanguageSwitcher />
              </div>

              <Link
                href="/notifications"
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl hover:bg-muted transition-colors relative"
              >
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
              </Link>

              {isLoading ? (
                <div className="hidden lg:flex items-center justify-center w-10 h-10">
                  <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              ) : user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="hidden lg:flex text-[14px] font-medium gap-2 hover:bg-muted rounded-xl h-10"
                    >
                      <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="max-w-[100px] truncate">{getUserDisplayName()}</span>
                      <ChevronDown className="w-3 h-3 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-2 py-1.5">
                      <p className="text-sm font-medium">{getUserDisplayName()}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/orders" className="cursor-pointer">
                        <Package className="w-4 h-4 mr-2" />
                        {t("header.orders")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="cursor-pointer">
                        <Settings className="w-4 h-4 mr-2" />
                        Profile Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="hidden lg:flex text-[14px] font-medium gap-2 hover:bg-muted rounded-xl h-10"
                  >
                    <User className="w-4 h-4" />
                    {t("header.login")}
                  </Button>
                </Link>
              )}

              <Link href="/cart">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-[12px] sm:text-[13px] lg:text-[14px] font-semibold gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 h-9 sm:h-10 lg:h-11 rounded-full shadow-md hover:shadow-lg transition-all duration-300 relative">
                  <ShoppingCart className="w-4 h-4" />
                  <span>{t("header.cart")}</span>
                  {totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 flex items-center justify-center bg-white text-primary text-[11px] font-bold rounded-full shadow-md px-1">
                      {totalItems > 99 ? "99+" : totalItems}
                    </span>
                  )}
                </Button>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="sm:hidden p-2 hover:bg-muted rounded-xl transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile address button */}
          <button
            onClick={() => setAddressModalOpen(true)}
            className="flex sm:hidden items-center gap-2 mt-2 py-2 px-2 bg-primary/5 rounded-xl w-full text-left"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="p-1.5 bg-primary/10 rounded-lg flex-shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <p className="text-[11px] text-muted-foreground">{t("header.deliverTo")}</p>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] font-semibold text-foreground truncate">{selectedAddress.label}</span>
                  <ChevronDown className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Delivery time badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 rounded-lg flex-shrink-0 border border-green-500/20">
              <Clock className="w-3.5 h-3.5 text-green-600" />
              <span className="text-[11px] font-bold text-green-600">12 {t("header.min")}</span>
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            </div>
          </button>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden px-3 sm:px-4 pb-3" ref={mobileSearchRef}>
          <div className="relative group">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              placeholder={searchQuery ? "" : (displayText || `${t("header.search")} "milk"...`)}
              onFocus={() => {
                setIsFocused(true)
                if (searchResults.length > 0) setShowResults(true)
              }}
              onBlur={() => setIsFocused(false)}
              className="w-full h-11 pl-12 pr-4 rounded-2xl border-2 border-border/50 bg-muted/30 text-[14px] 
                focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-background
                transition-all duration-300
                shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-primary/10 rounded-lg">
              {isSearching ? (
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}
            </div>

            {/* Mobile Search Results Dropdown */}
            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                {searchResults.length === 0 ? (
                  <div className="px-4 py-6 text-center text-muted-foreground">
                    <p className="text-sm">No products found for "{searchQuery}"</p>
                  </div>
                ) : (
                  <div className="py-2">
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product)}
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left"
                      >
                        {product.imageUrl && (
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                          {product.category && (
                            <p className="text-xs text-muted-foreground">{product.category}</p>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-primary">₹{product.price}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-4 py-4 space-y-1 animate-in slide-in-from-top duration-200">
            <div className="px-3 py-2 mb-2">
              <p className="text-xs text-muted-foreground mb-2">{t("misc.language")}</p>
              <LanguageSwitcher />
            </div>
            <div className="border-t border-border/50 pt-2">
              {user ? (
                <>
                  {/* User info section */}
                  <div className="px-3 py-3 mb-2 bg-primary/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{getUserDisplayName()}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/orders" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[14px] font-medium h-12 rounded-xl hover:bg-primary/5"
                    >
                      <Package className="w-4 h-4 mr-3" />
                      {t("header.orders")}
                    </Button>
                  </Link>
                  <Link href="/profile" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[14px] font-medium h-12 rounded-xl hover:bg-primary/5"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Profile Settings
                    </Button>
                  </Link>
                  <Link href="/notifications" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[14px] font-medium h-12 rounded-xl hover:bg-primary/5"
                    >
                      <Bell className="w-4 h-4 mr-3" />
                      {t("header.notifications")}
                    </Button>
                  </Link>
                  <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[14px] font-medium h-12 rounded-xl hover:bg-primary/5"
                    >
                      <ShoppingCart className="w-4 h-4 mr-3" />
                      {t("header.cart")}
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      handleLogout()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full justify-start text-[14px] font-medium h-12 rounded-xl hover:bg-destructive/10 text-destructive"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[14px] font-medium h-12 rounded-xl hover:bg-primary/5"
                    >
                      <User className="w-4 h-4 mr-3" />
                      {t("header.login")}
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[14px] font-medium h-12 rounded-xl hover:bg-primary/5"
                    >
                      <User className="w-4 h-4 mr-3" />
                      {t("header.signup")}
                    </Button>
                  </Link>
                  <Link href="/notifications" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[14px] font-medium h-12 rounded-xl hover:bg-primary/5"
                    >
                      <Bell className="w-4 h-4 mr-3" />
                      {t("header.notifications")}
                    </Button>
                  </Link>
                  <Link href="/orders" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[14px] font-medium h-12 rounded-xl hover:bg-primary/5"
                    >
                      <Package className="w-4 h-4 mr-3" />
                      {t("header.orders")}
                    </Button>
                  </Link>
                  <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[14px] font-medium h-12 rounded-xl hover:bg-primary/5"
                    >
                      <ShoppingCart className="w-4 h-4 mr-3" />
                      {t("header.cart")}
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      <AddressModal
        open={addressModalOpen}
        onOpenChange={setAddressModalOpen}
        selectedAddress={selectedAddress}
        onSelectAddress={setSelectedAddress}
      />
    </>
  )
}
