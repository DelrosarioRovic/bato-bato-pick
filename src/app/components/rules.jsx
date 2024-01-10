import { AiOutlineClose } from "react-icons/ai";
import imageRules from "../assets/image/image-rules.svg";
import Image from "next/image";

const Rules = ({ setIsRulesShow }) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-blur">
      <div className="flex flex-col gap-20 z-20 p-10 rounded-lg bg-white h-[500px] w-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[45%]">
        <div className="flex justify-between w-full">
          <h1 className="font-bold text-sky-950 text-2xl">RULES</h1>
          <AiOutlineClose color="gray" onClick={() => setIsRulesShow(false)} />
        </div>
        <div className="flex justify-center items-center w-full">
          <Image src={imageRules} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Rules;
