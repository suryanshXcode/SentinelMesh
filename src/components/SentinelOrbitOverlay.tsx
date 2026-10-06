"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SentinelOrbitOverlayProps {
  activeStage?: number;
}

export default function SentinelOrbitOverlay({ activeStage = 0 }: SentinelOrbitOverlayProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Rotation durations based on hover state
  const outerRingDuration = isHovered ? 28 : 22;
  const middleRingDuration = isHovered ? 38 : 30;
  const innerRingDuration = isHovered ? 20 : 15;
  const rightPlatformDuration = isHovered ? 24 : 18;
  const rightUpperDuration = isHovered ? 16 : 12;

  // For reduced motion, we disable continuous rotations
  const motionProps = (duration: number, reverse = false) => {
    if (shouldReduceMotion) return {};
    return {
      animate: { rotate: reverse ? -360 : 360 },
      transition: { duration, ease: "linear" as const, repeat: Infinity }
    };
  };

  return (
    <div
      className="absolute inset-0 pointer-events-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ==============================================================
          LEFT SYSTEM — SENTINELMESH ORBIT
          ============================================================== */}
      <div
        className="absolute"
        style={{
          left: "22%",     // Approximate center of the left circular graphic
          top: "45%",
          width: "36%",    // Scaled relative to container width
          aspectRatio: "1/1",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-[0%] rounded-full border-[1px] border-emerald-500/30 border-dashed mix-blend-screen"
          {...motionProps(outerRingDuration)}
        >
          {/* Orbital Nodes along the outer ring */}
          {[0, 1, 2, 3, 4].map((i) => {
            const angle = (i * 360) / 5;
            return (
              <div
                key={`outer-node-${i}`}
                className="absolute left-1/2 top-[-3px] w-[6px] h-[6px] -ml-[3px] rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]"
                style={{
                  transformOrigin: "center 5000%", // Depends on exact sizing, better to position absolutely
                }}
              />
            );
          })}
          {/* Moving Light Particle (Highlighting one section of the ring) */}
          <div className="absolute inset-0 rounded-full border-[2px] border-transparent border-t-emerald-400/80 blur-[2px]" />
        </motion.div>

        {/* Middle Ring */}
        <motion.div
          className="absolute inset-[12%] rounded-full border-[2px] border-emerald-500/10 mix-blend-screen"
          {...motionProps(middleRingDuration, true)}
        >
          {/* Subtle scanning arc on middle ring */}
          <div className="absolute inset-0 rounded-full border-[4px] border-transparent border-r-emerald-300/30" />
        </motion.div>

        {/* Inner Technical Ring */}
        <motion.div
          className="absolute inset-[24%] rounded-full border-[1px] border-emerald-500/20 border-dotted mix-blend-screen"
          {...motionProps(innerRingDuration)}
        >
          <div className="absolute left-[10%] top-[10%] w-2 h-2 rounded-full bg-emerald-500/60 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <div className="absolute right-[10%] bottom-[10%] w-2 h-2 rounded-full bg-emerald-500/60 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        </motion.div>

        {/* Central Core Pulse (Static, doesn't rotate with orbit) */}
        <motion.div
          className="absolute inset-[32%] rounded-full bg-emerald-500/10 mix-blend-screen pointer-events-none"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ==============================================================
          CENTER — INCIDENT INTELLIGENCE SWITCH
          ============================================================== */}
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "45%",
          width: "22%",
          height: "55%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Scanning Horizontal Light */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-emerald-400/40 shadow-[0_0_15px_rgba(52,211,153,0.6)] mix-blend-screen z-0 pointer-events-none"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Active Stage Illumination */}
        <div
          className="absolute rounded-lg bg-emerald-500/15 mix-blend-screen pointer-events-none transition-all duration-700 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)] border border-emerald-500/30"
          style={{
            left: "2%",
            right: "2%",
            height: "14%",
            // Dynamically position based on active stage
            // Rough estimation for vertical distribution of 5 rows
            top: `${14 + (activeStage * 15.5)}%`,
          }}
        >
          {/* Inner pulsing indicator for the active row */}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>
      </div>

      {/* ==============================================================
          RIGHT SYSTEM — ANALYST WORKSPACE
          ============================================================== */}
      <div
        className="absolute"
        style={{
          left: "82%",
          top: "48%",
          width: "28%",
          aspectRatio: "1/1",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Rotating Base Ring */}
        <motion.div
          className="absolute inset-[0%] rounded-full border-[1px] border-slate-500/20 mix-blend-screen"
          {...motionProps(rightPlatformDuration)}
        >
          {/* Subtle scanning arc */}
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-b-emerald-400/30" />
        </motion.div>

        {/* Outer Arc (Slightly larger, counter-rotating) */}
        <motion.div
          className="absolute inset-[-10%] rounded-full border-[1px] border-dashed border-emerald-500/20 mix-blend-screen"
          {...motionProps(rightPlatformDuration * 1.5, true)}
        />

        {/* Upper Mechanism (Rotates independently) */}
        <motion.div
          className="absolute inset-[15%] rounded-full border-[2px] border-slate-600/30 mix-blend-screen"
          {...motionProps(rightUpperDuration)}
        >
          {/* Mechanical indicator dots */}
          <div className="absolute left-[20%] top-[20%] w-1.5 h-1.5 rounded-full bg-cyan-500/70 shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
          <div className="absolute right-[20%] bottom-[20%] w-1.5 h-1.5 rounded-full bg-emerald-500/70 shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
        </motion.div>

        {/* Center Static Glow for Workspace */}
        <div className="absolute inset-[35%] rounded-full bg-slate-800/20 mix-blend-screen shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
      </div>

      {/* ==============================================================
          PROCESSING SIGNALS (LEFT -> CENTER -> RIGHT)
          ============================================================== */}
      {!shouldReduceMotion && (
        <>
          {/* Signal: SentinelMesh -> Intelligence Switch */}
          <div
            className="absolute overflow-hidden mix-blend-screen"
            style={{
              left: "40%",
              top: "44%",
              width: "8%",
              height: "4px",
              transform: "translateY(-50%) rotate(5deg)", // Slight angle if the connection line is angled
            }}
          >
            <motion.div
              className="w-1/3 h-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,1)] rounded-full"
              initial={{ x: "-100%" }}
              animate={{ x: "400%" }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0 }}
            />
          </div>

          {/* Secondary Signal: SentinelMesh -> Intelligence Switch */}
          <div
            className="absolute overflow-hidden mix-blend-screen"
            style={{
              left: "40%",
              top: "47%",
              width: "8%",
              height: "2px",
              transform: "translateY(-50%) rotate(-2deg)",
            }}
          >
            <motion.div
              className="w-1/4 h-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.8)] rounded-full"
              initial={{ x: "-100%" }}
              animate={{ x: "500%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
            />
          </div>

          {/* Signal: Intelligence Switch -> Analyst Workspace */}
          <div
            className="absolute overflow-hidden mix-blend-screen"
            style={{
              left: "62%",
              top: "45%",
              width: "12%",
              height: "3px",
              transform: "translateY(-50%)",
            }}
          >
            <motion.div
              className="w-1/4 h-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)] rounded-full"
              initial={{ x: "-100%" }}
              animate={{ x: "500%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.8 }}
            />
          </div>
        </>
      )}

      {/* ==============================================================
          BOTTOM PIPELINE SEQUENTIAL GLOW
          ============================================================== */}
      {!shouldReduceMotion && (
        <div
          className="absolute"
          style={{
            left: "15%",
            right: "15%",
            bottom: "8%",
            height: "10%",
          }}
        >
          {/* A subtle light pulse moving across the bottom workflow items */}
          <motion.div
            className="absolute top-0 bottom-0 w-[15%] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent mix-blend-screen"
            initial={{ left: "-20%" }}
            animate={{ left: "120%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
          />
        </div>
      )}
    </div>
  );
}
