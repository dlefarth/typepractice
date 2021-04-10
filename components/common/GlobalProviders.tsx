import { UserProvider } from "@auth0/nextjs-auth0";
import { ChakraProvider } from "@chakra-ui/react";
import GameState from "../../context/game/GameState";

type Props = { children: React.ReactNode };

const GlobalProviders: React.FC<Props> = ({ children }) => {
  return (
    <ChakraProvider>
      <UserProvider>
        <GameState>{children}</GameState>
      </UserProvider>
    </ChakraProvider>
  );
};

export default GlobalProviders;
