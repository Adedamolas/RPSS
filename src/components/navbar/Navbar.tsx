import { motion } from "framer-motion";

interface NavProps {
  score: number;
}
export default function Navbar({ score }: NavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{once: true}}
      className=" w-full flex flex-row justify-center"
    >
      <nav className="flex flex-row justify-between align-middle w-3/6 border-2 border-solid rounded-2xl p-6 border-header">
        <div>
          <img src="./images/logo-bonus.svg" alt="" />
        </div>
        <div className=" flex flex-col justify-center place-items-center bg-white w-28 py-2 rounded-lg">
          <h4 className=" text-score">SCORE</h4>
          <h2 className=" text-darktext">
            {score}
          </h2>
        </div>
      </nav>
    </motion.div>
  );
}
