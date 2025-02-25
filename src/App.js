import './App.css';
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from './components/RepetitionExercise';
import RunningExercise from './components/RunningExercise';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"

function StartHome() {
  return (
    <div className='App'>
      <header className='app-Header'>
        <h1>GrindGuru</h1>
        <ExerciseButtons />
      </header>
    </div>
  );
}

function ExerciseButtons() {
  const nav = useNavigate();

  return (
    <nav>
      <ul>
        <li><button onClick={() => nav("/stair-master")}>Stair Master</button></li>
        <li><button onClick={() => nav("/hack-squat")}>Hack Squat</button></li>
        <li><button onClick={()=> nav("/run-time")}>Run!</button></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartHome />} />
        <Route path="/stair-master" element={<DurationExercise />} />
        <Route path="/hack-squat" element={<RepetitionExercise />} />
        <Route path="/run-time" element={<RunningExercise />} />
      </Routes>
    </div>
  );
}

export default App;
