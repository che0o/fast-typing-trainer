import {
    TEXT_DATA_CORRECT_SYMBOL_ADDED,
    TEXT_DATA_INCORRECT_SYMBOL_ADDED, TEXT_DATA_RESET,
    TEXT_DATA_TEXT_TO_INPUT_FETCHED
} from "../action-types/textDataActionTypes";


const initialState = {
    // Текст который пользователь уже ввел
    inputedText: '',

    // Текст который надо ввести
    textToInput: '',

    // Последний ввод неверный
    error: false,
}

export const textDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEXT_DATA_TEXT_TO_INPUT_FETCHED:
            return {
                ...state,
                textToInput: action.payload,
            }

        case TEXT_DATA_CORRECT_SYMBOL_ADDED:
            const arrTextToInput = state.textToInput.split('');

            return {
                ...state,
                inputedText: state.inputedText + arrTextToInput[0],
                textToInput: arrTextToInput.slice(1).join(''),
                error: false,
            }

        case TEXT_DATA_INCORRECT_SYMBOL_ADDED:
            return {
                ...state,
                error: true,
            }

        case TEXT_DATA_RESET:
            return initialState;

        default: return state;
    }
}