import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Stars, Text } from '@react-three/drei'
import * as THREE from 'three'

function RotatingObject() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return

    meshRef.current.rotation.x = state.clock.elapsedTime * 0.35
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.55
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
  })

  return (
    <Float
      speed={2}
      rotationIntensity={1.2}
      floatIntensity={1.5}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshStandardMaterial
          color="#00d4ff"
          wireframe
          emissive="#0066ff"
          emissiveIntensity={0.8}
        />
      </mesh>
    </Float>
  )
}

function InnerSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return

    meshRef.current.rotation.y = -state.clock.elapsedTime * 0.4
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#7c3aed"
        emissive="#4c1d95"
        emissiveIntensity={1}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 45
      }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.7} />

      <pointLight
        position={[3, 3, 4]}
        intensity={80}
        color="#00d4ff"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={60}
        color="#7c3aed"
      />

      <Stars
        radius={50}
        depth={30}
        count={1500}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />

      <RotatingObject />

      <InnerSphere />

     <Text
  position={[0, -2.05, 0]}
  fontSize={0.28}
  color="#00d4ff"
  anchorX="center"
  anchorY="middle"
>
  DATA • AI • CODE
</Text>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  )
}

export default Scene