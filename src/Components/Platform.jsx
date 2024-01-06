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

  // Function to select random boxes
  const selectRandomBoxes = () => {
    const selected = [];
    for (let i = 0; i < oscillatingBoxCount; i++) {
      const selectedRow = Math.floor(Math.random() * boxRows);
      const selectedColumn = Math.floor(Math.random() * boxesPerRow);
      selected.push({ row: selectedRow, column: selectedColumn });
    }
    setSelectedBoxes(selected);
  };

  // Function to update the position of selected boxes
  const updateSelectedBoxes = () => {
    const time = performance.now() * 0.007;
    const frequency = 0.5;
    const amplitude = 4.5;
    const verticalTranslation = -4.5;

    setSelectedBoxes((prevSelectedBoxes) =>
      prevSelectedBoxes.map((box) => {
        const newPosition =
          Math.sin(time * frequency - 0.02) * amplitude + verticalTranslation;

        return {
          row: box.row,
          column: box.column,
          position: newPosition,
        };
      })
    );
  };

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
