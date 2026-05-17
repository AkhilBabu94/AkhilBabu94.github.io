import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { CSSProperties } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

function WordSpan({
  word,
  scrollYProgress,
  start,
  end,
}: {
  word: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollYProgress: any
  start: number
  end: number
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{' '}
    </motion.span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <WordSpan
          key={i}
          word={word}
          scrollYProgress={scrollYProgress}
          start={i / words.length}
          end={(i + 1) / words.length}
        />
      ))}
    </p>
  )
}
