import { useEffect, useRef, useState, useCallback } from "react";
import plimg5 from "../assets/plimg_tcs5.png";
import plimg7 from "../assets/plimg_rently7.png";
import plimg_infosys from "../assets/plimg_Infosys2.jpg"
import { AnimatePresence, motion } from "framer-motion";
const G = "https://www.google.com/s2/favicons?domain=";
const SZ = "&sz=128";

const COMPANIES = [
  {
    id: 1,
    name: "Amazon",
    logo: `${G}amazon.com${SZ}`,
    color: "#FF9900",
    role: "Product Based",
    package: "24 LPA",
    placed: 12,
    achievement:
      "Our students cracked Amazon's legendary bar-raiser interviews with DSA mastery and system design training.",
    highlights: [
      "12 students placed",
      "Highest: 24 LPA",
      "Roles: SDE I & II",
      "DSA + System Design track",
    ],
  },
  {
    id: 2,
    name: "Capgemini",
    logo: `${G}capgemini.com${SZ}`,
    color: "#0070AD",
    role: "MNC",
    package: "12 LPA",
    placed: 38,
    achievement:
      "Largest placement batch — 38 students cleared Capgemini's technical and aptitude rounds in a single drive.",
    highlights: [
      "38 students placed",
      "Highest: 12 LPA",
      "Full Stack roles",
      "Aptitude + Tech track",
    ],
  },
  {
    id: 3,
    name: "TCS",
    logo: plimg5,
    color: "#1a73e8",
    role: "MNC",
    package: "8 LPA",
    placed: 55,
    achievement:
      "TCS Digital & Ninja combined — 55 students placed across both tracks with our comprehensive prep program.",
    highlights: [
      "55 students placed",
      "TCS Digital + Ninja",
      "Highest: 8 LPA",
      "Java + DBMS track",
    ],
  },
  {
    id: 4,
    name: "Temenos",
    logo: `${G}temenos.com${SZ}`,
    color: "#E30613",
    role: "Product Based",
    package: "8 LPA",
    placed: 8,
    achievement:
      "Temenos banking software — students trained in Java Full Stack made a direct entry into fintech.",
    highlights: [
      "8 students placed",
      "Fintech domain",
      "Java Full Stack",
      "Banking software",
    ],
  },
  {
    id: 5,
    name: "Zoho",
    logo: `${G}zoho.com${SZ}`,
    color: "#E42527",
    role: "Product Based",
    package: "10 LPA",
    placed: 14,
    achievement:
      "Zoho's notoriously tough hiring cracked by our students with problem-solving and full-stack depth.",
    highlights: [
      "14 students placed",
      "Highest: 10 LPA",
      "Product-based entry",
      "C++ & Java tracks",
    ],
  },
  {
    id: 6,
    name: "Infosys",
    logo: plimg_infosys,
    color: "#007CC3",
    role: "MNC",
    package: "7 LPA",
    placed: 42,
    achievement:
      "42 placements across Infosys InfyTQ and direct drives — one of our top performing partner companies.",
    highlights: [
      "42 students placed",
      "InfyTQ certified",
      "Highest: 7 LPA",
      "Full Stack focus",
    ],
  },
  {
    id: 7,
    name: "Payoda",
    logo: `${G}payoda.com${SZ}`,
    color: "#F7941D",
    role: "Service Based",
    package: "6 LPA",
    placed: 22,
    achievement:
      "Payoda Technologies partnered with us for repeat hiring — 22 students onboarded across 3 drives.",
    highlights: [
      "22 students placed",
      "3 hiring drives",
      "Frontend focus",
      "React + Node.js",
    ],
  },
  {
    id: 8,
    name: "Sirius",
    logo: `${G}siriusxm.com${SZ}`,
    color: "#00ADEF",
    role: "Startup",
    package: "9 LPA",
    placed: 9,
    achievement:
      "Sirius — an international product startup — selected our MERN Stack trained students for global roles.",
    highlights: [
      "9 students placed",
      "International roles",
      "Highest: 9 LPA",
      "MERN Stack track",
    ],
  },
  {
    id: 9,
    name: "Rently",
    logo: plimg7,
    color: "#7B2FBE",
    role: "Startup",
    package: "7 LPA",
    placed: 6,
    achievement:
      "Rently's proptech platform hired our full-stack developers for their product engineering team.",
    highlights: [
      "6 students placed",
      "Proptech domain",
      "Full Stack roles",
      "React + Python",
    ],
  },
  {
    id: 10,
    name: "Informatica",
    logo: `${G}informatica.com${SZ}`,
    color: "#FF6D00",
    role: "Product Based",
    package: "11 LPA",
    placed: 7,
    achievement:
      "Informatica's data engineering roles filled by our students trained in SQL, cloud and backend systems.",
    highlights: [
      "7 students placed",
      "Data Engineering",
      "Highest: 11 LPA",
      "SQL + Cloud track",
    ],
  },
];

