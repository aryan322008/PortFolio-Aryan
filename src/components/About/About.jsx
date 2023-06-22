import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import ServiceCard from './ServiceCard'

const About = () => {
  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}`}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat magni
        quidem sequi minus quam excepturi deleniti quos error et sunt provident
        iusto est ut ea voluptas, impedit at tempore iste.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.title}
              index={index}
              {...service} // spreads all service field inside the component
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
