import GlobalProviders from "../components/common/GlobalProviders";
import Navigation from "../components/common/Navigation";
import { AppProps } from "next/dist/next-server/lib/router/router";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalProviders>
      <Navigation />
      <Component {...pageProps} />
    </GlobalProviders>
  );
};

export default MyApp;
