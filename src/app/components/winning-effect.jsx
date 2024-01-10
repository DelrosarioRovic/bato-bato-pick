const WinnerEffect = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[45%]  h-[500px] w-[500px] first-layer rounded-full -z-10 bg-[#1a8ca50f]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%]  h-[400px] w-[400px] first-layer rounded-full -z-10 bg-[#1a8ca50f]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%]  h-[300px] w-[300px] first-layer rounded-full -z-10 bg-[#1a8ca50f]"></div>
      </div>
    </div>
  );
};

export default WinnerEffect;
