import { useState, useEffect, Suspense, useRef } from "react";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion, spring } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { View, Preload, OrbitControls, Html, Mask } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Ball from "../canvas/ball/Ball2";
import CanvasLoader from "../Loader";
import useRefs from "react-use-refs";
import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";

const Tech2 = () => {
  const [display, setDisplay] = useState("");

  const controlsRef = useRef();

  const [tech, setTech] = useState({});

  // useFrame(() => {
  //   controlsRef.current.update();
  // });

  useEffect(() => {
    setTech(technologies[0]);
  }, []);

  return (
    <>
      <motion.div variants={textVariant(1.5)}>
        <p className={`${styles.heroSubText}`}>Tech Stack</p>
        <h2 className={styles.heroHeadText}>I Know</h2>
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 1.5, 1.5)}
        ref={controlsRef}
        className="flex flex-row flex-wrap justify-center gap-10 h-[400px] w-[100vw]"
      >
        <Canvas
          frameloop="demand"
          gl={{ preserveDrawingBuffer: true }}
          className="canvas"
          camera={{ position: [50, 300, 120], fov: 10 }}
        >
          <group key={0} position={[-70, 20, 0]} rotation={[0, 0.5, 0]}>
            {technologies.map((tech, index) => (
              <Mask
               id={index}
              //  position={[0, 0, 0.95]}
               >
              <Suspense fallback={<CanvasLoader />}>
                <mesh
                  key={index}
                  position={[
                    (index % 8) * 18,
                    -(Math.floor(index / 8) * 18),
                    0,
                  ]}
                  onPointerEnter={() => setDisplay(tech.name)}
                  onPointerLeave={() => setDisplay("")}
                >
                  <Ball imageUrl={tech.icon} />
                  <Html>
                    {display === tech.name && (
                      <span className="w-max h-fit inline-block bg-white font-semibold text-center text-[15px] text-black rounded-3xl absolute top-[-35px] px-2">
                        {display}
                      </span>
                    )}
                  </Html>
                </mesh>
              </Suspense>
                </Mask>
            ))}
          </group>

          <Preload all />
        </Canvas>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech2, "tech");
