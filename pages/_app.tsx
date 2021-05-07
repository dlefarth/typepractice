import GlobalProviders from "../components/common/GlobalProviders";
import Navigation from "../components/common/Navigation";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { Container } from "@chakra-ui/layout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalProviders>
      <Navigation />
      <Container maxW="container.xl" mt="1rem">
        <Component {...pageProps} />
      </Container>
    </GlobalProviders>
  );
};

export default MyApp;
