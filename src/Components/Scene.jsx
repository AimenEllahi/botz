import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Suspense } from "react";
import Loader from "./Loader";
import Platform from "./Platform";
import { Model as SignupButton } from "./SignupButton";
import { Model as Robot } from "./Robot";
import { Model as Logos } from "./Logos";
import { useControls } from "leva";
import { lerp } from "three/src/math/MathUtils";

const Models = () => {
  const [mouseRotation, setMouseRotation] = useState({ x: 0, y: 0 });
  const platformRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    console.log(camera.position);
    camera.position.set(16, 30, 30);
  }, []);

  // // Function to handle mousemove event and update mouseRotation state
  // const handleMouseMove = (event) => {
  //   const { clientX, clientY } = event;
  //   const { offsetWidth, offsetHeight } = event.target;
  //   const x = ((clientX / offsetWidth) * 2 - 1) * 0.2;
  //   const y = (-(clientY / offsetHeight) * 2 + 1) * 0.5;
  //   setMouseRotation({
  //     x: Math.min(Math.max(x, -1), 1),
  //     y: 0,
  //   });
  // };

  // useFrame(() => {
  //   platformRef.current.rotation.x = lerp(
  //     platformRef.current.rotation.x,
  //     -mouseRotation.y * 0.05,
  //     0.1
  //   );
  //   platformRef.current.rotation.y = lerp(
  //     platformRef.current.rotation.y,
  //     mouseRotation.x * 0.05,
  //     0.1
  //   );
  // });

  // useEffect(() => {
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  return (
    <group ref={platformRef}>
      <Platform />
      <SignupButton />
      <Robot />
      <Logos />
    </group>
  );
};

export default function Scene() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={1} />

        <pointLight position={[-10, -10, -10]} />
        <directionalLight
          color={"#ffffff"}
          position={[5, 5, 5]}
          intensity={0.3}
          castShadow
          shadow-mapSize={{ width: 1024, height: 1024 }}
          shadow-bias={-0.001}
        />
        <directionalLight
          color={"#ff0000"}
          position={[5, 5, 5]}
          intensity={0.3}
          castShadow
          shadow-mapSize={{ width: 1024, height: 1024 }}
          shadow-bias={-0.001}
        />
        {/* <Environment preset="dawn" /> */}
        <Suspense fallback={<Loader />}>
          {/* <Environment preset='night' /> */}
          <Models />
        </Suspense>
      </Canvas>
    </div>
  );
}
