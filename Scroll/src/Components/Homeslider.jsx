import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import poster1 from "../assets/poster1.png";
import poster6 from "../assets/poster6.png";
import poster7 from "../assets/poster7.png";
import poster8 from "../assets/poster8.png";
import poster9 from "../assets/poster9.png";
import poster10 from "../assets/poster10.png";

const slides = [
  { id: 1, image: poster7 },
  {
    id: 2,
    image: poster6,
  },
  {
    id: 3,
    image: poster10,
  },
  {
    id: 4,
    image: poster9,
  },
  {
    id: 5,
    image: poster8,
  },
  {
    id: 6,
    image: poster7,
  },
  {
    id: 7,
    image: poster1,
  },
];

const AUTOPLAY_MS = 3000;
const TOTAL = slides.length;
const HOVER_ZONE = 120;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const currentRef = useRef(0);
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const startTsRef = useRef(null);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  const navigate = useCallback((idx, dir) => {
    const safeIdx = ((idx % TOTAL) + TOTAL) % TOTAL;
    const d = dir !== undefined ? dir : safeIdx > currentRef.current ? 1 : -1;
    setDirection(d);
    setCurrent(safeIdx);
    currentRef.current = safeIdx;
    setProgress(0);
    startTsRef.current = null;
  }, []);

  const goNext = useCallback(
    () => navigate(currentRef.current + 1, 1),
    [navigate],
  );
  const goPrev = useCallback(
    () => navigate(currentRef.current - 1, -1),
    [navigate],
  );

  useEffect(() => {
    setProgress(0);
    startTsRef.current = null;

    const tick = (ts) => {
      if (!startTsRef.current) startTsRef.current = ts;
      const pct = Math.min(
        ((ts - startTsRef.current) / AUTOPLAY_MS) * 100,
        100,
      );
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [current]);

  useEffect(() => {
    timerRef.current = setTimeout(() => goNext(), AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [current, goNext]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);



  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      scale: 1.08,
      opacity: 0.6,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 1,
      transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] },
    }),
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const x = e.clientX;
    const w = e.currentTarget.offsetWidth;
    setShowLeft(x < HOVER_ZONE);
    setShowRight(x > w - HOVER_ZONE);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowLeft(false);
    setShowRight(false);
  }, []);

  return (
    <motion.section
      id="home"
      style={s.section}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={hasAnimated ? false : { opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.7, ease: [0.77, 0, 0.175, 1] }}
    >
      <AnimatePresence custom={direction} initial={false} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={s.slide}
        >
          <img
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            style={s.img}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      <button
        style={{
          ...s.arrow,
          left: 20,
          opacity: showLeft ? 1 : 0,
          pointerEvents: showLeft ? "auto" : "none",
        }}
        onClick={goPrev}
        aria-label="Previous slide"
        onMouseDown={(e) =>
          (e.currentTarget.style.boxShadow =
            "2px 2px 5px rgba(0,0,0,0.6), inset 2px 2px 4px rgba(0,0,0,0.4)")
        }
        onMouseUp={(e) =>
          (e.currentTarget.style.boxShadow =
            "6px 6px 12px rgba(0,0,0,0.6), -3px -3px 8px rgba(255,255,255,0.08), inset 1px 1px 2px rgba(255,255,255,0.15), inset -1px -1px 2px rgba(0,0,0,0.4)")
        }
      >
        <FaArrowLeft />
      </button>

      <button
        style={{
          ...s.arrow,
          right: 20,
          opacity: showRight ? 1 : 0,
          pointerEvents: showRight ? "auto" : "none",
        }}
        onClick={goNext}
        aria-label="Next slide"
        onMouseDown={(e) =>
          (e.currentTarget.style.boxShadow =
            "2px 2px 5px rgba(0,0,0,0.6), inset 2px 2px 4px rgba(0,0,0,0.4)")
        }
        onMouseUp={(e) =>
          (e.currentTarget.style.boxShadow =
            "6px 6px 12px rgba(0,0,0,0.6), -3px -3px 8px rgba(255,255,255,0.08), inset 1px 1px 2px rgba(255,255,255,0.15), inset -1px -1px 2px rgba(0,0,0,0.4)")
        }
      >
        <FaArrowRight />
      </button>

      <div style={s.bottomBar}>
        
      </div>
    </motion.section>
  );
}

const s = {
  section: {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 52px)",
    overflow: "hidden",
    background: "#000",
    userSelect: "none",
  },
  slide: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    display: "block",
    pointerEvents: "none",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 30,
    background: "linear-gradient(145deg, #6e6c6c, #a9a9a915)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    color: "#fff",
    border: "none",
    width: 52,
    height: 52,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "1rem",
    outline: "none",
    boxShadow: `
    6px 6px 12px rgba(0, 0, 0, 0.6),
    -3px -3px 8px rgba(255, 255, 255, 0.08),
    inset 1px 1px 2px rgba(255, 255, 255, 0.15),
    inset -1px -1px 2px rgba(0, 0, 0, 0.4)
  `,
    transition:
      "opacity 0.3s ease, transform 0.15s ease, box-shadow 0.15s ease",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: "18px 24px",
  },

  dots: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  dotBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "6px 0",
    outline: "none",
  },
  dotTrack: {
    width: 36,
    height: 3,
    background: "rgba(255,255,255,0.28)",
    borderRadius: 2,
    overflow: "hidden",
  },
  dotFill: {
    height: "100%",
    background: "#f7c651",
    borderRadius: 2,
    transition: "width 0.05s linear",
  },
};
