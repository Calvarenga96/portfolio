import { Center } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GroguGLTF from "../../../assets/models/grogu.gltf";
import useResponsive from "../../hooks/useResponsive";

const Grogu = () => {
  const { responsive } = useResponsive();
  const result = useLoader(GLTFLoader, GroguGLTF);

  return (
    <Center alignCenter justifyCenter>
      <primitive object={result.scene} scale={responsive ? 11.5 : 12.5} />
    </Center>
  );
};

export default Grogu;
