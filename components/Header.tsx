import classNames from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [y, setY] = useState<number>(0)
  const [direction, setDirection] = useState<string>('')

  const classes = classNames({
    down: direction === 'down',
    up: direction === 'up',
  })

  useEffect(() => {
    setY(window.scrollY)

    const handleScroll = () => {
      setY(window.scrollY)

      if (window.scrollY !== 0) {
        if (y > window.scrollY) {
          setDirection('up')
        } else if (y < window.scrollY) {
          setDirection('down')
        }
      } else {
        setDirection('')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [y])

  return (
    <header className={`header ${classes}`}>
      <nav className="lg:flex lg:items-center lg:justify-between w-full">
        <div>
          <Link href="/">
            <a className="block w-10 h-10">
              <svg
                viewBox="0 0 548 548"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                className="fill-transparent"
              >
                <rect
                  x="10"
                  y="10"
                  className="w-[528px] h-[528px] stroke-[40px] stroke-dawn"
                />
                <path
                  d="M257.52 208.2V257.2H323.32V288.28H257.52V340.08H331.72V372H218.32V176.28H331.72V208.2H257.52Z"
                  className="fill-dawn"
                />
              </svg>
            </a>
          </Link>
        </div>
        <div className="lg:flex lg:items-center lg:space-x-6">
          <ol className="lg:flex lg:items-center lg:space-x-6">
            <li className="text-sand before:content-['01.'] before:pr-2 before:text-sandstone">
              <a href="#about">About</a>
            </li>
            <li className="text-sand before:content-['02.'] before:pr-2 before:text-sandstone">
              <a href="#experience">Experience</a>
            </li>
            <li className="text-sand before:content-['03.'] before:pr-2 before:text-sandstone">
              <a href="#projects">Projects</a>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  )
}

export default Header
