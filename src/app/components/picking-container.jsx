import iconPaper from "../assets/icon/icon-paper.svg";
import iconRock from "../assets/icon/icon-rock.svg";
import iconScissors from "../assets/icon/icon-scissors.svg";
import triangleImg from "../assets/image/bg-triangle.svg";
import Cards from "./cards";
import Image from "next/image";

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

const PickingContainer = ({ setChoices, screenPage, setScreenPage }) => {
  const handleSelectChoice = (index) => {
    setChoices(index);
    setScreenPage(screenPage + 1);
  };

  return (
    <div className="py-20">
      <div className="flex items-center justify-center ">
        <div className="relative">
          {cardsCollection.map((cards) => (
            <div
              key={cards.id}
              onClick={() => handleSelectChoice(cards.id)}
              className={`z-10 absolute ${
                cards.id === 0
                  ? "-top-14 -left-14"
                  : cards.id === 2
                  ? "-top-14 -right-14"
                  : "-bottom-10 -translate-x-1/2 left-1/2"
              }`}
            >
              <Cards
                size={"w-32 h-32"}
                bgColor={cards.bgColor}
                icon={cards.icon}
                id={cards.id}
              />
            </div>
          ))}
          <Image alt="img" src={triangleImg} className="w-56" />
        </div>
      </div>
    </div>
  );
};

export default PickingContainer;
