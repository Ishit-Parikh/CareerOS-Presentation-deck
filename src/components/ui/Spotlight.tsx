'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Spotlight({ className = '' }: { className?: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      animate={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(245, 158, 11, 0.08), transparent 40%)`,
      }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0 }}
    />
  )
}

export function SpotlightCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-sm border border-border bg-surface ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
      {children}
    </div>
  )
}
