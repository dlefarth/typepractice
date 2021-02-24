import {AlertDialog, AlertDialogOverlay} from '@chakra-ui/core';
import Box from '@chakra-ui/core/dist/Box';
import Text from '@chakra-ui/core/dist/Text';
import React from 'react';

const StartCountdown = ({ isOpen, countdown }) => {
    return <AlertDialog isOpen={isOpen} leastDestructiveRef={null}>
        <AlertDialogOverlay/>
        <Box width="100%" display="flex" justifyContent="center">
            <Text fontSize="6xl" color="tomato" textAlign="center" fontWeight="bold" zIndex={1500}>
                {countdown}
            </Text>
        </Box>
    </AlertDialog>
};

export default StartCountdown;
