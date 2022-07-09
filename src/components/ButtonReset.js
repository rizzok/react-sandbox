import { useDispatch } from 'react-redux'
import { restartGame } from '../actions'

const ButtonReset = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(restartGame())} className="button">
      Reset
    </button>
  )
}

export default ButtonReset
