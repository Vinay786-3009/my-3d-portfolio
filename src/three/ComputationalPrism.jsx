import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function ComputationalPrism() {
  const groupRef = useRef();
  const coreRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const node1Ref = useRef();
  const node2Ref = useRef();

  // Create subtle constellation particles
  const particleCount = 120;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const colorCyan = new THREE.Color('#38bdf8');
    const colorIndigo = new THREE.Color('#818cf8');
    const colorWhite = new THREE.Color('#ffffff');

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? colorCyan : Math.random() > 0.3 ? colorIndigo : colorWhite;
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Damped pointer reaction
    if (groupRef.current) {
      const targetRotY = state.pointer.x * 0.45;
      const targetRotX = -state.pointer.y * 0.35;
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
    }

    // Independent rotations
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.15;
      coreRef.current.rotation.y = time * 0.22;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = -time * 0.28;
      innerRef.current.rotation.z = time * 0.32;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = time * 0.16;
    }

    // Orbiting satellite data nodes
    if (node1Ref.current) {
      const r1 = 2.5;
      node1Ref.current.position.x = Math.cos(time * 0.7) * r1;
      node1Ref.current.position.y = Math.sin(time * 0.7) * r1 * 0.7;
      node1Ref.current.position.z = Math.sin(time * 0.7) * r1 * 0.5;
    }

    if (node2Ref.current) {
      const r2 = 2.8;
      node2Ref.current.position.x = Math.sin(time * 0.5) * r2 * 0.8;
      node2Ref.current.position.y = Math.cos(time * 0.5) * r2;
      node2Ref.current.position.z = Math.cos(time * 0.5) * r2 * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Core Transparent Geometric Form */}
        <group ref={coreRef}>
          {/* Main crystalline icosahedron */}
          <mesh>
            <icosahedronGeometry args={[1.4, 0]} />
            <meshPhysicalMaterial
              color="#0ea5e9"
              roughness={0.15}
              metalness={0.1}
              transmission={0.8}
              thickness={1.5}
              ior={1.4}
              transparent
              opacity={0.7}
              reflectivity={0.9}
            />
          </mesh>

          {/* Wireframe outer lattice */}
          <mesh>
            <icosahedronGeometry args={[1.42, 0]} />
            <meshBasicMaterial
              color="#38bdf8"
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        </group>

        {/* Inner Glowing Neural Core */}
        <group ref={innerRef}>
          <mesh>
            <octahedronGeometry args={[0.7, 0]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#0284c7"
              emissiveIntensity={1.2}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
          <mesh>
            <octahedronGeometry args={[0.72, 0]} />
            <meshBasicMaterial
              color="#ffffff"
              wireframe
              transparent
              opacity={0.4}
            />
          </mesh>
          <pointLight color="#38bdf8" intensity={3} distance={6} decay={2} />
        </group>

        {/* Orbital Ring 1 - Equator tilt */}
        <group ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
          <mesh>
            <torusGeometry args={[2.5, 0.018, 16, 64]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#0284c7"
              emissiveIntensity={0.4}
              roughness={0.3}
              metalness={0.8}
            />
          </mesh>
        </group>

        {/* Orbital Ring 2 - Polar tilt */}
        <group ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
          <mesh>
            <torusGeometry args={[2.8, 0.015, 16, 64]} />
            <meshStandardMaterial
              color="#818cf8"
              emissive="#4f46e5"
              emissiveIntensity={0.3}
              roughness={0.3}
              metalness={0.8}
            />
          </mesh>
        </group>

        {/* Orbiting Satellite Node 1 */}
        <mesh ref={node1Ref}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={2}
          />
          <pointLight color="#38bdf8" intensity={1} distance={2} decay={2} />
        </mesh>

        {/* Orbiting Satellite Node 2 */}
        <mesh ref={node2Ref}>
          <sphereGeometry args={[0.065, 16, 16]} />
          <meshStandardMaterial
            color="#c084fc"
            emissive="#a855f7"
            emissiveIntensity={2}
          />
          <pointLight color="#a855f7" intensity={0.8} distance={2} decay={2} />
        </mesh>

        {/* Subtle Constellation Points */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              count={particleCount}
              array={colors}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.04}
            vertexColors
            transparent
            opacity={0.65}
            sizeAttenuation
          />
        </points>
      </Float>
    </group>
  );
}
