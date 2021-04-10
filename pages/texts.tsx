import Head from "next/head";
import React from "react";
import TextsView from "../components/texts/TextsView";

const TextsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>TypePratice</title>
      </Head>
      <TextsView />
    </>
  );
};

export default TextsPage;
