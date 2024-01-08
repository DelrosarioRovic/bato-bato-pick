const ScoreBoard = ({ totalScore }) => {
  return (
    <div className="flex justify-between items-center border-2 border-gray-500 rounded-lg p-5">
      <div className="flex flex-col text-white font-semibold text-xl">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>

      <div className="flex flex-col items-center bg-white px-8 py-1 rounded-md shadow-md">
        <p className="text-blue-800 text-xs ">SCORE</p>
        <h2 className="font-bold text-gray-700 text-5xl">{totalScore}</h2>
      </div>
    </div>
  );
};

export default ScoreBoard;
