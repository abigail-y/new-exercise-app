import React from "react"
import { useState, useRef } from "react";

function DurationExercise() {
    const [time, setTime] = useState(0); 
    const [startStair, setStair] = useState(false);
    const durationTime = useRef(null);

    const pushStart = () => {
        if (startStair) {
            clearInterval(durationTime.current);
            durationTime.current = null;
        } else {
            durationTime.current = setInterval(() => {
                setTime((t) => t +1);
            },1000);
        }
        setStair(!startStair);
    };

    const setReset = () => {
        clearInterval(durationTime.current);
        durationTime.current = null;
        setTime(0);
        setStair(false);
    };

    const formatTimer = (t) =>
        `${Math.floor(t /60).toString().padStart(2, "0")}:${(t % 60).toString().padStart(2, "0")}`;

    return (
        <div>
            <h2>Stair Master</h2>
            <p>Timer: {formatTimer(time)}</p>
            <button onClick={pushStart}>{startStair ? "Stop" : "Start"}</button>
            <button onClick={setReset}>Reset</button>
        </div>
    );

}

export default DurationExercise;