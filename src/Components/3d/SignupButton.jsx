import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/signup.glb");
  const groupRef = useRef();
  const { camera } = useThree();

  const handleModelClick = () => {
    // Define the animation using GSAP
    gsap.to(groupRef.current.position, {
      duration: 0.3,
      z: "-=0.5",
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(groupRef.current.position, {
          duration: 0.5,
          z: 24,
          ease: "power2.inOut",
          onComplete: () => {
            // Trigger camera animation after model animation
            animateCamera();
          },
        });
      },
    });
  };

  const animateCamera = () => {
    gsap.to(camera.position, {
      duration: 2,
      delay: 0.5,
      z: 2,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(camera.rotation, {
          duration: 2,
          ease: "power2.inOut",

          y: Math.PI / 2,
          onComplete: () => {
            gsap.to("#signup-form", {
              duration: 2,
              autoAlpha: 1,
              display: "block",
            });
          },
        });
      },
    });
  };

  return (
    <group
      {...props}
      castShadow
      receiveShadow
      ref={groupRef}
      dispose={null}
      position={[16, 27, 24]}
      rotation={[-0.25, 5.5, 0]}
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
