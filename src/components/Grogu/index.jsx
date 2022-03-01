/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: NestaEric (https://sketchfab.com/Nestaeric)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/mandalorian-grogu-the-force-1cbbc8a231154426ade7d3b11cf5bb0e
title: Mandalorian - Grogu ( The force )
*/

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import GroguGLTF from "/grogu.gltf";

export default function Grogu({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(GroguGLTF);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2.7, 0, 0]} scale={0.01}>
        <group
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
          style={{ position: "relative", top: "20px" }}
        >
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.BY_fur_fur_0.geometry}
              material={materials.material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.BY_skin_skin_0.geometry}
              material={materials.skin}
            />
            <mesh
              geometry={nodes.BY_skin_nail_0.geometry}
              material={materials.nail}
            />
            <mesh
              geometry={nodes.BY_skin_oral_0.geometry}
              material={materials.oral}
            />
            <mesh
              geometry={nodes.BY_skin_pupil_0.geometry}
              material={materials.pupil}
            />
            <mesh
              geometry={nodes.BY_skin_eyes_b_0.geometry}
              material={materials.eyes_b}
            />
            <mesh
              geometry={nodes.BY_skin_eyes_w_0.geometry}
              material={materials.eyes_w}
            />
            <mesh
              geometry={nodes.BY_skin_lens_0.geometry}
              material={materials.lens}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.cloth_shape_001_BY_cloth3_0.geometry}
              material={materials.BY_cloth3}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.cloth_shape_002_BY_cloth2_0.geometry}
              material={materials.BY_cloth2}
            />
            <mesh
              geometry={nodes.cloth_shape_002_BY_cloth1_0.geometry}
              material={materials.BY_cloth1}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.cloth_shape_003_BY_cloth4_0.geometry}
              material={materials.BY_cloth4}
            />
          </group>
          <group
            position={[-9.95, 27.72, 17.37]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.Sphere_sphere1_0.geometry}
              material={materials.sphere1}
            />
            <mesh
              geometry={nodes.Sphere_sphere2_0.geometry}
              material={materials.sphere2}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(GroguGLTF);
