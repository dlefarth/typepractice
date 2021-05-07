import Game from "../components/game/Game";
import Head from "next/head";
import React from "react";
import GameState from "../context/game/GameState";

const GamePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Typepractice</title>
      </Head>
      <GameState>
        <Game />
      </GameState>
    </>
  );
};

export default GamePage;
