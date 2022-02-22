import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Grogu from "../Grogu";
import styles from "./styles.module.css";

const GroguSection = () => {
  return (
    <Box h="200px" display="flex" justifyContent="center" alignItems="center">
      <Canvas className={styles.canvas}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, -2]} intensity={1} />
        <Suspense fallback={null} className={styles.suspense}>
          <Grogu />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default GroguSection;
