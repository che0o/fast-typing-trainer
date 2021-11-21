import {useSelector} from "react-redux";
import {startTimeSelector} from "../../selectors/userInputSelectors";
import {useEffect, useState} from "react";
import {textDataInputedTextSelector} from "../../selectors/textDataSelectors";

const useGetSpeed = () => {
    const [speed, setSpeed] = useState(0);

    const count = useSelector(textDataInputedTextSelector).length;
    const startTime = useSelector(startTimeSelector);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const time = (now - startTime) / 60000;
            setSpeed(count / time);
        }, 300);

        return () => {
            clearInterval(interval);
        }
    }, [count, startTime]);

    return Math.floor(speed);
}

export const SpeedInfo = () => {
    const speed = useGetSpeed();

    return (
        <div>
            <p>Скорость</p>
            <span>{speed} зн./мин.</span>
        </div>
    )
}