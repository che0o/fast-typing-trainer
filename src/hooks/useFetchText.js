import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import axios from "axios";
import {textToInputFetched} from "../action-creators/textDataActionCreators";
import {textDataInputedTextSelector, textDataTextToInputSelector} from "../selectors/textDataSelectors";

export const useFetchText = () => {
    const dispatch = useDispatch();

    const fetchText = useCallback(() => {
        axios
            .get('https://fish-text.ru/get?format=json&number3')
            .then((res) => dispatch(textToInputFetched(res.data.text)));
    }, [dispatch]);

    const inputedText = useSelector(textDataInputedTextSelector);

    const textToInput = useSelector(textDataTextToInputSelector);

    return {
        fetchText,
        inputedText,
        textToInput
    }
};