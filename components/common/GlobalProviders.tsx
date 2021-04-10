import { UserProvider } from "@auth0/nextjs-auth0";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import GameState from "../../context/game/GameState";

type Props = { children: React.ReactNode };

const GlobalProviders: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <UserProvider>
          <GameState>{children}</GameState>
        </UserProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default GlobalProviders;