const N = COMPANIES.length;
const PI = Math.PI;
const CX = 210,
  CY = 210;

function buildSectors() {
  return COMPANIES.map((_, i) => {
    const sweep = (2 * PI) / N;
    const a1 = i * sweep - sweep / 2 - PI / 2;
    const a2 = a1 + sweep;
    const r1 = 178,
      r2 = 200;
    const cos1 = Math.cos(a1),
      sin1 = Math.sin(a1);
    const cos2 = Math.cos(a2),
      sin2 = Math.sin(a2);
    const d = [
      `M${(CX + r1 * cos1).toFixed(2)},${(CY + r1 * sin1).toFixed(2)}`,
      `L${(CX + r2 * cos1).toFixed(2)},${(CY + r2 * sin1).toFixed(2)}`,
      `A${r2},${r2} 0 0,1 ${(CX + r2 * cos2).toFixed(2)},${(CY + r2 * sin2).toFixed(2)}`,
      `L${(CX + r1 * cos2).toFixed(2)},${(CY + r1 * sin2).toFixed(2)}`,
      `A${r1},${r1} 0 0,0 ${(CX + r1 * cos1).toFixed(2)},${(CY + r1 * sin1).toFixed(2)} Z`,
    ].join(" ");
    const ma = i * sweep - PI / 2;
    return {
      d,
      numX: CX + 189 * Math.cos(ma),
      numY: CY + 189 * Math.sin(ma),
      label: i + 1,
    };
  });
}
const SECTORS = buildSectors();

