import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useResume = () => {
  const { pathname } = useRouter()
  const [url, setURL] = useState('/')

  useEffect(() => {
    if (pathname === '/') {
      setURL('/cv')
    }
  }, [pathname])

  return {
    url,
  }
}
