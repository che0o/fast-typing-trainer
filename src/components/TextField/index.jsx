import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {correctSymbolAdded, incorrectSymbolAdded} from "../../action-creators/textDataActionCreators";
import {
    textDataErrorSelector,
} from "../../selectors/textDataSelectors";
import {userInputKeyPressed} from "../../action-creators/userInputActionCreators";
import {useFetchText} from '../../hooks/useFetchText';
import styles from "./index.module.css"

const useHandleUserInput = (textToInput) => {
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handleUserInput(e) {
        const targetSymbol = textToInput[0];
        dispatch(userInputKeyPressed());

        if (e.key === targetSymbol) {
            dispatch(correctSymbolAdded());
        } else {
            dispatch(incorrectSymbolAdded());
        }
    }

    useEffect(() => {
        window.addEventListener('keypress', handleUserInput);

        return () => {
            window.removeEventListener('keypress', handleUserInput);
        }
    }, [handleUserInput]);
}

export const TextField = () => {
    const { inputedText, textToInput, fetchText } = useFetchText();

    useEffect(() => {
        fetchText();
    }, [fetchText]);
    const [first, ...others] = textToInput;


    useHandleUserInput(textToInput);
    const error = useSelector(textDataErrorSelector);

    return (
        <div className={styles.text}>
            <span className={styles.inputedText}>{inputedText}</span>
            <span style={{
                backgroundColor: error ? 'red' : 'green',
                color: 'white'
            }}>
                {first}
            </span>
            {others.join('')}
        </div>
    );
}