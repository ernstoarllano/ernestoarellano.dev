import { Repo } from 'interfaces/Repo'

interface ReposProps {
  data: Repo[]
}

const Repos = ({ data }: ReposProps) => {
  return (
    <div id="projects" className="flex flex-col space-y-3 group">
      {data.map((repo) => (
        <article
          key={repo.id}
          className="bg-dusk transition xl:group-hover:opacity-50 xl:hover:opacity-important xl:hover:scale-[1.1]"
          itemScope
          itemType="http://schema.org/CreativeWork"
        >
          <a
            className="block p-10"
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-[10px] font-bold uppercase tracking-[3px]">
              {repo.primaryLanguage.name}
            </span>
            <h2 className="mt-2 mb-0 text-2xl font-bold" itemProp="name">
              {repo.name}
            </h2>
            <p className="mt-2 text-sm text-dawn">{repo.description}</p>
          </a>
        </article>
      ))}
    </div>
  )
}

export default Repos
