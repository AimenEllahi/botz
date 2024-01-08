import React from "react";
import BoxInstance from "./Box";
import { useControls } from "leva";

const Platform = () => {
  const boxRows = 14;
  const boxesPerRow = 10; // Changed from 14 to 20 to create a square
  const spacing = 4.4;

  // const { position, rotation } = useControls("platform", {
  //   position: {
  //     value: [-9.3, -1.74, -2.3],

  //     step: 0.1,
  //   },
  //   rotation: { value: [0, 1.1, 0], step: 0.1 },
  // });

  return (
    <group position={[-9.3, -5, -2.3]} rotation={[0, 1.1, 0]}>
      {Array(boxRows)
        .fill()
        .map((_, i) => {
          const rowOffset = (boxesPerRow - 1) * 0.5 * spacing;
          return (
            <group receiveShadow key={i} position={[i, 0, i * spacing]}>
              {Array(boxesPerRow)
                .fill()
                .map((_, j) => {
                  return (
                    <BoxInstance
                      key={j}
                      position={[j * spacing - rowOffset, 0, 0]}
                      index={{ i, j }}
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
