"use client";

/**
 * BloomingFlower
 * A wine-and-blush rose with gold leaves that blooms, sways, then
 * fades and re-blooms in an infinite loop — matching the wedding IV palette.
 *
 * Usage:
 *   <BloomingFlower corner="bottom-left" />
 *   <BloomingFlower corner="top-right"   delay={1.6} />
 *
 * Props:
 *   corner   — which corner to anchor to (CSS absolute positioning)
 *   delay    — animation delay in seconds (stagger the two corners)
 *   size     — base size in px (default 260)
 *   className — extra classes forwarded to the wrapper
 */

import type { FC } from "react";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface BloomingFlowerProps {
  corner?: Corner;
  delay?: number;
  size?: number;
  className?: string;
}

const cornerStyles: Record<Corner, string> = {
  "top-left":     "top-0 left-0 origin-top-left",
  "top-right":    "top-0 right-0 origin-top-right",
  "bottom-left":  "bottom-0 left-0 origin-bottom-left",
  "bottom-right": "bottom-0 right-0 origin-bottom-right",
};

const BloomingFlower: FC<BloomingFlowerProps> = ({
  corner = "bottom-left",
  delay = 0,
  size = 260,
  className = "",
}) => {
  const id = `bloom-${corner.replace(/-/g, "")}`;

  /* Mirror top-right / bottom-right horizontally */
  const flip = corner === "top-right" || corner === "bottom-right";
  /* Flip bottom corners vertically */
  const flipY = corner === "top-left" || corner === "top-right";

  const transform = [
    flip  ? "scaleX(-1)" : "",
    flipY ? "scaleY(-1)" : "",
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${cornerStyles[corner]} ${className}`}
      style={{ width: size, height: size }}
    >
      <style>{`
        @keyframes ${id}-bloom {
          0%          { opacity: 0; transform: scale(0.04) rotate(-28deg); }
          16%         { opacity: 1; transform: scale(1.07) rotate(4deg);  }
          28%         { transform: scale(0.96) rotate(-1deg); }
          40%         { transform: scale(1.02) rotate(0deg);  }
          70%         { opacity: 1; transform: scale(1) rotate(0deg);      }
          88%         { opacity: 0.65; transform: scale(1.04) rotate(2deg); }
          100%        { opacity: 0; transform: scale(0.04) rotate(-28deg); }
        }
        @keyframes ${id}-sway {
          0%   { transform: rotate(-4deg) scaleX(0.96); }
          100% { transform: rotate(4deg)  scaleX(1.04); }
        }
        @keyframes ${id}-leaf {
          0%   { transform: rotate(-7deg); }
          100% { transform: rotate(7deg);  }
        }
        @keyframes ${id}-stamen {
          0%   { transform: scale(0.88); }
          100% { transform: scale(1.1);  }
        }
        @keyframes ${id}-spark {
          0%, 100% { opacity: 0; transform: scale(0.4); }
          50%       { opacity: 1; transform: scale(1.2); }
        }
        @media (prefers-reduced-motion: reduce) {
          .${id}-root, .${id}-root * { animation: none !important; }
        }
      `}</style>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={`${id}-root`}
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
          transform,
        }}
      >
        {/* ── Whole bloom group ── */}
        <g
          style={{
            transformOrigin: "100px 160px",
            animation: `${id}-bloom 3.4s cubic-bezier(.4,0,.2,1) ${delay}s infinite`,
          }}
        >
          {/* Gold leaves */}
          <g
            style={{
              transformOrigin: "62px 138px",
              animation: `${id}-leaf 5s ease-in-out infinite alternate`,
            }}
          >
            <ellipse cx="52" cy="132" rx="7" ry="28" fill="#d6ad62" fillOpacity=".92"
              transform="rotate(-42 52 132)" />
            <ellipse cx="66" cy="126" rx="6" ry="23" fill="#c89637" fillOpacity=".8"
              transform="rotate(-22 66 126)" />
          </g>
          <g
            style={{
              transformOrigin: "138px 135px",
              animation: `${id}-leaf 5.4s ease-in-out 0.4s infinite alternate-reverse`,
            }}
          >
            <ellipse cx="148" cy="130" rx="7" ry="26" fill="#d6ad62" fillOpacity=".88"
              transform="rotate(40 148 130)" />
            <ellipse cx="132" cy="124" rx="6" ry="22" fill="#c89637" fillOpacity=".75"
              transform="rotate(22 132 124)" />
          </g>

          {/* Small blush side bud */}
          <g
            style={{
              transformOrigin: "148px 155px",
              animation: `${id}-sway 4.2s ease-in-out 0.6s infinite alternate`,
            }}
          >
            <ellipse cx="150" cy="153" rx="11" ry="18" fill="#f3c8d0" fillOpacity=".95"
              transform="rotate(20 150 153)" />
            <ellipse cx="158" cy="147" rx="9" ry="15" fill="#e8a0b0" fillOpacity=".85"
              transform="rotate(36 158 147)" />
            <ellipse cx="143" cy="146" rx="8" ry="14" fill="#f3c8d0" fillOpacity=".9"
              transform="rotate(-14 143 146)" />
            <circle cx="150" cy="151" r="6" fill="#d6718a" fillOpacity=".55" />
            <circle cx="150" cy="151" r="3.5" fill="#c05a72" fillOpacity=".85" />
          </g>

          {/* Main wine rose — outer petals */}
          {[
            { cx: 100, cy: 130, rx: 20, ry: 34, fill: "#6d2039", fo: 0.92, rot: 0,   sw: 0 },
            { cx: 122, cy: 138, rx: 18, ry: 31, fill: "#8a2a47", fo: 0.85, rot: 34,  sw: 1 },
            { cx: 78,  cy: 138, rx: 18, ry: 31, fill: "#7a2240", fo: 0.85, rot: -34, sw: 2 },
            { cx: 100, cy: 146, rx: 22, ry: 19, fill: "#6d2039", fo: 0.82, rot: 0,   sw: 3 },
            { cx: 86,  cy: 127, rx: 15, ry: 29, fill: "#9b3050", fo: 0.80, rot: -18, sw: 1 },
            { cx: 114, cy: 127, rx: 15, ry: 29, fill: "#9b3050", fo: 0.80, rot: 18,  sw: 0 },
          ].map(({ cx, cy, rx, ry, fill, fo, rot, sw }) => (
            <ellipse
              key={`op-${cx}-${cy}`}
              cx={cx} cy={cy} rx={rx} ry={ry}
              fill={fill} fillOpacity={fo}
              transform={rot ? `rotate(${rot} ${cx} ${cy})` : undefined}
              style={{
                transformOrigin: `${cx}px ${cy}px`,
                animation: `${id}-sway ${3.8 + sw * 0.4}s ease-in-out ${sw * 0.15}s infinite alternate${sw % 2 ? "-reverse" : ""}`,
              }}
            />
          ))}

          {/* Mid petals */}
          <ellipse cx="100" cy="136" rx="15" ry="23" fill="#a83558" fillOpacity=".92" />
          <ellipse cx="90"  cy="139" rx="12" ry="20" fill="#bc3f60" fillOpacity=".88"
            transform="rotate(-22 90 139)" />
          <ellipse cx="110" cy="139" rx="12" ry="20" fill="#bc3f60" fillOpacity=".88"
            transform="rotate(22 110 139)" />

          {/* Inner petals */}
          <ellipse cx="100" cy="141" rx="10" ry="15" fill="#c74a6a" fillOpacity=".95" />
          <ellipse cx="94"  cy="143" rx="8"  ry="12" fill="#d45572" fillOpacity=".9"
            transform="rotate(-15 94 143)" />
          <ellipse cx="106" cy="143" rx="8"  ry="12" fill="#d45572" fillOpacity=".9"
            transform="rotate(15 106 143)" />

          {/* Stamen */}
          <g style={{
            transformOrigin: "100px 148px",
            animation: `${id}-stamen 2.2s ease-in-out infinite alternate`,
          }}>
            <circle cx="100" cy="148" r="7" fill="#f4e2b7" fillOpacity=".95" />
            <circle cx="97"  cy="146" r="2.5" fill="#d6ad62" />
            <circle cx="103" cy="146" r="2.5" fill="#d6ad62" />
            <circle cx="100" cy="143" r="2.5" fill="#d6ad62" />
            <circle cx="100" cy="148" r="1.8" fill="#b88329" />
          </g>

          {/* Sparkles */}
          {[
            { x: 60,  y: 102, s: 1.0, d: 0    },
            { x: 140, y: 104, s: 0.75, d: 1.1  },
            { x: 44,  y: 148, s: 0.6,  d: 0.55 },
          ].map(({ x, y, s, d }) => (
            <path
              key={`sp-${x}-${y}`}
              d={`M${x} ${y} l${1.8*s}-${5.4*s} l${1.8*s} ${5.4*s} l${5.4*s} ${1.8*s} l-${5.4*s} ${1.8*s} l-${1.8*s} ${5.4*s} l-${1.8*s}-${5.4*s} l-${5.4*s}-${1.8*s}z`}
              fill={d > 0.8 ? "#f3c8d0" : "#d6ad62"}
              fillOpacity=".9"
              style={{ animation: `${id}-spark ${2.2 + d * 0.4}s ease-in-out ${d}s infinite` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default BloomingFlower;