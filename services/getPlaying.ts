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

  const song = await res.json()

  if (song.item === null) {
    return false
  }

  const name = song.item.name
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(', ')

  return {
    name,
    artist,
  }
}
