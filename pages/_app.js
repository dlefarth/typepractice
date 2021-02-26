import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import GameState from '../context/game/GameState';
import Header from '../components/shared/Header';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ColorModeProvider>
        <ThemeProvider>
          <CSSReset />
          <GameState>
            <Header />
            <Component {...pageProps} />
          </GameState>
        </ThemeProvider>
      </ColorModeProvider>
    </UserProvider>
  );
}

export default MyApp
