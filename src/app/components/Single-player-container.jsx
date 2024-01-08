import ScoreBoard from "./score-board";
import { useState } from "react";
import PickingContainer from "./picking-container";
import SelectedContainer from "./selected-container";

const SinglePlayerContainer = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [screenPage, setScreenPage] = useState(1);
  const [choice, setChoices] = useState(0);

  return (
    <div className="max-w-7xl m-auto py-10 px-20 flex flex-col gap-32">
      <div>
        <ScoreBoard totalScore={totalScore} />
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
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          screenPage={screenPage}
          setScreenPage={setScreenPage}
        />
      )}
    </div>
  );
};

export default SinglePlayerContainer;
