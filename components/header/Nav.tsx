const Nav = () => {
  return (
    <ol className="lg:flex lg:items-center lg:space-x-6">
      <li className="text-sand hover:text-dawn before:content-['01.'] before:pr-2 before:text-sandstone">
        <a href="#about">About</a>
      </li>
      <li className="text-sand hover:text-dawn before:content-['02.'] before:pr-2 before:text-sandstone">
        <a href="#experience">Experience</a>
      </li>
      <li className="text-sand hover:text-dawn before:content-['03.'] before:pr-2 before:text-sandstone">
        <a href="#projects">Projects</a>
      </li>
      <li className="text-sand hover:text-dawn before:content-['04.'] before:pr-2 before:text-sandstone">
        <a href="#blog">Blog</a>
      </li>
    </ol>
  )
}

export default Nav
