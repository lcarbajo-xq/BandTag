import { Chakra } from '../src/Chakra'

import { Global, css } from '@emotion/react'
import { GlobalStyle, useColorMode } from '@chakra-ui/react'

const GlobalStyleComponent = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#15161a'};
          }
        `}
      />
      {children}
    </>
  )
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <GlobalStyleComponent>
        <Component {...pageProps} />
      </GlobalStyleComponent>
    </Chakra>
  )
}
