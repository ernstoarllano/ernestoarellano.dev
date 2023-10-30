import { debounce } from 'radash'
import { useEffect, useState } from 'react'

/**
 * Hook to detect scroll direction
 *
 * @returns {string} direction
 */
export function useDirection() {
  const [y, setY] = useState<number>(0)
  const [direction, setDirection] = useState<string>('none')

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY)

      if (window.scrollY !== 0) {
        if (y > window.scrollY) {
          setDirection('up')
        } else {
          setDirection('down')
        }
      } else {
        setDirection('none')
      }
    }

    window.addEventListener('scroll', debounce({ delay: 10 }, handleScroll))

    return () => {
      window.removeEventListener(
        'scroll',
        debounce({ delay: 10 }, handleScroll),
      )
    }
  })

  return { direction }
}
