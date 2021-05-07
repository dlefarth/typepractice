import { UserProvider } from "@auth0/nextjs-auth0";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalProvider } from "react-modal-hook";

type Props = { children: React.ReactNode };

const GlobalProviders: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ModalProvider>
          <UserProvider>{children}</UserProvider>
        </ModalProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default GlobalProviders;
