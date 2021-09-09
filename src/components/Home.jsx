import { Flex, Heading } from '@chakra-ui/react'
import { getTagsFromFirestore } from '../services/firebase'

import { CardSong } from './CardSong'
import { NavHeader } from './NavHeader'

export const Home = ({ tracks = [], user }) => {
  // getTagsFromFirestore(user)
  return (
    <>
      <NavHeader />
      <Flex
        width='100%'
        as='main'
        flexDirection='column'
        px={6}
        py={2}
        mt={8}
        ml='auto'
        mr='auto'
        maxWidth='800px'
        minWidth='356px'
      >
        <Heading letterSpacing='tight' size='lg' fontWeight={700} as='h2'>
          Your Song Tags
        </Heading>
        {tracks?.map(
          ({ album, albumImageURL, artist, track_url, id, title }) => (
            <CardSong
              user={user}
              key={id}
              trackId={id}
              href={track_url}
              artist={artist}
              title={title}
              album={album}
              albumImageURL={albumImageURL}
            />
          )
        )}
      </Flex>
    </>
  )
}
