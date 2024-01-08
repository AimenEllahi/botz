import React, { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useControls } from "leva";

export function Model(props) {
  const { nodes, materials } = useGLTF("/logos.glb");
  const groupRef = useRef();
  const uiRef = useRef();
  const logoARef = useRef();
  const logoArrowRef = useRef();
  const logoBlueprismRef = useRef();

  const handleHover = (ref, hoverY, returnY) => {
    gsap.to(ref.current.position, {
      y: "+=3.5",
      duration: 1,
      ease: "power2.inOut",

      onStart: () => {
        gsap.to(ref.current.rotation, {
          y: Math.PI * 2,
          duration: 1,
          ease: "power2.inOut",
        });
      },

      onComplete: () => {
        gsap.to(ref.current.position, {
          y: returnY,
          duration: 1,
          ease: "power2.inOut",

          onStart: () => {
            gsap.to(ref.current.rotation, {
              y: 0,
              duration: 1,
              ease: "power2.inOut",
            });
          },
        });
      },
    });
  };

  // const { position } = useControls("logos", {
  //   position: {
  //     value: [-12.1, -1.3, 1],
  //     step: 0.1,
  //   },
  // });

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      castShadow
      position={[16, 28.5, 21]}
      scale={0.7}
      rotation={[0, -0.5, 0]}
    >
      <Float speed={2} rotationIntensity={0} floatingRange={[0.4, 1.5]}>
        <mesh
          ref={uiRef}
          onPointerOver={() => handleHover(uiRef, 3.5, -0.1)}
          castShadow
          receiveShadow
          geometry={nodes.logo_ui.geometry}
          material={materials.initialShadingGroup}
          position={[-7.8, -0.1, 1.8]}
        />
        <mesh
          ref={logoARef}
          onPointerOver={() => handleHover(logoARef, 3.5, -0.7)}
          castShadow
          receiveShadow
          geometry={nodes.logo_A.geometry}
          material={materials.initialShadingGroup}
          position={[8.8, -0.7, -3.8]}
        />
        <mesh
          ref={logoArrowRef}
          onPointerOver={() => handleHover(logoArrowRef, 3.5, -0.2)}
          castShadow
          receiveShadow
          geometry={nodes.logo_arrow.geometry}
          material={materials.initialShadingGroup}
          position={[8.6, -0.2, -10]}
        />
        <mesh
          ref={logoBlueprismRef}
          onPointerOver={() => handleHover(logoBlueprismRef, 3.5, -1.5)}
          castShadow
          receiveShadow
          geometry={nodes.logo_blueprism.geometry}
          material={materials.initialShadingGroup}
          position={[-16.5, -1.5, -6.7]}
          scale={1.7}
        />
      </Float>
    </group>
  );
}

useGLTF.preload("/logos.glb");
