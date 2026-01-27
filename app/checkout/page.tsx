"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  MapPin,
  CreditCard,
  Wallet,
  Building2,
  CheckCircle2,
  Clock,
  Shield,
  X,
  Home,
  Briefcase,
  Check,
  Navigation,
  Plus,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import { useCart } from "@/lib/cart-context"
import { api, authAPI } from "@/lib/api/client"

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

export default function CheckoutPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const { items: cartItems, totalPrice, clearCart } = useCart()

  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "cod">("cod")
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [addressModalOpen, setAddressModalOpen] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState<Address>(savedAddresses[0])
  const [isLocating, setIsLocating] = useState(false)
  const [error, setError] = useState("")

  const subtotal = totalPrice
  const deliveryFee = subtotal > 500 ? 0 : 25
  const total = subtotal + deliveryFee

  useEffect(() => {
    // Check authentication
    if (!authAPI.isAuthenticated()) {
      router.push("/login?redirect=/checkout")
    }
  }, [router])

  const handlePlaceOrder = async () => {
    if (!authAPI.isAuthenticated()) {
      router.push("/login?redirect=/checkout")
      return
    }

    if (!selectedAddress.address.trim()) {
      setError("Please select a delivery address")
      return
    }

    setIsProcessing(true)
    setError("")

    try {
      // Group items by merchant
      const itemsByMerchant: Record<string, typeof cartItems> = {}
      cartItems.forEach((item) => {
        if (!item.merchantId || !item.productId) {
          throw new Error(`Product ${item.name} is missing merchant or product ID. Please refresh and try again.`)
        }
        if (!itemsByMerchant[item.merchantId]) {
          itemsByMerchant[item.merchantId] = []
        }
        itemsByMerchant[item.merchantId].push(item)
      })

      // Create orders for each merchant
      const orderPromises = Object.entries(itemsByMerchant).map(async ([merchantId, items]) => {
        const itemsTotal = items.reduce((sum, item) => sum + item.price * item.count, 0)

        return api.orders.create({
          merchantId,
          itemsTotal,
          deliveryFee: deliveryFee / Object.keys(itemsByMerchant).length, // Split delivery fee
          discount: 0,
          paymentMethod: paymentMethod === "cod" ? "COD" : paymentMethod === "upi" ? "UPI" : "Card",
          deliveryAddress: selectedAddress.address,
          deliveryInstructions: "",
          items: items.map((item) => ({
            productId: item.productId!,
            quantity: item.count,
          })),
        })
      })

      await Promise.all(orderPromises)
      clearCart()
      setOrderPlaced(true)
    } catch (err: any) {
      console.error("Failed to place order:", err)
      setError(err.message || "Failed to place order. Please try again.")
    } finally {
      setIsProcessing(false)
    }
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

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">{t("orders.delivered")}!</h1>
          <p className="text-muted-foreground mb-2">{t("checkout.orderSummary")}</p>
          <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-8">
            <Clock className="w-5 h-5" />
            <span>
              {t("cart.deliveryIn")} 12 {t("header.min")}
            </span>
          </div>
          <div className="space-y-3">
            <Link href="/orders">
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 rounded-xl font-semibold">
                {t("orders.trackOrder")}
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full h-12 rounded-xl font-semibold bg-transparent">
                {t("cart.startShopping")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-2">{t("cart.empty")}</h1>
          <p className="text-muted-foreground mb-6">{t("cart.addItems")}</p>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">{t("cart.startShopping")}</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/cart" className="p-2 hover:bg-muted rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-bold">{t("checkout.title")}</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm">
            {error}
          </div>
        )}

        {/* Delivery Address */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">{t("checkout.deliveryAddress")}</h3>
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

        {/* Delivery Time */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="p-2 bg-green-500/20 rounded-xl">
            <Clock className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-green-800">{t("shops.fastDelivery")}</p>
            <p className="text-xs text-green-600">
              {t("cart.deliveryIn")} 12 {t("header.min")}
            </p>
          </div>
        </div>

        {/* Order Summary - using cart context */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-border/50">
            <h3 className="font-semibold">{t("checkout.orderSummary")}</h3>
          </div>
          <div className="p-4 space-y-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {item.name} x {item.count}
                </span>
                <span>₹{item.price * item.count}</span>
              </div>
            ))}
            <div className="border-t border-border/50 pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("cart.itemTotal")}</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("cart.deliveryFee")}</span>
                <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                  {deliveryFee === 0 ? t("cart.free") : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-border/50">
                <span>{t("cart.total")}</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-4">
          <h3 className="font-semibold mb-4">{t("checkout.paymentMethod")}</h3>
          <div className="space-y-3">
            <button
              onClick={() => setPaymentMethod("upi")}
              className={`w-full p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${
                paymentMethod === "upi" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="p-2 bg-purple-100 rounded-lg">
                <Wallet className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-sm">{t("checkout.upiPayment")}</p>
                <p className="text-xs text-muted-foreground">Google Pay, PhonePe, Paytm</p>
              </div>
              {paymentMethod === "upi" && <CheckCircle2 className="w-5 h-5 text-primary" />}
            </button>

            <button
              onClick={() => setPaymentMethod("card")}
              className={`w-full p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${
                paymentMethod === "card" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <CreditCard className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-sm">{t("checkout.cardPayment")}</p>
                <p className="text-xs text-muted-foreground">Visa, Mastercard, RuPay</p>
              </div>
              {paymentMethod === "card" && <CheckCircle2 className="w-5 h-5 text-primary" />}
            </button>

            <button
              onClick={() => setPaymentMethod("cod")}
              className={`w-full p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${
                paymentMethod === "cod" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="p-2 bg-green-100 rounded-lg">
                <Building2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-sm">{t("checkout.cashOnDelivery")}</p>
                <p className="text-xs text-muted-foreground">{t("checkout.payOnDelivery")}</p>
              </div>
              {paymentMethod === "cod" && <CheckCircle2 className="w-5 h-5 text-primary" />}
            </button>
          </div>
        </div>

        {/* Security Note */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
          <Shield className="w-4 h-4" />
          <span>Your payment information is secure and encrypted</span>
        </div>
      </main>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border/50 p-4 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">{t("cart.total")}</p>
            <p className="text-xl font-bold">₹{total}</p>
          </div>
          <Button
            onClick={handlePlaceOrder}
            disabled={isProcessing}
            className="flex-1 max-w-xs h-14 bg-primary hover:bg-primary/90 rounded-2xl text-base font-bold shadow-lg"
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{t("misc.loading")}</span>
              </div>
            ) : (
              t("checkout.placeOrder")
            )}
          </Button>
        </div>
      </div>

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
