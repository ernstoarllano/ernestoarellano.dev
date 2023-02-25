import { socialItems } from '@/config/social'

export default function Social() {
  return (
    <nav
      className="lg:fixed lg:bottom-0 lg:left-[60px] lg:w-5 py-12 lg:py-0"
      aria-orientation="vertical"
      role="menu"
    >
      <ul className="flex lg:flex-col items-center lg:items-start justify-center lg:justify-start space-x-3 lg:space-x-0 lg:space-y-6 lg:after:content-[''] lg:after:block lg:after:w-[2px] lg:after:h-[90px] lg:after:mx-auto lg:after:mt-6 lg:after:bg-sandstone">
        {socialItems.map((item, i) => (
          <li key={i}>
            <a
              className="inline-flex items-center"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-5 h-5 mr-2 fill-sandstone transition-all duration-500 hover:fill-dawn"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
