"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, Tag, Truck, Clock, CheckCircle2, Sparkles, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import { api, authAPI, getUser } from "@/lib/api/client"

type NotificationItem = {
  id: string
  type: "order" | "offer" | "delivery" | "restock" | "reminder"
  title: string
  message: string
  time: string
  read: boolean
  icon: any
  color: string
  bgColor: string
  createdAt: string
}

function statusToNotification(statusRaw: string) {
  const status = (statusRaw || "").toLowerCase()

  if (status === "delivered") {
    return {
      title: "Order Delivered!",
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-50",
    }
  }

  if (status === "in-transit" || status === "out-for-delivery") {
    return {
      title: "Order On The Way",
      icon: Truck,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    }
  }

  if (status === "preparing" || status === "packed" || status === "ready" || status === "confirmed") {
    return {
      title: "Order Update",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    }
  }

  return {
    title: "Order Placed",
    icon: Tag,
    color: "text-primary",
    bgColor: "bg-primary/10",
  }
}

function formatTime(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ""
  return d.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function NotificationsPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const user = useMemo(() => getUser(), [])
  const storageKey = useMemo(() => {
    const id = user?.id || user?.Id
    return id ? `notifications:${id}` : "notifications:anonymous"
  }, [user])

  const [notificationList, setNotificationList] = useState<NotificationItem[]>([])

  useEffect(() => {
    if (!authAPI.isAuthenticated()) return
    const raw = typeof window !== "undefined" ? localStorage.getItem(storageKey) : null
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) setNotificationList(parsed)
      } catch {
        setNotificationList([])
      }
    }
  }, [storageKey])

  useEffect(() => {
    if (!authAPI.isAuthenticated()) return

    const syncFromOrders = async () => {
      try {
        const data = await api.orders.getMyOrders()
        const orders = Array.isArray(data) ? data : []

        setNotificationList((prev) => {
          const prevById = new Map(prev.map((n) => [n.id, n]))
          const next: NotificationItem[] = [...prev]

          for (const o of orders) {
            const orderId = (o?.id || o?.Id) as string | undefined
            if (!orderId) continue

            const orderNumber = (o?.orderNumber || o?.OrderNumber || "") as string
            const status = (o?.status || o?.Status || "new") as string
            const createdAt = (o?.updatedAt || o?.UpdatedAt || o?.createdAt || o?.CreatedAt || new Date().toISOString()) as string

            const notifId = `${orderId}:${String(status).toLowerCase()}`
            if (prevById.has(notifId)) continue

            const meta = statusToNotification(status)
            const message = orderNumber
              ? `Your order ${orderNumber} status is now ${String(status).toLowerCase()}.`
              : `Your order status is now ${String(status).toLowerCase()}.`

            next.unshift({
              id: notifId,
              type: "order",
              title: meta.title,
              message,
              time: formatTime(createdAt),
              read: false,
              icon: meta.icon,
              color: meta.color,
              bgColor: meta.bgColor,
              createdAt,
            })
          }

          const sorted = next
            .slice()
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 50)

          if (typeof window !== "undefined") {
            localStorage.setItem(storageKey, JSON.stringify(sorted))
          }

          return sorted
        })
      } catch {
        // ignore
      }
    }

    syncFromOrders()
  }, [storageKey])

  const markAllAsRead = () => {
    setNotificationList((prev) => {
      const next = prev.map((n) => ({ ...n, read: true }))
      if (typeof window !== "undefined") localStorage.setItem(storageKey, JSON.stringify(next))
      return next
    })
  }

  const deleteNotification = (id: string) => {
    setNotificationList((prev) => {
      const next = prev.filter((n) => n.id !== id)
      if (typeof window !== "undefined") localStorage.setItem(storageKey, JSON.stringify(next))
      return next
    })
  }

  const unreadCount = notificationList.filter((n) => !n.read).length

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-muted rounded-xl transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-lg font-bold">{t("notifications.title")}</h1>
              {unreadCount > 0 && <p className="text-xs text-muted-foreground">{unreadCount} unread</p>}
            </div>
          </div>
          {unreadCount > 0 && (
            <button onClick={markAllAsRead} className="text-sm text-primary font-medium hover:underline">
              {t("notifications.markAllRead")}
            </button>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {notificationList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
              <Bell className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold mb-2">{t("notifications.empty")}</h2>
            <p className="text-muted-foreground">{t("notifications.emptySubtitle")}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notificationList.map((notification) => {
              const Icon = notification.icon
              return (
                <div
                  key={notification.id}
                  className={`relative bg-card rounded-2xl border border-border/50 shadow-sm p-4 transition-all hover:shadow-md ${
                    !notification.read ? "border-l-4 border-l-primary" : ""
                  }`}
                >
                  <div className="flex gap-4">
                    <div className={`p-2.5 rounded-xl ${notification.bgColor} flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${notification.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3
                            className={`font-semibold text-sm ${!notification.read ? "text-foreground" : "text-muted-foreground"}`}
                          >
                            {notification.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">{notification.message}</p>
                          <p className="text-xs text-muted-foreground/70 mt-2">{notification.time}</p>
                        </div>
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-1.5 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
                        >
                          <X className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {!notification.read && <span className="absolute top-4 right-12 w-2 h-2 bg-primary rounded-full" />}
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
