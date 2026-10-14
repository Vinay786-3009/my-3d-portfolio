import React, { Suspense, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import ComputationalSculpture from './ComputationalSculpture';
import WebGLFallback from '../components/WebGLFallback';
import { useReducedMotion, useWebGLSupport } from '../hooks/useReducedMotion';

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("3D WebGL Context error handled gracefully:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <WebGLFallback />;
    }
    return this.props.children;
  }
}

export default function Scene3D({ scrollProgress = 0, className = "" }) {
  const prefersReducedMotion = useReducedMotion();
  const hasWebGL = useWebGLSupport();

  if (prefersReducedMotion || !hasWebGL) {
    return <WebGLFallback />;
  }

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* Background ambient lighting vignette behind canvas */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-70" />

      <CanvasErrorBoundary>
        <Suspense fallback={<WebGLFallback />}>
          <Canvas
            camera={{ position: [0, 0, 6.2], fov: 42 }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance'
            }}
            dpr={[1, 1.5]}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Cinematic Studio Lighting: Keylight, Cyan Fill, Rim light */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[6, 8, 6]} intensity={2.2} color="#ffffff" />
            <directionalLight position={[-6, -4, -4]} intensity={1.5} color="#38bdf8" />
            <pointLight position={[0, -2, 3]} intensity={1.8} color="#06b6d4" />
            <pointLight position={[3, 3, -2]} intensity={1.0} color="#60a5fa" />

            <ComputationalSculpture scrollProgress={scrollProgress} />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>
    </div>
  );
}
