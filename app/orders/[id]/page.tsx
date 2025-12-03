"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, MapPin, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const orderDetails: Record<string, any> = {
  "ORD-12345": {
    id: "ORD-12345",
    date: "Today, 2:30 PM",
    status: "delivered",
    total: 450,
    subtotal: 425,
    deliveryFee: 25,
    items: [
      { name: "Amul Taaza Milk", quantity: "2 x 500ml", price: 60, image: "/amul-milk-packet-white-background.jpg" },
      { name: "Brown Bread", quantity: "1 x 400g", price: 45, image: "/brown-bread-loaf-white-background.jpg" },
      { name: "Farm Fresh Eggs", quantity: "1 x 6 pcs", price: 60, image: "/farm-eggs-brown-white-background.jpg" },
    ],
    deliveryTime: "12 mins",
    deliveryAddress: "402, Green Valley Apartments, Sector 12, Pune",
    deliveryPerson: {
      name: "Rahul Kumar",
      phone: "+91 98765 43210",
    },
    timeline: [
      { status: "Order Placed", time: "2:30 PM", completed: true },
      { status: "Confirmed", time: "2:31 PM", completed: true },
      { status: "Preparing", time: "2:35 PM", completed: true },
      { status: "Out for Delivery", time: "2:38 PM", completed: true },
      { status: "Delivered", time: "2:42 PM", completed: true },
    ],
  },
}

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const order = orderDetails[id] || orderDetails["ORD-12345"]

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
            <p className="text-xs text-muted-foreground">{order.id}</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Status Card */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/20 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="font-bold text-green-800">Order Delivered</h2>
              <p className="text-sm text-green-600">Delivered in {order.deliveryTime}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-3">
            {order.timeline.map((step: any, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${step.completed ? "bg-green-500" : "bg-gray-300"}`} />
                <div className="flex-1 flex items-center justify-between">
                  <span className={`text-sm ${step.completed ? "text-green-800" : "text-gray-500"}`}>
                    {step.status}
                  </span>
                  <span className="text-xs text-green-600">{step.time}</span>
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
            {order.items.map((item: any, index: number) => (
              <div key={index} className="p-4 flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-muted/30 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.quantity}</p>
                </div>
                <p className="font-semibold text-sm">₹{item.price}</p>
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
              <span>₹{order.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span>₹{order.deliveryFee}</span>
            </div>
            <div className="border-t border-border/50 pt-3 flex justify-between font-bold">
              <span>Total Paid</span>
              <span>₹{order.total}</span>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-4">
          <h3 className="font-semibold mb-3">Delivery Address</h3>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">{order.deliveryAddress}</p>
          </div>
        </div>

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
