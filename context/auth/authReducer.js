import { SET_TOKEN, RESET_TOKEN } from '../actions';

export default (state, action) => {
    switch (action.type) {
        case SET_TOKEN:
            //localStorage.setItem('token', action.payload);
            return { ...state, token: action.payload };
        case RESET_TOKEN:
            return { ...state, token: null }
        default: return { ...state };
    }
};