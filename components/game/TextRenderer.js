import React from 'react';
import styled from 'styled-components';
import Box from '@chakra-ui/core/dist/Box';

const Red = styled.span`color:red;`;
const Green = styled.span`color:green;`;

const TextRenderer = ({ text, currentPosition, firstTypoAt }) => {
    const hasTypo = firstTypoAt !== -1;

    if (!text) return <></>;

    return (
        <Box borderWidth="1px"
            rounded="lg"
            padding="1rem"
            fontSize="lg"
            shadow="5px 5px 10px #CCC"
        >
            {
                hasTypo
                    ? <>
                        <Green>{text.substring(0, firstTypoAt)}</Green>
                        <Red>{text.substring(firstTypoAt, currentPosition)}</Red>
                        {text.substring(currentPosition)}
                    </>
                    : <>
                        <Green> {text.substring(0, currentPosition)}</Green>
                        {text.substring(currentPosition)}
                    </>
            }
        </Box>
    );
};

export default TextRenderer;