'use client';

import { OrbitControls, Environment, Stars } from "@react-three/drei";
import { Suspense } from "react";
import FloatingShapes from "./floatingShapes";

import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), {
  ssr: false,
});


export default function HeroCanvas({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[-10, -10, -10]} intensity={1} color="rgb(99, 102, 241)" />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#c084fc" />

          <FloatingShapes mouse={mouse} />

          <Stars radius={300} depth={60} count={400} factor={3} fade speed={0.8} />

          <Environment preset="night" />

          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.2} enableDamping dampingFactor={0.05} />
        </Suspense>
      </Canvas>
    </div>
  );
}





