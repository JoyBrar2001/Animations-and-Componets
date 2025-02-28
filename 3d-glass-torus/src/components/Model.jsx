"use client";

import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

export default function Model() {
  const mesh = useRef();

  const { nodes } = useGLTF("/models/torrus.glb");
  const { viewport } = useThree();

  useFrame(() => {
    mesh.current.rotation.x += 0.02;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: false },
  });

  return (
    <group scale={viewport.width / 3.5}>
      <Text
        fontSize={0.35}
        font="fonts/PPNeueMontreal-Bold.otf"
        position={[0, 0, -0.5]}
      >
        Hello World!
      </Text>
      <mesh ref={mesh} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}