import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function ComputationalSculpture({ scrollProgress = 0 }) {
  const masterGroup = useRef();
  const coreRef = useRef();
  const innerRef = useRef();
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();
  const nodeA = useRef();
  const nodeB = useRef();
  const nodeC = useRef();

  // Quantum Constellation field
  const particleCount = 160;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const cyan = new THREE.Color('#38bdf8');
    const sky = new THREE.Color('#06b6d4');
    const silver = new THREE.Color('#cbd5e1');

    for (let i = 0; i < particleCount; i++) {
      const r = 2.2 + Math.random() * 3.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const choice = Math.random();
      const c = choice > 0.6 ? cyan : choice > 0.3 ? sky : silver;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  // Neural lattice connecting lines
  const latticeLines = useMemo(() => {
    const pts = [];
    const radius = 1.8;
    const segments = 16;
    for (let i = 0; i < segments; i++) {
      const a1 = (i / segments) * Math.PI * 2;
      const a2 = ((i + 3) / segments) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(Math.cos(a1) * radius, Math.sin(a1) * radius, (i % 2 === 0 ? 0.4 : -0.4)),
        new THREE.Vector3(Math.cos(a2) * radius, (i % 2 === 0 ? -0.4 : 0.4), Math.sin(a2) * radius)
      );
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Damped pointer reaction + smooth scroll elevation
    if (masterGroup.current) {
      const targetX = -state.pointer.y * 0.4 + scrollProgress * 0.25;
      const targetY = state.pointer.x * 0.55;
      
      masterGroup.current.rotation.x += (targetX - masterGroup.current.rotation.x) * 0.04;
      masterGroup.current.rotation.y += (targetY - masterGroup.current.rotation.y) * 0.04;

      // Scroll-linked smooth altitude adjustment
      masterGroup.current.position.y = -scrollProgress * 1.8;
    }

    // Concentric precision gimbals on independent angular momentum
    if (ring1.current) ring1.current.rotation.z = time * 0.22;
    if (ring2.current) ring2.current.rotation.x = time * 0.16;
    if (ring3.current) ring3.current.rotation.y = -time * 0.28;

    // Core breathing and rotation
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.18;
      coreRef.current.rotation.y = time * 0.24;
      const breath = 1 + Math.sin(time * 1.8) * 0.025;
      coreRef.current.scale.set(breath, breath, breath);
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = -time * 0.35;
      innerRef.current.rotation.z = time * 0.28;
    }

    // Calculation nodes with orbital harmonics
    if (nodeA.current) {
      const rA = 2.45;
      nodeA.current.position.x = Math.cos(time * 0.7) * rA;
      nodeA.current.position.y = Math.sin(time * 0.7) * rA * 0.55;
      nodeA.current.position.z = Math.sin(time * 0.7) * rA * 0.75;
    }
    if (nodeB.current) {
      const rB = 2.8;
      nodeB.current.position.x = Math.sin(-time * 0.5) * rB * 0.8;
      nodeB.current.position.y = Math.cos(-time * 0.5) * rB;
      nodeB.current.position.z = Math.cos(-time * 0.5) * rB * 0.6;
    }
    if (nodeC.current) {
      const rC = 3.1;
      nodeC.current.position.x = Math.cos(time * 0.4 + 1.2) * rC;
      nodeC.current.position.y = Math.sin(time * 0.4 + 1.2) * rC * 0.45;
      nodeC.current.position.z = Math.cos(time * 0.4 + 1.2) * rC * 0.85;
    }
  });

  return (
    <group ref={masterGroup} position={[0, 0, 0]}>
      <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.3}>
        
        {/* Core Smoked Glass & Titanium Dodecahedron */}
        <group ref={coreRef}>
          <mesh>
            <dodecahedronGeometry args={[1.45, 0]} />
            <meshPhysicalMaterial
              color="#020617"
              emissive="#0369a1"
              emissiveIntensity={0.25}
              roughness={0.08}
              metalness={0.92}
              transmission={0.45}
              thickness={2.0}
              ior={1.65}
              reflectivity={0.98}
              clearcoat={1.0}
              clearcoatRoughness={0.08}
            />
          </mesh>

          {/* Wireframe Facet Highlights with Electric Cyan Hue */}
          <mesh>
            <dodecahedronGeometry args={[1.465, 0]} />
            <meshBasicMaterial
              color="#38bdf8"
              wireframe
              transparent
              opacity={0.4}
            />
          </mesh>
        </group>

        {/* Inner Luminous Quantum Monolith */}
        <group ref={innerRef}>
          <mesh>
            <octahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial
              color="#0284c7"
              emissive="#38bdf8"
              emissiveIntensity={2.2}
              roughness={0.15}
              metalness={0.8}
            />
          </mesh>
          <mesh>
            <octahedronGeometry args={[0.82, 0]} />
            <meshBasicMaterial
              color="#ffffff"
              wireframe
              transparent
              opacity={0.6}
            />
          </mesh>
          <pointLight color="#38bdf8" intensity={5} distance={8} decay={2} />
        </group>

        {/* Gyroscopic Gimbal Ring 1 — Equatorial (Titanium Finish) */}
        <group ref={ring1} rotation={[Math.PI / 4, 0, 0]}>
          <mesh>
            <torusGeometry args={[2.45, 0.018, 16, 96]} />
            <meshStandardMaterial
              color="#cbd5e1"
              metalness={0.95}
              roughness={0.1}
            />
          </mesh>
        </group>

        {/* Gyroscopic Gimbal Ring 2 — Polar Meridian (Cyan Luminous Line) */}
        <group ref={ring2} rotation={[-Math.PI / 3, Math.PI / 5, 0]}>
          <mesh>
            <torusGeometry args={[2.75, 0.015, 16, 96]} />
            <meshStandardMaterial
              color="#0ea5e9"
              emissive="#0284c7"
              emissiveIntensity={0.7}
              metalness={0.9}
              roughness={0.15}
            />
          </mesh>
        </group>

        {/* Outer Gimbal Ring 3 — Deep Space Grey with Coordinate Notches */}
        <group ref={ring3} rotation={[Math.PI / 6, -Math.PI / 3, 0]}>
          <mesh>
            <torusGeometry args={[3.05, 0.012, 16, 96]} />
            <meshStandardMaterial
              color="#64748b"
              metalness={0.85}
              roughness={0.25}
            />
          </mesh>
        </group>

        {/* Neural Lattice Struts */}
        <lineSegments geometry={latticeLines}>
          <lineBasicMaterial color="#0284c7" transparent opacity={0.3} />
        </lineSegments>

        {/* Orbiting Satellite Calculation Node A */}
        <mesh ref={nodeA}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={3.0}
          />
          <pointLight color="#38bdf8" intensity={2} distance={3} decay={2} />
        </mesh>

        {/* Orbiting Satellite Calculation Node B */}
        <mesh ref={nodeB}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={2.5}
          />
        </mesh>

        {/* Orbiting Satellite Calculation Node C */}
        <mesh ref={nodeC}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color="#f8fafc"
            emissive="#ffffff"
            emissiveIntensity={2.0}
          />
        </mesh>

        {/* Quantum Constellation Field */}
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
            size={0.042}
            vertexColors
            transparent
            opacity={0.75}
            sizeAttenuation
          />
        </points>

      </Float>
    </group>
  );
}
