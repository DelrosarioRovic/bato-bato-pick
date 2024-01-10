import Cards from "./cards";
import iconPaper from "../assets/icon/icon-paper.svg";
import iconRock from "../assets/icon/icon-rock.svg";
import iconScissors from "../assets/icon/icon-scissors.svg";
import { useEffect, useState } from "react";
import Result from "./result";
import WinnerEffect from "./winning-effect";

const SelectedContainer = ({
  choice,
  playerTotalScore,
  setPlayerTotalScore,
  aiTotalScore,
  setAiTotalScore,
  round,
  setRound,
  screenPage,
  setScreenPage,
}) => {
  const [result, setResult] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const [winner, setWinner] = useState("");
  const aiChoices = Math.floor(Math.random() * 3);

  const [aiChoice, setAiChoice] = useState(aiChoices);

  const cardsCollection = [
    {
      icon: iconPaper,
      bgColor: "bg-blue-500",
      id: 0,
    },
    {
      icon: iconRock,
      bgColor: "bg-red-500",
      id: 1,
    },
    {
      icon: iconScissors,
      bgColor: "bg-yellow-500",
      id: 2,
    },
  ];

  const ResultFunction = () => {
    setRound(round + 1);
    if (choice === aiChoice) {
      return setWinner("tie");
    } else if (
      (choice === 0 && aiChoice === 1) ||
      (choice === 1 && aiChoice === 2) ||
      (choice === 2 && aiChoice === 0)
    ) {
      setPlayerTotalScore(playerTotalScore + 1);
      return setWinner("win");
    } else {
      setAiTotalScore(aiTotalScore + 1);
      return setWinner("lose");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadings(true);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const resultTime = setInterval(() => {
      setResult(true);
      ResultFunction();
    }, 2000);

    return () => clearInterval(resultTime);
  }, []);

  return (
    <div className="flex items-center justify-evenly max-sm:gap-5">
      <div className="flex flex-col items-center gap-10 relative">
        {result && winner === "win" && <WinnerEffect />}
        <h1 className="text-white font-bold">YOU PICKED</h1>
        <Cards
          size={"w-44 h-44 max-sm:w-32 max-sm:h-32"}
          id={choice}
          bgColor={
            choice === 0
              ? cardsCollection[0].bgColor
              : choice === 1
              ? cardsCollection[1].bgColor
              : cardsCollection[2].bgColor
          }
          icon={
            choice === 0
              ? cardsCollection[0].icon
              : choice === 1
              ? cardsCollection[1].icon
              : cardsCollection[2].icon
          }
        />
      </div>
      {result && (
        <Result
          screenPage={screenPage}
          setScreenPage={setScreenPage}
          result={winner === "win" ? "WIN" : winner === "lose" ? "LOSE" : "TIE"}
        />
      )}

      <div className="flex flex-col items-center gap-10 relative">
        {result && winner === "lose" && <WinnerEffect />}

        <h1 className="text-white font-bold">THE HOUSE PICKED</h1>
        {loadings ? (
          <Cards
            size={"w-44 h-44 max-sm:w-32 max-sm:h-32"}
            id={aiChoice}
            bgColor={
              aiChoice === 0
                ? cardsCollection[0].bgColor
                : aiChoice === 1
                ? cardsCollection[1].bgColor
                : cardsCollection[2].bgColor
            }
            icon={
              aiChoice === 0
                ? cardsCollection[0].icon
                : aiChoice === 1
                ? cardsCollection[1].icon
                : cardsCollection[2].icon
            }
          />
        ) : (
          <div className="bg-slate-950 opacity-20 w-36 h-36 rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default SelectedContainer;
