import React, { useRef } from "react";
import { Box } from "@react-three/drei";

const MazeCube = () => {
  const cubeRef = useRef();

  return (
    <group>
      <Box ref={cubeRef} args={[3.5, 3.5, 3.5]}>
        <meshBasicMaterial
          attach="material"
          color="orange"
          transparent
          opacity={0.7}
        />
      </Box>
    </group>
  );
};

export default MazeCube;
