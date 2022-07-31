const About = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-0 text-4xl lg:text-6xl text-day font-bold">
        Ernesto Arellano
      </h1>
      <h2 className="mt-2 text-lg font-semibold text-day tracking-wide">
        Senior Front-End Engineer
      </h2>
      <div className="mt-8 leading-loose">
        <p className="text-base text-dawn">
          {`Hello, I'm a front-end engineer located out of San Diego, CA.`}{' '}
        </p>
        <p className="mt-4 text-base text-dawn">
          {`I've been building engaging, custom websites for a diverse group of clientele: unions, outdoor hospitality, aviation, etc, for over 10 years with tools like:`}{' '}
          <u className="text-day">PHP</u>, <u className="text-day">React</u>,{' '}
          <u className="text-day">JavaScript</u>,{' '}
          <u className="text-day">TypeScript</u>,{' '}
          <u className="text-day">Tailwind CSS</u>, etc.
        </p>
        <p className="mt-4 text-base text-dawn">
          {`My preferred stack is`}{' '}
          <a
            className="text-day underline"
            href="https://jamstack.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jamstack
          </a>{' '}
          {`based so tools like`} <u className="text-day">Next.js</u> {`and`}{' '}
          <u className="text-day">Sanity</u>
          {`, `}
          {`are preferred. I am more than comfortable with custom`}{' '}
          <u className="text-day">WordPress</u>{' '}
          {`development, but only if it's the right tool for the job.`}
        </p>
      </div>
    </div>
  )
}

export default About
