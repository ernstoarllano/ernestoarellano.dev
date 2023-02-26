'use client'

import { debounce } from 'radash'
import { useEffect, useState } from 'react'

import { HeaderProps } from '@/types/header'

import Logo from '@/components/logo'
import Nav from '@/components/nav'

import { useWindowSize } from '@/hooks/useWindowSize'
import { cn } from '@/utils/styles'

export default function Header({ showNav }: HeaderProps) {
  const [y, setY] = useState<number>(0)
  const [direction, setDirection] = useState<string>('none')

  const { width } = useWindowSize()
  const isDesktop = width > 1024

  const directionClasses = cn({
    'bg-spruce translate-y-0 shadow-2xl': direction === 'up',
    '-translate-y-full': direction === 'down',
  })

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
        debounce({ delay: 10 }, handleScroll)
      )
    }
  })

  return (
    <header
      className={cn(
        'lg:flex lg:items-center lg:justify-between fixed top-0 right-0 left-0 z-50 h-20 lg:h-24 px-4 lg:px-14 transition-all duration-500',
        directionClasses
      )}
    >
      <Logo />
      {showNav && isDesktop && <Nav />}
    </header>
  )
}
