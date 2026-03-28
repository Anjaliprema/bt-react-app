import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import "./TransformationSection.css";
const skills = [
  { name: "HTML & CSS", before: 30, after: 95, color: "#e34f26" },
  { name: "JavaScript", before: 15, after: 90, color: "#f7c651" },
  { name: "React.js", before: 0, after: 88, color: "#61dafb" },
  { name: "Node.js", before: 0, after: 82, color: "#962f9f" },
  { name: "Express.js", before: 0, after: 80, color: " #1c7ab9" },
  { name: "MongoDB", before: 0, after: 78, color: "#4db33d" },
];

const radarSkills = [
  { label: "Frontend", before: 25, after: 92 },
  { label: "Backend", before: 5, after: 85 },
  { label: "Database", before: 5, after: 80 },
  { label: "Problem Solving", before: 40, after: 88 },
  { label: "Projects", before: 10, after: 90 },
  { label: "Interview\nReadiness", before: 20, after: 87 },
];

const stats = [
  { label: "Confidence Score", before: 22, after: 91, suffix: "%" },
  { label: "Projects Built", before: 0, after: 3, suffix: "" },
  { label: "Skills Gained", before: 1, after: 7, suffix: "" },
  { label: "Placement Ready", before: 10, after: 95, suffix: "%" },
];

function AnimatedCounter({ from, to, suffix, inView, delay = 0 }) {
  const [val, setVal] = useState(from);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration: 1.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return controls.stop;
  }, [inView]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

