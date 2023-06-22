import React from "react";
import {
  useTexture,
  Decal,
  Float,
} from "@react-three/drei";

const Ball = ({ imageUrl }) => {
  const [decal] = useTexture([imageUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1}>
      <directionalLight position={[0, 0, 0.05]} />
      <ambientLight intensity={0.25} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          flatShading
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

export default Ball;
