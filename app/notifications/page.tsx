"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell, Tag, Truck, Clock, CheckCircle2, Sparkles, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

const notifications = [
  {
    id: 1,
    type: "delivery",
    title: "Order Delivered!",
    message: "Your order #ORD-12345 has been delivered successfully.",
    time: "2 mins ago",
    read: false,
    icon: CheckCircle2,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: 2,
    type: "offer",
    title: "Flash Sale Live!",
    message: "Get 30% off on fresh vegetables. Limited time offer!",
    time: "1 hour ago",
    read: false,
    icon: Tag,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 3,
    type: "order",
    title: "Order Shipped",
    message: "Your order #ORD-12344 is on the way. Track it now!",
    time: "3 hours ago",
    read: true,
    icon: Truck,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 4,
    type: "restock",
    title: "Back in Stock!",
    message: "Organic Spinach is back in stock. Order now before it's gone!",
    time: "Yesterday",
    read: true,
    icon: Sparkles,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 5,
    type: "reminder",
    title: "Restock Reminder",
    message: "Running low on milk? Time to reorder your daily essentials.",
    time: "2 days ago",
    read: true,
    icon: Clock,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
]

export default function NotificationsPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const [notificationList, setNotificationList] = useState(notifications)

  const markAllAsRead = () => {
    setNotificationList((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotificationList((prev) => prev.filter((n) => n.id !== id))
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
