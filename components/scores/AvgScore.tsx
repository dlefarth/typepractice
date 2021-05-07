import {
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";

type Props = { data: any[] };

const AvgScore: React.FC<Props> = ({ data }) => {
  const average =
    data.map((it) => it.score).reduce((sum, curr) => (sum += curr), 0) /
    data.length;

  const roundedAvg = Math.round(average * 100) / 100;

  return (
    <Stat>
      <StatLabel>Average Score</StatLabel>
      <StatNumber>{roundedAvg} </StatNumber>
      <StatHelpText>last months average</StatHelpText>
    </Stat>
  );
};

export default AvgScore;
