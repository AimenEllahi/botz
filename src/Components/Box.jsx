import React, { useRef, useMemo, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { gsap } from "gsap";
export default function BoxInstance({ position }) {
  const gltf = useLoader(GLTFLoader, "/box.glb");
  const boxRef = useRef();

  const clonedGltf = useMemo(() => {
    if (gltf.scene) {
      const cloned = gltf.scene.clone(true);
      return cloned;
    }
  }, [gltf.scene]);

  useEffect(() => {
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
    <group scale={1.1} position={position} rotation={[0, 1, 0]}>
      <primitive object={clonedGltf} ref={boxRef} />
    </group>
  );
}
