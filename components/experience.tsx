import { jobs } from '@/data/jobs'

import { Blob } from '@/components/blob'

/**
 * Component for displaying work experience
 *
 * @returns {React.ReactElement} The work experience component
 */
export function Experience() {
  return (
    <section id="experience" className="lg:py-32">
      <div className="w-full max-w-5xl mx-auto space-y-6">
        <h2 className="font-premier-league-bold text-2xl tracking-widest uppercase">
          Experience
        </h2>
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
          {jobs.map((job, index) => (
            <div key={index} className="relative group">
              <h3 className="font-premier-league-bold text-lg">
                {job.company}
              </h3>
              <p className="text-lg">{job.position}</p>
              <span className="font-thin opacity-70">{job.date}</span>
              <div className="absolute -top-[130px] bottom-0 left-0 -z-10 right-0 h-96 blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-75">
                <Blob />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
