import classNames from 'classnames'
import Desktop from 'components/header/Desktop'
import Mobile from 'components/header/Mobile'
import { useWindowSize } from 'hooks/useWindowSize'
import { useEffect, useState } from 'react'

const Header = () => {
  const { width } = useWindowSize()
  const [y, setY] = useState<number>(0)
  const [direction, setDirection] = useState<string>('')
  const isDesktop = width >= 1024

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
      {isDesktop ? <Desktop /> : <Mobile />}
    </header>
  )
}

export default Header
