import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../../styles";
import { experiences } from "../../../constants";
import { SectionWrapper } from "../../../hoc";
import { staggerContainer, textVariant } from "../../../utils/motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl z-0`}
    >
      <motion.div variants={textVariant()} id="timeline">
        <p className={styles.heroSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="sm:mt-20 mt-0 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default Experience;
