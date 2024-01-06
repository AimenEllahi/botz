import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export function Model(props) {
  const { nodes, materials } = useGLTF("/signup.glb");
  const groupRef = useRef();

  const handleModelClick = () => {
    // Define the animation using GSAP
    gsap.to(groupRef.current.position, {
      duration: 0.5,
      z: "-=1", // Move the model back
      ease: "power2.inOut",
      onComplete: () => {
        // Move the model back to its original position
        gsap.to(groupRef.current.position, {
          duration: 0.5,
          z: 24,
          ease: "power2.inOut",
        });
      },
    });
  };

  return (
    <group
      {...props}
      ref={groupRef}
      dispose={null}
      position={[15.5, 28, 24]}
      rotation={[0, 5.5, 0]}
      scale={1}
      onClick={handleModelClick}
      onPointerEnter={() => (document.body.style.cursor = "pointer")}
      onPointerLeave={() => (document.body.style.cursor = "auto")}
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
