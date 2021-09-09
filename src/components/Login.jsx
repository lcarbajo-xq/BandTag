import React from 'react'
import { Container, Link } from '@chakra-ui/react'

// import { FaSpotify } from 'react-icons/fa'

const AUTH_URL_VARS = {
  clientID: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  authorizeURL: process.env.NEXT_PUBLIC_AUTHORIZE_URL,
  redirectURL: process.env.NEXT_PUBLIC_REDIRECT_URL
}

const { clientID, authorizeURL, redirectURL } = AUTH_URL_VARS

const AUTH_URL = `${authorizeURL}?client_id=${clientID}&response_type=code&redirect_uri=${redirectURL}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export const Login = () => {
  return (
    <Container maxW='xl' centerContent>
      {/* <LinkBox leftIcon={<FaSpotify />}>
        <LinkOverlay href={AUTH_URL}>Login with Spotify</LinkOverlay>
      </LinkBox> */}
      <Link isExternal href={AUTH_URL}>
        Login
      </Link>
    </Container>
  )
}
