import { useEffect, useRef, useState } from 'react'

export const useElementOnScreen = (
  options: Record<string, any> = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
) => {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries

    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options)

    if (ref.current) observer.observe(ref.current)
  }, [ref])

  return { ref, isVisible }
}