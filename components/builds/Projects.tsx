import classNames from 'classnames'
import Project from 'components/builds/Project'
import { useElementOnScreen } from 'hooks/useElementOnScreen'
import { ProjectsProps } from 'interfaces/interfaces'

const Projects = ({ projects }: ProjectsProps) => {
  const { ref, isVisible } = useElementOnScreen()

  const classes = classNames({
    active: isVisible,
  })

  return (
    <>
      {projects && (
        <section id="projects" className={`scroll-m-8 ${classes}`} ref={ref}>
          <div className="w-full lg:max-w-[1000px] lg:mx-auto space-y-12 lg:space-y-24">
            <h3 className="section-title">
              <span className="mr-2 text-sandstone">03.</span>Projects
            </h3>
            <div className="space-y-32">
              {projects.map((project) => (
                <Project
                  key={project.id}
                  tag={project.attributes.Tag}
                  title={project.attributes.Title}
                  description={project.attributes.Description}
                  thumbnail={project.attributes.Thumbnail.data.attributes.url}
                  website={project.attributes.Website}
                  tech={project.attributes.Tech}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Projects
