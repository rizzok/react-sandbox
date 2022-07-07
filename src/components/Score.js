import { useState } from "react";

const Score = () => {
  const state = store.getState();
  const [scoreText, setScoreText] = useState("Le score est: 0 - 0");

  /*  function updateScoreText(
    playing,
    winner = null,
    player1Score = 0,
    player2Score = 0,
    advantage = null
  ) {
    if (winner) {
      if (winner === "player1") {
        setScoreText("Joueur 1 gagne");
      } else {
        setScoreText("Joueur 2 gagne");
      }
    } else if (playing === false) {
      setScoreText("C'est la pause");
    } else {
      let text = "Le score est: " + player1Score + " - " + player2Score;
      if (advantage) {
        if (advantage === "player1") {
          text += " avantage joueur 1";
        } else {
          text += " avantage joueur 2";
        }
      }
      setScoreText(text);
    }
  }*/

  return (
    <p className="display" id="score">
      {scoreText}
    </p>
  );
};

export default Score;
