import { motion } from "framer-motion";
import { slider } from "../../utils/motion";

const Slider = () => {
  return (
        <>
          <motion.div
            variants={slider(.5)}
            className="h-full z-[101] bg-primary  absolute top-0 left-0"
          />
          <motion.div
            variants={slider(.7)}
            className="h-full z-[100] bg-[#151030] absolute top-0 left-0"
          />
          <motion.div
            variants={slider(1)}
            className="h-full z-[99] bg-[#1e1a38] absolute top-0 left-0"
          />
        </>
  );
};

export default Slider;