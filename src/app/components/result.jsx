const Result = ({ result, screenPage, setScreenPage }) => {
  const handlePlayAgain = () => {
    setScreenPage(screenPage - 1);
  };

  return (
    <div className="flex items-center flex-col gap-3">
      <h1 className="text-white font-semibold text-3xl text-shadow">
        YOU {result}{" "}
      </h1>
      <button
        className="bg-white px-10 py-2 rounded-md text-xs shadow-result"
        onClick={handlePlayAgain}
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default Result;
