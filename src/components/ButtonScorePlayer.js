import { useDispatch } from 'react-redux'
import { pointScored } from '../actions'

const ButtonScorePlayer = ({ player }) => {
  const dispatch = useDispatch()
  return (
    <div className="button" onClick={() => dispatch(pointScored(player))}>
      Point {player}
    </div>
  )
}
export default ButtonScorePlayer
