import { Repo } from 'interfaces/Repo'

interface ReposProps {
  data: Repo[]
}

const Repos = ({ data }: ReposProps) => {
  return (
    <div className="flex flex-col space-y-3">
      {data.map((repo) => (
        <article
          key={repo.id}
          className="bg-dusk transition md:hover:scale-[1.1]"
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
            <h3 className="mt-2 mb-0 font-bold">{repo.name}</h3>
            <p className="mt-2 text-dawn">{repo.description}</p>
          </a>
        </article>
      ))}
    </div>
  )
}

export default Repos
