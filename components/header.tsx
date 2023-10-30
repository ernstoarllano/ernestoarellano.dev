'use client'

import Link from 'next/link'

import { Nav } from '@/components/nav'

import { useDirection } from '@/hooks/use-direction'

import { cn } from '@/lib/utils'

/**
 * Component for displaying the header
 *
 * @returns {React.ReactElement} The header component
 */
export function Header() {
  const { direction } = useDirection()
  console.log(direction)

  const className = cn(
    'flex items-center justify-between fixed top-0 right-0 left-0 z-50 w-full max-w-6xl mx-auto py-10 transition-all duration-500 translate-y-0',
    {
      '-translate-y-full': direction === 'down',
    },
  )

  return (
    <header className={className}>
      <Link className="block w-12 h-12" href="/">
        <svg
          className="fill-transparent"
          viewBox="0 0 548 548"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="528"
            height="528"
            className="stroke-[60px] stroke-white"
          ></rect>
          <path
            d="M257.52 208.2V257.2H323.32V288.28H257.52V340.08H331.72V372H218.32V176.28H331.72V208.2H257.52Z"
            className="fill-white"
          ></path>
        </svg>
      </Link>
      <Nav />
    </header>
  )
}
