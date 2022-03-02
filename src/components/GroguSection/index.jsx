import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Grogu from "../Grogu";

const GroguSection = () => {
  return (
    <Box h="300px">
      <Canvas>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Grogu />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default GroguSection;
