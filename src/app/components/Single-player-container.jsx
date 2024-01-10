import ScoreBoard from "./score-board";
import { useState } from "react";
import PickingContainer from "./picking-container";
import SelectedContainer from "./selected-container";
import Rules from "./rules";

const SinglePlayerContainer = () => {
  const [playerTotalScore, setPlayerTotalScore] = useState(0);
  const [aiTotalScore, setAiTotalScore] = useState(0);
  const [round, setRound] = useState(1);
  const [screenPage, setScreenPage] = useState(1);
  const [choice, setChoices] = useState(0);
  const [isRuleShow, setIsRulesShow] = useState(false);

  const handleShow = () => {
    setIsRulesShow(true);
  };

  return (
    <div className="max-w-7xl m-auto py-10 px-20 flex flex-col gap-32">
      <div>
        <ScoreBoard
          playerTotalScore={playerTotalScore}
          aiTotalScore={aiTotalScore}
          round={round}
        />
      </div>
      {screenPage === 1 ? (
        <PickingContainer
          setChoices={setChoices}
          screenPage={screenPage}
          setScreenPage={setScreenPage}
        />
      ) : (
        <SelectedContainer
          choice={choice}
          playerTotalScore={playerTotalScore}
          setPlayerTotalScore={setPlayerTotalScore}
          aiTotalScore={aiTotalScore}
          setAiTotalScore={setAiTotalScore}
          round={round}
          setRound={setRound}
          screenPage={screenPage}
          setScreenPage={setScreenPage}
        />
      )}
      <div className="flex justify-end">
        {isRuleShow && <Rules setIsRulesShow={setIsRulesShow} />}
        <button
          className="border text-white px-7 py-1 rounded-md"
          onClick={handleShow}
        >
          RULES
        </button>
      </div>
    </div>
  );
};

export default SinglePlayerContainer;
