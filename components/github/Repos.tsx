import classNames from 'classnames'
import Repo from 'components/github/Repo'
import { useElementOnScreen } from 'hooks/useElementOnScreen'
import { ReposProps } from 'interfaces/interfaces'

const Repos = ({ repos }: ReposProps) => {
  const { ref, isVisible } = useElementOnScreen()

  const classes = classNames({
    active: isVisible,
  })

  return (
    <>
      {repos && (
        <section id="projects" className={`scroll-m-8 ${classes}`} ref={ref}>
          <div className="w-full lg:max-w-[900px] lg:mx-auto space-y-12 lg:space-y-24">
            <h3 className="section-title">
              <span className="mr-2 text-sandstone">03.</span>Projects
            </h3>
            <div className="grid lg:grid-cols-3 gap-3 group">
              {repos.map((repo) => (
                <Repo
                  key={repo.id}
                  url={repo.url}
                  homepageUrl={repo.homepageUrl}
                  primaryLanguage={repo.primaryLanguage}
                  name={repo.name}
                  description={repo.description}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Repos
