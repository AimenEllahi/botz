import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils";
import Platform from "./Platform";
import { Model as SignupButton } from "./SignupButton";
import { Model as Robot } from "./Robot";
import { Model as Logos } from "./Logos";
import gsap from "gsap";
import { useControls } from "leva";

const Models = () => {
  const [mouseRotation, setMouseRotation] = useState({ x: 0, y: 0 });
  const platformRef = useRef();
  const { camera } = useThree();

  // const { rotation } = useControls("camera", {
  //   rotation: {
  //     value: [0, 0, 0],
  //     step: 0.01,
  //   },
  // });

  useEffect(() => {
    //camera.position.set(...position);
    gsap.fromTo(
      camera.position,
      { x: 16, y: 0, z: window.innerWidth < 756 ? 45 : 30 },
      {
        x: 16,
        y: 32,
        z: window.innerWidth < 756 ? 45 : 29.5,
        duration: 3,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(camera.rotation, {
            duration: 3,
            ease: "power2.out",
            x: -0.1,
            y: 0.1,
          });
        },
      }
    );
  }, []);

  //Function to handle mousemove event and update mouseRotation state
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { offsetWidth, offsetHeight } = event.target;
    const x = ((clientX / offsetWidth) * 2 - 1) * 0.2;
    const y = (-(clientY / offsetHeight) * 2 + 1) * 0.5;
    setMouseRotation({
      x: Math.min(Math.max(x, -1), 1),
      y: 0,
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
    <group receiveShadow ref={platformRef}>
      <Platform />
      <SignupButton />
      <Robot />
      <Logos />
    </group>
  );
};

export default Models;
