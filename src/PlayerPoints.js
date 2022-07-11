import { useSelector } from 'react-redux'
import { selectPlayerWonGames } from './selectors'

const PlayerPoints = ({ playerId, playerName }) => {
  const playerWonGames = useSelector(selectPlayerWonGames(playerId))

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#c10c0c',
      color: 'white',
      padding: '1rem',
      margin: '.5rem 0',
      fontSize: '1.8rem',
      fontWeight: 'bold',
      borderRadius: 10
    }}>
      <p>{playerName}</p>
      <p>
        {playerWonGames} {playerWonGames <= 1 ? 'jeu gagné' : 'jeux gagnés'}
      </p>
    </div>
  )
}

export default PlayerPoints
