import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "./Loader";
import SignupForm from "./SignupForm";
import Models from "./3d/Models";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import { useControls } from "leva";

export default function Scene() {
  const formRef = useRef();

  return (
    <div className="relative h-screen w-screen">
      <Canvas>
        <color attach="background" args={["#000"]} />
        {/* <fog attach="fog" args={["#000", 0, 30]} /> */}
        <ambientLight intensity={3} color={"#3F2305"} />

        <directionalLight
          color={"#fff"}
          position={[1.000000000000001, 1.8000000000000003, 1.2]}
          intensity={4}
          castShadow
          shadow-mapSize={{ width: 1024, height: 1024 }}
          shadow-bias={-0.001}
        />

        <directionalLight
          color={"#3F2305"}
          position={[1, 2, 2]}
          intensity={4}
          castShadow
          shadow-mapSize={{ width: 1024, height: 1024 }}
          shadow-bias={-0.001}
        />

        <Suspense fallback={<Loader />}>
          <Models />
          {/* <Environment preset="sunset" /> */}
        </Suspense>

        <EffectComposer>
          <HueSaturation saturation={0.3} />
        </EffectComposer>
      </Canvas>
      <div ref={formRef} className="hidden" id="signup-form">
        <SignupForm />
      </div>
    </div>
  );
}
