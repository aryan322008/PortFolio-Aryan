import { Suspense } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../../Loader";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

const ComputerCanvas = ({ isMobile }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
