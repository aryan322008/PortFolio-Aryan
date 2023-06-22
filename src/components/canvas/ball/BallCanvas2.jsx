import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useTexture,
  Decal,
  Float,
  View,
} from "@react-three/drei";
import CanvasLoader from "../../Loader";
import Ball from "./Ball";

const BallCanvas = ({ icon, container, tracking }) => {
  return (
    <>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imageUrl={icon} />
      </Suspense>
    </>
  );
};

export default BallCanvas;
