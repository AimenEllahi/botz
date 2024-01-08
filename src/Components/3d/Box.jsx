import React, { useRef, useMemo, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
export default function BoxInstance({ position, index }) {
  if (
    ((index.i === 8 || index.i === 7 || index.i === 9) && index.j === 0) ||
    ((index.i === 8 || index.i === 7) && index.j === 1)
  ) {
    return <></>;
  }
  const gltf = useGLTF("/box.glb");
  const boxRef = useRef();

  const clonedGltf = useMemo(() => {
    if (gltf.scene) {
      const cloned = gltf.scene.clone(true);
      //to cast shadow
      cloned.traverse((obj) => {
        obj.castShadow = true;
        obj.receiveShadow = true;
      });
      return cloned;
    }
  }, [gltf.scene]);

  useEffect(() => {
    if (
      (index.i === 7 && index.j === 2) ||
      (index.i === 6 && index.j === 1) ||
      (index.i === 9 && index.j === 1) ||
      (index.i === 9 && index.j === 2) ||
      (index.i === 5 && index.j === 2)
    ) {
      return;
    }
    if (!boxRef.current) return;
    const animateBox = () => {
      gsap.to(boxRef.current.position, {
        y: 0,
        duration: 3,
        onComplete: () => {
          // Animation completed, now animate back to 0
          gsap.to(boxRef.current.position, {
            y: -10,
            duration: 5,
            delay: Math.random() * 50, // Add a random delay
            onComplete: animateBox, // Repeat the animation
          });
        },
      });
    };

    animateBox(); // Start the animation when the component mounts

    // Cleanup GSAP when the component unmounts
    return () => {
      gsap.killTweensOf(boxRef.current.position);
    };
  }, []);

  return (
    <group
      castShadow
      receiveShadow
      scale={1.3}
      position={position}
      rotation={[0, 0, 0]}
    >
      <primitive receiveShadow object={clonedGltf} ref={boxRef} />
    </group>
  );
}
