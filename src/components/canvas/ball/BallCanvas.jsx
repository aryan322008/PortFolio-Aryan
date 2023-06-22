import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useTexture,
  Decal,
  Float,
} from "@react-three/drei";
import CanvasLoader from "../../Loader";
import Ball from "./Ball";

const BallCanvas = ({ icon }) => {

  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      className="canvas"   
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imageUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
