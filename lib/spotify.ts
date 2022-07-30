const client_id = process.env.spotifyClientId
const client_secret = process.env.spotifyClientSecret
const refresh_token = process.env.spotifyRefreshToken

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const endpoint = 'https://accounts.spotify.com/api/token'

export const spotifyToken = async () => {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token as string,
    }),
  })

  return res.json()
}
