import React, {useReducer} from 'react';
import gameReducer from './gameReducer';
import GameContext from './gameContext';
import {INCREASE_EXPIRED_TIME, SET_INPUT_TEXT, SET_TEXT} from '../actions';
import axios from 'axios';

const QuizState = props => {
    const initialState = {
        text: '',
        visibleInputText: '',
        inputText: '',
        currentPosition: 0,
        firstTypoAt: -1,
        expiredTime: 0,
        gameState: 'WAITING',
        intervalRef: null
    };

    const [state, dispatch] = useReducer(gameReducer, initialState);

    const startGame = () => {
        const interval = 1000;
        const increaseExpiredTime = () => dispatch({
            type: INCREASE_EXPIRED_TIME,
            payload: interval
        });

        const intervalRef = setInterval(increaseExpiredTime, interval);
        dispatch({type: 'START_GAME', payload: intervalRef});
    };

    const loadText = async () => {
        const res = await axios.get('/api/text');
        const text = res.data.text;
        dispatch({ type: SET_TEXT, payload: text });
    }

    const setInputText = text => {
        dispatch({ type: SET_INPUT_TEXT, payload: text });
    };

    return (
        <GameContext.Provider value={{
            text: state.text,
            visibleInputText: state.visibleInputText,
            expiredTime: state.expiredTime,
            currentPosition: state.currentPosition,
            firstTypoAt: state.firstTypoAt,
            gameState: state.gameState,
            loadText,
            setInputText,
            startGame,
        }}>
            {props.children}
        </GameContext.Provider>
    );
};

export default QuizState;
