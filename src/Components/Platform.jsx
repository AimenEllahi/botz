import React, { useState, useEffect, useRef } from "react";
import BoxInstance from "./Box";
import { useFrame } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils";
import { Model as SignupButton } from "./SignupButton";

const Platform = () => {
  const boxRows = 6;
  const boxesPerRow = 10;
  const spacing = 4;
  const oscillatingBoxCount = 8;

  const [selectedBoxes, setSelectedBoxes] = useState([]);

  return (
    <group position={[0, 0, 0]}>
      {Array(boxRows)
        .fill()
        .map((_, i) => {
          return (
            <group key={i}>
              {Array(boxesPerRow)
                .fill()
                .map((_, j) => {
                  return (
                    <BoxInstance
                      key={j}
                      position={[j * spacing, 0, i * spacing]}
                    />
                  );
                })}
            </group>
          );
        })}
    </group>
  );
};

export default Platform;
