import React from "react";
import { useGLTF } from "@react-three/drei";

const Computer = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [-1, -2.8, -1.65] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default Computer;
