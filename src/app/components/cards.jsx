import Image from "next/image";

const Cards = ({ bgColor, icon }) => {
  return (
    <div className={`${bgColor} rounded-full w-32 h-32 p-4  `}>
      <div className="bg-white h-full w-full flex items-center justify-center rounded-full">
        <Image alt="image" src={icon} />
      </div>
    </div>
  );
};

export default Cards;
