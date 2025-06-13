'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export function useThemeSafe() {
  const [mounted, setMounted] = useState(false)
  const themeHook = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return {
      theme: 'light',
      setTheme: () => {},
      resolvedTheme: 'light',
      themes: ['light', 'dark'],
      systemTheme: 'light'
    }
  }

  return themeHook
} 