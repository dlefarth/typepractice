import Game from "../components/game/Game";
import Head from "next/head";

const GamePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Typepractice</title>
      </Head>
      <Game />
    </>
  );
};

export default GamePage;
