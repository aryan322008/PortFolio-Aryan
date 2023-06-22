import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from "../canvas";
import { text, typing } from "../../utils/motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const name = "Aryan Gavale";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");

    setIsMobile(mediaQuery.matches);

    const handleQueryChange = (event) => {
      setIsMobile(event.matches);
    }; //event == mediaQuery value

    mediaQuery.addEventListener("change", handleQueryChange);

    return () => mediaQuery.removeEventListener("change", handleQueryChange);
  }, []);

  return (
    <section className="relative xs:top-9 top-14 w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 xs:top-[80px] top-[60px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} flex flex-row text-white relative`}>
          Hi! I'm &nbsp;
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("<span class=text-[#915eff]>Aryan Gavale</span>")
                  .start();
              }}
              options={{
                autoStart: true,
                cursorClassName: "font-extralight Typewriter__cursor",
                delay: 50,
                cursor: "",
              }}
            />
          </h1>
          <h3 className={`${styles.heroSubText} flex flex-row mt-2 text-white-100`}>
          I develop &nbsp;
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .start();
              }}
              options={{
                strings: ["3D Visuals", "Designer", "UI/UX"],
                autoStart: true,
                cursorClassName: "font-extralight Typewriter__cursor",
                delay: 50,
                loop: true,
                wrapperClassName: "text-[#915eff]"
              }}
            />
          </h3>
        </div>
      </div>
      <div className="relative xs:top-2 bottom-7 w-full h-full">
        <ComputersCanvas isMobile={isMobile} />
      </div>
    </section>
  );
};
export default Hero;
