import { AlertDialog, AlertDialogOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import { Box } from '@chakra-ui/react';

const StartCountdown = ({ isOpen, countdown }) => {
    return <AlertDialog isOpen={isOpen} leastDestructiveRef={null}>
        <AlertDialogOverlay />
        <Box width="100%" display="flex" justifyContent="center">
            <Text fontSize="6xl" color="tomato" textAlign="center" fontWeight="bold" zIndex={1500}>
                {countdown}
            </Text>
        </Box>
    </AlertDialog>
};

export default StartCountdown;
