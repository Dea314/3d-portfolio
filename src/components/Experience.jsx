import React from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./canvas/Cube";

const Experience = () => {
  return (
    <Canvas camera={{ position: [-10, 10, 10], fov: 35 }}>
      <ambientLight />
      <pointLight position={[-10, 10, -10]} castShadow />
      {[-3, 0, 3].map((x) =>
        [-3, 0, 3].map((z) => (
          <Cube key={`${x}-${z}`} position={[x, 0, z]} cubeKey={`${x}-${z}`} />
        ))
      )}
    </Canvas>
  );
};

export default Experience;
