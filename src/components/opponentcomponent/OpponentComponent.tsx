import { motion } from "framer-motion";

interface OpponentComponentProps {
  randomIndex: number;
}

export default function OpponentComponent({
  randomIndex,
}: OpponentComponentProps) {
  const choices = [
    {
      name: "scissors",
      image: "./images/icon-scissors.svg",
      color: "yellow",
    },
    {
      name: "spock",
      image: "./images/icon-spock.svg",
      color: "aqua",
    },
    {
      name: "paper",
      image: "./images/icon-paper.svg",
      color: "roy-blue",
    },
    {
      name: "lizard",
      image: "./images/icon-lizard.svg",
      color: "purplish",
    },
    {
      name: "rock",
      image: "./images/icon-rock.svg",
      color: "red",
    },
  ];
  return choices.map((choices) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-red p-8 rounded-full cursor-pointer h-min "
      >
        <div className={`p-10 h-min rounded-full bg-${choices.color}`}>
          <img className="w-[80rem]" src= {choices.image} alt="" />
        </div>
      </motion.div>
    );
  });
}
