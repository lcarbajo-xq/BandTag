import querystring from 'querystring'

import { useRouter } from 'next/router'

export default function Login({ url }) {
  const router = useRouter()

  const handleClick = () => {
    router.replace(url)
  }

  return <button onClick={handleClick}>Login</button>
}

export async function getStaticProps() {
  const clientID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID

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

  const url =
    'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientID,
      scope: scopes,
      redirect_uri: 'http://localhost:3000/redirect'
    })

  return {
    props: {
      accessToken: 'hola',
      url
    }
  }
}
