import classNames from 'classnames'
import { useElementOnScreen } from 'hooks/useElementOnScreen'

const Job = ({ ...rest }) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  }

  const { ref, isVisible } = useElementOnScreen(options)

  const classes = classNames({
    active: isVisible,
  })

  return (
    <div className={`job ${classes}`} ref={ref}>
      <header className="job-head">
        <h4 className="job-title">{rest.title}</h4>
        <span className="job-company">{rest.company}</span>
        <ul
          className="job-description"
          dangerouslySetInnerHTML={{ __html: rest.description }}
        />
      </header>
      <div className="job-date">
        <span className="text-sm font-bold">{rest.date}</span>
      </div>
    </div>
  )
}

export default Job
