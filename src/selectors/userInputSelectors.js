const userInputSelector = (state) => state.userInput;

export const typesCountSelector = (state) => userInputSelector(state).typesCount;
export const startTimeSelector = (state) => userInputSelector(state).startTime ?? new Date();