import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, animate, useInView } from "framer-motion";

const FILTER_TABS = ["All", "Product Based", "Service Based", "Startups", "MNC"];

const PLACED_STUDENTS = [
  {
    id: 1,
    name: "Harish Abimanyu",
    role: "Developer",
    company: "Temenos",
    batch: "2023",
    course: "Java Full Stack",
    pkg: "8 LPA",
    category: "Product Based",
    img: "https://placehold.co/300x400/053859/ffffff?text=Harish",
  },
  {
    id: 2,
    name: "Majeed",
    role: "SDE",
    company: "Amazon",
    batch: "2023",
    course: "DSA + Full Stack",
    pkg: "24 LPA",
    category: "Product Based",
    img: "https://placehold.co/300x400/0a5c8f/ffffff?text=Majeed",
  },
  {
    id: 3,
    name: "Devi V",
    role: "QAE",
    company: "Amazon",
    batch: "2022",
    course: "Java Full Stack",
    pkg: "18 LPA",
    category: "Product Based",
    img: "https://placehold.co/300x400/074c7a/ffffff?text=Devi",
  },
  {
    id: 4,
    name: "Sownthari R P",
    role: "Developer",
    company: "Payoda Technologies",
    batch: "2023",
    course: "Frontend Dev",
    pkg: "6 LPA",
    category: "Service Based",
    img: "https://placehold.co/300x400/053859/ffffff?text=Sownthari",
  },
  {
    id: 5,
    name: "Rahul S",
    role: "Full Stack Developer",
    company: "Sirius",
    batch: "2022",
    course: "MERN Stack",
    pkg: "9 LPA",
    category: "Startups",
    img: "https://placehold.co/300x400/0a5c8f/ffffff?text=Rahul",
  },
  {
    id: 6,
    name: "Gayatthri A",
    role: "Lead",
    company: "Capgemini",
    batch: "2023",
    course: "Java Full Stack",
    pkg: "12 LPA",
    category: "MNC",
    img: "https://placehold.co/300x400/074c7a/ffffff?text=Gayatthri",
  },
  {
    id: 7,
    name: "Priya K",
    role: "Backend Engineer",
    company: "Infosys",
    batch: "2023",
    course: "Java Full Stack",
    pkg: "7 LPA",
    category: "MNC",
    img: "https://placehold.co/300x400/053859/ffffff?text=Priya",
  },
  {
    id: 8,
    name: "Arun M",
    role: "Frontend Dev",
    company: "TCS",
    batch: "2022",
    course: "React + Node",
    pkg: "8 LPA",
    category: "MNC",
    img: "https://placehold.co/300x400/0a5c8f/ffffff?text=Arun",
  },
];

