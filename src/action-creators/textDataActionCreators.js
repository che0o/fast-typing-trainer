import {
    TEXT_DATA_CORRECT_SYMBOL_ADDED,
    TEXT_DATA_INCORRECT_SYMBOL_ADDED, TEXT_DATA_RESET,
    TEXT_DATA_TEXT_TO_INPUT_FETCHED
} from "../action-types/textDataActionTypes";

export const textToInputFetched = (text) => ({
    type: TEXT_DATA_TEXT_TO_INPUT_FETCHED,
    payload: text,
});

export const correctSymbolAdded = () => ({
    type: TEXT_DATA_CORRECT_SYMBOL_ADDED,
});

export const incorrectSymbolAdded = () => ({
    type: TEXT_DATA_INCORRECT_SYMBOL_ADDED,
});

export const textDataReset = () => ({
    type: TEXT_DATA_RESET,
});