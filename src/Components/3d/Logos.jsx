import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export function Model(props) {
  const { nodes, materials } = useGLTF("/logos.glb");
  const groupRef = useRef();
  const uiRef = useRef();
  const logoARef = useRef();
  const logoArrowRef = useRef();
  const logoBlueprismRef = useRef();

  const handleHover = (ref, hoverY, returnY) => {
    gsap.to(ref.current.rotation, {
      y: Math.PI * 2,
      duration: 0.7,
      ease: "power2.inOut",

      onComplete: () => {
        gsap.to(ref.current.position, {
          y: hoverY,
          duration: 0.5,
          ease: "power2.inOut",

          onComplete: () => {
            gsap.to(ref.current.rotation, {
              y: 0,
              duration: 0.5,

              ease: "power2.inOut",
            });

            gsap.to(ref.current.position, {
              y: returnY,
              duration: 0.5,
              ease: "power2.inOut",
              delay: 1,
            });
          },
        });
      },
    });
  };

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
        ref={uiRef}
        onPointerOver={() => handleHover(uiRef, 3.5, 1.8)}
        castShadow
        receiveShadow
        geometry={nodes.logo_ui.geometry}
        material={materials.initialShadingGroup}
        position={[-6.5, 1.8, 8]}
      />
      <mesh
        ref={logoARef}
        onPointerOver={() => handleHover(logoARef, 3.5, 1)}
        castShadow
        receiveShadow
        geometry={nodes.logo_A.geometry}
        material={materials.initialShadingGroup}
        position={[7, 1, 2]}
      />
      <mesh
        ref={logoArrowRef}
        onPointerOver={() => handleHover(logoArrowRef, 3.5, 1.801)}
        castShadow
        receiveShadow
        geometry={nodes.logo_arrow.geometry}
        material={materials.initialShadingGroup}
        position={[6, 1.801, -7]}
        scale={2}
      />
      <mesh
        ref={logoBlueprismRef}
        onPointerOver={() => handleHover(logoBlueprismRef, 3.5, 0.288)}
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
