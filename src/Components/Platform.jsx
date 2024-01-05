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

  // Use the useFrame hook to update the animation on each frame
  useFrame(() => {
    updateSelectedBoxes();
  });

  // Use the useEffect hook to select random boxes on mount
  useEffect(() => {
    selectRandomBoxes();
    const interval = setInterval(() => {
      selectRandomBoxes();
    }, 3000);
  }, []);

  return (
    <group
      position={[-17.199999999999967, -29.39999999999991, -24.899999999999867]}
    >
      {Array(boxRows)
        .fill()
        .map((_, i) => {
          return (
            <group key={i}>
              {Array(boxesPerRow)
                .fill()
                .map((_, j) => {
                  const isSelected = selectedBoxes.some(
                    (box) => box.row === i && box.column === j
                  );

                  return (
                    <BoxInstance
                      key={j}
                      position={[
                        j * spacing,
                        isSelected ? selectedBoxes[0].position : 0,
                        i * spacing,
                      ]}
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
