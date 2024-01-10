import ScoreBoard from "./score-board";
import { useState } from "react";

const PlayerVsPlayerContainer = () => {
  const [player1TotalScore, setPlayer1TotalScore] = useState(0);
  const [player2TotalScore, setPlayer2TotalScore] = useState(0);
  const [round, setRound] = useState(1);

  return (
    <div className="max-w-7xl m-auto py-10 px-20 flex flex-col gap-32">
      <div>
        <ScoreBoard
          playerTotalScore={player1TotalScore}
          aiTotalScore={player2TotalScore}
          round={round}
        />
      </div>
      
    </div>
  );
};

export default PlayerVsPlayerContainer;
