import { INCREASE_EXPIRED_TIME, SET_INPUT_TEXT, SET_TEXT, START_GAME } from '../actions';
import axios from 'axios';

export default (state, action) => {
    switch (action.type) {
        case SET_INPUT_TEXT:
            const inputText = calculateFullInputText(state.inputText, state.visibleInputText, action.payload)
            const firstTypoAt = findFirstMismatchingCharacter(inputText, state.text);
            const visibleInputText = calculateVisibleInputText(action.payload, firstTypoAt);
            const gameState = updateGameState(inputText, state.text, firstTypoAt);
            if (gameState === 'FINISHED') {
                clearInterval(state.intervalRef);
            }
            return {
                ...state,
                visibleInputText,
                inputText,
                currentPosition: inputText.length,
                firstTypoAt,
                gameState
            };
        case SET_TEXT:
            return {
                ...state,
                text: action.payload
            };
        case INCREASE_EXPIRED_TIME:
            return {
                ...state,
                expiredTime: state.expiredTime + action.payload
            };
        case START_GAME:
            return {
                ...state,
                intervalRef: action.payload,
                gameState: 'RUNNING'
            }
        default:
            return state;
    }
};

const findFirstMismatchingCharacter = (input, target) => {
    return [...input].findIndex(((value, index) => target.charAt(index) !== value));
}

const updateGameState = (input, text, firstTypoAt) => {
    return input.length === text.length && firstTypoAt === -1
        ? 'FINISHED'
        : 'RUNNING';
}

const calculateVisibleInputText = (input, firstTypoAt) => {
    //clear input field if last character is space and no typo exists
    return input.slice(-1) === ' ' && firstTypoAt === -1 ? '' : input;
};

const calculateFullInputText = (oldInputText, oldVisibleInputText, input) => {
    return oldInputText.slice(
        0,
        oldInputText.lastIndexOf(oldVisibleInputText)
    ) + input;
}
