'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function VioLogo({ height = 32, showText = false }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // White logo for dark mode, teal logo for light mode (darker green on white)
  const logoSrc = !mounted
    ? '/logo-white.svg'
    : resolvedTheme === 'dark'
      ? '/logo-white.svg'
      : '/logo-teal.svg'

  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <img
        src={logoSrc}
        alt="Vio"
        style={{ height, width: 'auto' }}
      />
      {showText && (
        <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>VIO</span>
      )}
    </span>
  )
}
