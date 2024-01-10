import { usePathname } from "next/navigation";

const ScoreBoard = ({ playerTotalScore, aiTotalScore, round }) => {
  const pathname = usePathname();

  return (
    <div className="max-w-2xl flex justify-between items-center border-2 border-gray-500 rounded-lg p-5 m-auto">
      <div className="flex flex-col text-white font-semibold text-xl">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>

      <div className="flex max-md:flex-col gap-5">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-white text-sm font-semibold">Player 1</h3>
          <div className="flex flex-col items-center bg-white px-8 py-1 rounded-md shadow-md">
            <p className="text-blue-800 text-xs ">SCORE</p>
            <h2 className="font-bold text-gray-700 text-5xl">
              {playerTotalScore}
            </h2>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl text-white">ROUND {round}</h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h3 className="text-white text-sm font-semibold">
            {pathname === "/single-player" ? "AI" : "Player 2"}
          </h3>
          <div className="flex flex-col items-center bg-white px-8 py-1 rounded-md shadow-md">
            <p className="text-blue-800 text-xs ">SCORE</p>
            <h2 className="font-bold text-gray-700 text-5xl">{aiTotalScore}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