function RadarChart({ inView }) {
  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const r = 80;
  const n = radarSkills.length;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, 1, {
      duration: 2,
      delay: 0.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setProgress,
    });
    return controls.stop;
  }, [inView]);

  const angleStep = (2 * Math.PI) / n;
  const getPoint = (val, i, scale = 1) => {
    const angle = i * angleStep - Math.PI / 2;
    const d = (val / 100) * r * scale;
    return [cx + d * Math.cos(angle), cy + d * Math.sin(angle)];
  };
  const toPath = (pts) =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ") + "Z";

  const beforePts = radarSkills.map((s, i) =>
    getPoint(s.before + (s.after - s.before) * 0, i),
  );
  const afterPts = radarSkills.map((s, i) =>
    getPoint(s.before + (s.after - s.before) * progress, i),
  );

  const gridLevels = [25, 50, 75, 100];

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{ maxWidth: 260 }}>
      {gridLevels.map((lvl) => {
        const pts = radarSkills.map((_, i) => getPoint(lvl, i));
        return (
          <polygon
            key={lvl}
            points={pts.map((p) => p.join(",")).join(" ")}
            fill="none"
            stroke="var(--ts-grid-soft)"
            strokeWidth="1"
          />
        );
      })}
      {radarSkills.map((_, i) => {
        const [px, py] = getPoint(100, i);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={px}
            y2={py}
            stroke="var(--ts-grid)"
            strokeWidth="1"
          />
        );
      })}

      <path
        d={toPath(beforePts)}
        fill="rgba(150,150,150,0.12)"
        stroke="rgba(150,150,150,0.4)"
        strokeWidth="1.5"
      />

      <path
        d={toPath(afterPts)}
        fill="var(--ts-accent-soft)"
        stroke="var(--ts-accent)"
        strokeWidth="2"
      />
      {afterPts.map(([px, py], i) => (
        <circle key={i} cx={px} cy={py} r="3.5" fill="var(--ts-accent)" />
      ))}

      {radarSkills.map((s, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const labelR = r + 22;
        const lx = cx + labelR * Math.cos(angle);
        const ly = cy + labelR * Math.sin(angle);
        return (
          <text
            key={i}
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="8"
            fill="var(--ts-text-soft)"
          >
            {s.label.split("\n").map((line, li) => (
              <tspan key={li} x={lx} dy={li === 0 ? 0 : 10}>
                {line}
              </tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
}

function TransformationSection({ isLight }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [barProgress, setBarProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, 1, {
      duration: 1.8,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setBarProgress,
    });
    return controls.stop;
  }, [inView]);

  return (
    <section
      className={`tsection ${isLight ? "ts-light" : "ts-dark"}`}
      ref={ref}
    >
      <motion.div
        className="ts-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className="ts-eyebrow">Student Transformation</span>
        <h2 className="ts-title">From Beginner to Industry-Ready</h2>
        <p className="ts-sub">
          Real skill growth in 15 days — measured, tracked, proven
        </p>
      </motion.div>

      <div className="ts-body">
        <motion.div
          className="ts-panel ts-bars"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h3 className="ts-panel-title">Skill Level Growth</h3>
          <div className="ts-legend">
            <span className="ts-legend-dot ts-legend-before" />{" "}
            <span>Before</span>
            <span
              className="ts-legend-dot ts-legend-after"
              style={{ marginLeft: 16 }}
            />{" "}
            <span>After</span>
          </div>

          <div className="ts-skill-list">
            {skills.map((skill, i) => {
              const afterVal =
                skill.before + (skill.after - skill.before) * barProgress;
              return (
                <motion.div
                  key={skill.name}
                  className="ts-skill-row"
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08 }}
                >
                  <div className="ts-skill-meta">
                    <span className="ts-skill-name">{skill.name}</span>
                    <span
                      className="ts-skill-val"
                      style={{ color: skill.color }}
                    >
                      {Math.round(afterVal)}%
                    </span>
                  </div>

                  <div className="ts-bar-track">
                    <div
                      className="ts-bar-ghost"
                      style={{ width: `${skill.before}%` }}
                    />
                    <div
                      className="ts-bar-fill"
                      style={{
                        width: `${afterVal}%`,
                        background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                        boxShadow: `0 0 10px ${skill.color}55`,
                      }}
                    />
                    <div
                      className="ts-bar-marker"
                      style={{ left: `${skill.before}%` }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="ts-panel ts-radar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="ts-panel-title">Competency Radar</h3>
          <div className="ts-radar-legend">
            <span className="ts-r-dot ts-r-before" /> <span>Before</span>
            <span
              className="ts-r-dot ts-r-after"
              style={{ marginLeft: 12 }}
            />{" "}
            <span>After</span>
          </div>
          <br />
          <div className="ts-radar-wrap">
            <RadarChart inView={inView} />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="days"
        initial={{ scale: 0, rotate: -15 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{
          delay: 0.9,
          type: "spring",
          stiffness: 200,
          damping: 12,
        }}
      >
        <span>15 Days</span>
      </motion.div>

      <motion.div
        className="ts-panel ts-stats"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h3 className="ts-panel-title">Key Outcomes</h3>

        <div className="ts-stat-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="ts-stat-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <svg
                className="ts-spark"
                viewBox="0 0 60 24"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id={`sg${i}`} x1="0" x2="1" y1="0" y2="0">
                    <stop
                      offset="0%"
                      stopColor="var(--ts-accent)"
                      stopOpacity="0.25"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--ts-accent)"
                      stopOpacity="1"
                    />
                  </linearGradient>
                </defs>
                <motion.polyline
                  points={`0,${24 - (s.before / 100) * 20} 20,${24 - (s.before / 100) * 20} 40,4 60,2`}
                  fill="none"
                  stroke={`url(#sg${i})`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.6 + i * 0.1 }}
                />
              </svg>

              <div className="ts-stat-values">
                <span className="ts-stat-before">
                  {s.before}
                  {s.suffix}
                </span>
                <span className="ts-stat-arrow">→</span>
                <span className="ts-stat-after">
                  <AnimatedCounter
                    from={s.before}
                    to={s.after}
                    suffix={s.suffix}
                    inView={inView}
                    delay={0.5 + i * 0.1}
                  />
                </span>
              </div>
              <p className="ts-stat-label">{s.label}</p>

              <svg className="ts-arc" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="3"
                />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="var(--ts-accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${s.after} 100`}
                  strokeDashoffset="25"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{
                    duration: 1.6,
                    delay: 0.5 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    transformOrigin: "center",
                    transform: "rotate(-90deg)",
                  }}
                />
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="ts-tech-row">
          {[
            { label: "HTML", color: "#e34f26" },
            { label: "CSS", color: "rgb(244, 29, 108)" },
            { label: "JS", color: "#f7c651" },
            { label: "React", color: "#61dafb" },
            { label: "Node", color: "#962f9f" },
            { label: "Express", color: " #1c7ab9" },
            { label: "MongoDB", color: "#4db33d" },
          ].map((t, i) => (
            <motion.span
              key={t.label}
              className="ts-tech-pill"
              style={{ "--tc": t.color }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.7 + i * 0.06,
                type: "spring",
                stiffness: 220,
                damping: 14,
              }}
            >
              {t.label}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
export default TransformationSection;
