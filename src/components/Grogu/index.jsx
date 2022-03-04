import { Center } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GroguGLTF from "../../../assets/models/grogu.gltf";

const Grogu = () => {
  const result = useLoader(GLTFLoader, GroguGLTF);

  return (
    <Center alignCenter justifyCenter>
      <primitive object={result.scene} scale={12.5} />
    </Center>
  );
};

export default Grogu;
