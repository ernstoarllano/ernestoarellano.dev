import { AboutProps } from 'interfaces/About'

const About = ({ content }: AboutProps) => {
  return (
    <div className="flex flex-col">
      <h1>Ernesto Arellano</h1>
      <h3>Senior Full Stack Web Developer</h3>
      {content && (
        <div className="mt-8 leading-loose">
          <div
            className="text-sm leading-loose text-dawn space-y-6"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      )}
    </div>
  )
}

export default About
