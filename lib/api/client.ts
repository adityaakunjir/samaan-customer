// API Client for .NET Backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7289/api"

// Token management
export const getToken = (): string | null => {
  if (typeof window === "undefined") return null
  return localStorage.getItem("authToken")
}

export const setToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", token)
  }
}

export const removeToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken")
    localStorage.removeItem("user")
  }
}

export const getUser = () => {
  if (typeof window === "undefined") return null
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

export const setUser = (user: any): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user))
  }
}

// API fetch wrapper
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const token = getToken()

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  }

  if (token) {
    ;(headers as Record<string, string>)["Authorization"] = `Bearer ${token}`
  }

  const url = `${API_BASE_URL}${endpoint}`

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const errorText = await response.text()
      let errorMessage = "Request failed"
      try {
        const errorJson = JSON.parse(errorText)
        errorMessage = errorJson.message || errorJson.title || errorJson.error || errorMessage
      } catch {
        errorMessage = errorText || errorMessage
      }
      throw new Error(errorMessage)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("API Error:", error)
    throw error
  }
}

// Auth API
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await fetchAPI("/Auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })

    if (response.success && response.token) {
      setToken(response.token)
      setUser(response.user)
    }

    return response
  },

  register: async (data: {
    email: string
    password: string
    fullName: string
    phone?: string
    role: string
  }) => {
    const response = await fetchAPI("/Auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    })

    if (response.success && response.token) {
      setToken(response.token)
      setUser(response.user)
    }

    return response
  },

  logout: () => {
    removeToken()
  },

  isAuthenticated: () => {
    return !!getToken()
  },

  getCurrentUser: () => {
    return getUser()
  },

  googleLogin: async (idToken: string) => {
    const response = await fetchAPI("/Auth/google", {
      method: "POST",
      body: JSON.stringify({ idToken }),
    })

    if (response.success && response.token) {
      setToken(response.token)
      setUser(response.user)
    }

    return response
  },
}

// Products API
export const productsAPI = {
  getAll: () => fetchAPI("/Products"),
  getById: (id: string) => fetchAPI(`/Products/${id}`),
  getByMerchant: (merchantId: string) => fetchAPI(`/Products/merchant/${merchantId}`),
  search: (query: string) => fetchAPI(`/Products/search?q=${encodeURIComponent(query)}`),
  getByCategory: (category: string) => fetchAPI(`/Products/category/${encodeURIComponent(category)}`),
}

// Merchants API
export const merchantsAPI = {
  getAll: () => fetchAPI("/Merchants"),
  getById: (id: string) => fetchAPI(`/Merchants/${id}`),
  getProducts: (id: string) => fetchAPI(`/Merchants/${id}/products`),
  getNearby: (city: string) => fetchAPI(`/Merchants/nearby?city=${encodeURIComponent(city)}`),
}

// Orders API
export const ordersAPI = {
  getMyOrders: () => fetchAPI("/Orders"),
  getById: (id: string) => fetchAPI(`/Orders/${id}`),
  create: (order: {
    merchantId: string
    itemsTotal: number
    deliveryFee?: number
    discount?: number
    paymentMethod?: string
    deliveryAddress?: string
    deliveryInstructions?: string
    items: Array<{ productId: string; quantity: number }>
  }) =>
    fetchAPI("/Orders", {
      method: "POST",
      body: JSON.stringify(order),
    }),
}

export const api = {
  auth: authAPI,
  products: productsAPI,
  merchants: merchantsAPI,
  orders: ordersAPI,
}
