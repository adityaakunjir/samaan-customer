"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

export interface CartItem {
  id: number // Local cart ID
  name: string
  quantity: string
  price: number
  image: string
  count: number
  weight?: string
  productId?: string // Backend product GUID
  merchantId?: string // Backend merchant GUID
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "count">) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, count: number) => void
  clearCart: () => void
  getItemCount: (id: number) => number
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = "samaan-cart"

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY)
      if (stored) {
        setItems(JSON.parse(stored))
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error)
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error)
      }
    }
  }, [items, isLoaded])

  const addItem = useCallback((item: Omit<CartItem, "count">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, count: i.count + 1 } : i))
      }
      return [...prev, { ...item, count: 1 }]
    })
  }, [])

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: number, count: number) => {
    if (count <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== id))
    } else {
      setItems((prev) => prev.map((item) => (item.id === id ? { ...item, count } : item)))
    }
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const getItemCount = useCallback(
    (id: number) => {
      const item = items.find((i) => i.id === id)
      return item?.count || 0
    },
    [items],
  )

  const totalItems = items.reduce((sum, item) => sum + item.count, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemCount,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
