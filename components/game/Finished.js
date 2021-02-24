import {Button} from '@chakra-ui/core';
import React from 'react';
import Text from '@chakra-ui/core/dist/Text';
import Stack from '@chakra-ui/core/dist/Stack';

const Finished = ({ result }) => {
    const retry = () => window.location.reload();
    return <Stack width={800} marginX="auto" marginTop={200}>
        <Text fontSize="6xl" color="teal.400" textAlign="center">
            {result}WPM
        </Text>
        <Button width={200} marginX="auto" onClick={retry}>Retry</Button>
    </Stack>;
};

export default Finished;
