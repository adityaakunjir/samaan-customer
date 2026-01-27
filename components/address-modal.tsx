"use client"

import { useState } from "react"
import { X, MapPin, Plus, Home, Briefcase, Check, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Address {
  id: string
  type: "home" | "office" | "other"
  label: string
  address: string
  isDefault?: boolean
}

interface AddressModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedAddress: Address
  onSelectAddress: (address: Address) => void
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

export function AddressModal({ open, onOpenChange, selectedAddress, onSelectAddress }: AddressModalProps) {
  const [addresses] = useState<Address[]>(savedAddresses)
  const [isLocating, setIsLocating] = useState(false)

  if (!open) return null

  const handleUseCurrentLocation = () => {
    setIsLocating(true)
    // Simulate getting location
    setTimeout(() => {
      setIsLocating(false)
      const currentLocationAddress: Address = {
        id: "current",
        type: "other",
        label: "Current Location",
        address: "Detected location: Koregaon Park, Pune",
      }
      onSelectAddress(currentLocationAddress)
      onOpenChange(false)
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
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => onOpenChange(false)} />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-background rounded-t-3xl sm:rounded-2xl shadow-2xl animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border/50 px-4 py-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Select Delivery Address</h2>
          <button onClick={() => onOpenChange(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh]">
          {/* Use Current Location */}
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
                {isLocating ? "Detecting location..." : "Use Current Location"}
              </p>
              <p className="text-xs text-muted-foreground">Enable location for accurate delivery</p>
            </div>
          </button>

          {/* Saved Addresses */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Saved Addresses</p>
            <div className="space-y-2">
              {addresses.map((addr) => (
                <button
                  key={addr.id}
                  onClick={() => {
                    onSelectAddress(addr)
                    onOpenChange(false)
                  }}
                  className={`w-full p-4 rounded-xl border-2 transition-all flex items-start gap-3 text-left ${selectedAddress.id === addr.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                    }`}
                >
                  <div
                    className={`p-2 rounded-lg ${addr.type === "home"
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

          {/* Add New Address */}
          <Button variant="outline" className="w-full h-12 rounded-xl border-dashed gap-2 bg-transparent">
            <Plus className="w-4 h-4" />
            Add New Address
          </Button>
        </div>
      </div>
    </div>
  )
}
