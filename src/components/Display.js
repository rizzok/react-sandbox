import { useSelector } from 'react-redux'

const Display = () => {
  const { player1, player2, advantage, winner, playing } = useSelector(
    (state) => state
  )

  function displayText() {
    if (!playing) return 'Le jeu est en pause'
    if (winner) return 'winner'
    if (advantage) return 'advantage'
    else return `Le score est: ${player1} - ${player2}`
  }

  return <div className="display">{displayText()}</div>
}

export default Display
