import classNames from 'classnames'
import Job from 'components/experience/Job'
import { useElementOnScreen } from 'hooks/useElementOnScreen'

interface Job {
  id: number
  company: string
  location: string
  title: string
  date: string
  description: string
}

interface TimelineProps {
  jobs: Job[]
}

const Timeline = ({ jobs }: TimelineProps) => {
  const { ref, isVisible } = useElementOnScreen()

  const classes = classNames({
    active: isVisible,
  })

  return (
    <section id="jobs" className={`${classes}`} ref={ref}>
      <div className="w-full lg:max-w-[700px] lg:mx-auto space-y-24">
        <h3 className="section-title">
          <span className="mr-2 text-sandstone">02.</span>Experience
        </h3>
        {jobs && (
          <div className="timeline">
            {jobs.map((job) => (
              <Job key={job.id} {...job} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Timeline
