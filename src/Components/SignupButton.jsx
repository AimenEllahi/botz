import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function Model(props) {
  const { nodes, materials } = useGLTF("/signup.glb");

  // const { position } = useControls({
  //   position: {
  //     value: [15, 28, 24],
  //     step: 0.1,
  //   },
  // });
  return (
    <group
      {...props}
      dispose={null}
      position={[15.5, 28, 24]}
      rotation={[0, 5.5, 0]}
      scale={1}
    >
      <group
        rotation={[0, Math.PI / 4, -Math.PI / 2]}
        scale={[0.602, 0.602, 0.407]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_1.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/signup.glb");
