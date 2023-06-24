import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer, slider } from "../utils/motion";
import { Slider } from "../components"


const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Slider/>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
