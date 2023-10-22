import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  TextureLoader,
  BoxGeometry,
  DoubleSide,
  MeshStandardMaterial,
} from "three";
import { styles } from "../../styles";
import { useRef } from "react";
import more2 from "./siders/more2.jpg";
import more from "./siders/more.jpg";
import fall from "./siders/fall.jpg";
import jammu from "./siders/jammu.jpg";
import munnar from "./siders/munnar.jpg";
import campsites from "./siders/campsites.jpg";
import { motion } from "framer-motion";
import { OrbitControls, useMotion } from "@react-three/drei";
import { useMotionValue } from "framer-motion";

export default function index() {
  return (
    <div className={styles.cube}>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef(null);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };
  /*  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005)); */

  const texture_1 = useLoader(TextureLoader, more);
  const texture_2 = useLoader(TextureLoader, more2);
  const texture_3 = useLoader(TextureLoader, jammu);
  const texture_4 = useLoader(TextureLoader, munnar);
  const texture_5 = useLoader(TextureLoader, fall);
  const texture_6 = useLoader(TextureLoader, campsites);

  return (
    <motion.mesh ref={mesh} rotation-x={mouse.x} roation-y={mouse.y}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  );
}
