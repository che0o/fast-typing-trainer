import {useDispatch} from "react-redux";
import {userInputReset} from "../../action-creators/userInputActionCreators";
import {textDataReset} from "../../action-creators/textDataActionCreators";
import {useCallback} from "react";
import {useFetchText} from "../../hooks/useFetchText";
import styles from "./index.module.css"

const useReset = () => {
    const dispatch = useDispatch();
    const {fetchText} = useFetchText();

    return useCallback((e) => {
        e.target.blur();

        dispatch(userInputReset());
        dispatch(textDataReset());
        fetchText();
    }, [dispatch, fetchText]);
};

export const ResetButton = () => {
    const handleClick = useReset();

    return (
        <button onClick={handleClick} className={styles.btn}>Заново</button>
    )
}