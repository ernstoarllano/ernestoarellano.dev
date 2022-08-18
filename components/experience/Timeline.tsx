import classNames from 'classnames'
import Job from 'components/experience/Job'
import { useElementOnScreen } from 'hooks/useElementOnScreen'
import { TimelineProps } from 'interfaces/interfaces'

const Timeline = ({ jobs }: TimelineProps) => {
  const { ref, isVisible } = useElementOnScreen()

  const classes = classNames({
    active: isVisible,
  })

  return (
    <section id="experience" className={`scroll-m-8 ${classes}`} ref={ref}>
      <div className="w-full lg:max-w-[700px] lg:mx-auto space-y-6 lg:space-y-24">
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
