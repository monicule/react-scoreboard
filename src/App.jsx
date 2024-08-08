import { Score } from "./components/score/Score"


function App() {

  return (
    <>
    <h1>Scoreboard</h1>
    <div className="scoreBoard">
        <Score/>
        <div className="results"></div>
    </div>
    </>
  );
}

export default App
