import { motion } from "framer-motion";

interface MainGameProps {
    handleWhichBtnWasClicked : () => void
}
 
export default function MainGame({handleWhichBtnWasClicked}: MainGameProps ) {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img className=" w-[500px] " src="./images/bg-pentagon.svg" alt="" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" absolute top-[-10%] left-[30%] bg-green p-8 rounded-full cursor-pointer"

        onClick={handleWhichBtnWasClicked}
      >
        <div className=" bg-white p-10 rounded-full">
          <img src="./images/icon-lizard.svg" alt="" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className=" absolute top-[20%] left-[-10%] bg-blue p-8 rounded-full cursor-pointer"
      >
        <div className=" bg-white p-10 rounded-full">
          <img src="./images/icon-paper.svg" alt="" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" absolute top-[20%] right-[-10%] bg-red p-8 rounded-full cursor-pointer"
      >
        <div className=" bg-white p-10 rounded-full">
          <img src="./images/icon-rock.svg" alt="" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className=" absolute top-[70%] right-0 bg-yellow p-8 rounded-full cursor-pointer"
      >
        <div className=" bg-white p-10 rounded-full">
          <img src="./images/icon-scissors.svg" alt="" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className=" absolute top-[70%] left-0 bg-orange p-8 rounded-full cursor-pointer"
      >
        <div className=" bg-white p-10 rounded-full">
          <img src="./images/icon-spock.svg" alt="" />
        </div>
      </motion.div>
    </section>
  );
}
1;
