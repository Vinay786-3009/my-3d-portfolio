import React from 'react';

/**
 * Fallback component for devices without WebGL, low-power environments,
 * or when reduced motion is preferred.
 */
export default function WebGLFallback() {
  return (
    <div className="relative w-full h-full min-h-[380px] flex items-center justify-center overflow-hidden">
      {/* Radial backdrop */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60" />
      
      {/* Layered geometric CSS sculpture */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Outer orbital ring */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/20 border-dashed animate-[spin_30s_linear_infinite]" />
        
        {/* Tilted middle ring */}
        <div className="absolute inset-4 rounded-full border border-sky-400/30 transform -rotate-45 animate-[spin_20s_linear_infinite_reverse]" />
        
        {/* Inner glow sphere */}
        <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-cyan-600/20 via-sky-500/10 to-indigo-600/30 blur-xl" />
        
        {/* Geometric Core Facets */}
        <div className="relative w-32 h-32 transform rotate-45 border border-cyan-400/40 bg-slate-900/70 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_0_35px_rgba(6,182,212,0.25)]">
          <div className="w-20 h-20 border border-sky-300/60 rounded-xl transform -rotate-12 flex items-center justify-center bg-cyan-950/40">
            <div className="w-8 h-8 rounded-full bg-cyan-400/80 shadow-[0_0_15px_#38bdf8]" />
          </div>
          
          {/* Orbital nodes */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8]" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-300" />
        </div>
      </div>
      
      {/* Computational Label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-cyan-300/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>COMPUTATIONAL ARCHITECTURE CORE</span>
      </div>
    </div>
  );
}
