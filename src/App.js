import "./reducers/redux";
import Score from "./components/Score";
import { playPause } from "./reducers";

function App() {
  const state = store.getState();

  function handleClickPlayPause() {
    store.dispatch(playPause());
  }

  return (
    <div className="App">
      <Score />
      <div className="buttons">
        <div className="buttons-row">
          <button className="button" id="player-1">
            Point Joueur 1
          </button>
          <button className="button" id="player-2">
            Point Joueur 2
          </button>
        </div>
        <div className="buttons-row">
          <button className="button" id="reset">
            Remettre à zéro
          </button>
          <button className="button" id="pause" onClick={handleClickPlayPause}>
            Pause / Reprendre
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
