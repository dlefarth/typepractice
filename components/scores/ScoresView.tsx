import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import useScores from "../../api-hooks/useScores";
import AvgScore from "./AvgScore";
import ScoreChart from "./ScoreChart";

const ScoresView: React.FC = () => {
  const { data, isLoading } = useScores();

  if (isLoading) return <></>;

  return (
    <>
      <Heading mb=".5rem">Scores</Heading>
      <AvgScore data={data} />
      <ScoreChart data={data} />
    </>
  );
};

export default ScoresView;
