import { useState, useEffect, Suspense, useRef } from "react";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { easeInOut, motion, spring } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { View, Preload, OrbitControls, Html, Mask } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Ball from "../canvas/ball/Ball2";
import CanvasLoader from "../Loader";
import useRefs from "react-use-refs";
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import TagImg from "../Projects/tagsImg";
import { Link } from "react-router-dom";

const Tech2 = () => {
  const [display, setDisplay] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const controlsRef = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 970px)");

    setIsMobile(mediaQuery.matches);

    const handleQueryChange = (event) => {
      setIsMobile(event.matches);
    }; //event == mediaQuery value

    mediaQuery.addEventListener("change", handleQueryChange);

    return () => mediaQuery.removeEventListener("change", handleQueryChange);
  }, []);

  return (
    <>
      <motion.div variants={textVariant(1.5)}>
        <p className={`${styles.heroSubText}`}>Tech Stack</p>
        <h2 className={styles.heroHeadText}>I Know</h2>
      </motion.div>

      <div className="mt-4 flex flex-wrap gap-6 bg-[#151030] p-4 rounded-md visible sm:absolute sm:hidden justify-center items-center">
        {technologies.map((tech, index) => (
          <TagImg icon={tech.icon} name={tech.name} size={"lg"} />
        ))}
      </div>

      <motion.div
        variants={slideIn("left", "tween", 1.5, 1.5)}
        ref={controlsRef}
        className={`flex flex-row flex-wrap gap-10 h-[600px] w-[100vw] z-[-100] sm:visible sm:relative absolute invisible justify-center items-center`}
      >
        <Canvas
          frameloop="demand"
          gl={{ preserveDrawingBuffer: true }}
          className="canvas"
          camera={{ position: [50, 300, 120], fov: 10 }}
        >
          <group
            key={0}
            position={!isMobile ? [-40, 25, 0] : [-25, 25, 0]}
            rotation={[0, 0.5, 0]}
          >
            {technologies.map((tech, index) => (
              <>
                <Suspense fallback={<CanvasLoader />}>
                  <mesh
                    key={index}
                    position={
                      !isMobile
                        ? [(index % 7) * 12, -(Math.floor(index / 7) * 12), 0]
                        : [(index % 5) * 10, -(Math.floor(index / 5) * 10), 0]
                    }
                    onPointerEnter={() => setDisplay(tech.name)}
                    onPointerLeave={() => setDisplay("")}
                  >
                    <Ball imageUrl={tech.icon} isMobile={isMobile} />
                    <Html>
                      {display === tech.name && (
                        <span className="w-max h-fit inline-block bg-white font-semibold text-center text-[15px] text-black rounded-3xl absolute top-[-35px] px-2">
                          {display}
                        </span>
                      )}
                    </Html>
                  </mesh>
                </Suspense>
              </>
            ))}
          </group>

          <Preload all />
        </Canvas>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech2, "tech");
