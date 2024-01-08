import React from "react";
import BoxInstance from "./Box";
import { useControls } from "leva";

const Platform = () => {
  const boxRows = 20;
  const boxesPerRow = 10; // Changed from 14 to 20 to create a square
  const spacing = 4;

  const { position, rotation } = useControls({
    position: {
      value: [0.7, -0.400000000000019, -25.700000000000003],

      step: 0.1,
    },
    rotation: { value: [0, 0.7, 0], step: 0.1 },
  });

  return (
    <group
      position={[1.2, -0.400000000000019, -5.099999999999997]}
      rotation={rotation}
    >
      {Array(boxRows)
        .fill()
        .map((_, i) => {
          const rowOffset = (boxesPerRow - 1) * 0.5 * spacing;
          return (
            <group key={i} position={[i * spacing - rowOffset, 0, i * spacing]}>
              {Array(boxesPerRow)
                .fill()
                .map((_, j) => {
                  return (
                    <BoxInstance
                      key={j}
                      position={[j * spacing - rowOffset, 0, 0]}
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
