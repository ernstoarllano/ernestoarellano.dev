import { useEffect, useRef, useState } from 'react'

export const useElementOnScreen = () => {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState<boolean | false>(false)

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries

    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    })

    if (ref.current) observer.observe(ref.current)
  }, [ref])

  return { ref, isVisible }
}