function buildTicks() {
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const a = (i / 60) * 2 * PI - PI / 2;
    const big = i % 6 === 0;
    const r1 = big ? 202 : 203,
      r2 = big ? 208 : 206;
    ticks.push({
      x1: CX + r1 * Math.cos(a),
      y1: CY + r1 * Math.sin(a),
      x2: CX + r2 * Math.cos(a),
      y2: CY + r2 * Math.sin(a),
      big,
    });
  }
  return ticks;
}
const TICKS = buildTicks();
function BgCanvas({ isLight }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const WAVE_CONFIGS = [
      { amp: 18, freq: 0.012, speed: 0.6, phase: 0, yFrac: 0.58 },
      { amp: 14, freq: 0.016, speed: -0.5, phase: 1.2, yFrac: 0.63 },
      { amp: 10, freq: 0.02, speed: 0.8, phase: 2.4, yFrac: 0.68 },
      { amp: 8, freq: 0.025, speed: -0.7, phase: 0.8, yFrac: 0.73 },
      { amp: 6, freq: 0.03, speed: 1.0, phase: 1.6, yFrac: 0.78 },
      { amp: 4, freq: 0.035, speed: -0.9, phase: 3.0, yFrac: 0.83 },
      { amp: 3, freq: 0.04, speed: 1.2, phase: 0.5, yFrac: 0.88 },
    ];

    const getWaveColor = (i, alpha) => {
      if (!isLight) {
        const c = [
          `rgba(8, 28, 42, ${alpha})`, 
          `rgba(12, 38, 55, ${alpha})`, 
          `rgba(6, 22, 35, ${alpha})`, 
          `rgba(18, 52, 72, ${alpha})`, 
          `rgba(5, 18, 28, ${alpha})`, 
          `rgba(14, 44, 62, ${alpha})`, 
          `rgba(10, 32, 48, ${alpha})`, 
        ];
        return c[i % c.length];
      } else {
        const c = [
          `rgba(15,70,105,${alpha})`,
          `rgba(20,85,125,${alpha})`,
          `rgba(12,58,90,${alpha})`,
          `rgba(25,95,140,${alpha})`,
          `rgba(10,50,80,${alpha})`,
          `rgba(18,78,115,${alpha})`,
          `rgba(14,65,100,${alpha})`,
        ];
        return c[i % c.length];
      }
    };

    const drawWavePath = (cfg, t, W, H) => {
      const baseY = H * cfg.yFrac;
      ctx.beginPath();
      ctx.moveTo(0, H);
      ctx.lineTo(0, baseY);
      for (let x = 0; x <= W; x += 2) {
        const y =
          baseY +
          Math.sin(x * cfg.freq + t * cfg.speed + cfg.phase) * cfg.amp +
          Math.sin(x * cfg.freq * 1.7 - t * cfg.speed * 0.6 + cfg.phase * 1.3) *
            cfg.amp *
            0.4 +
          Math.sin(x * cfg.freq * 0.5 + t * cfg.speed * 0.3 + cfg.phase * 0.7) *
            cfg.amp *
            0.25;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H);
      ctx.closePath();
    };

    let startTime = null;
    const draw = (ts) => {
      if (!startTime) startTime = ts;
      const t = (ts - startTime) * 0.001;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const sky = ctx.createLinearGradient(0, 0, 0, H * 0.62);
      if (isLight) {
        sky.addColorStop(0, "#7f98a6");
        sky.addColorStop(0.5, "#abb7bd");
        sky.addColorStop(1, "#a6b8c1");
      } else {
        sky.addColorStop(0, "#4e5a67");
        sky.addColorStop(0.5, "#5f6061");
        sky.addColorStop(1, "#45474a");
      }
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H * 0.62);

      const deep = ctx.createLinearGradient(0, H * 0.58, 0, H);
      if (isLight) {
        deep.addColorStop(0, "#a6b8c1");
        deep.addColorStop(0.4, "#0e2535");
        deep.addColorStop(1, "#0a1c28");
      } else {
        deep.addColorStop(0, "#45474a");
        deep.addColorStop(0.4, "#040a14");
        deep.addColorStop(1, "#020608");
      }
      ctx.fillStyle = deep;
      ctx.fillRect(0, H * 0.58, W, H * 0.42);

      const alphas = [0.55, 0.5, 0.45, 0.4, 0.35, 0.28, 0.22];
      for (let i = WAVE_CONFIGS.length - 1; i >= 0; i--) {
        drawWavePath(WAVE_CONFIGS[i], t, W, H);
        ctx.fillStyle = getWaveColor(i, alphas[i]);
        ctx.fill();
      }

      const spot = ctx.createRadialGradient(W / 2, 0, 0, W / 2, 0, W * 0.5);
      if (isLight) {
        spot.addColorStop(0, "rgba(180,220,245,0.35)");
        spot.addColorStop(1, "rgba(0,0,0,0)");
      } else {
        spot.addColorStop(0, "rgba(247,198,81,0.10)");
        spot.addColorStop(1, "rgba(0,0,0,0)");
      }
      ctx.fillStyle = spot;
      ctx.fillRect(0, 0, W, H * 0.65);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [isLight]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
export default function CompanyOrbit({ isLight }) {
  const stageRef = useRef(null);
  const itemRefs = useRef([]);
  const angleRef = useRef(0);
  const velRef = useRef(0.28);
  const dragging = useRef(false);
  const lastA = useRef(0);
  const lastVel = useRef(0);
  const rafRef = useRef(null);
  const hoveredRef = useRef(null);

  const [selected, setSelected] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const LOGO_R = 111;
  const TILE = 38;
  const HALF = 19;
  const STAGE_CENTER = 170;

  useEffect(() => {
    const loop = () => {
      const isPaused = hoveredRef.current !== null || dragging.current;
      if (!isPaused) {
        const base = 0.28;
        if (Math.abs(velRef.current) < base)
          velRef.current += (base - velRef.current) * 0.012;
        velRef.current *= 0.9985;
        if (Math.abs(velRef.current) < 0.05) velRef.current = 0.28;
        angleRef.current += velRef.current;
      }
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rad = ((angleRef.current + (360 / N) * i) * PI) / 180;
        el.style.transform = `translate(${Math.cos(rad) * LOGO_R}px, ${Math.sin(rad) * LOGO_R}px)`;
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function getAngle(e) {
    const rect = stageRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const mx = e.touches ? e.touches[0].clientX : e.clientX;
    const my = e.touches ? e.touches[0].clientY : e.clientY;
    return (Math.atan2(my - cy, mx - cx) * 180) / PI;
  }

  function onDown(e) {
    dragging.current = true;
    velRef.current = 0;
    lastVel.current = 0;
    lastA.current = getAngle(e);
  }

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const curr = getAngle(e);
      let d = curr - lastA.current;
      if (d > 180) d -= 360;
      if (d < -180) d += 360;
      angleRef.current += d * 0.9;
      lastVel.current = d * 0.9;
      lastA.current = curr;
    };
    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      velRef.current = lastVel.current;
      if (Math.abs(velRef.current) < 0.1) velRef.current = 0.28;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const onLogoEnter = useCallback((i) => {
    hoveredRef.current = i;
    setHoveredIdx(i);
  }, []);
  const onLogoLeave = useCallback(() => {
    hoveredRef.current = null;
    setHoveredIdx(null);
  }, []);
  const onLogoClick = useCallback((c) => {
    setSelected((prev) => (prev?.id === c.id ? null : c));
  }, []);

  const T = isLight
    ? {
        sectA: "#1e4fa0",
        sectB: "#163b80",
        sectText: "rgba(255,255,255,0.85)",
        rimOuter: "#0d2255",
        rimMid: "#2a5cc4",
        rimInner: "#1a3c8a",
        bandStroke: "#2a5cc4",
        hubBorder: "rgba(30,79,160,0.20)",
        hubTitle: "#1a4a9e",
        hubSub: "rgba(26,74,158,0.50)",
        tickCol: "#2a5cc4",
        panelBg: "#ffffff",
        panelBorder: "rgba(5,56,89,0.12)",
        panelText: "#053859",
        panelSub: "rgba(5,56,89,0.60)",
        panelTag: "rgba(5,56,89,0.055)",
        shadow: "rgba(5,56,89,0.22)",
        logoShadow: "0 4px 18px rgba(5,56,89,0.20)",
        logoHover: "0 6px 28px rgba(5,56,89,0.30)",
        sectionBg: "#f0f4f8",
        plateFace:
          "linear-gradient(180deg,#3a7a9a 0%,#2e6a88 40%,#1a4a62 100%)",
        plateRim: "linear-gradient(180deg,#1a4055 0%,#0e2535 100%)",
        plateShadow: "rgba(10,30,45,0.45)",
      }
    : {
        sectA: "#1e4fa0",
        sectB: "#0e2c6e",
        sectText: "rgba(180, 210, 255, 0.85)", 
        rimOuter: "#5b9bd5", 
        rimMid: "#3a7abf",
        rimInner: "#2a6aaf", 
        bandStroke: "#3a7abf", 
        tickCol: "#5b9bd5", 
        hubBorder: "rgba(91, 155, 213, 0.25)", 
        hubTitle: "#5b9bd5", 
        hubSub: "rgba(91, 155, 213, 0.45)", 
        panelBorder: "rgba(91, 155, 213, 0.20)", 
        panelTag: "rgba(91, 155, 213, 0.07)", 
        logoHover: "0 6px 28px rgba(91, 155, 213, 0.30)", 
        panelBg: "#0e2659",
        panelText: "#f0e8d0",
        panelSub: "rgba(240,220,180,0.58)",
        shadow: "rgba(0,0,0,0.70)",
        logoShadow: "0 4px 18px rgba(0,0,0,0.50)",
        sectionBg: "#060d1f",
        plateFace:
          "linear-gradient(180deg,#0d4a5a 0%,#0a3a48 40%,#062838 100%)",
        plateRim: "linear-gradient(180deg,#062838 0%,#041e2c 100%)",
        plateShadow: "rgba(0,0,0,0.80)",
      };

  return (
    <div
      style={{
        background: T.sectionBg,
        padding: "56px 20px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "background 0.4s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BgCanvas isLight={isLight} />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.50, ease: [0.16, 1, 0.3, 1] }}
        style={{
          textAlign: "center",
          marginBottom: 40,
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: "Poppins,sans-serif",
            fontSize: "clamp(22px,4vw,34px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            color: isLight ? "#ffffff" : "white",
            margin: "0 0 10px",
          }}
        >
          Companies that trust{" "}
          <span style={{ color: isLight ? "#053859" : "#f7c651" }}>
            our students
          </span>
        </h2>
      </motion.div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          width: "100%",
          maxWidth: 900,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ position: "relative", flexShrink: 0 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.82, rotate: -18 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              ref={stageRef}
              onMouseDown={onDown}
              onTouchStart={onDown}
              style={{
                position: "relative",
                width: 340,
                height: 340,
                cursor: "grab",
                userSelect: "none",
                touchAction: "none",
                zIndex: 2,
              }}
            >
              <svg
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  display: "block",
                  overflow: "visible",
                }}
                viewBox="-10 -10 440 440"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <radialGradient id="bandGrad" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      stopColor={isLight ? "#d8e8f8" : "#1a4a7a"}
                    />{" "}
                    <stop
                      offset="100%"
                      stopColor={isLight ? "#c0d4ec" : "#0f3060"}
                    />{" "}
                  </radialGradient>
                  <radialGradient id="hubGrad" cx="40%" cy="38%" r="62%">
                    <stop
                      offset="0%"
                      stopColor={isLight ? "#ffffff" : "#1a3a5c"}
                    />{" "}
                    <stop
                      offset="100%"
                      stopColor={isLight ? "#e8f0fa" : "#0e2440"}
                    />{" "}
                  </radialGradient>
                  <filter id="rimGlow">
                    <feGaussianBlur stdDeviation="1.8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <circle cx={CX} cy={CY} r="174" fill="url(#bandGrad)" />

                {SECTORS.map((s, i) => (
                  <g key={i}>
                    <path
                      d={s.d}
                      fill={i % 2 === 0 ? T.sectA : T.sectB}
                      stroke={isLight ? "rgba(0,0,0,0.18)" : "rgba(0,0,0,0.35)"}
                      strokeWidth="0.6"
                    />
                    <text
                      x={s.numX.toFixed(1)}
                      y={s.numY.toFixed(1)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="6.5"
                      fontWeight="800"
                      fontFamily="Poppins,sans-serif"
                      fill={T.sectText}
                    >
                      {s.label}
                    </text>
                  </g>
                ))}

                <circle
                  cx={CX}
                  cy={CY}
                  r="211"
                  fill="none"
                  stroke={T.rimOuter}
                  strokeWidth="2.5"
                  filter="url(#rimGlow)"
                />
                <circle
                  cx={CX}
                  cy={CY}
                  r="208"
                  fill="none"
                  stroke={T.rimMid}
                  strokeWidth="12"
                  opacity="0.9"
                />
                <circle
                  cx={CX}
                  cy={CY}
                  r="201"
                  fill="none"
                  stroke={T.rimInner}
                  strokeWidth="2"
                  opacity="0.7"
                />

                {TICKS.map((t, i) => (
                  <line
                    key={i}
                    x1={t.x1.toFixed(1)}
                    y1={t.y1.toFixed(1)}
                    x2={t.x2.toFixed(1)}
                    y2={t.y2.toFixed(1)}
                    stroke={T.tickCol}
                    strokeWidth={t.big ? 2 : 0.8}
                    opacity={t.big ? 0.9 : 0.45}
                  />
                ))}

                <circle
                  cx={CX}
                  cy={CY}
                  r="174"
                  fill="none"
                  stroke={T.bandStroke}
                  strokeWidth="2"
                  opacity="0.55"
                />
                <circle
                  cx={CX}
                  cy={CY}
                  r="100"
                  fill="none"
                  stroke={T.bandStroke}
                  strokeWidth="1.2"
                  opacity="0.30"
                />
                <circle cx={CX} cy={CY} r="98" fill="url(#hubGrad)" />
                <circle
                  cx={CX}
                  cy={CY}
                  r="98"
                  fill="none"
                  stroke={T.hubBorder}
                  strokeWidth="2"
                />
                <circle
                  cx={CX}
                  cy={CY}
                  r="88"
                  fill="none"
                  stroke={T.hubBorder}
                  strokeWidth="0.8"
                  opacity="0.5"
                />

                <path
                  d={`M ${CX - 145},${CY - 60} A 155,155 0 0,1 ${CX - 60},${CY - 145}`}
                  fill="none"
                  stroke={
                    isLight
                      ? "rgba(255,255,255,0.45)"
                      : "rgba(255,255,255,0.12)"
                  }
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 79,
                  height: 79,
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 20,
                  pointerEvents: "none",
                  textAlign: "center",
                  padding: 8,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Poppins,sans-serif",
                    fontSize: 11,
                    fontWeight: 900,
                    color: T.hubTitle,
                    lineHeight: 1.25,
                    letterSpacing: "-0.02em",
                    transition: "color 0.4s",
                  }}
                >
                  You win.
                  <br />
                  We place.
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "Poppins,sans-serif",
                    fontSize: 8,
                    fontWeight: 600,
                    color: T.hubSub,
                    transition: "color 0.4s",
                  }}
                >
                  100+ companies
                </p>
              </div>

              {COMPANIES.map((c, i) => {
                const isHov = hoveredIdx === i;
                const isSel = selected?.id === c.id;
                return (
                  <div
                    key={c.id}
                    ref={(el) => (itemRefs.current[i] = el)}
                    onMouseEnter={() => onLogoEnter(i)}
                    onMouseLeave={onLogoLeave}
                    onClick={() => onLogoClick(c)}
                    style={{
                      position: "absolute",
                      left: STAGE_CENTER,
                      top: STAGE_CENTER,
                      marginLeft: -HALF,
                      marginTop: -HALF,
                      width: TILE,
                      height: TILE,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      overflow: "visible",
                      zIndex: isHov || isSel ? 25 : 10,
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: TILE,
                        height: TILE,
                        borderRadius: 10,
                        background: "#ffffff",
                        border: isSel
                          ? `2.5px solid ${isLight ? "#1a4a9e" : "#f7c651"}`
                          : isHov
                            ? `2px solid ${isLight ? "#2a5cc4" : "#f7c651"}`
                            : isLight
                              ? "1.5px solid rgba(26,74,158,0.14)"
                              : "1.5px solid rgba(255,255,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: isSel ? T.logoHover : T.logoShadow,
                        transform: isSel ? "scale(1.10)" : "scale(1)",
                        transition:
                          "transform 0.22s ease, box-shadow 0.22s, border-color 0.22s",
                      }}
                    >
                      <img
                        src={c.logo}
                        alt={c.name}
                        style={{
                          width: 26,
                          height: 26,
                          objectFit: "contain",
                          display: "block",
                        }}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.innerHTML = `<span style="font-size:16px;font-weight:900;color:${c.color};font-family:Poppins,sans-serif">${c.name[0]}</span>`;
                        }}
                      />
                    </div>
                    <span
                      style={{
                        marginTop: 3,
                        fontSize: 7,
                        fontFamily: "Poppins,sans-serif",
                        fontWeight: 700,
                        color:
                          isHov || isSel
                            ? isLight
                              ? "#053859"
                              : "#f7c651"
                            : isLight
                              ? "rgba(26,74,158,0.68)"
                              : "rgba(255,255,255,0.52)",
                        whiteSpace: "nowrap",
                        letterSpacing: "0.02em",
                        pointerEvents: "none",
                        transition: "color 0.2s",
                        textShadow: isLight
                          ? "0 1px 3px rgba(255,255,255,0.98)"
                          : "0 1px 4px rgba(0,0,0,0.95)",
                        lineHeight: 1,
                        position: "relative",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      {c.name}
                    </span>
                    {isSel && (
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: isLight ? "#1a4a9e" : "#f7c651",
                          boxShadow: `0 0 5px ${isLight ? "rgba(26,74,158,0.6)" : "rgba(247,198,81,0.7)"}`,
                          marginTop: 2,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          
          <div
            style={{
              position: "absolute",
              bottom: -14,
              left: "50%",
              transform: "translateX(-50%)",
              width: 310,
              height: 22,
              background: T.plateFace,
              borderRadius: "50%",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -26,
              left: "50%",
              transform: "translateX(-50%)",
              width: 308,
              height: 14,
              background: T.plateRim,
              borderRadius: "0 0 50% 50% / 0 0 100% 100%",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -38,
              left: "50%",
              transform: "translateX(-50%)",
              width: 290,
              height: 18,
              background: `radial-gradient(ellipse, ${T.plateShadow} 0%, transparent 72%)`,
              borderRadius: "50%",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        </div>

        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.id} 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 280,
                flexShrink: 0,
                background: T.panelBg,
                border: `1px solid ${T.panelBorder}`,
                borderRadius: 20,
                padding: "22px 20px",
                boxShadow: `0 22px 68px ${T.shadow}`,
                position: "relative",
                transition: "background 0.4s, border-color 0.4s",
              }}
            >
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  border: `1px solid ${T.panelBorder}`,
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: T.panelSub,
                  fontSize: 13,
                }}
              >
                ✕
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    flexShrink: 0,
                    background: "#ffffff",
                    border: `1.5px solid ${T.panelBorder}`,
                    boxShadow: T.logoShadow,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={selected.logo}
                    alt={selected.name}
                    style={{ width: 36, height: 36, objectFit: "contain" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "Poppins,sans-serif",
                      fontSize: 15,
                      fontWeight: 800,
                      color: T.panelText,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {selected.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "Poppins,sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      color: isLight ? "#1a4a9e" : "#f7c651",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {selected.role}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                {[
                  { label: "Students Placed", value: `${selected.placed}+` },
                  { label: "Highest Package", value: selected.package },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: T.panelTag,
                      borderRadius: 10,
                      padding: "10px 12px",
                      border: `1px solid ${T.panelBorder}`,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: 18,
                        fontWeight: 900,
                        color: isLight ? "#1a4a9e" : "#f7c651",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: 9,
                        color: T.panelSub,
                        marginTop: 3,
                        fontWeight: 600,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: T.panelTag,
                  borderRadius: 10,
                  padding: "11px 12px",
                  marginBottom: 12,
                  border: `1px solid ${T.panelBorder}`,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "Poppins,sans-serif",
                    fontSize: 11,
                    lineHeight: 1.75,
                    color: T.panelSub,
                  }}
                >
                  {selected.achievement}
                </p>
              </div>

            
            </motion.div>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: 260,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: "32px 24px",
                borderRadius: 20,
                border: `1px dashed ${isLight ? "rgba(255,255,255,0.30)" : "rgba(91,155,213,0.35)"}`,
                background: isLight
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(91,155,213,0.03)",
                backdropFilter: "blur(4px)",
                transition: "all 0.4s",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "Poppins,sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: 1.6,
                  color: isLight
                    ? "rgba(255,255,255,0.70)"
                    : "rgba(91,155,213,0.50)",
                }}
              >
                Hover a logo to pause
                <br />
                Click to see placement details
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
