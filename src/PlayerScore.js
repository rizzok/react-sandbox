import { useSelector } from 'react-redux'
import { selectPlayerHasAdvantage, selectPlayerScore } from './selectors'

const PlayerScore = ({ playerId, playerName }) => {
  const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId))
  const score = useSelector(selectPlayerScore(playerId))

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'purple',
      color: 'white',
      padding: '1rem',
      margin: '.5rem 0',
      fontSize: '1.8rem',
      fontWeight: 'bold',
      borderRadius: 10
    }}>
      <p>{playerName}</p>
      <p>{hasAdvantage && 'Avantage '}{score}</p>
    </div>
  )
}

export default PlayerScore
