import { Box } from "@chakra-ui/react";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Grogu from "../Grogu";
import Loading from "../Loading";

const GroguSection = () => {
  return (
    <Box
      h="300px"
      mb={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Suspense fallback={<Loading />}>
        <Canvas frameloop="demand">
          <OrbitControls autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Grogu />
          <Stars />
        </Canvas>
      </Suspense>
    </Box>
  );
};

export default GroguSection;
