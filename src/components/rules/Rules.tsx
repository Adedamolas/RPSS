import { MdOutlineCancel } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface RulesProps {
  showModal: () => void;
}
export default function Rules({ showModal }: RulesProps) {
  return (
    <div className="fixed top-0 flex flex-row w-full justify-center align-middle bg-rulediv h-auto" onClick={showModal}>
      <AnimatePresence>
        <motion.div className=" m-auto" onClick={showModal}>
          <article className="bg-white p-5 text-darktext rounded-lg m-auto">
            <div className=" flex flex-row justify-between place-items-center w-full">
              <h3>RULES</h3>
              <MdOutlineCancel
                onClick={showModal}
                className="text-3xl cursor-pointer"
              />
            </div>
            <div>
              <img src="./images/image-rules-bonus.svg" alt="" />
            </div>
          </article>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
