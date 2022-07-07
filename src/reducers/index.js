// STATE
export const initialState = {
  // Le score de chacun des joueurs
  player1: 0,
  player2: 0,
  // S'il y a 40-40 quel joueur a l'avantage
  // On utilise null si pas d'avantage
  advantage: null,
  // Qui a gagné ?
  // Si la partie est en cours on utilise null
  winner: null,
  // La partie est-elle en cours ?
  playing: true,
};

// ACTIONS
export const playPause = () => ({ type: "playPause" });

export const pointScored = (player) => ({
  type: "pointScored",
  payload: { player: player },
});

// REDUCER
export function reducer(state, action) {
  switch (action.type) {
    case "playPause":
      return {
        ...state,
        playing: !state.playing,
      };
    default:
      return state;
  }
}
