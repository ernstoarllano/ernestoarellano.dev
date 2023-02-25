'use client'

import { jobs } from '@/config/jobs'

import Job from '@/components/job'

import { useElementOnScreen } from '@/hooks/useElementOnScreen'
import { cn } from '@/utils/styles'

export default function Experience() {
  const { ref, isVisible } = useElementOnScreen()

  const titleActiveClasses = cn({
    'after:w-[300px] after:bg-sandstone': isVisible,
  })

  const timelineActiveClasses = cn({
    'sm:before:h-full sm:before:bg-sandstone': isVisible,
  })

  const job = {
    title: 'Senior Full Stack Engineer',
    company: 'Dispel',
    description: '',
    date: '2021 - Present',
  }

  return (
    <section id="experience" className="scroll-m-8" ref={ref}>
      <div className="w-full lg:max-w-[700px] lg:mx-auto space-y-8 lg:space-y-24">
        <h3
          className={cn(
            `flex items-center text-sm tracking-widest after:content-[''] after:block after:w-0 after:h-[2px] after:ml-6 after:bg-transparent after:transition-all after:duration-700`,
            titleActiveClasses
          )}
        >
          <span className="mr-2 text-sandstone">02.</span>Experience
        </h3>
        <div
          className={cn(
            "relative lg:py-12 space-y-12 sm:space-y-24 sm:before:content-[''] sm:before:block sm:before:absolute sm:before:top-0 sm:before:inset-x-0 sm:before:w-[2px] sm:before:h-0 sm:before:mx-auto sm:before:bg-transparent sm:before:transition-all sm:before:duration-1000",
            timelineActiveClasses
          )}
        >
          {jobs.map((job, i) => (
            <Job key={i} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
