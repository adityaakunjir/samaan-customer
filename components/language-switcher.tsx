"use client"

import { useState } from "react"
import { Globe, Check, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/translations"

const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
]

export function LanguageSwitcher({ variant = "default" }: { variant?: "default" | "compact" }) {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find((l) => l.code === language) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 transition-colors ${
          variant === "compact"
            ? "p-2 hover:bg-muted rounded-xl"
            : "px-3 py-2 hover:bg-muted rounded-xl border border-border/50"
        }`}
      >
        <Globe className="w-4 h-4 text-muted-foreground" />
        {variant !== "compact" && (
          <>
            <span className="text-sm font-medium">{currentLang.nativeName}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border/50 rounded-xl shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-left">{lang.nativeName}</p>
                  <p className="text-xs text-muted-foreground text-left">{lang.name}</p>
                </div>
                {language === lang.code && <Check className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
