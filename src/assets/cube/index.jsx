import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { styles } from "../../styles";
import { useEffect, useRef } from "react";
import blog from "./siders/blog.jpg";
import athens from "./siders/athens.jpg";
import toys from "./siders/toys.png";
import log from "./siders/log.png";
import more from "./siders/more.jpg";
import tortilla from "./siders/tortilla.jpg";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { useMotionValue } from "framer-motion";

// 3D cube with 6 faces

export default function Index() {
  return (
    <div className={styles.cube}>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={3} />
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
    const x = -0.5 + clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  /* useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005)); */

  const handleFaceClick = (link) => {
    window.location.href = link;
  };

  useFrame((state, delta) => {
    const targetRotationZ = Math.PI / 4;
    mesh.current.rotation.x +=
      (targetRotationZ - mesh.current.rotation.x) * 0.05;
    mesh.current.rotation.z +=
      (targetRotationZ - mesh.current.rotation.z) * 0.05;
  });

  const texture_1 = useLoader(TextureLoader, toys);
  const texture_2 = useLoader(TextureLoader, tortilla);
  const texture_3 = useLoader(TextureLoader, log);
  const texture_4 = useLoader(TextureLoader, more);
  const texture_5 = useLoader(TextureLoader, athens);
  const texture_6 = useLoader(TextureLoader, blog);

  return (
    <motion.mesh ref={mesh} rotation-x={mouse.y} roation-y={mouse.x}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  );
}

/*  const textures = [
    {
      texture: useLoader(TextureLoader, toys),
      link: "https://discourse.threejs.org/t/mapping-text-onto-faces-of-cube/25358",
    },
    {
      texture: useLoader(TextureLoader, tortilla),
      link: "https://threejs.org/docs/#api/en/loaders/ObjectLoader",
    },
    {
      texture: useLoader(TextureLoader, log),
      link: "https://threejs.org/docs/#api/en/loaders/ObjectLoader",
    },
    {
      texture: useLoader(TextureLoader, more),
      link: "https://threejs.org/docs/#api/en/loaders/ObjectLoader",
    },
    {
      texture: useLoader(TextureLoader, athens),
      link: "https://www.simplegermany.com/",
    },
    {
      texture: useLoader(TextureLoader, blog),
      link: "https://threejs.org/docs/#api/en/loaders/ObjectLoader",
    },
  ];
  return (
    <motion.mesh ref={mesh} rotation-x={mouse.y} roation-y={mouse.x}>
      {[...Array(6)].map((_, index) => (
        <mesh key={index} onClick={() => handleFaceClick(textures[index].link)}>
          <boxGeometry args={[3.5, 3.5, 3.5]} />
          <meshStandardMaterial
            map={textures[index].texture}
            attach={`material-${index}`}
          />
        </mesh>
      ))}
    </motion.mesh>
  );
}
 */
