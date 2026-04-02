'use client'

import { useState, Suspense, lazy, useEffect, useRef } from 'react'

const DitheringShader = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

interface DitheringBackgroundProps {
  slideIndex: number
}

export function DitheringBackground({ slideIndex }: DitheringBackgroundProps) {
  const [speed, setSpeed] = useState(0)
  const prevSlideRef = useRef(slideIndex)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (prevSlideRef.current !== slideIndex) {
      prevSlideRef.current = slideIndex
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      setSpeed(0.8)
      timeoutRef.current = window.setTimeout(() => {
        setSpeed(0)
      }, 1200)
    }
  }, [slideIndex])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
          <DitheringShader
            colorBack="#09090B"
            colorFront="#29160C"
            shape="warp"
            type="4x4"
            speed={speed}
            className="size-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>
    </div>
  )
}
