import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/wheeler.glb");
  const { actions } = useAnimations(animations, group);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={8.6}
      position={[14.7, 28.500000000000224, 14.799999999999986]}
      rotation={[0, 0.10000000000000002, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="b5f8f6c2b92d4db5a27faaf649089b57fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Wheeler_White"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_28"
                      geometry={nodes.Object_28.geometry}
                      material={materials.Wheeler_White}
                      skeleton={nodes.Object_28.skeleton}
                    />
                    <skinnedMesh
                      name="Object_29"
                      geometry={nodes.Object_29.geometry}
                      material={materials.Face_4}
                      skeleton={nodes.Object_29.skeleton}
                    />
                    <group
                      name="Object_27"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="Wheeler_Model_White"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/wheeler.glb");
