import { spotifyToken } from 'lib/spotify'

type SpotifyPromise = {
  name?: string
  artist?: string
  duration?: number
}

export const getPlaying = async (): Promise<SpotifyPromise | void> => {
  try {
    const { access_token } = await spotifyToken()
    const endpoint = 'https://api.spotify.com/v1/me/player/currently-playing'

    const res = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    if (res.status === 204 || res.status > 400) return

    const { item } = await res.json()

    if (item === null) return

    const name = item.name
    const artist = item.artists.map((_artist: any) => _artist.name).join(', ')
    const duration = item.duration_ms

    return {
      name,
      artist,
      duration,
    }
  } catch (err) {
    throw err
  }
}
