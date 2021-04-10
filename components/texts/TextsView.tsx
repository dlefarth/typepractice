import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import useTexts from "../../api-hooks/useTexts";

const TextsView: React.FC = () => {
  const { data, isLoading } = useTexts();

  if (!data) return <></>;

  return (
    <>
      <Heading>Texts</Heading>
      <Accordion>
        {data.map((text) => (
          <AccordionItem key={text.id}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {text.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>{text.text}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default TextsView;
