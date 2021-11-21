import {USER_INPUT_KEY_PRESSED, USER_INPUT_RESET} from "../action-types/userInputActionTypes";

const initialState = {
    typesCount: 0,
    startTime: null,
}

export const userInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INPUT_KEY_PRESSED:
            return {
                ...state,
                typesCount: state.typesCount + 1,
                startTime: state.startTime ? state.startTime : new Date(),
            }

        case USER_INPUT_RESET:
            return initialState;

        default: return state;
    }
}