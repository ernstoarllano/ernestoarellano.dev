import { ExperienceProps } from 'interfaces/Experience'

const Experience = ({ jobs }: ExperienceProps) => {
  return (
    <div id="jobs" className="space-y-6">
      <h2 className="mt-2 mb-0 text-2xl font-semibold">Experience</h2>
      {jobs && (
        <div className="flex flex-col space-y-3">
          {jobs.map((job) => (
            <article key={job.id} className="p-10 bg-dusk space-y-6">
              <header>
                <span className="text-[10px] font-bold uppercase tracking-[3px]">
                  {job.company} - {job.location}
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="mb-0 mr-2 xl:mr-0 text-md font-bold">
                    {job.title}
                  </h4>
                  <span className="flex flex-grow sm:flex-grow-0 basis-36 sm:basis-auto text-sm text-dawn">
                    {job.date}
                  </span>
                </div>
              </header>
              <ul
                className="space-y-6"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default Experience
