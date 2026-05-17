import { useRef, useState, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    setPos({ x: dx / strength, y: dy / strength })
  }

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    setActive(true)
    handleMouseMove(e)
  }

  function handleMouseLeave() {
    setActive(false)
    setPos({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        padding,
        margin: -padding,
        display: 'inline-block',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
