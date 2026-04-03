import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SlideContent } from './components/SlideContent'
import { slides } from './data/slides'
import { DitheringBackground } from './components/ui/DitheringBackground'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHoveringNav, setIsHoveringNav] = useState(false)

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide((prev) => prev + 1)
    }
  }, [currentSlide])

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide((prev) => prev - 1)
    }
  }, [currentSlide])

  const goToSlide = useCallback((idx: number) => {
    if (idx !== currentSlide) {
      setDirection(idx > currentSlide ? 1 : -1)
      setCurrentSlide(idx)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goToPrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrev])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <DitheringBackground slideIndex={currentSlide} />
      
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6">
        <main className="flex flex-1 items-center py-8 sm:py-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.1, 0.25, 1],
                scale: { duration: 0.35 }
              }}
              className="w-full"
            >
              <SlideContent slide={slides[currentSlide]} />
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="flex h-14 items-center justify-between border-t border-border/60 pb-2 sm:h-16 sm:pb-0">
          <button
            onClick={goToPrev}
            onMouseEnter={() => setIsHoveringNav(true)}
            onMouseLeave={() => setIsHoveringNav(false)}
            disabled={currentSlide === 0}
            className="group flex items-center gap-1.5 rounded-sm border border-border bg-surface px-3 py-2 text-xs text-muted-foreground transition-all hover:border-primary/40 hover:bg-surface-2 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <motion.span
              animate={{ x: isHoveringNav && currentSlide > 0 ? -4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </motion.span>
            <span className="hidden sm:inline">Prev</span>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToSlide(idx)}
                onMouseEnter={() => setIsHoveringNav(true)}
                onMouseLeave={() => setIsHoveringNav(false)}
                className="group relative"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <motion.div
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'w-6 bg-primary'
                      : 'w-1.5 bg-border group-hover:bg-muted-foreground/40'
                  }`}
                  whileHover={{ width: idx === currentSlide ? '1.5rem' : '0.75rem' }}
                  transition={{ duration: 0.2 }}
                />
                {idx !== currentSlide && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-xs bg-surface-2 px-2 py-1 font-mono text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    {idx + 1}
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          <button
            onClick={goToNext}
            onMouseEnter={() => setIsHoveringNav(true)}
            onMouseLeave={() => setIsHoveringNav(false)}
            disabled={currentSlide === slides.length - 1}
            className="group flex items-center gap-1.5 rounded-sm border border-border bg-surface px-3 py-2 text-xs text-muted-foreground transition-all hover:border-primary/40 hover:bg-surface-2 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <span className="hidden sm:inline">Next</span>
            <motion.span
              animate={{ x: isHoveringNav && currentSlide < slides.length - 1 ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </motion.span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default App
