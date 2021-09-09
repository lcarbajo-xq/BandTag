import { Flex, Button, IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export const NavHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const icon = colorMode === 'dark' ? <SunIcon /> : <MoonIcon />

  const bgColor = {
    light: 'fff',
    dark: '15161a'
  }

  const navHoverBg = {
    light: 'gray.100',
    dark: 'gray.700'
  }
  return (
    <Flex
      display='flex'
      flexDirection='row'
      top={0}
      position='sticky'
      as='nav'
      px={6}
      py={2}
      mt={8}
      mb={8}
      ml='auto'
      mr='auto'
      zIndex='10'
      bg={bgColor[colorMode]}
      maxWidth='800px'
      minWidth='356px'
      alignItems='center'
      justifyContent='space-between'
      backdropFilter='saturate(180%) blur(20px)'
      width='100%'
      transition='height .5s, line-height .5s'
    >
      <IconButton
        icon={icon}
        onClick={toggleColorMode}
        color={colorMode === 'light' ? 'black' : 'gray '}
      />
      <Flex display='flex' justifyContent='space-between'>
        <NextLink href='#' passHref>
          <Button
            cursor='pointer'
            mx='2%'
            as='a'
            p={4}
            backgroundColor={bgColor[colorMode]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
          >
            Tags
          </Button>
        </NextLink>
        <NextLink href='#' passHref>
          <Button
            cursor='pointer'
            mx='2%'
            as='a'
            p={4}
            backgroundColor={bgColor[colorMode]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
          >
            New
          </Button>
        </NextLink>
        <NextLink href='#' passHref>
          <Button
            cursor='pointer'
            mx='2%'
            as='a'
            p={4}
            backgroundColor={bgColor[colorMode]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
          >
            Playlists
          </Button>
        </NextLink>
        <NextLink href='#' passHref>
          <Button
            cursor='pointer'
            mx='2%'
            as='a'
            p={4}
            backgroundColor={bgColor[colorMode]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
          >
            Home
          </Button>
        </NextLink>
        <NextLink href='#' passHref>
          <Button
            cursor='pointer'
            as='a'
            mx='2%'
            p={4}
            color='white'
            backgroundColor='#910707'
            _hover={{ backgroundColor: 'red.600' }}
          >
            Logout
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  )
}
