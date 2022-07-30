import { Song } from 'interfaces/Song'
import { useEffect, useState } from 'react'
import { getPlaying } from 'services/getPlaying'

export const useSong = () => {
  const [playing, setPlaying] = useState<Song | {}>({})

  useEffect(() => {
    const currentSong = async () => {
      getPlaying()
        .then((data) => setPlaying(data))
        .catch((err) => console.error(err))
    }

    const isPlaying = setInterval(currentSong, 30000)

    currentSong()

    return () => clearInterval(isPlaying)
  }, [playing])

  return { playing }
}
