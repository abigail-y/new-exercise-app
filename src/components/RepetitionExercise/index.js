import React from "react"
import { useState } from "react";

const RepetitionExercise = () => {
    const [workOut, newRep] = useState(0);

    return (
        <div className="Reps">
            <h2>Hack Squat</h2>
            <p>{workOut}</p>
            <button onClick={()=> newRep(workOut +1)}>Complete Rep</button>
            <button onClick={()=> newRep(0)}>Reset</button>
        </div>
    );
};

export default RepetitionExercise;