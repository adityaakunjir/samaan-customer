"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Edit2,
  Plus,
  Home,
  Briefcase,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"
import { getUser, removeToken } from "@/lib/api/client"

interface Address {
  id: string
  type: "home" | "office" | "other"
  label: string
  address: string
  isDefault?: boolean
}

interface UserData {
  name?: string
  fullName?: string
  FullName?: string  // Backend returns capitalized version
  email: string
  Email?: string     // Backend might return capitalized
  phone?: string
  Phone?: string     // Backend might return capitalized
  avatar?: string | null
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
]

const paymentMethods = [
  { id: "1", type: "upi", label: "Google Pay", value: "user@okaxis", isDefault: true },
  { id: "2", type: "card", label: "HDFC Card", value: "•••• •••• •••• 4532", isDefault: false },
]

export default function ProfilePage() {
  const router = useRouter()
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const [addresses, setAddresses] = useState<Address[]>(savedAddresses)
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showAddAddress, setShowAddAddress] = useState(false)
  const [editingAddress, setEditingAddress] = useState<Address | null>(null)

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = getUser()
    if (storedUser) {
      setUser(storedUser)
    } else {
      // Redirect to login if not authenticated
      router.push("/login?redirect=/profile")
    }
    setIsLoading(false)
  }, [router])

  // Get display name - prefer FullName (capitalized from backend), then fullName, then name, then email
  const getUserDisplayName = () => {
    if (!user) return ""
    return user.FullName || user.fullName || user.name || (user.email || user.Email || "").split("@")[0] || "User"
  }

  // Edit profile form state
  const [editName, setEditName] = useState("")
  const [editEmail, setEditEmail] = useState("")
  const [editPhone, setEditPhone] = useState("")

  // New address form state
  const [newAddressType, setNewAddressType] = useState<"home" | "office" | "other">("home")
  const [newAddressLabel, setNewAddressLabel] = useState("")
  const [newAddressText, setNewAddressText] = useState("")

  // Update form state when user loads
  useEffect(() => {
    if (user) {
      setEditName(getUserDisplayName())
      setEditEmail(user.email || "")
      setEditPhone(user.phone?.replace("+91 ", "") || "")
    }
  }, [user])

  const handleLogout = () => {
    removeToken()
    router.push("/login")
  }

  const handleSaveProfile = () => {
    // In a real app, this would save to the backend
    setShowEditProfile(false)
  }

  const handleSaveAddress = () => {
    if (editingAddress) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingAddress.id
            ? { ...addr, type: newAddressType, label: newAddressLabel, address: newAddressText }
            : addr,
        ),
      )
    } else {
      const newAddress: Address = {
        id: Date.now().toString(),
        type: newAddressType,
        label:
          newAddressLabel || (newAddressType === "home" ? "Home" : newAddressType === "office" ? "Office" : "Other"),
        address: newAddressText,
      }
      setAddresses((prev) => [...prev, newAddress])
    }
    setShowAddAddress(false)
    setEditingAddress(null)
    setNewAddressType("home")
    setNewAddressLabel("")
    setNewAddressText("")
  }

  const handleDeleteAddress = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id))
  }

  const handleSetDefaultAddress = (id: string) => {
    setAddresses((prev) => prev.map((addr) => ({ ...addr, isDefault: addr.id === id })))
  }

  const getAddressIcon = (type: "home" | "office" | "other") => {
    switch (type) {
      case "home":
        return <Home className="w-4 h-4" />
      case "office":
        return <Briefcase className="w-4 h-4" />
      default:
        return <MapPin className="w-4 h-4" />
    }
  }

  const menuItems = [
    { icon: Bell, label: t("header.notifications"), href: "/notifications" },
    { icon: Shield, label: t("privacy.title"), href: "/privacy" },
    { icon: HelpCircle, label: "Help & Support", href: "/terms" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background pb-8">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-muted rounded-xl transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-bold">Profile</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{getUserDisplayName()}</h2>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                  <Mail className="w-4 h-4" />
                  {user?.email || ""}
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-0.5">
                  <Phone className="w-4 h-4" />
                  {user?.phone || "Not set"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowEditProfile(true)}
              className="p-2 hover:bg-muted rounded-xl transition-colors"
            >
              <Edit2 className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Saved Addresses */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">{t("address.savedAddresses")}</h3>
            </div>
            <button
              onClick={() => {
                setEditingAddress(null)
                setNewAddressType("home")
                setNewAddressLabel("")
                setNewAddressText("")
                setShowAddAddress(true)
              }}
              className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              {t("address.addNew")}
            </button>
          </div>
          <div className="divide-y divide-border/50">
            {addresses.map((addr) => (
              <div key={addr.id} className="p-4 flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg flex-shrink-0 ${addr.type === "home"
                    ? "bg-blue-100 text-blue-600"
                    : addr.type === "office"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {getAddressIcon(addr.type)}
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
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => {
                        setEditingAddress(addr)
                        setNewAddressType(addr.type)
                        setNewAddressLabel(addr.label)
                        setNewAddressText(addr.address)
                        setShowAddAddress(true)
                      }}
                      className="text-xs text-primary font-medium hover:underline"
                    >
                      Edit
                    </button>
                    {!addr.isDefault && (
                      <>
                        <button
                          onClick={() => handleSetDefaultAddress(addr.id)}
                          className="text-xs text-muted-foreground font-medium hover:text-foreground"
                        >
                          Set as default
                        </button>
                        <button
                          onClick={() => handleDeleteAddress(addr.id)}
                          className="text-xs text-destructive font-medium hover:underline"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Payment Methods</h3>
            </div>
            <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Add New
            </button>
          </div>
          <div className="divide-y divide-border/50">
            {paymentMethods.map((method) => (
              <div key={method.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{method.label}</p>
                    <p className="text-xs text-muted-foreground">{method.value}</p>
                  </div>
                </div>
                {method.isDefault && (
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded-full">
                    Default
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between p-4 hover:bg-muted/50 transition-colors ${index !== menuItems.length - 1 ? "border-b border-border/50" : ""
                }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </Link>
          ))}
        </div>

        {/* Logout Button */}
        <Button
          variant="outline"
          onClick={handleLogout}
          className="w-full h-12 rounded-xl text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/30 gap-2 bg-transparent"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </main>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowEditProfile(false)} />
          <div className="relative w-full sm:max-w-md bg-background rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[85vh] overflow-hidden">
            <div className="sticky top-0 bg-background border-b border-border/50 px-4 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Edit Profile</h2>
              <button
                onClick={() => setShowEditProfile(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border-2 border-border bg-muted/30 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border-2 border-border bg-muted/30 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <div className="flex h-12 rounded-xl border-2 border-border focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 overflow-hidden bg-muted/30">
                  <div className="flex items-center px-4 bg-muted/50 border-r border-border">
                    <span className="text-sm font-semibold text-muted-foreground">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    className="flex-1 px-4 bg-transparent focus:outline-none"
                  />
                </div>
              </div>
              <Button onClick={handleSaveProfile} className="w-full h-12 rounded-xl font-semibold">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Address Modal */}
      {showAddAddress && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setShowAddAddress(false)
              setEditingAddress(null)
            }}
          />
          <div className="relative w-full sm:max-w-md bg-background rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[85vh] overflow-hidden">
            <div className="sticky top-0 bg-background border-b border-border/50 px-4 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">{editingAddress ? "Edit Address" : t("address.addNew")}</h2>
              <button
                onClick={() => {
                  setShowAddAddress(false)
                  setEditingAddress(null)
                }}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Address Type</label>
                <div className="flex gap-2">
                  {(["home", "office", "other"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setNewAddressType(type)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${newAddressType === type
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50"
                        }`}
                    >
                      {getAddressIcon(type)}
                      <span className="text-sm font-medium capitalize">{type}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Label (Optional)</label>
                <input
                  type="text"
                  value={newAddressLabel}
                  onChange={(e) => setNewAddressLabel(e.target.value)}
                  placeholder="e.g., Mom's House"
                  className="w-full h-12 px-4 rounded-xl border-2 border-border bg-muted/30 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Full Address</label>
                <textarea
                  value={newAddressText}
                  onChange={(e) => setNewAddressText(e.target.value)}
                  placeholder="Enter complete address with landmark"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-muted/30 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"
                />
              </div>
              <Button
                onClick={handleSaveAddress}
                disabled={!newAddressText.trim()}
                className="w-full h-12 rounded-xl font-semibold"
              >
                {editingAddress ? "Save Changes" : "Add Address"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
