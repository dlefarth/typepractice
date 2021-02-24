import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import GameState from '../context/game/GameState';
import AuthState from '../context/auth/AuthState';

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <ColorModeProvider>
        <ThemeProvider>
          <CSSReset />
          <GameState>
            <Component {...pageProps} />
          </GameState>
        </ThemeProvider>
      </ColorModeProvider>
    </AuthState>
  );
}

export default MyApp
