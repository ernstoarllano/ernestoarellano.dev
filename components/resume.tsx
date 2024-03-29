import Link from 'next/link'

export default function Resume() {
  return (
    <div
      className="lg:fixed lg:bottom-0 lg:right-[60px] writing-mode-rl"
      aria-orientation="vertical"
    >
      <Link
        className="lg:flex lg:items-center lg:w-5 lg:p-5 text-sm font-semibold text-charcoal tracking-widest uppercase transition-all duration-700 lg:bg-dawn lg:hover:pb-20 lg:hover:bg-sandstone"
        href="/cv"
      >
        Resume
      </Link>
    </div>
  )
}
