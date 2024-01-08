import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html
      className='absolute top-0 left-0 bg-black !z-[10] w-screen h-screen flex items-center justify-center'
      center
    >
      <img src='/loader.svg' alt='loader' className='w-60' />
    </Html>
  );
}
