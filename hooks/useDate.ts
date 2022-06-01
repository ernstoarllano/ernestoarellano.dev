import { LocaleTime } from "../interfaces/LocaleTime"
import { useState, useEffect } from "react"

const useDate = (): LocaleTime => {
  const locale = 'en-US'
  const [today, setToday] = useState<Date | undefined>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const hour = today?.toLocaleTimeString(locale, { hour: 'numeric', timeZone: 'America/Los_Angeles' }).replace('PM', '').replace('AM', '').trim()
  const minute = today?.toLocaleTimeString(locale, { minute: 'numeric', timeZone: 'America/Los_Angeles' })
  const seconds = today?.toLocaleTimeString(locale, { second: '2-digit', timeZone: 'America/Los_Angeles' })
  const period = today?.toLocaleTimeString(locale, { hour: 'numeric', timeZone: 'America/Los_Angeles' }).slice(-2)

  return {
    hour,
    minute,
    seconds,
    period
  }
}

export default useDate