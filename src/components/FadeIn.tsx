import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const motionMap = {
  div: motion.div,
  span: motion.span,
  nav: motion.nav,
  section: motion.section,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  a: motion.a,
  ul: motion.ul,
  li: motion.li,
  footer: motion.footer,
  header: motion.header,
}

type MotionTag = keyof typeof motionMap

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  as?: MotionTag
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as = 'div',
}: FadeInProps) {
  const MotionEl = motionMap[as] ?? motion.div

  return (
    <MotionEl
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
    >
      {children}
    </MotionEl>
  )
}
