import { createStore } from "redux";
import produce from 'immer'

// state
const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true,
  history: [
    // { player1: 15, player2: 40, winner: "player2" }
  ],
};

// actions creators

export const playPause = () => ({ type: "playPause" });

export const restartGame = () => ({ type: "restart" });

export const pointScored = (player) => ({
  type: "pointScored",
  payload: { player: player },
});

function reducer(state = initialState, action) {
  if (action.type === "restart") {
    return produce(state, (draft) => {
      // si le match est terminé, on ajoute un élément à l'historique
      if (draft.winner) {
        draft.history.push({
          player1: draft.player1,
          player2: draft.player2,
          winner: draft.winner,
        });
      }
      // puis on reset les autres propriétés
      draft.player1 = 0;
      draft.player2 = 0;
      draft.advantage = null;
      draft.winner = null;
      draft.playing = true;
    });
  }
  if (action.type === "playPause") {
    if (state.winner) {
      return state;
    }
    return produce(state, draft => {
      draft.playing = !draft.playing
    })
  }
  if (action.type === "pointScored") {
    const player = action.payload.player;
    const otherPlayer = player === "player1" ? "player2" : "player1";
    if (state.winner) {
      // On ne peut pas marquer de point si le set est terminé
      return state;
    }
    if (state.playing === false) {
      // On ne peut pas marquer de point si le set est en pause
      return state;
    }
    return produce(state, draft => {
      const currentPlayerScore = state[player];
      if (currentPlayerScore <= 15) {
        // 0 ou 15 => on ajoute 15
        // return { ...state, [player]: currentPlayerScore + 15 };
        draft[player] = currentPlayerScore + 15
        return
      }
      if (currentPlayerScore === 30) {
        // return { ...state, [player]: 40 };
        draft[player] = 40
        return
      }
      if (currentPlayerScore === 40) {
        if (state[otherPlayer] !== 40) {
          // Le joueur à gagné
          // return { ...state, winner: player };
          draft.winner = player
          return
        }
        if (state.advantage === player) {
          // Le joueur à gagné
          // return { ...state, winner: player };
          draft.winner = player
          return
        }
        if (state.advantage === null) {
          // Le joueur a maintenant l'avantage
          // return { ...state, advantage: player };
          draft.advantage = player
          return
        }
        // L'autre joueur a perdu l'avantage
        // return { ...state, advantage: null };
        draft.advantage = null
      }
    })
  }
  return state;
}

export const store = createStore(reducer);

/*
store.subscribe(() => {
  console.log(store.getState());
});
*/
