'use client'

import { motion } from 'framer-motion'

interface IntroBoxProps {
  children: React.ReactNode
  className?: string
}

export function IntroBox({ children, className = '' }: IntroBoxProps) {
  return (
    <motion.div 
      className={`p-6 rounded-sm border border-border bg-surface/80 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeaderProps {
  label: string
  className?: string
  justify?: 'start' | 'center' | 'between'
}

export function SectionHeader({ label, className = '', justify = 'start' }: SectionHeaderProps) {
  const justifyClass = {
    start: 'justify-start',
    center: 'justify-center',
    between: 'justify-between',
  }[justify]
  
  return (
    <div className={`flex items-center gap-3 ${justifyClass} ${className}`}>
      <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-primary/40" />
      <span className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary">
        {label}
      </span>
      <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  )
}

interface CardBoxProps {
  children: React.ReactNode
  className?: string
  borderColor?: string
  borderOpacity?: string
}

export function CardBox({ 
  children, 
  className = '',
  borderColor = 'border-border',
  borderOpacity = ''
}: CardBoxProps) {
  return (
    <motion.div 
      className={`rounded-sm border ${borderColor} ${borderOpacity} bg-surface p-5 ${className}`}
    >
      {children}
    </motion.div>
  )
}
