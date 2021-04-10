import Head from "next/head";
import React from "react";
import ScoresView from "../components/scores/ScoresView";

const ScoresPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Typepractice</title>
      </Head>
      <ScoresView />
    </>
  );
};

export default ScoresPage;
