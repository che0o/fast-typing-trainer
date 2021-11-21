import {combineReducers} from "redux";
import {userInputReducer} from "./userInputReducer";
import {textDataReducer} from "./textDataReducer";

export const rootReducer = combineReducers({
    userInput: userInputReducer,
    textData: textDataReducer,
});