import Link from 'next/link'

const Header = () => {
  return (
    <header className="lg:flex lg:items-center lg:fixed lg:top-0 lg:right-0 lg:left-0 lg:h-24 lg:px-14">
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
            <li
              before="01."
              className="text-sand before:content-[attr(before)] before:pr-2 before:text-sandstone"
            >
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li
              before="02."
              className="text-sand before:content-[attr(before)] before:pr-2 before:text-sandstone"
            >
              <Link href="/">
                <a>Experience</a>
              </Link>
            </li>
            <li
              before="03."
              className="text-sand before:content-[attr(before)] before:pr-2 before:text-sandstone"
            >
              <Link href="/">
                <a>Work</a>
              </Link>
            </li>
            <li
              before="04."
              className="text-sand before:content-[attr(before)] before:pr-2 before:text-sandstone"
            >
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  )
}

export default Header
