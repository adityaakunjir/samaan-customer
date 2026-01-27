"use client"

import { Search } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const searchTerms = ["milk", "bread", "eggs", "Coke", "chips", "fruits", "vegetables", "butter", "rice", "dal"]

export function SearchBar() {
  const [placeholder, setPlaceholder] = useState("Search for 'milk'...")
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const typewrite = useCallback(() => {
    let termIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId: NodeJS.Timeout

    const tick = () => {
      if (isFocused) {
        timeoutId = setTimeout(tick, 100)
        return
      }

      const currentTerm = searchTerms[termIndex]

      if (!isDeleting) {
        // Typing
        charIndex++
        setPlaceholder(`Search for '${currentTerm.slice(0, charIndex)}'...`)

        if (charIndex === currentTerm.length) {
          // Pause at end of word
          isDeleting = true
          timeoutId = setTimeout(tick, 1800)
          return
        }
      } else {
        // Deleting
        charIndex--
        setPlaceholder(`Search for '${currentTerm.slice(0, charIndex)}'...`)

        if (charIndex === 0) {
          // Move to next term
          isDeleting = false
          termIndex = (termIndex + 1) % searchTerms.length
          timeoutId = setTimeout(tick, 400)
          return
        }
      }

      timeoutId = setTimeout(tick, isDeleting ? 60 : 120)
    }

    timeoutId = setTimeout(tick, 1000) // Initial delay before starting

    return () => clearTimeout(timeoutId)
  }, [isFocused])

  useEffect(() => {
    const cleanup = typewrite()
    return cleanup
  }, [typewrite])

  return (
    <div className="relative">
      <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={isFocused ? "Search for products..." : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full pl-14 pr-5 py-4 bg-card 
          border border-[rgba(0,0,0,0.06)] 
          rounded-[18px] 
          shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08),0_2px_6px_-2px_rgba(0,0,0,0.04)]
          text-foreground text-body placeholder:text-muted-foreground 
          focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/30
          focus:shadow-[0_12px_20px_-4px_rgba(0,0,0,0.12),0_4px_8px_-2px_rgba(0,0,0,0.06)]
          hover:shadow-[0_6px_16px_-3px_rgba(0,0,0,0.1),0_3px_8px_-2px_rgba(0,0,0,0.05)]
          hover:border-[rgba(0,0,0,0.08)]
          transition-all duration-300"
      />
    </div>
  )
}
