import Image from "next/image";

const Cards = ({ bgColor, icon, size }) => {
  return (
    <div className={`${bgColor} rounded-full ${size} p-4 outside-shadow `}>
      <div className=" inside-shadow bg-white h-full w-full flex items-center justify-center rounded-full">
        <Image alt="image" src={icon} />
      </div>
    </div>
  );
};

export default Cards;
