"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, Package, Clock, CheckCircle2, Truck, ChevronRight, RotateCcw, ShoppingBag, Loader2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import { useCart } from "@/lib/cart-context"
import { api, authAPI } from "@/lib/api/client"

interface OrderItem {
  id: number
  name: string
  quantity: string
  price: number
  image: string
}

interface Order {
  id: string
  orderNumber?: string
  date: string
  status: "new" | "confirmed" | "packed" | "ready" | "delivered" | "cancelled" | "in-transit" | "preparing"
  total: number
  grandTotal?: number
  items: OrderItem[]
  deliveryTime?: string
  estimatedDelivery?: string
  createdAt?: string
  merchant?: { name: string }
}

export default function OrdersPage() {
  const router = useRouter()
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)
  const { addItem } = useCart()

  const [activeTab, setActiveTab] = useState<"all" | "active" | "completed">("all")
  const [reorderingId, setReorderingId] = useState<string | null>(null)
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    if (!authAPI.isAuthenticated()) {
      router.push("/login?redirect=/orders")
      return
    }
    loadOrders()
  }, [router])

  useEffect(() => {
    // Poll for order updates every 10 seconds
    const interval = setInterval(() => {
      if (authAPI.isAuthenticated()) {
        loadOrders(true)
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const loadOrders = async (silent = false) => {
    if (!silent) setLoading(true)
    else setRefreshing(true)

    try {
      const data = await api.orders.getMyOrders()
      const mappedOrders: Order[] = (Array.isArray(data) ? data : []).map((o: any) => ({
        id: (o.id || o.Id) as string,
        orderNumber: o.orderNumber,
        date: new Date(o.createdAt).toLocaleString(),
        status: (o.status || "new").toLowerCase(),
        total: o.grandTotal || o.itemsTotal || 0,
        grandTotal: o.grandTotal,
        items: (o.items || []).map((item: any) => ({
          id: item.productId || item.id,
          name: item.productName || item.name,
          quantity: `${item.quantity}`,
          price: item.unitPrice || item.price,
          image: "/placeholder.svg",
        })),
        deliveryTime: o.estimatedDelivery || "15-20 mins",
        estimatedDelivery: o.estimatedDelivery,
        createdAt: o.createdAt,
        merchant: o.merchant,
      }))
      setOrders(mappedOrders)
    } catch (error) {
      console.error("Failed to load orders:", error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const filteredOrders = (() => {
    switch (activeTab) {
      case "active":
        return orders.filter(
          (order) =>
            order.status === "new" ||
            order.status === "confirmed" ||
            order.status === "packed" ||
            order.status === "ready" ||
            order.status === "in-transit" ||
            order.status === "preparing",
        )
      case "completed":
        return orders.filter((order) => order.status === "delivered")
      default:
        return orders
    }
  })()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />
      case "in-transit":
        return <Truck className="w-4 h-4 text-blue-600" />
      case "preparing":
        return <Clock className="w-4 h-4 text-yellow-600" />
      default:
        return <Package className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "delivered":
        return t("orders.delivered")
      case "ready":
        return "Ready for Delivery"
      case "packed":
        return "Packed"
      case "confirmed":
        return "Confirmed"
      case "new":
        return "Order Placed"
      case "in-transit":
        return t("orders.onTheWay")
      case "preparing":
        return t("orders.preparing")
      default:
        return status
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-50 text-green-700"
      case "in-transit":
        return "bg-blue-50 text-blue-700"
      case "preparing":
        return "bg-yellow-50 text-yellow-700"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const handleReorder = (order: Order) => {
    setReorderingId(order.id)
    order.items.forEach((item) => {
      addItem({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      })
    })
    setTimeout(() => {
      setReorderingId(null)
      router.push("/cart")
    }, 800)
  }

  const handleViewDetails = (orderId: string) => {
    router.push(`/orders/_fallback/?id=${encodeURIComponent(orderId)}`)
  }

  const activeCount = orders.filter((o) => o.status === "in-transit" || o.status === "preparing").length
  const completedCount = orders.filter((o) => o.status === "delivered").length

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-muted rounded-xl transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-bold">{t("orders.title")}</h1>
          </div>
          <button
            onClick={() => loadOrders()}
            disabled={refreshing}
            className="p-2 hover:bg-muted rounded-xl transition-colors"
          >
            <RefreshCw className={`w-5 h-5 ${refreshing ? "animate-spin" : ""}`} />
          </button>
        </div>
      </header>

      {orders.length > 0 && (
        <div className="sticky top-[57px] z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
          <div className="max-w-4xl mx-auto px-4 flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide">
            {[
              { id: "all", label: t("orders.all"), count: orders.length },
              { id: "active", label: t("orders.active"), count: activeCount },
              { id: "completed", label: t("orders.completed"), count: completedCount },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "all" | "active" | "completed")}
                className={`py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                <span
                  className={`px-2 py-0.5 text-xs rounded-full ${
                    activeTab === tab.id ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-2">{t("orders.noOrders")}</h2>
            <p className="text-muted-foreground text-center mb-6 max-w-sm">
              You haven't placed any orders yet. Start shopping to see your orders here!
            </p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">{t("cart.startShopping")}</Button>
            </Link>
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
              <Package className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold mb-2">
              {activeTab === "active"
                ? t("orders.noActiveOrders")
                : activeTab === "completed"
                  ? t("orders.noCompletedOrders")
                  : t("orders.noOrders")}
            </h2>
            <p className="text-muted-foreground mb-6">{t("orders.startShopping")}</p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">{t("cart.startShopping")}</Button>
            </Link>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Order Header */}
              <div className="p-4 border-b border-border/50 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="text-xs text-muted-foreground">{order.date}</p>
                  <p className="font-semibold text-sm">
                    {order.orderNumber || `#${order.id.slice(0, 8).toUpperCase()}`}
                  </p>
                  {order.merchant && <p className="text-xs text-muted-foreground">{order.merchant.name}</p>}
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="text-xs font-medium">{getStatusLabel(order.status)}</span>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {order.items.slice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-muted/50 rounded-xl border-2 border-background overflow-hidden"
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{order.items.map((i) => i.name).join(", ")}</p>
                  <p className="text-xs text-muted-foreground">
                    {order.items.length} {t("cart.items")} |{" "}
                    {order.status === "delivered"
                      ? `${t("orders.deliveredIn")} ${order.deliveryTime || "15-20 mins"}`
                      : `Est. ${order.deliveryTime || order.estimatedDelivery || "15-20 mins"}`}
                  </p>
                </div>
                <p className="font-bold text-sm sm:text-base">₹{order.grandTotal || order.total}</p>
              </div>

              {/* Order Actions */}
              <div className="px-4 pb-4 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl gap-2 bg-transparent hover:bg-primary/5 hover:border-primary/30"
                  onClick={() => handleReorder(order)}
                  disabled={reorderingId === order.id}
                >
                  {reorderingId === order.id ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      {t("misc.loading")}
                    </>
                  ) : (
                    <>
                      <RotateCcw className="w-4 h-4" />
                      {t("orders.reorder")}
                    </>
                  )}
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-xl hover:bg-muted"
                  onClick={() => handleViewDetails(order.id)}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  )
}
