import Logo from 'components/header/Logo'
import Nav from 'components/header/Nav'

const Desktop = () => {
  return (
    <nav className="lg:flex lg:items-center lg:justify-between w-full">
      <Logo />
      <Nav />
    </nav>
  )
}

export default Desktop
