import { spotifyToken } from 'lib/spotify'

const endpoint = 'https://api.spotify.com/v1/me/player/currently-playing'

export const getPlaying = async () => {
  const { access_token } = await spotifyToken()

  const res = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (res.status === 204 || res.status > 400) {
    return false
  }

  const { item } = await res.json()

  if (item === null) {
    return false
  }

  const name = item.name
  const artist = item.artists.map((_artist: any) => _artist.name).join(', ')
  const duration = item.duration_ms

  return {
    name,
    artist,
    duration,
  }
}
