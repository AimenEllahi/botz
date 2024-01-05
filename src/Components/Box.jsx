import React, { useRef, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export default function BoxInstance({ position }) {
  const gltf = useLoader(GLTFLoader, "/box.glb");
  const boxRef = useRef();

  const clonedGltf = useMemo(() => {
    if (gltf.scene) {
      const cloned = gltf.scene.clone(true);
      return cloned;
    }
  }, [gltf.scene]);

  return (
    <group scale={1.1} position={position} rotation={[0, 1, 0]}>
      <primitive object={clonedGltf} ref={boxRef} />
    </group>
  );
}
