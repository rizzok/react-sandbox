export const selectPlayerHasAdvantage = (playerId) => {
  return state => state.advantage === playerId
}

export const selectPlayerScore = (playerId) => {
  return state => state[playerId]
}

export const selectPlayerWonGames = (playerId) => {
  return state => state.history.filter(item => item.winner === playerId).length
}