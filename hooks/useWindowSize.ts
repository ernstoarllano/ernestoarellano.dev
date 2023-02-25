import { debounce } from 'radash'
import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
    }

    handleWindowResize()

    window.addEventListener('resize', debounce({ delay: 10 }, handleWindowResize))

    return () => window.removeEventListener('resize', debounce({ delay: 10 }, handleWindowResize))
  })

  return { width }
}