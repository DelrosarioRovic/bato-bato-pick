"use client";
import SinglePlayerContainer from "../components/Single-player-container";

export default function SinglePlayer() {
  return (
    <div className="h-screen w-full relative">
      <div className=" absolute h-screen w-full bg-sky-950 -z-10"></div>
      <SinglePlayerContainer />
    </div>
  );
}
