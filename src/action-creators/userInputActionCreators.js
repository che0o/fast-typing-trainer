import {USER_INPUT_KEY_PRESSED, USER_INPUT_RESET} from "../action-types/userInputActionTypes";

export const userInputKeyPressed = () => ({
    type: USER_INPUT_KEY_PRESSED,
});

export const userInputReset = () => ({
    type: USER_INPUT_RESET,
});