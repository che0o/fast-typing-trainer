const textDataSelector = (state) => state.textData;

export const textDataInputedTextSelector = state => textDataSelector(state).inputedText;
export const textDataTextToInputSelector = state => textDataSelector(state).textToInput;
export const textDataErrorSelector = state => textDataSelector(state).error;