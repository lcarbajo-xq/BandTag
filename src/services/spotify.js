import querystring from 'querystring'

const clientID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_ACCESS_TOKEN

const ENDPOINTS = {
  TOKEN_ENDPOINT: 'https://accounts.spotify.com/api/token',
  TOP_TRACKS_ENDPOINT: 'https://api.spotify.com/v1/me/top/tracks',
  SEVERAL_TRACKS_ENDPOINT:
    'https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B',
  GET_USER_DATA_ENDPOINT: 'https://api.spotify.com/v1/me'
}

const scopes = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-follow-read',
  'user-follow-modify'
]

const basic = Buffer.from(`${clientID}:${clientSecret}`).toString('base64')

export const getAccessToken = async () => {
  const response = await fetch(ENDPOINTS.TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  })
  return response.json()
}
export const getSomeTracks = async () => {
  const response = await getAccessToken()
  const { access_token } = response

  return fetch(ENDPOINTS.SEVERAL_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTopTracks = async () => {
  const response = await getAccessToken()
  const { access_token } = response

  return fetch(ENDPOINTS.TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getUserData = async () => {
  const response = await getAccessToken()
  const { access_token } = response
  const responseUser = await fetch(ENDPOINTS.GET_USER_DATA_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  return responseUser.json()
}
