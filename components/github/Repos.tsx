import Repo from 'components/github/Repo'
import { ReposProps } from 'interfaces/GitHub'

const Repos = ({ repos }: ReposProps) => {
  return (
    <>
      {repos && (
        <div id="projects" className="flex flex-col space-y-3 group">
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
      )}
    </>
  )
}

export default Repos
