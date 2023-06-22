import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { fadeIn } from "../../utils/motion";

const TagImg = ({ icon, name }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className="flex flex-col-reverse justify-center items-center relative"
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <img src={icon} alt={name} key={name} className="h-[40px] w-[40px]" />

      {display && (
        <span
          className="w-fit h-fit inline-block
     bg-white font-semibold text-center
     text-[12px] px-2 text-black rounded-3xl absolute top-[-15px]"
        >
          {name}
        </span>
      )}
    </div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
      >
        <div className="w-full relative h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagImg icon={tag.img} name={tag.name} />
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
