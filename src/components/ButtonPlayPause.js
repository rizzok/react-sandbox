import { useDispatch } from 'react-redux'
import { playPause } from '../actions'

const ButtonPlayPause = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(playPause())} className="button">
      Pause/Play
    </button>
  )
}

export default ButtonPlayPause
