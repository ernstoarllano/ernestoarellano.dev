import { JobProps } from '@/types/jobs'

import { useElementOnScreen } from '@/hooks/useElementOnScreen'
import { cn } from '@/utils/styles'

export default function Job({ job }: JobProps) {
  const { ref, isVisible } = useElementOnScreen()

  const jobActiveClasses = cn({
    'opacity-100': isVisible,
  })

  const jobHeaderActiveClasses = cn({
    'sm:before:scale-100': isVisible,
  })

  return (
    <article
      className={cn(
        'flex flex-col sm:flex-row sm:justify-between sm:even:flex-row-reverse relative opacity-0 transition-all duration-700',
        jobActiveClasses
      )}
      ref={ref}
    >
      <header
        className={cn(
          "sm:basis-[300px] order-2 sm:order-1 space-y-6 sm:before:content-[''] sm:before:block sm:before:absolute sm:before:top-0 sm:before:inset-x-0 sm:before:w-10 sm:before:h-10 sm:before:mx-auto sm:before:bg-dawn sm:before:scale-0 sm:before:transition-all sm:before:duration-700 sm:before:rotate-45",
          jobHeaderActiveClasses
        )}
      >
        <h4 className="font-bold">{job.title}</h4>
        <span className="text-xs uppercase tracking-[3px]">{job.company}</span>
        <ul
          className="space-y-6"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />
      </header>
      <footer className="sm:basis-[300px] sm:self-start order-1 sm:order-2 sm:mt-2 sm:text-center">
        <time className="text-sm font-bold">{job.date}</time>
      </footer>
    </article>
  )
}
