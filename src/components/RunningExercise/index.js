import React from "react"
import { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
  
    useEffect(() => {
      let timer;
      if (isRunning) {
        timer = setInterval(() => setTime((prev) => prev + 10), 10);
      } else {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }, [isRunning]);
  
    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
      setIsRunning(false);
      setTime(0);
      setLaps([]);
    };
    const mark = () => setLaps([...laps, time]);
  
    const formatTime = (milliseconds) => {
      const minutes = Math.floor(milliseconds / 60000);
      const seconds = Math.floor((milliseconds % 60000) / 1000);
      const centiseconds = Math.floor((milliseconds % 1000) / 10);
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${centiseconds.toString().padStart(2, "0")}`;
    };
  
    return (
      <div>
        <h2>Stopwatch</h2>
        <h1>{formatTime(time)}</h1>
        <div>
          {!isRunning ? (
            <button onClick={start}>Start</button>
          ) : (
            <button onClick={stop}>Stop</button>
          )}
          <button onClick={mark} disabled={!isRunning}>Lap</button>
          <button onClick={reset}>Reset</button>
        </div>
        {laps.length > 0 && (
          <div>
            <h3>Laps</h3>
            <ul>
              {laps.map((lap, index) => (
                <li key={index}>
                  Lap {index + 1}: {formatTime(lap)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default Stopwatch;
  