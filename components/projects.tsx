import { projects } from '@/data/projects'

/**
 * Component for displaying projects
 *
 * @returns {React.ReactElement} The projects component
 */
export function Projects() {
  return (
    <section id="projects" className="lg:py-32">
      <div className="w-full max-w-5xl mx-auto space-y-6">
        <h2 className="font-premier-league-bold text-2xl tracking-widest uppercase">
          Projects
        </h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="lg:grid lg:grid-cols-6 lg:gap-4">
              <div className="lg:col-span-1">
                <span className="font-thin opacity-70">{project.date}</span>
                <h3 className="font-premier-league-bold text-md">
                  {project.title}
                </h3>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <p className="text-lg">{project.description}</p>
                <div className="space-y-3">
                  <span className="font-premier-league-bold">
                    {project.stack}
                  </span>
                </div>
                <div className="lg:col-span-6 lg:h-96 bg-background rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
