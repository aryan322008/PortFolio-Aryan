import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt
        className="xs:w-[250px] w-full"
        options={{
          max: 45,
          speed: 450,
          scale: 1,
        }}
      >
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-[18px] font-bold w-full text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

export default ServiceCard;
