import { useState } from "react";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const BallContainer = ({ tech, i }) => {
  const [display, setDisplay] = useState(false);

  return (
    <motion.div
      className="w-28 h-28 text-center"
      key={tech.name}
      variants={slideIn("left", "spring", i * 0.5, 0.2)}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <BallCanvas icon={tech.icon} />

      {display && (
        <span className="w-fit h-fit inline-block
         green-pink-gradient font-semibold text-center
         text-[14px] px-2">
         {tech.name}
         </span>
      )}
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, i) => (
        <BallContainer key={tech.name} tech={tech} i={i} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
