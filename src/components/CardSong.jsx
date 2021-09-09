import {
  Flex,
  Badge,
  Tag,
  Avatar,
  TagLabel,
  TagCloseButton,
  LinkOverlay,
  LinkBox,
  Heading,
  Text,
  Stack,
  HStack
} from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'

import NextImage from 'next/image'
import { useState } from 'react'
import { NewTag } from './NewTag'

import { useTags } from '../hooks/useTags'

const initialTags = ['#Sitar', '#Very Good', '#Sad Voice']

export const CardSong = ({
  trackId,
  user,
  title,
  artist,
  album,
  albumImageURL,
  href
}) => {
  const [opacity, changeOpacity] = useState(0)

  const { trackTags, setTrackTags, deleteTrackTags } = useTags(
    user,
    trackId,
    title
  )

  const handleDeleteTag = async (tag) => {
    await deleteTrackTags(tag)
  }

  return (
    <LinkBox
      mt={4}
      href={href}
      title={title}
      isExternal
      _hover={{
        boxShadow: '0px 8px 26px rgba(0, 0, 0, 0.1)',
        textDecoration: 'none'
      }}
      onMouseOver={() => changeOpacity(1)}
      onMouseLeave={() => changeOpacity(0)}
    >
      <LinkOverlay href={href} />
      <Flex
        align='center'
        border='1px solid'
        p={4}
        borderRadius={4}
        borderColor='gray.600'
      >
        <NextImage src={albumImageURL} width={68} height={68} />
        <Stack ml={2} flex={1} isTruncated>
          <HStack spacing={4} isInline isTruncated>
            <NewTag
              // id={trackId}
              // title={title}
              // prevTags={trackTags}
              // user={user}
              ctags={trackTags}
              setTags={setTrackTags}
            />

            {trackTags.map((tag) => (
              <Tag
                as='button'
                size='md'
                key={tag}
                colorScheme='linkedin'
                borderRadius='md'
                isTruncated={false}
              >
                <TagLabel as='button' fontSize='sm' fontWeight='bold'>
                  {tag.toUpperCase()}
                </TagLabel>
                <TagCloseButton onClick={() => handleDeleteTag(tag)} />
              </Tag>
            ))}
          </HStack>
          <Flex align='center' m={0}>
            <Heading flex={1} as='h4' size='md' fontWeight='bold' mt={0}>
              {title}
            </Heading>
            <ExternalLinkIcon mr={0} fontSize='2xl' opacity={opacity} />
          </Flex>
          <HStack>
            <Text as='h5' as='b' color='gray.500'>{`${artist} - `}</Text>
            <Text as='h5' as='i' color='gray.600'>
              {album}
            </Text>
          </HStack>
        </Stack>
      </Flex>
    </LinkBox>
  )
}
