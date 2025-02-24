'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/shadcn'

interface SwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  className?: string
  activeColor?: string    // Color when switch is on
  inactiveColor?: string  // Color when switch is off
}

function Switch(
  { 
    checked, 
    onCheckedChange, 
    className,
    activeColor = 'var(--foreground)',    // Default to system colors
    inactiveColor = 'var(--background)',  // Default to system colors
  }: SwitchProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  function handleClick() {
    onCheckedChange(!checked)
  }
  
  return (
    <button
      ref={ref}
      role="switch"
      aria-checked={checked}
      onClick={handleClick}
      style={{
        backgroundColor: checked ? activeColor : inactiveColor,
        borderColor: activeColor,
      }}
      className={cn(
        'relative h-6 w-11 rounded-full transition-colors duration-200',
        'border-2',
        className
      )}
    >
      <motion.span
        initial={false}
        animate={{
          left: checked ? 'calc(100% - 18px)' : '2px',
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          backgroundColor: checked ? inactiveColor : activeColor,
          borderColor: activeColor,
        }}
        className={cn(
          'absolute top-1/2 -translate-y-1/2',
          'block h-4 w-4 rounded-full border-2',
        )}
      />
    </button>
  )
}

const ForwardedSwitch = React.forwardRef<HTMLButtonElement, SwitchProps>(Switch)
ForwardedSwitch.displayName = 'Switch'

export { ForwardedSwitch as Switch }
