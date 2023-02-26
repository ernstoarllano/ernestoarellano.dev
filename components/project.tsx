import Image from 'next/image'

import { ProjectProps } from '@/types/projects'

import { formatTags } from '@/utils/strings'
import { cn } from '@/utils/styles'

export default function Project({ project }: ProjectProps) {
  const repoPrivateClasses = cn({
    'cursor-not-allowed': project.private,
  })

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:grid-rows-4 space-y-reverse space-y-6 group">
      <div className="lg:col-start-1 lg:col-end-8 lg:group-odd:col-start-7 lg:group-odd:col-end-[-1] lg:row-start-1 lg:row-end-[-1] shadow-2xl">
        <Image
          className="w-full h-full object-cover"
          src={project.image}
          alt={project.title}
          width={680}
          height={380}
          loading="lazy"
        />
      </div>
      <div className="lg:col-start-7 lg:col-end-[-1] lg:group-odd:col-start-1 lg:group-odd:col-end-8 lg:row-start-1 lg:row-end-[-1] lg:flex lg:flex-col lg:justify-center lg:relative lg:z-40 lg:text-right lg:group-odd:text-left space-y-4 lg:space-y-8">
        <div className="lg:self-end lg:group-odd:self-start space-y-1">
          <span className="text-xs uppercase tracking-[3px]">
            {project.tag}
          </span>
          <h4 className="font-bold">{project.title}</h4>
        </div>
        <div className="lg:self-end lg:group-odd:self-start p-5 text-sm font-regular bg-dawn rounded-md shadow-2xl">
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <span className="lg:self-end lg:group-odd:self-start block text-xs text-sandstone tracking-wider">
          {formatTags(project.tags)}
        </span>
        {!project.private && (
          <div className="flex items-center lg:self-end lg:group-odd:self-start space-x-1">
            <a
              className={cn(repoPrivateClasses)}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-5 h-5 mr-2 fill-sandstone"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
            <a
              className={cn(repoPrivateClasses)}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-sandstone fill-transparent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
