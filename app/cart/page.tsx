"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  Truck,
  Clock,
  MapPin,
  ChevronRight,
  Tag,
  X,
  Home,
  Briefcase,
  Check,
  Navigation,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import { useCart } from "@/lib/cart-context"

interface Address {
  id: string
  type: "home" | "office" | "other"
  label: string
  address: string
  isDefault?: boolean
}

const savedAddresses: Address[] = [
  {
    id: "1",
    type: "home",
    label: "Home",
    address: "402, Green Valley Apartments, Sector 12, Pune - 411001",
    isDefault: true,
  },
  {
    id: "2",
    type: "office",
    label: "Office",
    address: "Tech Park, Tower B, 5th Floor, Hinjewadi, Pune - 411057",
  },
  {
    id: "3",
    type: "other",
    label: "Mom's House",
    address: "15, Shivaji Nagar, Near Bus Stand, Pune - 411005",
  },
]

export default function CartPage() {
  const router = useRouter()
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const { items: cartItems, updateQuantity, removeItem, totalPrice } = useCart()

  const [promoCode, setPromoCode] = useState("")
  const [addressModalOpen, setAddressModalOpen] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState<Address>(savedAddresses[0])
  const [isLocating, setIsLocating] = useState(false)

  const subtotal = totalPrice
  const deliveryFee = subtotal > 500 ? 0 : 25
  const total = subtotal + deliveryFee

  const handleCheckout = () => {
    router.push("/checkout")
  }

  const handleUseCurrentLocation = () => {
    setIsLocating(true)
    setTimeout(() => {
      setIsLocating(false)
      const currentLocationAddress: Address = {
        id: "current",
        type: "other",
        label: "Current Location",
        address: "Detected location: Koregaon Park, Pune",
      }
      setSelectedAddress(currentLocationAddress)
      setAddressModalOpen(false)
    }, 1500)
  }

  const getIcon = (type: "home" | "office" | "other") => {
    switch (type) {
      case "home":
        return <Home className="w-4 h-4" />
      case "office":
        return <Briefcase className="w-4 h-4" />
      default:
        return <MapPin className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-muted rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold">{t("cart.title")}</h1>
            <p className="text-xs text-muted-foreground">
              {cartItems.length} {t("cart.items")}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold mb-2">{t("cart.empty")}</h2>
            <p className="text-muted-foreground mb-6">{t("cart.addItems")}</p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">{t("cart.startShopping")}</Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Delivery Info */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-xl">
                  <Truck className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-green-800">{t("cart.freeDelivery")} ₹500</p>
                  {subtotal < 500 && (
                    <p className="text-xs text-green-600">
                      {t("cart.addMore")} ₹{500 - subtotal}
                    </p>
                  )}
                </div>
              </div>

              {/* Items List */}
              <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-border/50 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">
                    {t("cart.deliveryIn")} 12 {t("header.min")}
                  </span>
                </div>

                <div className="divide-y divide-border/50">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 flex gap-3 sm:gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-muted/30 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">{item.quantity}</p>
                        <p className="text-sm font-bold mt-1">₹{item.price}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                        <div className="flex items-center gap-2 bg-primary/10 rounded-full p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.count - 1)}
                            className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-muted transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-bold">{item.count}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.count + 1)}
                            className="w-7 h-7 flex items-center justify-center bg-primary text-white rounded-full shadow-sm hover:bg-primary/90 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-4">
              {/* Promo Code */}
              <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">{t("cart.promoCode")}</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={t("cart.enterCode")}
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 h-10 px-4 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <Button variant="outline" className="rounded-xl bg-transparent">
                    {t("cart.apply")}
                  </Button>
                </div>
              </div>

              {/* Bill Details */}
              <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-4">
                <h3 className="font-semibold mb-4">{t("cart.billDetails")}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("cart.itemTotal")}</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("cart.deliveryFee")}</span>
                    <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                      {deliveryFee === 0 ? t("cart.free") : `₹${deliveryFee}`}
                    </span>
                  </div>
                  <div className="border-t border-border/50 pt-3 flex justify-between font-bold text-base">
                    <span>{t("cart.toPay")}</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{t("cart.deliverTo")}</h3>
                  <button
                    onClick={() => setAddressModalOpen(true)}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    {t("cart.change")}
                  </button>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      selectedAddress.type === "home"
                        ? "bg-blue-100"
                        : selectedAddress.type === "office"
                          ? "bg-purple-100"
                          : "bg-primary/10"
                    }`}
                  >
                    {getIcon(selectedAddress.type)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{selectedAddress.label}</p>
                    <p className="text-xs text-muted-foreground">{selectedAddress.address}</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full h-14 bg-primary hover:bg-primary/90 rounded-2xl text-base font-semibold shadow-lg"
              >
                {t("cart.checkout")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </main>

      {addressModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setAddressModalOpen(false)} />
          <div className="relative w-full sm:max-w-md bg-background rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[85vh] overflow-hidden">
            <div className="sticky top-0 bg-background border-b border-border/50 px-4 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">{t("address.selectAddress")}</h2>
              <button
                onClick={() => setAddressModalOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh]">
              <button
                onClick={handleUseCurrentLocation}
                disabled={isLocating}
                className="w-full p-4 rounded-xl border-2 border-dashed border-primary/50 bg-primary/5 hover:bg-primary/10 transition-all flex items-center gap-3"
              >
                <div className="p-2 bg-primary/20 rounded-lg">
                  {isLocating ? (
                    <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  ) : (
                    <Navigation className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-primary text-sm">
                    {isLocating ? t("address.detecting") : t("address.useCurrentLocation")}
                  </p>
                  <p className="text-xs text-muted-foreground">Enable location for accurate delivery</p>
                </div>
              </button>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  {t("address.savedAddresses")}
                </p>
                <div className="space-y-2">
                  {savedAddresses.map((addr) => (
                    <button
                      key={addr.id}
                      onClick={() => {
                        setSelectedAddress(addr)
                        setAddressModalOpen(false)
                      }}
                      className={`w-full p-4 rounded-xl border-2 transition-all flex items-start gap-3 text-left ${
                        selectedAddress.id === addr.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          addr.type === "home"
                            ? "bg-blue-100 text-blue-600"
                            : addr.type === "office"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {getIcon(addr.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-sm">{addr.label}</p>
                          {addr.isDefault && (
                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{addr.address}</p>
                      </div>
                      {selectedAddress.id === addr.id && (
                        <div className="p-1 bg-primary rounded-full">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <Button variant="outline" className="w-full h-12 rounded-xl border-dashed gap-2 bg-transparent">
                <Plus className="w-4 h-4" />
                {t("address.addNew")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
