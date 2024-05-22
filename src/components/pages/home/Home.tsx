import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import Rules from "../../rules/Rules";
import MainGame from "../../maingame/MainGame";
import GameResult from "../../gameresult/GameResult";
import { ActionFunction } from "react-router-dom";
import { SetStateAction } from "react";
interface HomeProps {
  score: number;
  showRules: boolean;
  isBtnClicked: boolean;
  randomIndex: number;
  randomPick : any
  handleWhichBtnWasClicked: () => void;
  buttonClick: () => void;
  showModal: () => void;
}
export default function Home({
  score,
  buttonClick,
  showModal,
  showRules,
  isBtnClicked,
  randomIndex,
  handleWhichBtnWasClicked,
  randomPick,
}: HomeProps) {
  return (
    <div className="w-full flex flex-col place-items-center p-8 space-y-24">
      <Navbar score={score} />

      {isBtnClicked ? (
        <GameResult
          handleWhichBtnWasClicked={handleWhichBtnWasClicked}
          randomIndex={randomIndex}
          randomPick= {randomPick}
        />
      ) : (
        <MainGame handleWhichBtnWasClicked={handleWhichBtnWasClicked} />
      )}

      {showRules && <Rules showModal={showModal} />}

      <Footer showModal={showModal} />
    </div>
  );
}
