"use client";

import { Instances, Model } from "@/components/ACMLogo";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[100, 100, 100]} intensity={1} />
        <pointLight position={[100, 100, 100]} />
        <OrbitControls />
        <Instances>
          <Model />
        </Instances>
      </Canvas>
    </div>
  );
}
