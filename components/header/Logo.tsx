import Link from 'next/link'

const Logo = () => {
  return (
    <div className="relative">
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
              width="528"
              height="528"
              className="stroke-[40px] stroke-dawn"
            />
            <path
              d="M257.52 208.2V257.2H323.32V288.28H257.52V340.08H331.72V372H218.32V176.28H331.72V208.2H257.52Z"
              className="fill-dawn"
            />
          </svg>
        </a>
      </Link>
    </div>
  )
}

export default Logo
