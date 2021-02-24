import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import GameState from '../context/game/GameState';
import AuthState from '../context/auth/AuthState';
import Header from '../components/shared/Header';

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <ColorModeProvider>
        <ThemeProvider>
          <CSSReset />
          <GameState>
            <Header />
            <Component {...pageProps} />
          </GameState>
        </ThemeProvider>
      </ColorModeProvider>
    </AuthState>
  );
}

export default MyApp
