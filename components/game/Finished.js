import { Text, Stack, Button } from '@chakra-ui/react';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';

const Finished = ({ result }) => {
    const user = useUser();
    const retry = () => window.location.reload();

    const saveScore = score => {
        axios.post('/api/scores', { score });
    }

    if (user) {
        saveScore(result);
    }

    return <Stack width={800} marginX="auto" marginTop={200}>
        <Text fontSize="6xl" color="teal.400" textAlign="center">
            {result}WPM
        </Text>
        <Button width={200} marginX="auto" onClick={retry}>Retry</Button>
    </Stack>;
};

export default Finished;
