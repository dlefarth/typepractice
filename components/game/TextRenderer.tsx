import { Box } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const Red = styled.span`
  color: red;
`;
const Green = styled.span`
  color: green;
`;

type Props = {
  text: string;
  currentPosition: number;
  firstTypoAt: number;
};

const TextRenderer: React.FC<Props> = ({
  text,
  currentPosition,
  firstTypoAt,
}) => {
  const hasTypo = firstTypoAt !== -1;

  if (!text) return <></>;

  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      padding="1rem"
      fontSize="lg"
      shadow="5px 5px 10px #CCC"
    >
      {hasTypo ? (
        <>
          <Green>{text.substring(0, firstTypoAt)}</Green>
          <Red>{text.substring(firstTypoAt, currentPosition)}</Red>
          {text.substring(currentPosition)}
        </>
      ) : (
        <>
          <Green> {text.substring(0, currentPosition)}</Green>
          {text.substring(currentPosition)}
        </>
      )}
    </Box>
  );
};

export default TextRenderer;
