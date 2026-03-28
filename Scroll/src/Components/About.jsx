import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./About.css";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

const PILLARS = [
  {
    id: 0,
    src: about1,
    label: "Adaptive Training",
    title: "Adaptive Training",
    body: "Rather than imposing a fixed syllabus, we tailor our approach to each student's unique learning journey. Our proprietary tool conducts daily assessments and generates progress charts, providing you with detailed statistical reports and live tracking of each student's results.",
  },
  {
    id: 1,
    src: about2,
    label: "Curve Technique",
    title: "Curve Technique",
    body: "Our teaching methodology departs from traditional lecturing. We integrate engaging activities and hands-on practical sessions to enhance comprehension. Encouraging students to think critically and engage in open dialogue, we create an environment for the exchange of ideas and insights.",
  },
  {
    id: 2,
    src: about3,
    label: "Developers - Mentors",
    title: "Developers - Mentors",
    body: "Our in-house trainers are seasoned industry experts who have excelled in interviews with their vast expertise. At Better Tomorrow, our product engineers have meticulously crafted an immersive training plan, backed by an extensive repository of interview questions.",
  },
];

const ENTRY_FROM = [
  { x: "-140vw", y: "0px" },
  { x: "140vw", y: "0px" },
  { x: "0px", y: "-140vh" },
];

const BASE_ANGLES = [270, 30, 150];
const ORBIT_R = 130;
const IMG_SIZE = 90;

function OrbitLines({ rotation, activeId }) {
  const center = ORBIT_R + IMG_SIZE / 2;

  const points = BASE_ANGLES.map((base) => {
    const rad = ((base + rotation) * Math.PI) / 180;
    return {
      x: center + Math.cos(rad) * ORBIT_R,
      y: center + Math.sin(rad) * ORBIT_R,
    };
  });

  return (
    <>
      <circle
        cx={center}
        cy={center}
        r={ORBIT_R}
        fill="none"
        stroke="var(--orbit-border)"
        strokeWidth={1}
        strokeDasharray="5 7"
        opacity={0.45}
      />
      {points.map((pt, i) => (
        <line
          key={`spoke-${i}`}
          x1={center}
          y1={center}
          x2={pt.x}
          y2={pt.y}
          stroke="var(--orbit-border)"
          strokeWidth={1}
          strokeDasharray="3 6"
          opacity={0.4}
        />
      ))}
      {[
        [0, 1],
        [1, 2],
        [2, 0],
      ].map(([a, b]) => {
        const highlighted =
          activeId === PILLARS[a].id || activeId === PILLARS[b].id;
        return (
          <line
            key={`edge-${a}-${b}`}
            x1={points[a].x}
            y1={points[a].y}
            x2={points[b].x}
            y2={points[b].y}
            stroke="var(--orbit-accent)"
            strokeWidth={highlighted ? 2.5 : 1.5}
            strokeDasharray={highlighted ? "0" : "6 4"}
            opacity={0.8}
            style={{ transition: "stroke-width 0.3s" }}
          />
        );
      })}
    </>
  );
}

function About() {
  const [entered, setEntered] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activeId, setActiveId] = useState(null);
  const [cardVisible, setCardVisible] = useState(false);

  const rafRef = useRef(null);
  const startRef = useRef(null);
  const SPEED = 0.025;

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (entered) {
      const t = setTimeout(() => setHintVisible(true), 900);
      return () => clearTimeout(t);
    }
  }, [entered]);

  useEffect(() => {
    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      setRotation((ts - startRef.current) * SPEED);
      rafRef.current = requestAnimationFrame(tick);
    };
    const delay = setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, 1300);
    return () => {
      clearTimeout(delay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (activeId !== null) {
      setCardVisible(false);
      const t = setTimeout(() => setCardVisible(true), 90);
      return () => clearTimeout(t);
    } else {
      setCardVisible(false);
    }
  }, [activeId]);

  const handleNodeClick = (id) =>
    setActiveId((prev) => (prev === id ? null : id));

  const activeCard = PILLARS.find((p) => p.id === activeId) ?? null;
  const canvasSize = ORBIT_R * 2 + IMG_SIZE;

  return (
    <section id="about" className="about-section">
      <div className="pillars-orbit-wrapper">
        <motion.div
          className="orbit-canvas"
          style={{ width: canvasSize, height: canvasSize }}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <svg
            className="orbit-svg"
            viewBox={`0 0 ${canvasSize} ${canvasSize}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <OrbitLines rotation={rotation} activeId={activeId} />
          </svg>

          {PILLARS.map((pillar, i) => {
            const angleDeg = BASE_ANGLES[i] + rotation;
            const angleRad = (angleDeg * Math.PI) / 180;
            const cx = ORBIT_R + IMG_SIZE / 2 + Math.cos(angleRad) * ORBIT_R;
            const cy = ORBIT_R + IMG_SIZE / 2 + Math.sin(angleRad) * ORBIT_R;
            const isActive = activeId === pillar.id;

            return (
              <button
                key={pillar.id}
                className={`orbit-node${isActive ? " orbit-node--active" : ""}`}
                style={{
                  left: cx - IMG_SIZE / 2,
                  top: cy - IMG_SIZE / 2,
                  width: IMG_SIZE,
                  height: IMG_SIZE,
                  transform: entered
                    ? "translate(0, 0)"
                    : `translate(${ENTRY_FROM[i].x}, ${ENTRY_FROM[i].y})`,
                  opacity: entered ? 1 : 0,
                  transitionDelay: entered ? "0s" : `${i * 0.15}s`,
                }}
                aria-label={pillar.label}
                onClick={() => handleNodeClick(pillar.id)}
              >
                <img src={pillar.src} alt={pillar.label} draggable={false} />
                <span className="orbit-node__ring" aria-hidden="true" />
                <span className="orbit-node__label">{pillar.label}</span>
              </button>
            );
          })}

          <span className="orbit-center-dot" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="pillar-card-panel-outer"
          aria-live="polite"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <div
            className={[
              "orbit-hint",
              hintVisible ? "orbit-hint--visible" : "",
              activeId !== null ? "orbit-hint--dismissed" : "",
            ]
              .join(" ")
              .trim()}
          >
            <div className="hint-arrows">
              <span className="hint-arrow">←</span>
              <span className="hint-arrow hint-arrow--d1">←</span>
              <span className="hint-arrow hint-arrow--d2">←</span>
            </div>

            <div className="hint-icon">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
              </svg>
            </div>

            <p className="hint-title">Click any image</p>
            <p className="hint-sub">to explore its details</p>

            <div className="hint-dots">
              {PILLARS.map((p) => (
                <span key={p.id} className="hint-dot" />
              ))}
            </div>
          </div>

          <div
            className={`pillar-card-panel${
              cardVisible && activeCard ? " pillar-card-panel--visible" : ""
            }`}
          >
            {activeCard && (
              <div className="pillar-card">
                <img src={activeCard.src} alt={activeCard.title} />
                <h3>{activeCard.title}</h3>
                <p>{activeCard.body}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
