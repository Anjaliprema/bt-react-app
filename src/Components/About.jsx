import React, { useState, useEffect, useRef } from "react";
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
const TRIGGER_ANGLE = 360;
const activeNodeRef = { current: null };

function getClosestNodeId(rotation) {
  let minDiff = Infinity;
  let closestId = activeNodeRef.current ?? 0;
  BASE_ANGLES.forEach((base, i) => {
    const normalized = (((base + rotation) % 360) + 360) % 360;
    let diff = Math.abs(normalized - TRIGGER_ANGLE);
    if (diff > 180) diff = 360 - diff;
    if (diff < 20 && diff < minDiff) {
      minDiff = diff;
      closestId = PILLARS[i].id;
    }
  });
  activeNodeRef.current = closestId;
  return closestId;
}

function OrbitLines({ rotation, activeId, orbitR, imgSize }) {
  if (!orbitR || !imgSize || isNaN(orbitR) || isNaN(imgSize)) return null;

  const center = orbitR + imgSize / 2;

  const points = BASE_ANGLES.map((base) => {
    const rad = ((base + rotation) * Math.PI) / 180;
    return {
      x: center + Math.cos(rad) * orbitR,
      y: center + Math.sin(rad) * orbitR,
    };
  });

  return (
    <>
      <circle
        cx={center}
        cy={center}
        r={orbitR}
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
  const getOrbitR = () =>
    typeof window !== "undefined" && window.innerWidth <= 768 ? 75 : 130;
  const getImgSize = () =>
    typeof window !== "undefined" && window.innerWidth <= 768 ? 52 : 90;

  const [orbitR, setOrbitR] = useState(getOrbitR);
  const [imgSize, setImgSize] = useState(getImgSize);

  useEffect(() => {
    const onResize = () => {
      setOrbitR(getOrbitR());
      setImgSize(getImgSize());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const canvasSize = orbitR * 2 + imgSize;

  const [entered, setEntered] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activeId, setActiveId] = useState(null);
  const [manualId, setManualId] = useState(null);
  const [cardVisible, setCardVisible] = useState(false);
  const [inView, setInView] = useState(false);

  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const tickRef = useRef(null);
  const SPEED = 0.025;

  tickRef.current = (ts) => {
    if (!startRef.current) startRef.current = ts;
    const newRotation = (ts - startRef.current) * SPEED;
    setRotation(newRotation);
    setManualId((prev) => {
      if (prev === null) {
        const closest = getClosestNodeId(newRotation);
        setActiveId(closest);
      }
      return prev;
    });
    rafRef.current = requestAnimationFrame((t) => tickRef.current(t));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) setInView(true);
      },
      { threshold: 0.4 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setEntered(true), 120);
    return () => clearTimeout(t);
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setHintVisible(true), 700);
    return () => clearTimeout(t);
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    startRef.current = null;
    const delay = setTimeout(() => {
      rafRef.current = requestAnimationFrame((t) => tickRef.current(t));
    }, 3200);
    return () => {
      clearTimeout(delay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView]);

  useEffect(() => {
    if (activeId !== null) {
      setCardVisible(false);
      const t = setTimeout(() => setCardVisible(true), 600);
      return () => clearTimeout(t);
    } else {
      setCardVisible(false);
    }
  }, [activeId]);

  useEffect(() => {
    if (manualId !== null) {
      const t = setTimeout(() => setManualId(null), 4000);
      return () => clearTimeout(t);
    }
  }, [manualId]);

  const handleNodeClick = (id) => {
    setManualId((prev) => {
      if (prev === id) {
        setActiveId(getClosestNodeId(rotation));
        return null;
      }
      setActiveId(id);
      return id;
    });
  };

  const activeCard = PILLARS.find((p) => p.id === activeId) ?? null;

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="pillars-orbit-wrapper">
        <div
          className={`orbit-canvas-wrapper${inView ? " orbit-canvas-wrapper--entered" : ""}`}
        >
          <div
            className="orbit-canvas"
            style={{ width: canvasSize, height: canvasSize }}
          >
            <svg
              className="orbit-svg"
              viewBox={`0 0 ${canvasSize} ${canvasSize}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <OrbitLines
                rotation={rotation}
                activeId={activeId}
                orbitR={orbitR}
                imgSize={imgSize}
              />
            </svg>

            {PILLARS.map((pillar, i) => {
              const angleDeg = BASE_ANGLES[i] + rotation;
              const angleRad = (angleDeg * Math.PI) / 180;
              const cx = orbitR + imgSize / 2 + Math.cos(angleRad) * orbitR;
              const cy = orbitR + imgSize / 2 + Math.sin(angleRad) * orbitR;
              const isActive = activeId === pillar.id;

              return (
                <button
                  key={pillar.id}
                  className={`orbit-node${isActive ? " orbit-node--active" : ""}`}
                  style={{
                    left: cx - imgSize / 2,
                    top: cy - imgSize / 2,
                    width: imgSize,
                    height: imgSize,
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
          </div>
        </div>

        <div
          className={`pillar-card-panel-outer${inView ? " pillar-panel--entered" : ""}`}
          aria-live="polite"
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
                <h3 className="pillar-card__title">{activeCard.title}</h3>
                <p className="pillar-card__body">{activeCard.body}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
