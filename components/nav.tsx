import { navItems } from '@/config/nav'

export default function Nav() {
  return (
    <nav className="lg:flex lg:items-center lg:justify-between">
      <ol className="lg:flex lg:items-center lg:space-x-6">
        {navItems.map((item, i) => (
          <li
            key={i}
            className="text-sand hover:text-dawn before:content-['01.'] before:pr-2 before:text-sandstone"
          >
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
