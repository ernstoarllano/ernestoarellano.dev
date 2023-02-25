'use client'

import Project from '@/components/project'

import { useElementOnScreen } from '@/hooks/useElementOnScreen'
import { cn } from '@/utils/styles'

export default function Projects() {
  const { ref, isVisible } = useElementOnScreen()

  const titleActiveClasses = cn({
    'after:w-[300px] after:bg-sandstone': isVisible,
  })

  return (
    <section id="projects" className="scroll-m-8" ref={ref}>
      <div className="w-full lg:max-w-[1000px] lg:mx-auto space-y-12 lg:space-y-24">
        <h3
          className={cn(
            `flex items-center text-sm tracking-widest after:content-[''] after:block after:w-0 after:h-[2px] after:ml-6 after:bg-transparent after:transition-all after:duration-700`,
            titleActiveClasses
          )}
        >
          <span className="mr-2 text-sandstone">03.</span>Projects
        </h3>
        <div className="space-y-32">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  )
}
