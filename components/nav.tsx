export default function Nav() {
  return (
    <nav className="lg:flex lg:items-center lg:justify-between">
      <ol className="lg:flex lg:items-center lg:space-x-6">
        <li className="text-sm font-medium leading-relaxed text-sand transition-colors duration-700 hover:text-dawn before:content-['01.'] before:pr-2 before:text-sandstone">
          <a href="#about">About</a>
        </li>
        <li className="text-sm font-medium leading-relaxed text-sand transition-colors duration-700 hover:text-dawn before:content-['02.'] before:pr-2 before:text-sandstone">
          <a href="#experience">Experience</a>
        </li>
        <li className="text-sm font-medium leading-relaxed text-sand transition-colors duration-700 hover:text-dawn before:content-['03.'] before:pr-2 before:text-sandstone">
          <a href="#projects">Projects</a>
        </li>
      </ol>
    </nav>
  )
}
