import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import WindEffect from "./WindEffect";
import Loader from "./Loader";
import { Cloud } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

import {
  Bloom,
  DepthOfField,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import { useControls } from "leva";

const CloudsGroup = () => {
  const cloudRef = useRef();

  const t1 = gsap.timeline();
  useEffect(() => {
    console.log(cloudRef.current);
    if (cloudRef.current) {
      t1.to(cloudRef.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 3,
        ease: "power3.inOut",
      });
    }
  }, [cloudRef]);
  return (
    <group ref={cloudRef} position={[0, 0, 10]}>
      <Cloud
        position={[-6, -2, 0]}
        rotation={[0, 1, 0]}
        args={[10, 10, 10]}
        castShadow
        receiveShadow
        opacity={0.5}
        blendFunction={THREE.AdditiveBlending}
        size={0.5}
        particles={30000}
        rotationSpeed={0.2}
        color={0x8d00ff}
      />
      <Cloud
        position={[-6, -2, 0]}
        rotation={[0, 1, 0]}
        args={[10, 10, 10]}
        castShadow
        receiveShadow
        opacity={0.2}
        blendFunction={THREE.AdditiveBlending}
        size={0.5}
        particles={30000}
        rotationSpeed={0.2}
        color={0xffffff}
      />
      <Cloud
        position={[6, 2, 0]}
        rotation={[0, 1, 0]}
        args={[10, 10, 10]}
        castShadow
        receiveShadow
        opacity={0.5}
        blendFunction={THREE.AdditiveBlending}
        size={0.5}
        particles={30000}
        rotationSpeed={2}
        color={0x8d00ff}
      />
      <Cloud
        position={[4, -2, 0]}
        rotation={[0, 1, 0]}
        args={[10, 10, 10]}
        castShadow
        receiveShadow
        opacity={0.5}
        blendFunction={THREE.AdditiveBlending}
        size={0.5}
        particles={30000}
        rotationSpeed={0.2}
        color={0x8d00ff}
      />
      <Cloud
        position={[6, -2, 0]}
        rotation={[0, 1, 0]}
        args={[10, 10, 10]}
        castShadow
        receiveShadow
        opacity={0.1}
        blendFunction={THREE.AdditiveBlending}
        size={0.5}
        particles={30000}
        rotationSpeed={0.2}
        color={0xffffff}
      />
    </group>
  );
};

export default function Scene() {
  const [wind, setWind] = useState(false);
  // This will run the effect when cloudRef.current changes

  return (
    <div className='relative h-screen w-screen'>
      <Canvas
        shadows
        camera={{
          near: 0.1,
          far: 100,
        }}
      >
        <color attach='background' args={["#000"]} />
        <fog attach='fog' args={["#ffffff", 10, 20]} />
        <ambientLight intensity={3} />

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
          <Environment preset='sunset' />
          <CloudsGroup />

          <mesh position={[0, 0, 0]} castShadow receiveShadow scale={[1, 1, 1]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color={"#ffffff"}
              emissive={"#ffffff"}
              emissiveIntensity={0.1}
              attach='material'
              roughness={0.1}
              metalness={0.1}
              wireframe={false}
              transparent
              opacity={0.4}
              side={THREE.DoubleSide}
              depthWrite={false}
              depthTest={true}
              blending={THREE.AdditiveBlending}
            />
            <EffectComposer>
              <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                height={300}
                opacity={1}
              />
            </EffectComposer>
          </mesh>
          <WindEffect isMoving={true} />
        </Suspense>

        <EffectComposer>
          <HueSaturation
            inputColorSpace='#FB8B24'
            saturation={0.1}
            hue={0.05}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