function StudentCard({ student, isLight, accent, borderColor, index, revealed }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92, filter: "blur(6px)" }}
      animate={
        revealed
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 60, scale: 0.92, filter: "blur(6px)" }
      }
      transition={{
        duration: 0.65,
        delay: revealed ? index * 0.07 : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: isLight ? "#ffffff" : "#111116",
        border: `1.5px solid ${hovered ? accent : borderColor}`,
        boxShadow: hovered
          ? isLight
            ? "0 16px 48px rgba(5,56,89,0.14)"
            : "0 16px 48px rgba(0,0,0,0.55)"
          : isLight
          ? "0 2px 12px rgba(5,56,89,0.05)"
          : "0 2px 12px rgba(0,0,0,0.25)",
        transition: "border 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img
          src={student.img}
          alt={student.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            transition: "transform 0.45s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: isLight
              ? "linear-gradient(135deg,#053859,#0a5c8f)"
              : "linear-gradient(135deg,#f7c651,#e0a419)",
            color: isLight ? "#fff" : "#000",
            fontWeight: 800,
            fontSize: 11,
            padding: "4px 10px",
            borderRadius: 20,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {student.pkg}
        </div>
        {/* Name */}
        <div style={{ position: "absolute", bottom: 12, left: 14 }}>
          <p style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "Poppins, sans-serif" }}>
            {student.name}
          </p>
          <p style={{ margin: "2px 0 0", color: "rgba(255,255,255,0.75)", fontSize: 12, fontFamily: "Poppins, sans-serif" }}>
            {student.role}
          </p>
        </div>
      </div>

      <div style={{ padding: "14px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div
            style={{
              width: 28, height: 28, borderRadius: 8,
              background: isLight ? "rgba(5,56,89,0.08)" : "rgba(247,198,81,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.2">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 13, color: accent, fontFamily: "Poppins, sans-serif" }}>
            {student.company}
          </span>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20,
              background: isLight ? "rgba(5,56,89,0.06)" : "rgba(247,198,81,0.08)",
              color: isLight ? "#053859" : "#f7c651",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {student.course}
          </span>
          <span
            style={{
              fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20,
              background: isLight ? "rgba(5,56,89,0.04)" : "rgba(255,255,255,0.05)",
              color: isLight ? "rgba(5,56,89,0.6)" : "rgba(255,255,255,0.45)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Batch {student.batch}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function CountUp({ target, inView }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, {
      duration: 1.6,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return ctrl.stop;
  }, [inView, target]);
  return <>{val}</>;
}

export default function PlacedStudentsSection({ isLight }) {
  const sectionRef    = useRef(null);
  const inView        = useInView(sectionRef, { once: true, amount: 0.25 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [revealed,    setRevealed]      = useState(false);
  const [showHint,    setShowHint]      = useState(false);
  const revealedRef   = useRef(false);
  const cleanupRef    = useRef(null);

  const accent      = isLight ? "#053859" : "#f7c651";
  const subColor    = isLight ? "rgba(5,56,89,0.62)" : "rgba(255,255,255,0.52)";
  const borderColor = isLight ? "rgba(5,56,89,0.12)" : "rgba(247,198,81,0.15)";

  const filtered =
    activeFilter === "All"
      ? PLACED_STUDENTS
      : PLACED_STUDENTS.filter((s) => s.category === activeFilter);

  useEffect(() => {
    if (!inView || revealedRef.current) return;

    document.body.style.overflow    = "hidden";
    document.documentElement.style.overflow = "hidden";

    const hintTimer = setTimeout(() => {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 2200);
    }, 600);

    const listenTimer = setTimeout(() => {
      const runReveal = () => {
        if (revealedRef.current) return;
        revealedRef.current = true;
        setRevealed(true);

        window.removeEventListener("wheel",     blockScroll);
        window.removeEventListener("touchmove", blockScroll);
        window.removeEventListener("keydown",   handleKey);
        window.removeEventListener("click",     runReveal);

        setTimeout(() => {
          document.body.style.overflow    = "";
          document.documentElement.style.overflow = "";
        }, 800);
      };

      const handleKey = (e) => {
        if (["ArrowDown","ArrowUp","PageDown","PageUp","Space"].includes(e.code)) {
          e.preventDefault();
          runReveal();
        }
      };

      const blockScroll = (e) => { e.preventDefault(); runReveal(); };

      window.addEventListener("wheel",     blockScroll, { passive: false });
      window.addEventListener("touchmove", blockScroll, { passive: false });
      window.addEventListener("keydown",   handleKey);
      window.addEventListener("click",     runReveal);

      cleanupRef.current = () => {
        window.removeEventListener("wheel",     blockScroll);
        window.removeEventListener("touchmove", blockScroll);
        window.removeEventListener("keydown",   handleKey);
        window.removeEventListener("click",     runReveal);
      };
    }, 1200);

    return () => {
      clearTimeout(hintTimer);
      clearTimeout(listenTimer);
      if (cleanupRef.current) cleanupRef.current();
      document.body.style.overflow    = "";
      document.documentElement.style.overflow = "";
    };
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "80px 40px 60px",
        background: isLight ? "#ffffff" : "#0d0d0d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(22px, 4vw, 34px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: isLight ? "#373738" : "rgba(255,255,255,0.92)",
              margin: "0 0 8px",
            }}
          >
            Real Stories, Real Results:{" "}
            <span style={{ color: accent }}>Our Students Success Stories.</span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, color: subColor, maxWidth: 480, margin: "0 auto" }}>
            Every card below is a real student who walked in with a dream and walked out with an offer.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 24 }}
          >
            {[
              { label: "Students Placed", value: 5000, suffix: "+" },
              { label: "Highest Package", value: 24,   suffix: " LPA" },
              { label: "Hiring Companies", value: 500,  suffix: "+" },
              { label: "Product Offers",  value: 200,  suffix: "+" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 220, damping: 14 }}
                style={{ textAlign: "center" }}
              >
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: "clamp(22px,3vw,32px)", color: accent, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  <CountUp target={s.value} inView={inView} />{s.suffix}
                </div>
                <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, color: subColor, margin: "4px 0 0" }}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}
        >
          {FILTER_TABS.map((tab) => {
            const isAct = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => { setActiveFilter(tab); }}
                style={{
                  padding: "9px 20px",
                  borderRadius: 999,
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.22s ease",
                  background: isAct
                    ? isLight ? "linear-gradient(135deg,#053859,#0a5c8f)" : "linear-gradient(135deg,#f7c651,#e0a419)"
                    : "transparent",
                  color: isAct ? (isLight ? "#fff" : "#000") : isLight ? "#053859" : "rgba(255,255,255,0.55)",
                  border: `1.5px solid ${isAct ? "transparent" : borderColor}`,
                  boxShadow: isAct
                    ? isLight ? "0 4px 16px rgba(5,56,89,0.25)" : "0 4px 16px rgba(247,198,81,0.25)"
                    : "none",
                }}
              >
                {tab}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {filtered.map((s, i) => (
              <StudentCard
                key={s.id}
                student={s}
                isLight={isLight}
                accent={accent}
                borderColor={borderColor}
                index={i}
                revealed={revealed}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 30,
              pointerEvents: "none",
              display: "inline-block",
              textAlign: "center",
              padding: "12px 24px",
              borderRadius: 999,
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              color:      isLight ? "rgba(5,56,89,0.8)"   : "rgba(247,198,81,0.9)",
              background: isLight ? "rgba(5,56,89,0.06)"  : "rgba(247,198,81,0.08)",
              border:     isLight ? "1px solid rgba(5,56,89,0.18)" : "1px solid rgba(247,198,81,0.22)",
              backdropFilter: "blur(10px)",
            }}
          >
            ↓ Scroll to reveal the success stories
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!revealed && inView && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: isLight
                ? "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.85) 100%)"
                : "linear-gradient(to bottom, transparent 0%, rgba(13,13,13,0.55) 40%, rgba(13,13,13,0.85) 100%)",
              backdropFilter: "blur(4px)",
              zIndex: 10,
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}