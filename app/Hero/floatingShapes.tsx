'use client';
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingShapes({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;

    const targetX = mouse.x * 2.5;
    const targetY = mouse.y * 2;

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      0.04
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      0.04
    );
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-4, 2, -8]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[2.5, 0.8, 32, 100]} />
        <meshStandardMaterial color="#a855f7" emissive="#6b21a8" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[5, -3, -10]} rotation={[1, 0.5, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#3b82f6" emissive="#1e40af" metalness={0.6} roughness={0.3} />
      </mesh>

      <mesh position={[-6, -5, -6]} rotation={[0, 1, 0.5]}>
        <octahedronGeometry args={[2]} />
        <meshStandardMaterial color="#22d3ee" emissive="#164e63" metalness={0.9} roughness={0.1} />
      </mesh>
      
      <mesh position={[3, 4, -12]}>
        <torusGeometry args={[4, 0.3, 16, 100]} />
        <meshStandardMaterial color="#c084fc" emissive="#7e22ce" metalness={1} roughness={0} />
      </mesh>
    </group>
  );
}