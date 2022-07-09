export const playPause = () => ({ type: 'playPause' })

export const restartGame = () => ({ type: 'restart' })

export const pointScored = (player) => ({
  type: 'pointScored',
  payload: { player: player },
})
