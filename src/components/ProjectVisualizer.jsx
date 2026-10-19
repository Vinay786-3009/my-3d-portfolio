import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  MapPin, 
  Sliders, 
  Cpu, 
  Play, 
  Pause, 
  Sparkles, 
  Navigation
} from 'lucide-react';

export default function ProjectVisualizer() {
  const [activeTab, setActiveTab] = useState('accident');

  // -------------------------------------------------------------
  // Visualizer 1: Traffic Accident Hotspot Data Analytics
  // -------------------------------------------------------------
  const [severityFilter, setSeverityFilter] = useState('all');
  const [selectedNode, setSelectedNode] = useState(null);

  const hotspotNodes = [
    { id: 1, name: "NH-4 Bypass Junction", x: 28, y: 35, severity: "fatal", incidents: 42, speedLimit: "80 km/h", risk: "Extreme", primaryCause: "High-speed junction merge" },
    { id: 2, name: "Old Bus Stand Roundabout", x: 55, y: 25, severity: "severe", incidents: 28, speedLimit: "40 km/h", risk: "High", primaryCause: "Pedestrian congestion" },
    { id: 3, name: "College Crossroad Curve", x: 75, y: 65, severity: "fatal", incidents: 36, speedLimit: "60 km/h", risk: "Severe", primaryCause: "Blind turn & low visibility" },
    { id: 4, name: "Industrial Zone Expressway", x: 40, y: 78, severity: "moderate", incidents: 19, speedLimit: "70 km/h", risk: "Moderate", primaryCause: "Heavy vehicle lane change" },
    { id: 5, name: "Market Corridor Road", x: 68, y: 40, severity: "moderate", incidents: 15, speedLimit: "30 km/h", risk: "Moderate", primaryCause: "Narrow lanes & 2-wheelers" }
  ];

  const hourlyDistribution = [
    { hour: "02:00", count: 8 },
    { hour: "06:00", count: 14 },
    { hour: "10:00", count: 26 },
    { hour: "14:00", count: 19 },
    { hour: "18:00", count: 38 },
    { hour: "21:00", count: 45 },
    { hour: "23:00", count: 22 }
  ];

  const filteredNodes = severityFilter === 'all'
    ? hotspotNodes
    : hotspotNodes.filter(n => n.severity === severityFilter);

  // -------------------------------------------------------------
  // Visualizer 2: Student Performance Prediction (ML Classifier)
  // -------------------------------------------------------------
  const [attendance, setAttendance] = useState(82);
  const [studyHours, setStudyHours] = useState(16);
  const [pastScore, setPastScore] = useState(76);
  const [assignments, setAssignments] = useState(88);

  // Simulated Random Forest Classification output
  const calculatePrediction = () => {
    const compositeScore = (attendance * 0.25) + (studyHours * 1.5) + (pastScore * 0.4) + (assignments * 0.2);
    let outcome = "Good Standing";
    let badgeColor = "text-emerald-400";
    let confidence = Math.min(Math.round(75 + (compositeScore / 10)), 98);

    if (compositeScore >= 82) {
      outcome = "Distinction / Top Tier";
      badgeColor = "text-[var(--color-accent)]";
    } else if (compositeScore < 58) {
      outcome = "Academic Risk / Support Needed";
      badgeColor = "text-amber-400";
    }

    return { outcome, badgeColor, confidence, score: Math.round(compositeScore) };
  };

  const prediction = calculatePrediction();

  // -------------------------------------------------------------
  // Visualizer 3: Academic Traffic Light State Machine
  // -------------------------------------------------------------
  const [signalState, setSignalState] = useState('NS_GREEN'); // NS_GREEN, NS_YELLOW, EW_GREEN, EW_YELLOW, PEDESTRIAN
  const [timer, setTimer] = useState(10);
  const [isPaused, setIsPaused] = useState(false);
  const [pedestrianRequested, setPedestrianRequested] = useState(false);
  const [serialLog, setSerialLog] = useState([
    "[ARDUINO_BOOT] Microcontroller initialized on Serial 9600 baud",
    "[STATE_MACHINE] Entering main deterministic cycle: NORTH_SOUTH_GREEN"
  ]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          // Transition state
          if (pedestrianRequested) {
            setSignalState('PEDESTRIAN');
            setPedestrianRequested(false);
            setSerialLog(log => [`[INTERRUPT] Pedestrian button handled: SAFE_WALK enabled`, ...log.slice(0, 4)]);
            return 6;
          }

          if (signalState === 'NS_GREEN') {
            setSignalState('NS_YELLOW');
            setSerialLog(log => [`[TIMER] Cycle transition -> NORTH_SOUTH_YELLOW`, ...log.slice(0, 4)]);
            return 3;
          } else if (signalState === 'NS_YELLOW') {
            setSignalState('EW_GREEN');
            setSerialLog(log => [`[TIMER] Cycle transition -> EAST_WEST_GREEN`, ...log.slice(0, 4)]);
            return 10;
          } else if (signalState === 'EW_GREEN') {
            setSignalState('EW_YELLOW');
            setSerialLog(log => [`[TIMER] Cycle transition -> EAST_WEST_YELLOW`, ...log.slice(0, 4)]);
            return 3;
          } else {
            setSignalState('NS_GREEN');
            setSerialLog(log => [`[TIMER] Loop reset -> NORTH_SOUTH_GREEN`, ...log.slice(0, 4)]);
            return 10;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [signalState, pedestrianRequested, isPaused]);

  const requestPedestrianWalk = () => {
    setPedestrianRequested(true);
    setSerialLog(log => [`[HARDWARE_PIN_2] Pedestrian button pressed! Scheduling interrupt...`, ...log.slice(0, 4)]);
  };

  return (
    <div className="bg-[#181C22] border border-[var(--color-accent)]/30 rounded-3xl p-6 sm:p-8 shadow-2xl mb-16 relative overflow-hidden">
      {/* Background ambient badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#2C323D] gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151B] border border-[#2A313E] text-xs font-semibold text-[var(--color-accent)] mb-2 shadow-inner">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>INTERACTIVE LAB &amp; LIVE DEMOS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>Engineering Visualizations</span>
            <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Interact with live models, spatial maps, and state machine simulations built from Vinay's core projects.
          </p>
        </div>

        {/* Visualizer Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2 bg-[#101217] p-1.5 rounded-2xl border border-[#252A34] self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('accident')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'accident'
                ? 'bg-[var(--color-accent)] text-black shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-[#1E232E]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Accident Hotspot Map</span>
          </button>

          <button
            onClick={() => setActiveTab('ml')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'ml'
                ? 'bg-[var(--color-accent)] text-black shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-[#1E232E]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>ML Student Predictor</span>
          </button>

          <button
            onClick={() => setActiveTab('traffic')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'traffic'
                ? 'bg-[var(--color-accent)] text-black shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-[#1E232E]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Traffic Light Simulator</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          TAB 1: TRAFFIC ACCIDENT HOTSPOT ANALYZER VISUALIZER
         ========================================================================= */}
      {activeTab === 'accident' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Spatial Heatmap Simulation Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-[#101318] border border-[#2A313E] rounded-2xl p-5 relative overflow-hidden shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Spatial Incident Grid Simulation</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-gray-400">
                <span>Filter:</span>
                {['all', 'fatal', 'severe', 'moderate'].map(f => (
                  <button
                    key={f}
                    onClick={() => setSeverityFilter(f)}
                    className={`px-2 py-0.5 rounded capitalize ${severityFilter === f ? 'bg-[var(--color-accent)] text-black font-bold' : 'bg-[#1C2028] text-gray-400'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Mock Spatial Roads Grid */}
            <div className="relative w-full h-72 sm:h-80 bg-[#0C0E13] rounded-xl overflow-hidden border border-[#232834]">
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-grid-subtle opacity-40" />

              {/* Simulated Roads */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path d="M 0 100 Q 150 140 400 120 T 800 150" stroke="#2C3240" strokeWidth="8" fill="none" />
                <path d="M 120 0 L 160 400" stroke="#2C3240" strokeWidth="8" fill="none" />
                <path d="M 320 0 L 280 400" stroke="#2C3240" strokeWidth="10" fill="none" strokeDasharray="4 4" />
                <path d="M 0 240 Q 200 200 500 280" stroke="#2C3240" strokeWidth="6" fill="none" />
              </svg>

              {/* Hotspot Coordinate Nodes */}
              {filteredNodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                const nodeColor = node.severity === 'fatal' ? '#EF4444' : node.severity === 'severe' ? '#F59E0B' : '#00F5D4';
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                  >
                    {/* Pulsing Heat Rings */}
                    <span
                      style={{ backgroundColor: nodeColor }}
                      className="absolute inset-0 rounded-full animate-ping opacity-60"
                    />
                    <div
                      style={{
                        backgroundColor: nodeColor,
                        boxShadow: `0 0 15px ${nodeColor}`
                      }}
                      className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-black transform transition-transform ${isSelected ? 'scale-125 ring-4 ring-white/30' : 'group-hover:scale-110'}`}
                    >
                      {node.incidents}
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#181C22] border border-[#333] px-2.5 py-1 rounded-md text-[11px] text-white shadow-xl pointer-events-none">
                      {node.name} ({node.incidents} incidents)
                    </div>
                  </div>
                );
              })}

              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-gray-500">
                [SPATIAL_CLUSTER: DBSCAN EPS=0.04 MIN_SAMPLES=5]
              </div>
            </div>

            {/* Hourly Incident Distribution Histogram */}
            <div className="mt-4 pt-3 border-t border-[#232834]">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                <span className="font-semibold text-gray-300">Peak Incident Hours (24-Hour Distribution)</span>
                <span className="text-[11px] font-mono text-[var(--color-accent)]">Peak: 21:00 (45 Accidents)</span>
              </div>
              <div className="flex items-end justify-between gap-2 h-16 pt-2">
                {hourlyDistribution.map((item) => (
                  <div key={item.hour} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      style={{ height: `${(item.count / 45) * 100}%` }}
                      className="w-full rounded-t bg-gradient-to-t from-[#252A34] to-[var(--color-accent)] hover:to-white transition-all cursor-pointer relative group"
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black px-1.5 py-0.5 rounded text-[10px] text-white font-mono pointer-events-none">
                        {item.count}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-gray-500">{item.hour}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Cluster Telemetry & Selected Node Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-[#101318] border border-[#2A313E]">
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                Hotspot Telemetry Analysis
              </span>
              <h4 className="text-lg font-bold text-white mb-2">
                {selectedNode ? selectedNode.name : "Select a hotspot node on the map"}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {selectedNode
                  ? `Identified as a critical high-density accident hotspot under spatial correlation modeling. Primary risk variable attributed to: ${selectedNode.primaryCause}.`
                  : "Click any coordinate node on the spatial grid to inspect localized traffic danger metrics, speed limits, and root collision factors."}
              </p>

              {selectedNode && (
                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  <div className="p-2.5 rounded-xl bg-[#181C22] border border-[#2A313E]">
                    <span className="text-gray-500 block text-[10px] font-mono">SEVERITY RATING</span>
                    <span className="font-bold text-white uppercase">{selectedNode.severity}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#181C22] border border-[#2A313E]">
                    <span className="text-gray-500 block text-[10px] font-mono">INCIDENT COUNT</span>
                    <span className="font-bold text-[var(--color-accent)]">{selectedNode.incidents} Collisions</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#181C22] border border-[#2A313E]">
                    <span className="text-gray-500 block text-[10px] font-mono">POSTED SPEED</span>
                    <span className="font-bold text-white">{selectedNode.speedLimit}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#181C22] border border-[#2A313E]">
                    <span className="text-gray-500 block text-[10px] font-mono">RISK FACTOR</span>
                    <span className="font-bold text-amber-400">{selectedNode.risk}</span>
                  </div>
                </div>
              )}

              <div className="p-3 rounded-xl bg-[#181C22]/80 border border-[#282F3B] text-[11px] text-gray-400 space-y-1">
                <div className="flex items-center justify-between">
                  <span>ML Model:</span>
                  <span className="font-mono text-white">DBSCAN + K-Means</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Data Source:</span>
                  <span className="font-mono text-white">Multivariate Collision Dataset</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Correlation Metric:</span>
                  <span className="font-mono text-[var(--color-accent)]">r = 0.74 (Time × Speed)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* =========================================================================
          TAB 2: STUDENT PREDICTION SYSTEM (ML CLASSIFIER SIMULATION)
         ========================================================================= */}
      {activeTab === 'ml' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column: Interactive Feature Sliders (7 cols) */}
          <div className="lg:col-span-7 bg-[#101318] border border-[#2A313E] rounded-2xl p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#232834]">
              <div>
                <h4 className="text-sm font-bold text-white">Input Feature Parameters</h4>
                <p className="text-xs text-gray-400">Adjust factors to test the machine learning model in real-time</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#1C2028] text-[11px] font-mono text-[var(--color-accent)]">
                Scikit-learn Pipeline
              </span>
            </div>

            {/* Slider 1: Attendance */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-gray-300 mb-1.5">
                <span>Classroom Attendance</span>
                <span className="text-[var(--color-accent)] font-mono">{attendance}%</span>
              </div>
              <input
                type="range"
                min="40"
                max="100"
                value={attendance}
                onChange={(e) => setAttendance(Number(e.target.value))}
                className="w-full accent-[var(--color-accent)] bg-[#232834] rounded-lg h-2 cursor-pointer"
              />
            </div>

            {/* Slider 2: Weekly Study Hours */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-gray-300 mb-1.5">
                <span>Weekly Self-Study Time</span>
                <span className="text-[var(--color-accent)] font-mono">{studyHours} Hours / Week</span>
              </div>
              <input
                type="range"
                min="2"
                max="35"
                value={studyHours}
                onChange={(e) => setStudyHours(Number(e.target.value))}
                className="w-full accent-[var(--color-accent)] bg-[#232834] rounded-lg h-2 cursor-pointer"
              />
            </div>

            {/* Slider 3: Past Assessments */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-gray-300 mb-1.5">
                <span>Prior Assessment Average</span>
                <span className="text-[var(--color-accent)] font-mono">{pastScore} / 100</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={pastScore}
                onChange={(e) => setPastScore(Number(e.target.value))}
                className="w-full accent-[var(--color-accent)] bg-[#232834] rounded-lg h-2 cursor-pointer"
              />
            </div>

            {/* Slider 4: Assignment Completion */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-gray-300 mb-1.5">
                <span>Assignment &amp; Lab Submissions</span>
                <span className="text-[var(--color-accent)] font-mono">{assignments}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={assignments}
                onChange={(e) => setAssignments(Number(e.target.value))}
                className="w-full accent-[var(--color-accent)] bg-[#232834] rounded-lg h-2 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Column: Dynamic Prediction Outcome & Confidence Gauge (5 cols) */}
          <div className="lg:col-span-5 bg-[#101318] border border-[#2A313E] rounded-2xl p-6 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                [PREDICTIVE INFERENCE ENGINE]
              </span>
              <h4 className="text-base font-bold text-white mb-4">Model Output Classification</h4>

              {/* Prediction Result Pill */}
              <div className="p-4 rounded-xl bg-[#181C22] border border-[#2D3442] mb-5 text-center">
                <span className="text-xs text-gray-400 block mb-1">Predicted Academic Tier</span>
                <span className={`text-xl font-extrabold ${prediction.badgeColor}`}>
                  {prediction.outcome}
                </span>
                <div className="mt-2 text-xs font-mono text-gray-400">
                  Calculated Risk Index: <span className="text-white font-bold">{prediction.score} / 100</span>
                </div>
              </div>

              {/* Confidence Meter Bar */}
              <div className="space-y-1.5 mb-5">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-300">
                  <span>Model Confidence (Random Forest)</span>
                  <span className="font-mono text-[var(--color-accent)]">{prediction.confidence}%</span>
                </div>
                <div className="w-full bg-[#1C2028] h-2.5 rounded-full overflow-hidden border border-[#2A313E]">
                  <div
                    style={{ width: `${prediction.confidence}%` }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-[var(--color-accent)] rounded-full transition-all duration-300"
                  />
                </div>
              </div>

              {/* Feature Importance Weights */}
              <div className="space-y-2 pt-3 border-t border-[#232834] text-[11px] text-gray-400">
                <div className="flex items-center justify-between">
                  <span>Study Hours Weight:</span>
                  <span className="font-mono text-white">38.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Prior Assessments:</span>
                  <span className="font-mono text-white">28.4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Attendance Rate:</span>
                  <span className="font-mono text-white">21.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Assignments:</span>
                  <span className="font-mono text-white">11.6%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* =========================================================================
          TAB 3: ACADEMIC TRAFFIC LIGHT CONTROLLER (ARDUINO STATE MACHINE)
         ========================================================================= */}
      {activeTab === 'traffic' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Signal Housing Simulator (5 cols) */}
          <div className="lg:col-span-5 bg-[#101318] border border-[#2A313E] rounded-2xl p-6 flex flex-col items-center justify-center">
            <span className="text-xs font-mono text-[var(--color-accent)] mb-3 uppercase tracking-wider">
              [TRAFFIC SIGNAL STATE: {signalState}]
            </span>

            {/* Hardware Traffic Light Enclosure */}
            <div className="w-32 bg-[#0A0C10] border-4 border-[#252A34] rounded-3xl p-4 flex flex-col items-center gap-4 shadow-2xl relative">
              {/* Red Light */}
              <div
                className={`w-14 h-14 rounded-full border-2 border-black transition-all duration-300 ${
                  signalState.includes('RED') || signalState === 'EW_GREEN' || signalState === 'EW_YELLOW' || signalState === 'PEDESTRIAN'
                    ? 'bg-red-500 shadow-[0_0_30px_#EF4444]'
                    : 'bg-red-950/40 opacity-40'
                }`}
              />

              {/* Yellow Light */}
              <div
                className={`w-14 h-14 rounded-full border-2 border-black transition-all duration-300 ${
                  signalState === 'NS_YELLOW' || signalState === 'EW_YELLOW'
                    ? 'bg-amber-400 shadow-[0_0_30px_#F59E0B]'
                    : 'bg-amber-950/40 opacity-40'
                }`}
              />

              {/* Green Light */}
              <div
                className={`w-14 h-14 rounded-full border-2 border-black transition-all duration-300 ${
                  signalState === 'NS_GREEN'
                    ? 'bg-emerald-400 shadow-[0_0_30px_#10B981]'
                    : 'bg-emerald-950/40 opacity-40'
                }`}
              />
            </div>

            {/* Cycle Countdown Display */}
            <div className="mt-4 text-center">
              <span className="text-[11px] font-mono text-gray-500 block">STATE TIMER</span>
              <span className="text-3xl font-mono font-extrabold text-[var(--color-accent)]">{timer}s</span>
            </div>

            {/* Interactive Hardware Buttons */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={requestPedestrianWalk}
                disabled={pedestrianRequested || signalState === 'PEDESTRIAN'}
                className="px-4 py-2 rounded-xl bg-red-500/20 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all text-xs font-bold cursor-pointer disabled:opacity-40"
              >
                {pedestrianRequested ? 'Walk Requested...' : 'Push Walk Button (Pin 2)'}
              </button>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-xl bg-[#1C2028] border border-[#2E3544] text-gray-300 hover:text-white cursor-pointer"
                title={isPaused ? 'Resume cycle' : 'Pause cycle'}
              >
                {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Microcontroller Serial Console (7 cols) */}
          <div className="lg:col-span-7 bg-[#101318] border border-[#2A313E] rounded-2xl p-6 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#232834] mb-3">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-white">Arduino Uno Serial Monitor</span>
              </div>
              <span className="text-[10px] text-gray-500">COM3 // 9600 BAUD</span>
            </div>

            {/* Serial Terminal Log */}
            <div className="bg-[#0A0C0F] border border-[#1C2028] rounded-xl p-4 h-56 overflow-y-auto space-y-2 text-gray-300 font-mono text-[11px]">
              {serialLog.map((line, i) => (
                <div key={i} className="leading-relaxed flex items-start gap-2">
                  <span className="text-gray-600 select-none">&gt;</span>
                  <span className={line.includes('INTERRUPT') ? 'text-amber-400 font-bold' : line.includes('Cycle') ? 'text-[var(--color-accent)]' : 'text-gray-300'}>
                    {line}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 text-[11px] text-gray-400 leading-relaxed">
              Demonstrates deterministic state-transition control programmed on Arduino Uno, featuring safety cycle delays and external interrupt routines for pedestrian priority.
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
