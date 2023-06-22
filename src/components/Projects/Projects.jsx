import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion, spring } from "framer-motion";
import { styles } from "../../styles";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
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

      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={`${project.title}-${index}`}
              index={index}
              {...project} // spreads all service field inside the component
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
