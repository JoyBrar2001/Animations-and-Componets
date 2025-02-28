"use client";

import Model from "@/components/Model";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas style={{
      backgroundColor: "black"
    }}>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Model />
    </Canvas>
  );
}