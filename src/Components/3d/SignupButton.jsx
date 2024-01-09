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
    const tl = gsap.timeline({});
    tl.to(camera.position, {
      duration: 2,
      delay: 0.5,
      x: 13,
      y: 34,
      z: -16,

      ease: "power2.inOut",
    })
      .to(camera.rotation, {
        duration: 1,
        ease: "power2.inOut",
        y: Math.PI / 2,
      })
      .to(camera.position, {
        x: -2.5,
        y: 30,
        duration: 1.5,
        delay: 0.5,
        onComplete: () => {
          gsap.to("#signup-form", {
            duration: 2,
            autoAlpha: 1,
            display: "block",
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
      position={[15.5, 29, 24]}
      rotation={[-0.25, 5.6, 0]}
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
