import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Suspense } from "react";
import Loader from "./Loader";
import Platform from "./Platform";
import { Model as SignupButton } from "./SignupButton";
import { useControls } from "leva";
import { lerp } from "three/src/math/MathUtils";

const Models = () => {
  const [mouseRotation, setMouseRotation] = useState({ x: 0, y: 0 });
  const platformRef = useRef();

  // Function to handle mousemove event and update mouseRotation state
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = event.target;

    const x = (clientX / offsetWidth) * 2 - 1;
    const y = -(clientY / offsetHeight) * 2 + 1;

    setMouseRotation({
      x: Math.min(Math.max(x, -1), 1),
      y: Math.min(Math.max(y, -1), 1),
    });
  };

  useFrame(() => {
    platformRef.current.rotation.x = lerp(
      platformRef.current.rotation.x,
      -mouseRotation.y * 0.05,
      0.1
    );
    platformRef.current.rotation.y = lerp(
      platformRef.current.rotation.y,
      mouseRotation.x * 0.05,
      0.1
    );
  });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <group ref={platformRef}>
      <Platform />
      <SignupButton />
    </group>
  );
};

export default function Scene() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 0, 0]} angle={0.15} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} />
        <directionalLight
          color={0xffffff}
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={{ width: 1024, height: 1024 }}
          shadow-bias={-0.001}
        />
        {/* <Environment preset="dawn" /> */}
        <Suspense fallback={<Loader />}>
          <Models />
        </Suspense>
      </Canvas>
    </div>
  );
}
