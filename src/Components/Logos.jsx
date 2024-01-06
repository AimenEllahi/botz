import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/logos.glb");
  const groupRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const floatHeight = Math.sin(time) * 0.2;
    groupRef.current.position.y = 28.5 + floatHeight;
  });

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      position={[16, 28.5, 21]}
      scale={0.7}
      rotation={[0, -0.5, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_ui.geometry}
        material={materials.initialShadingGroup}
        position={[-2, 1.8, 8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_A.geometry}
        material={materials.initialShadingGroup}
        position={[7, 1, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_arrow.geometry}
        material={materials.initialShadingGroup}
        position={[6, 1.801, -7]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_blueprism.geometry}
        material={materials.initialShadingGroup}
        position={[-6, 0.288, 0]}
        scale={1.7}
      />
    </group>
  );
}

useGLTF.preload("/logos.glb");
