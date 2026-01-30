"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle2, MapPin, Phone, MessageCircle, Loader2, Clock, Package, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { api, authAPI } from "@/lib/api/client"

interface OrderItem {
    productId: string
    productName: string
    quantity: number
    unitPrice: number
    totalPrice: number
}

interface OrderData {
    id: string
    orderNumber: string
    status: string
    itemsTotal: number
    deliveryFee: number
    discount: number
    grandTotal: number
    deliveryAddress: string
    deliveryInstructions: string
    createdAt: string
    confirmedAt?: string
    preparingAt?: string
    readyAt?: string
    deliveredAt?: string
    items: OrderItem[]
    merchant?: { name: string }
}

export default function OrderDetailClient({ id }: { id: string }) {
    const router = useRouter()
    const [order, setOrder] = useState<OrderData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!authAPI.isAuthenticated()) {
            router.push("/login?redirect=/orders")
            return
        }
        loadOrder()
    }, [id, router])

    const loadOrder = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await api.orders.getById(id)
            setOrder(data)
        } catch (err: any) {
            console.error("Failed to load order:", err)
            setError(err.message || "Failed to load order details")
        } finally {
            setLoading(false)
        }
    }

    const getStatusIcon = (status: string) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return <CheckCircle2 className="w-6 h-6 text-green-600" />
            case "ready":
            case "out-for-delivery":
                return <Truck className="w-6 h-6 text-blue-600" />
            case "preparing":
            case "packed":
                return <Clock className="w-6 h-6 text-yellow-600" />
            default:
                return <Package className="w-6 h-6 text-muted-foreground" />
        }
    }

    const getStatusLabel = (status: string) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return "Order Delivered"
            case "ready":
                return "Ready for Delivery"
            case "out-for-delivery":
                return "Out for Delivery"
            case "packed":
                return "Order Packed"
            case "preparing":
                return "Preparing Order"
            case "confirmed":
                return "Order Confirmed"
            case "new":
                return "Order Placed"
            default:
                return status
        }
    }

    const getStatusBgColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return "bg-green-50 border-green-200"
            case "ready":
            case "out-for-delivery":
                return "bg-blue-50 border-blue-200"
            case "preparing":
            case "packed":
                return "bg-yellow-50 border-yellow-200"
            default:
                return "bg-muted border-border"
        }
    }

    const formatTime = (dateString?: string) => {
        if (!dateString) return null

        try {
            // Parse the UTC datetime string
            const date = new Date(dateString)

            // Check if date is valid
            if (isNaN(date.getTime())) {
                console.error("Invalid date:", dateString)
                return null
            }

            // Convert to IST (Indian Standard Time, UTC+5:30)
            return date.toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Asia/Kolkata'
            })
        } catch (error) {
            console.error("Error formatting time:", error, dateString)
            return null
        }
    }

    const getTimeline = () => {
        if (!order) return []

        const timeline = [
            { status: "Order Placed", time: formatTime(order.createdAt), completed: true },
        ]

        if (order.confirmedAt) {
            timeline.push({ status: "Confirmed", time: formatTime(order.confirmedAt), completed: true })
        }

        if (order.preparingAt) {
            timeline.push({ status: "Preparing", time: formatTime(order.preparingAt), completed: true })
        }

        if (order.readyAt) {
            timeline.push({ status: "Out for Delivery", time: formatTime(order.readyAt), completed: true })
        }

        if (order.deliveredAt) {
            timeline.push({ status: "Delivered", time: formatTime(order.deliveredAt), completed: true })
        }

        return timeline
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        )
    }

    if (error || !order) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
                <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
                    <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
                        <Link href="/orders" className="p-2 hover:bg-muted rounded-xl transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <h1 className="text-lg font-bold">Order Details</h1>
                    </div>
                </header>
                <div className="flex flex-col items-center justify-center py-20">
                    <p className="text-red-500 mb-4">{error || "Order not found"}</p>
                    <Button onClick={() => router.push("/orders")}>Back to Orders</Button>
                </div>
            </div>
        )
    }

    const timeline = getTimeline()

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
                    <Link href="/orders" className="p-2 hover:bg-muted rounded-xl transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-lg font-bold">Order Details</h1>
                        <p className="text-xs text-muted-foreground">{order.orderNumber || order.id}</p>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
                {/* Status Card */}
                <div className={`${getStatusBgColor(order.status)} border rounded-2xl p-4 sm:p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-current/10 rounded-xl">
                            {getStatusIcon(order.status)}
                        </div>
                        <div>
                            <h2 className="font-bold">{getStatusLabel(order.status)}</h2>
                            <p className="text-sm opacity-80">
                                {order.status.toLowerCase() === 'delivered' && order.deliveredAt
                                    ? `Delivered at ${formatTime(order.deliveredAt)}`
                                    : `Order placed at ${formatTime(order.createdAt)}`}
                            </p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-3">
                        {timeline.map((step, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${step.completed ? "bg-green-500" : "bg-gray-300"}`} />
                                <div className="flex-1 flex items-center justify-between">
                                    <span className={`text-sm ${step.completed ? "text-foreground" : "text-gray-500"}`}>
                                        {step.status}
                                    </span>
                                    <span className="text-xs opacity-70">{step.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Items */}
                <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-border/50">
                        <h3 className="font-semibold">Order Items</h3>
                    </div>
                    <div className="divide-y divide-border/50">
                        {order.items.map((item, index) => (
                            <div key={index} className="p-4 flex items-center gap-4">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-muted/30 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src="/placeholder.svg"
                                        alt={item.productName}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm truncate">{item.productName}</h4>
                                    <p className="text-xs text-muted-foreground">{item.quantity} x ₹{item.unitPrice}</p>
                                </div>
                                <p className="font-semibold text-sm">₹{item.totalPrice}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bill Details */}
                <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-4">
                    <h3 className="font-semibold mb-4">Bill Details</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Item Total</span>
                            <span>₹{order.itemsTotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Delivery Fee</span>
                            <span>₹{order.deliveryFee}</span>
                        </div>
                        {order.discount > 0 && (
                            <div className="flex justify-between text-green-600">
                                <span>Discount</span>
                                <span>-₹{order.discount}</span>
                            </div>
                        )}
                        <div className="border-t border-border/50 pt-3 flex justify-between font-bold">
                            <span>Total Paid</span>
                            <span>₹{order.grandTotal}</span>
                        </div>
                    </div>
                </div>

                {/* Delivery Address */}
                {order.deliveryAddress && (
                    <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-4">
                        <h3 className="font-semibold mb-3">Delivery Address</h3>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <MapPin className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">{order.deliveryAddress}</p>
                                {order.deliveryInstructions && (
                                    <p className="text-xs text-muted-foreground mt-1">Note: {order.deliveryInstructions}</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Help */}
                <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 rounded-xl gap-2 bg-transparent">
                        <Phone className="w-4 h-4" />
                        Call Support
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-xl gap-2 bg-transparent">
                        <MessageCircle className="w-4 h-4" />
                        Chat with Us
                    </Button>
                </div>
            </main>
        </div>
    )
}
