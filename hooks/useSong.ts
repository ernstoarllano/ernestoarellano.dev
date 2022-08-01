import { Song } from 'interfaces/Song'
import { useEffect, useState } from 'react'
import { getPlaying } from 'services/getPlaying'

export const useSong = () => {
  const [playing, setPlaying] = useState<Song | {}>({})

  useEffect(() => {
    const currentSong = async () => {
      try {
        const res = await getPlaying()

        setPlaying(res)
      } catch (err) {
        console.error(err)
      }
    }

    const isPlaying = setInterval(currentSong, 30000)

    currentSong()

    return () => clearInterval(isPlaying)
  }, [playing])

  return { playing }
}
