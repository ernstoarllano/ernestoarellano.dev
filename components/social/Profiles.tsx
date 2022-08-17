import { Profile } from 'data/profiles'

interface ProfilesProps {
  profiles: Profile[]
}

const Profiles = ({ profiles }: ProfilesProps) => {
  return (
    <>
      {profiles && (
        <div
          className="lg:fixed lg:bottom-0 lg:left-[60px] lg:w-5"
          aria-orientation="vertical"
        >
          <ul className="lg:flex lg:flex-col lg:space-y-6 lg:after:content-[''] lg:after:block lg:after:w-[2px] lg:after:h-[90px] lg:after:mx-auto lg:after:mt-6 lg:after:bg-sandstone">
            {profiles.map((profile) => (
              <li key={profile.id}>
                <a
                  className="inline-flex items-center"
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="fill-sandstone transition-all duration-500 hover:fill-dawn"
                    dangerouslySetInnerHTML={{ __html: profile.icon }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Profiles
