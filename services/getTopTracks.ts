import { spotifyToken } from 'lib/spotify'

const endpoint = 'https://api.spotify.com/v1/me/top/tracks'

export const getTopTracks = async () => {
  const { access_token } = await spotifyToken()

  const res = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (res.status === 204 || res.status > 400) {
    return false
  }

  const { items } = await res.json()

  const tracks = items.slice(0, 10).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }))

  return tracks
}
