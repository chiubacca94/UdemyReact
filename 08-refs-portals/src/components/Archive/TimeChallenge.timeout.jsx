import { useRef, useState } from "react";
import ResultModal from "../ResultModal";

    // Timer variable to hold the timeout Ref ID that both functions can access
    // Needs to be outside of the component function to avoid re-initialization on each render
    // Cannot use because it would be overwritten on each button click
    // let timer;

export default function TimeChallenge({ title, targetTime }) {
    // Use ref to hold mutable timer ID across renders (doesn't trigger re-renders)

    const timer = useRef();
    const dialog = useRef();

    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [isTimerExpired, setIsTimerExpired] = useState(false);

    function handleStart() { 
        timer.current = setTimeout(() => { //current: The value you passed to useRef
            setIsTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);

        setIsTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setIsTimerStarted(false);
    }

    return (
        <>
            <ResultModal ref={dialog} result="lost" targetTime={targetTime} remainingTime={targetTime * 1000} />
            <section className="challenge">
                <h2>{title}</h2>
                {isTimerExpired && <p>You lost!</p>}
                <p className="challenge-time">Target time: {targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p>
                    <button onClick={isTimerStarted ? handleStop : handleStart}>{isTimerStarted ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={isTimerStarted ? 'active' : undefined}>
                    {isTimerStarted ? 'Timer is running' : 'Timer is inactive'}
                </p>
            </section>
        </>
    )
}