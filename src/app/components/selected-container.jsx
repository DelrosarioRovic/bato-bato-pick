import Cards from "./cards";
import iconPaper from "../assets/icon/icon-paper.svg";
import iconRock from "../assets/icon/icon-rock.svg";
import iconScissors from "../assets/icon/icon-scissors.svg";
import { useEffect, useState } from "react";
import Result from "./result";

const SelectedContainer = ({
  choice,
  totalScore,
  setTotalScore,
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
    if (choice === aiChoice) {
      return setWinner("tie");
    } else if (
      (choice === 0 && aiChoice === 1) ||
      (choice === 1 && aiChoice === 2) ||
      (choice === 2 && aiChoice === 0)
    ) {
      setTotalScore(totalScore + 1);
      return setWinner("win");
    } else {
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
    <div className="flex items-center justify-evenly">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-white font-bold">YOU PICKED</h1>
        <Cards
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

      <div className="flex flex-col items-center gap-10">
        <h1 className="text-white font-bold">THE HOUSE PICKED</h1>
        {loadings ? (
          <Cards
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
          <div className="bg-slate-950 w-28 h-28 rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default SelectedContainer;
