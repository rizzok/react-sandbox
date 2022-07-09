import Display from './components/Display'
import ButtonScorePlayer from './components/ButtonScorePlayer'
import ButtonReset from './components/ButtonReset'
import ButtonPlayPause from './components/ButtonPlayPause'

function App() {
  return (
    <div>
      <Display />
      <div className="buttons-row">
        <ButtonScorePlayer player={'player1'} />
        <ButtonScorePlayer player={'player2'} />
      </div>
      <div className="buttons-row">
        <ButtonReset />
        <ButtonPlayPause />
      </div>
    </div>
  )
}

export default App
