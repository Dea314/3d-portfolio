import { Canvas } from "@react-three/fiber";
import Cube from "../assets/cube/index.jsx";
//import MazeCube from "./MazeCube.jsx";

const Tech = () => {
  return (
    <div className="mt-5 h-96">
      <Cube />
    </div>

    /*  <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <MazeCube />
    </Canvas> */
  );
};

export default Tech;
