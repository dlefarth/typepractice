import React, { useContext, useEffect, useRef, useState } from 'react';
import Box from '@chakra-ui/core/dist/Box';
import Input from '@chakra-ui/core/dist/Input';
import Stack from '@chakra-ui/core/dist/Stack';
import GameContext from '../../context/game/gameContext';
import Text from '@chakra-ui/core/dist/Text';
import { useInterval } from 'beautiful-react-hooks';
import StartCountdown from './StartCountdown';
import Finished from './Finished';
import TextRenderer from './TextRenderer';

const Game = () => {
    const context = useContext(GameContext);
    const { text, visibleInputText, setInputText, loadText, startGame, currentPosition, firstTypoAt, expiredTime, gameState } = context;

    const inputRef = useRef(null);
    const [startCountdown, setStartCountdown] = useState(3);

    const calculateCurrentSpeedInWPM = () => {
        const expiredTimeInMinutes = expiredTime / 60000;
        const speed = firstTypoAt !== -1
            ? (firstTypoAt - 1) / expiredTimeInMinutes
            : currentPosition / expiredTimeInMinutes;
        return Math.round(speed / 5);
    }

    const [, clearInterval] = useInterval(() => {
        if (startCountdown > 0) {
            setStartCountdown(startCountdown - 1);
        }

        if (startCountdown === 1) {
            inputRef.current.disabled = false;
            inputRef.current.focus();
            startGame();
            clearInterval();
        }
    }, 1000);

    useEffect(() => {
        loadText();
    }, []);

    const speed = calculateCurrentSpeedInWPM();

    if (gameState === 'FINISHED') return <Finished result={speed} />

    return <>
        <StartCountdown isOpen={gameState === 'WAITING'} countdown={startCountdown} />
        <Box width={800} marginX="auto" marginTop={50}>
            <Stack spacing={3} padding={3}>
                <Box display="flex" justifyContent="start" flexDir="row-reverse">
                    <Text fontSize="sm">WPM: {speed || 0}</Text>
                </Box>
                <TextRenderer text={text} currentPosition={currentPosition} firstTypoAt={firstTypoAt} />
                <Input disabled
                    ref={inputRef}
                    size="lg"
                    shadow="5px 5px 10px #CCC"
                    value={visibleInputText}
                    onChange={event => setInputText(event.target.value)}
                />
            </Stack>
        </Box></>;
};

export default Game;
