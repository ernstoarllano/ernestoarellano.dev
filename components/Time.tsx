import { useDate } from 'hooks/useDate'

const Time = () => {
  const { hour, minute, period } = useDate()

  return (
    <div className="flex items-center text-xs font-medium space-x-1">
      <div className="flex items-center">
        <span>{hour}:</span>
        <span>{minute}</span>
        <span className="ml-1">{period}</span>
      </div>
      <span>(PST)</span>
    </div>
  )
}

export default Time
