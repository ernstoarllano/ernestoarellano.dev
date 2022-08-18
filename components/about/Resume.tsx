import Link from 'next/link'

const Resume = () => {
  return (
    <div
      className="lg:fixed lg:bottom-0 lg:right-[60px] writing-mode-rl"
      aria-orientation="vertical"
    >
      <Link href="/cv">
        <a className="lg:flex lg:items-center lg:w-5 lg:p-5 text-sm font-semibold text-charcoal tracking-widest uppercase transition-all duration-700 lg:bg-dawn lg:hover:pb-20 lg:hover:bg-sandstone">
          Resume
        </a>
      </Link>
    </div>
  )
}

export default Resume
