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
    <div className='relative h-screen w-screen'>
      <Canvas shadows>
        <color attach='background' args={["#000"]} />
        {/* <fog attach="fog" args={["#000", 0, 30]} /> */}
        <ambientLight intensity={3} color={"#3F2305"} />

        <directionalLight
          color={"#ffffff"}
          position={[1, 1, 1.2]}
          intensity={8}
          shadow-mapSize={{ width: 1024, height: 1024 }}
          shadow-bias={-0.001}
        />

        <directionalLight
          color={"#ffffff"}
          position={[10, 10, 10]}
          intensity={1}
          shadow-mapSize={{ width: 1024, height: 1024 }}
          shadow-bias={-0.001}
        />

        <Suspense fallback={<Loader />}>
          <Models />
          {/* <Environment preset='sunset' /> */}
        </Suspense>

        <EffectComposer>
          <HueSaturation inputColorSpace='#FB8B24' saturation={0.05} />
        </EffectComposer>
      </Canvas>
      <div ref={formRef} className='hidden' id='signup-form'>
        <SignupForm />
      </div>
    </div>
  );
}
