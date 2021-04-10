import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import React from "react";

type Props = { data: any[] };

const AvgScore: React.FC<Props> = ({ data }) => {
  const average =
    data.map((it) => it.score).reduce((sum, curr) => (sum += curr), 0) /
    data.length;

  return (
    <Stat>
      <StatLabel>Average Score</StatLabel>
      <StatNumber>{average} </StatNumber>
      <StatHelpText>last months average</StatHelpText>
    </Stat>
  );
};

export default AvgScore;