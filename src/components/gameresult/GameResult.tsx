import { motion } from "framer-motion";
import OpponentComponent from "../opponentcomponent/OpponentComponent";

interface GameResultProps {
  randomIndex: number;
  randomPick: any;
  handleWhichBtnWasClicked: () => void;
}

export default function GameResult({
  randomIndex,
  randomPick,
  handleWhichBtnWasClicked,
}: GameResultProps) {
  return (
    <section className=" flex flex-row w-full justify-center gap-4 space-x-4 text-center">
      <div>
        <h3>YOU PICKED</h3>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-red p-8 rounded-full cursor-pointer"
        >
          <div className=" bg-white p-10 rounded-full">
            <img src="./images/icon-lizard.svg" alt="" />
          </div>
        </motion.div>
      </div>
      <div>
        <h1>YOU WIN</h1>
        <button onClick={handleWhichBtnWasClicked}>PLAY AGAIN</button>
      </div>
      <div className="flex flex-col justify-center text">
        <h3>THE HOUSE PICKED</h3>
        {/* <div className="w-48">{choices2[randomIndex]}</div> */}
      </div>
    </section>
  );
}
