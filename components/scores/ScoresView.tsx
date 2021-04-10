import { Box } from "@chakra-ui/react";
import React from "react";
import useScores from "../hooks/useScores";
import AvgScore from "./AvgScore";
import ScoreChart from "./ScoreChart";

const ScoresView: React.FC = () => {
  const { data, isLoading } = useScores();

  if (isLoading) return <></>;

  return (
    <Box>
      <AvgScore data={data} />
      <ScoreChart data={data} />
    </Box>
  );
};

export default ScoresView;
