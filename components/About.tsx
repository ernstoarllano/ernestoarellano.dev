import { AboutProps } from 'interfaces/About'

const About = ({ content }: AboutProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-0 text-4xl lg:text-6xl text-day font-bold">
        Ernesto Arellano
      </h1>
      <h3 className="mt-2 text-lg font-light text-day tracking-wide">
        Senior Full-Stack Developer
      </h3>
      <div className="mt-8 leading-loose">
        <div
          className="text-sm leading-loose text-dawn space-y-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default About
