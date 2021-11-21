import {useSelector} from "react-redux";
import {textDataInputedTextSelector} from "../../selectors/textDataSelectors";
import { typesCountSelector } from "../../selectors/userInputSelectors";

const useGetAccuracy = () => {
    const typesCount = useSelector(typesCountSelector)
    const inputedTextCount = useSelector(textDataInputedTextSelector).length

    if (typesCount === 0) {
        return 100
    }

    return (
        Math.floor(inputedTextCount / typesCount * 100)
    )

}

export const Accuracy = () => {
    const accuracy = useGetAccuracy();

    return (
        <div>
            <p>Точность</p>
            <span>{accuracy} %</span>
        </div>
    )
}