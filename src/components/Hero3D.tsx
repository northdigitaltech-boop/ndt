"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars, Torus } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });
  return (
    <Sphere ref={meshRef} args={[1.7, 128, 256]} scale={1}>
      <MeshDistortMaterial
        color="#0891b2"
        attach="material"
        distort={0.55}
        speed={2.5}
        roughness={0}
        metalness={1}
        opacity={0.9}
        transparent
        envMapIntensity={1}
      />
    </Sphere>
  );
}

function OrbitRing({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
      ref.current.rotation.x = tilt;
    }
  });
  return (
    <Torus ref={ref} args={[radius, 0.012, 16, 200]}>
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </Torus>
  );
}

function FloatingParticles() {
  const points = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.04;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });
  const particleCount = 800;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={particleCount} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#22d3ee" size={0.04} transparent opacity={0.7} />
    </points>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 70 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#22d3ee" />
      <pointLight position={[-4, -4, -4]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[4, -2, 2]} intensity={1} color="#8b5cf6" />
      <spotLight position={[0, 8, 0]} intensity={1} color="#0ea5e9" angle={0.4} />
      <Stars radius={120} depth={60} count={5000} factor={3} saturation={0} fade speed={0.5} />
      <AnimatedSphere />
      <OrbitRing radius={2.4} color="#22d3ee" speed={0.4} tilt={0.5} />
      <OrbitRing radius={3.0} color="#3b82f6" speed={-0.25} tilt={1.2} />
      <OrbitRing radius={3.6} color="#8b5cf6" speed={0.15} tilt={0.8} />
      <FloatingParticles />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
