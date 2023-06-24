import React from "react";
import { useTexture, Decal, Float, OrbitControls } from "@react-three/drei";

const Ball = ({ imageUrl, isMobile }) => {
  const [decal] = useTexture([imageUrl]);
  return (
    <>
      <Float speed={1.75} rotationIntensity={2}>
        <directionalLight
          position={[1, 5, 0.5]}
          intensity={0.01}
          // color={"white"}
        />
        <ambientLight intensity={0.04} />
        <mesh castShadow receiveShadow scale={4}>
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

          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            rotateSpeed={0.15}
          />
        </mesh>
      </Float>
    </>
  );
};

export default Ball;
