import React, { useContext, useEffect, useRef, useState } from "react";
import GameContext from "../../context/game/gameContext";
import { useInterval } from "beautiful-react-hooks";
import StartCountdown from "./StartCountdown";
import Finished from "./Finished";
import TextRenderer from "./TextRenderer";
import { Box, Input, Stack, Text } from "@chakra-ui/react";

const Game: React.FC = () => {
  const context = useContext(GameContext);
  const {
    text,
    visibleInputText,
    setInputText,
    loadText,
    startGame,
    currentPosition,
    firstTypoAt,
    expiredTime,
    gameState,
  } = context;

  const inputRef = useRef(null);
  const [startCountdown, setStartCountdown] = useState(3);

  const calculateCurrentSpeedInWPM = () => {
    const expiredTimeInMinutes = expiredTime / 60000;
    const speed =
      firstTypoAt !== -1
        ? (firstTypoAt - 1) / expiredTimeInMinutes
        : currentPosition / expiredTimeInMinutes;
    return Math.round(speed / 5);
  };

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

  if (gameState === "FINISHED") return <Finished result={speed} />;

  return (
    <>
      <StartCountdown
        isOpen={gameState === "WAITING"}
        countdown={startCountdown}
      />
      <Stack spacing={3} padding={3}>
        <Box display="flex" justifyContent="start" flexDir="row-reverse">
          <Text fontSize="sm">WPM: {speed || 0}</Text>
        </Box>
        <TextRenderer
          text={text}
          currentPosition={currentPosition}
          firstTypoAt={firstTypoAt}
        />
        <Input
          disabled
          ref={inputRef}
          size="lg"
          shadow="5px 5px 10px #CCC"
          value={visibleInputText}
          onChange={(event) => setInputText(event.target.value)}
        />
      </Stack>
    </>
  );
};

export default Game;
