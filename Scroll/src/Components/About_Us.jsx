import React, { useState, useEffect, useRef } from "react";
import { delay, motion } from "framer-motion";
import Header from "./Header";
import "./Home_Static.css";
import sampleVideo from "../assets/BT_VIDEO.mp4";
import MissionTarget from "./MissionTarget";
import aimg1 from "../assets/aimg1.png";
import aimg2 from "../assets/aimg2.png";
import aimg3 from "../assets/aimg3.png";
import social1 from "../assets/social1.png";
import social2 from "../assets/social2.png";
import Footer from "./Footer";
function IconSoundOn() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}
function IconSoundOff() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}
function IconPlay() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
function IconPause() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

const AudioIntroPrompt = React.forwardRef(function (
  { theme, onEnableAudio, onDismiss },
  ref,
) {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const isDark = theme === "dark";
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);
  const dismiss = (withAudio) => {
    setLeaving(true);
    setTimeout(() => {
      if (withAudio) onEnableAudio();
      onDismiss();
    }, 380);
  };
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        bottom: "36px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        opacity: visible && !leaving ? 1 : 0,
        translate: visible && !leaving ? "0 0" : "0 24px",
        transition:
          "opacity 0.38s cubic-bezier(.16,1,.3,1), translate 0.38s cubic-bezier(.16,1,.3,1)",
        pointerEvents: visible && !leaving ? "auto" : "none",
      }}
    >
      <svg
        viewBox="0 0 64 64"
        width="72"
        height="72"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`.char-bounce{animation:charBob 2s ease-in-out infinite;transform-origin:50% 95%}@keyframes charBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.wave-arm{animation:waveArm 0.9s ease-in-out infinite alternate;transform-origin:42px 30px}@keyframes waveArm{from{transform:rotate(-8deg)}to{transform:rotate(18deg)}}.eye-blink{animation:blink 3.5s ease-in-out infinite;transform-origin:center}@keyframes blink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(0.1)}}.b1{animation:bar 0.6s ease-in-out infinite alternate}.b2{animation:bar 0.6s ease-in-out infinite alternate 0.15s}.b3{animation:bar 0.6s ease-in-out infinite alternate 0.3s}@keyframes bar{from{transform:scaleY(0.4)}to{transform:scaleY(1)}}`}</style>
        <g className="char-bounce">
          <ellipse
            cx="32"
            cy="46"
            rx="13"
            ry="11"
            fill={isDark ? "#2a2a2a" : "#e8f0f7"}
            stroke={isDark ? "#f7c651" : "#053859"}
            strokeWidth="1.5"
          />
          <circle
            cx="32"
            cy="26"
            r="14"
            fill={isDark ? "#2a2a2a" : "#e8f0f7"}
            stroke={isDark ? "#f7c651" : "#053859"}
            strokeWidth="1.5"
          />
          <path
            d="M20 22 Q24 12 32 14 Q40 12 44 22"
            fill={isDark ? "#f7c651" : "#053859"}
            stroke="none"
          />
          <g className="eye-blink">
            <ellipse
              cx="27"
              cy="26"
              rx="2.2"
              ry="2.8"
              fill={isDark ? "#f7c651" : "#053859"}
            />
            <ellipse
              cx="37"
              cy="26"
              rx="2.2"
              ry="2.8"
              fill={isDark ? "#f7c651" : "#053859"}
            />
          </g>
          <circle cx="28.2" cy="24.8" r="0.7" fill="white" />
          <circle cx="38.2" cy="24.8" r="0.7" fill="white" />
          <path
            d="M27 30 Q32 35 37 30"
            fill="none"
            stroke={isDark ? "#f7c651" : "#053859"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="19"
            y1="40"
            x2="11"
            y2="50"
            stroke={isDark ? "#f7c651" : "#053859"}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <g className="wave-arm">
            <line
              x1="45"
              y1="40"
              x2="55"
              y2="32"
              stroke={isDark ? "#f7c651" : "#053859"}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle
              cx="55"
              cy="31"
              r="3"
              fill={isDark ? "#f7c651" : "#053859"}
            />
          </g>
          <g transform="translate(0 15)">
            <rect
              className="b1"
              x="3"
              y="18"
              width="3"
              height="8"
              rx="1.5"
              fill={isDark ? "#f7c651" : "#053859"}
              style={{ transformOrigin: "5px 26px" }}
            />
            <rect
              className="b2"
              x="8"
              y="15"
              width="3"
              height="11"
              rx="1.5"
              fill={isDark ? "#f7c651" : "#053859"}
              style={{ transformOrigin: "9px 26px" }}
            />
            <rect
              className="b3"
              x="13"
              y="19"
              width="3"
              height="7"
              rx="1.5"
              fill={isDark ? "#f7c651" : "#053859"}
              style={{ transformOrigin: "14px 26px" }}
            />
          </g>
        </g>
      </svg>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => dismiss(true)}
          style={{
            padding: "8px 18px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: 700,
            fontFamily: "Poppins, sans-serif",
            background: isDark
              ? "linear-gradient(135deg,#f7c651,#e0a419)"
              : "linear-gradient(135deg,#053859,#0a5c8f)",
            color: isDark ? "#000" : "#fff",
          }}
        >
          Enable audio
        </button>
        <button
          onClick={() => dismiss(false)}
          style={{
            padding: "8px 16px",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.15)" : "rgba(5,56,89,0.2)"}`,
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            background: "transparent",
            color: isDark ? "rgba(255,255,255,0.4)" : "rgba(5,56,89,0.4)",
          }}
        >
          Skip
        </button>
      </div>
    </div>
  );
});

const TOPICS = [
  {
    id: 1,
    num: "01",
    title: "Happy Coding Lifestyle",
    img: aimg1,
    desc: "To facilitate the learning process and empower them to code independently with confidence.",
  },
  {
    id: 2,
    num: "02",
    title: "Create a Responsible Engineer",
    img: aimg2,
    desc: "Getting an offer is not our goal — to make them a better problem-solving Engineer. We are not afraid of lay-offs anymore.",
  },
  {
    id: 3,
    num: "03",
    title: "Rewrite Your Placement History",
    img: aimg3,
    desc: "Our approach to placement is unique, and our SkillHub360 training program provides comprehensive interview preparation, covering all aspects.",
  },
];
function PhiloItem({ topic, index, total, pageRef, isDark }) {
  const itemRef = useRef(null);
  const [prog, setProg] = useState(0);
  const accent = isDark ? "#f7c651" : "#053859";
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768,
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const page = pageRef?.current;
    if (!page) return;
    function onScroll() {
      const el = itemRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = page.clientHeight;
      const raw = (vh - rect.top) / vh;
      setProg(Math.max(0, Math.min(1, raw)));
    }
    page.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => page.removeEventListener("scroll", onScroll);
  }, [pageRef]);

  const ease = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const ep = ease(Math.min(prog * 1.5, 1));



  if (isMobile) {
    return (
      <div
        ref={itemRef}
        style={{
          width: "100%",
          background: isDark ? "#0a0a0a" : "#ffffff",
          padding: "32px 20px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 220,
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            marginBottom: 24,
          }}
        >
          <img
            src={topic.img}
            alt={topic.title}
            style={{
              width: "100%",
              height: "140%", 
              objectFit: "cover",
              display: "block",
              transform: `translateY(${(1 - ep) * -30}%)`,
              transition: "transform 0.05s linear",
              willChange: "transform",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -10,
              right: 8,
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1,
              color: isDark ? "rgba(247,198,81,0.12)" : "rgba(5,56,89,0.08)",
              fontFamily: "Poppins, sans-serif",
              userSelect: "none",
              letterSpacing: "-0.05em",
              pointerEvents: "none",
            }}
          >
            {topic.num}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              background: isDark
                ? "linear-gradient(to top, #0a0a0a, transparent)"
                : "linear-gradient(to top, #ffffff, transparent)",
              pointerEvents: "none",
            }}
          />
        </div>

        <div
          style={{
            transform: `translateY(${(1 - Math.min(ep * 2, 1)) * 24}px)`,
            opacity: Math.min(ep * 2, 1),
            transition: "transform 0.05s linear, opacity 0.05s linear",
            willChange: "transform, opacity",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: accent,
              letterSpacing: "0.12em",
              opacity: 0.7,
              display: "block",
              marginBottom: 8,
              textTransform: "uppercase",
            }}
          >
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(16px, 4vw, 22px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: isDark ? "rgba(255,255,255,0.94)" : "#053859",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {topic.title}
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              lineHeight: 1.75,
              color: isDark ? "rgba(255,255,255,0.52)" : "rgba(5,56,89,0.58)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {topic.desc}
          </p>

          <div
            style={{
              marginTop: 24,
              height: 2,
              width: `${Math.min(ep * 2, 1) * 60}px`,
              background: accent,
              borderRadius: 2,
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={itemRef}
      style={{
        position: "sticky",
        top: 72,
        height: "calc(100vh - 72px)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        zIndex: index + 1,
        background: isDark ? "#0a0a0a" : "#ffffff",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "45%",
          height: "100%",
          overflow: "hidden",
          transform: `translateX(${(1 - ep) * 100}%)`,
          opacity: ep,
          willChange: "transform, opacity",
        }}
      >
        <img
          src={topic.img}
          alt={topic.title}
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "15%",
            objectFit: "contain",
            display: "block",
            transform: `scale(${1 + (1 - ep) * 0.12})`,
            transition: "none",
            willChange: "transform",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isDark
              ? "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.55) 28%, transparent 65%)"
              : "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.55) 28%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: "3vw",
          bottom: "4vh",
          fontSize: "clamp(100px, 16vw, 220px)",
          fontWeight: 900,
          lineHeight: 1,
          color: isDark ? "rgba(247,198,81,0.05)" : "rgba(5,56,89,0.05)",
          fontFamily: "Poppins, sans-serif",
          userSelect: "none",
          letterSpacing: "-0.06em",
          pointerEvents: "none",
          zIndex: 0,
          opacity: ep,
        }}
      >
        {topic.num}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 5vw",
          width: "100%",
          maxWidth: 1300,
        }}
      >
        <div
          style={{
            width: "clamp(280px, 46%, 540px)",
            transform: `translateX(${(1 - ep) * -70}px)`,
            opacity: ep,
            willChange: "transform, opacity",
          }}
        >
          <h2
            style={{
              margin: "0 0 22px",
              fontSize: "clamp(20px, 2.8vw, 31px)",
              fontWeight: 900,
              lineHeight: 1.06,
              color: isDark ? "rgba(255,255,255,0.94)" : "#053859",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {topic.title}
          </h2>
          <p
            style={{
              margin: "0 10px 38px",
              fontSize: "clamp(14px, 1.25vw, 18px)",
              lineHeight: 1.82,
              color: isDark ? "rgba(255,255,255,0.52)" : "rgba(5,56,89,0.58)",
              fontFamily: "Poppins, sans-serif",
              maxWidth: 420,
            }}
          >
            {topic.desc}
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "10px 22px",
              borderRadius: 999,
            }}
          >
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: isDark ? "rgba(255,255,255,0.38)" : "rgba(5,56,89,0.38)",
              }}
            >
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


const STATS = [
  { end: 5, suffix: "k+", label: "Students Benefited" },
  { end: 2, suffix: "k+", label: "Full Stack Dev" },
  { end: 2, suffix: "k+", label: "Java Programmers" },
  { end: 1, suffix: "k+", label: "Dream Offers" },
];

function StatCard({ stat, index, accent, isDark }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2500;
          const start = performance.now();
          const easeOut = (t) => 1 - Math.pow(1 - t, 3);
          const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            setCount(Math.round(easeOut(p) * stat.end));
            if (p < 1) requestAnimationFrame(step);
          };
          setTimeout(() => requestAnimationFrame(step), index * 150);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat.end, index]);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) scale(1.04)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)`;
      }}
      style={{
        background: isDark ? "rgba(255,255,255,0.04)" : "rgba(5,56,89,0.04)",
        borderRadius: 16,
        padding: "28px 16px 26px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        border: `1.5px solid ${isDark ? "rgba(247,198,81,0.25)" : "rgba(5,56,89,0.15)"}`,
        transition: "transform 0.2s ease",
        opacity: 0,
        animation: `statFadeUp 0.6s cubic-bezier(.16,1,.3,1) forwards`,
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: -20,
          right: -20,
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: `13px solid ${accent}`,
          opacity: 0.07,
        }}
      />

      <div
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 900,
          lineHeight: 1,
          color: accent,
          fontSize: "clamp(36px, 5vw, 45px)",
          letterSpacing: "-0.03em",
          textAlign: "center",
        }}
      >
        {count}
        {stat.suffix}
      </div>
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 13,
          color: isDark ? "rgba(255,255,255,0.55)" : "rgba(5,56,89,0.58)",
          marginTop: 10,
          lineHeight: 1.4,
          marginBottom: 0,
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

function HappyHours({ isDark }) {
  const accent = isDark ? "#f7c651" : "#053859";
  const bg = isDark ? "#0b0b0b" : "#fafafa";
  const textPri = isDark ? "rgba(255,255,255,0.92)" : "#373738";
  const textSub = isDark ? "rgba(255,255,255,0.55)" : "rgba(5,56,89,0.62)";
  const cardBorder = isDark ? "rgba(247,198,81,0.22)" : "rgba(5,56,89,0.18)";

  const [active, setActive] = React.useState(0);

  const slides = [
    {
      img: social1,
      caption: "BT Diwali Celebrations 2023",
      sub: "Tisso Home — Tiruppur",
    },
    {
      img: social2,
      caption: "BT Diwali Celebrations 2023",
      sub: "Tisso Home — Tiruppur",
    },
  ];

  React.useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % slides.length),
      2000,
    );
    return () => clearInterval(t);
  }, []);

  const imageColVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const captionVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: 0.89, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <>
      <style>{`
        @keyframes hhFadeIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        .hh-img-active {
          animation: hhFadeIn 0.55s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hh-dot {
          width: 7px; height: 7px; border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none; padding: 0;
        }
        @media (max-width: 768px) {
          .hh-inner { grid-template-columns: 1fr !important; }
          .hh-img-col { max-width: 100% !important; }
        }
      `}</style>

      <section
        style={{
          width: "100%",
          padding: "80px 30px 90px",
          background: bg,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "60%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            filter: "blur(120px)",
            opacity: isDark ? 0.04 : 0.05,
            background: isDark
              ? "radial-gradient(circle,#f7c651,transparent)"
              : "radial-gradient(circle,#053859,transparent)",
            pointerEvents: "none",
            transform: "translate(-50%,-50%)",
          }}
        />

        <div
          className="hh-inner"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            className="hh-img-col"
            style={{ maxWidth: 480 }}
            variants={imageColVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {" "}
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                border: `2px solid ${cardBorder}`,
                boxShadow: isDark
                  ? "0 24px 60px rgba(0,0,0,0.6)"
                  : "0 24px 60px rgba(5,56,89,0.14)",
                aspectRatio: "4/3",
                background: isDark ? "#111" : "#e8f0f7",
              }}
            >
              {slides.map((s, i) => (
                <img
                  key={i}
                  src={s.img}
                  alt={s.caption}
                  className={i === active ? "hh-img-active" : ""}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    opacity: i === active ? 1 : 0,
                    transition: i === active ? "none" : "opacity 0.3s ease",
                  }}
                />
              ))}

              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 6,
                  zIndex: 2,
                }}
              >
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className="hh-dot"
                    onClick={() => setActive(i)}
                    style={{
                      background:
                        i === active ? "#0a5c8f" : "rgba(255,255,255,0.4)",
                      transform: i === active ? "scale(1.35)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>
            <motion.div
              style={{
                marginTop: 16,
                textAlign: "center",
                transition: "opacity 0.3s ease",
              }}
              variants={captionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: 14,
                  fontWeight: 700,
                  color: accent,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {slides[active].caption}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: textSub,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {slides[active].sub}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: 22 }}
          >
            <motion.h2
              variants={textItemVariants}
              style={{
                margin: 0,
                fontSize: "clamp(26px, 3.8vw, 44px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: textPri,
                fontFamily: "Poppins, sans-serif",
              }}
              initial="hidden"
              whileInView="visible"
            >
              In Our Happy Hours,{" "}
              <span style={{ color: accent }}>We Grow Positivity!</span>
            </motion.h2>
            <motion.p
              variants={textItemVariants}
              style={{
                margin: 0,
                fontSize: "clamp(14px, 1.3vw, 17px)",
                lineHeight: 1.85,
                color: textSub,
                fontFamily: "Poppins, sans-serif",
                maxWidth: 480,
              }}
              initial="hidden"
              whileInView="visible"
            >
              In this fast-paced world, as we race to build our lives, there are
              those longing for hope, living in the shadows of uncertainty. We
              dedicate our time to Social Service Organizations and NGOs,
              illuminating the path to hope and happiness.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function About_Us() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark",
  );
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPrompt, setShowPrompt] = useState(true);

  const pageRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const panelRef = useRef(null);
  const hintRef = useRef(null);
  const videoRef = useRef(null);
  const showPromptRef = useRef(null);

  const isDark = !isLight;
  const theme = isLight ? "light" : "dark";
  const bg = isLight ? "#f5f7fa" : "#0b0b0b";
  const color = isLight ? "#053859" : "#f0f0f0";
  const accent = isDark ? "#f7c651" : "#074c7a";
  const textPri = isDark ? "rgba(255,255,255,0.92)" : " #373738";
  const textSub = isDark ? "rgba(255,255,255,0.60)" : "rgba(5,56,89,0.68)";

  const lines = [
    { text: "Elevate one student, transform entire families.", lead: true },
    {
      text: "→ With unwavering integrity and boundless passion, we're shaping a healthier society.",
      lead: false,
    },
    {
      text: "→ What's even more thrilling? Our students are joining the movement.",
      lead: false,
    },
    {
      text: "→ Together, we spark a chain reaction, forging a new path :)",
      lead: false,
    },
  ];

  const cardBorder = isDark ? "rgba(247,198,81,0.22)" : "rgba(5,56,89,0.18)";

  useEffect(() => {
    const h = () => setIsLight(localStorage.getItem("theme") !== "dark");
    window.addEventListener("themechange", h);
    return () => window.removeEventListener("themechange", h);
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const fn = () =>
      window.dispatchEvent(
        new CustomEvent("rm-scroll", { detail: { scrollTop: page.scrollTop } }),
      );
    page.addEventListener("scroll", fn, { passive: true });
    return () => {
      page.removeEventListener("scroll", fn);
      window.dispatchEvent(
        new CustomEvent("rm-scroll", { detail: { scrollTop: 0 } }),
      );
    };
  }, []);

  useEffect(() => {
    const page = pageRef.current,
      section = sectionRef.current,
      text = textRef.current,
      panel = panelRef.current,
      hint = hintRef.current;
    if (!page || !section || !text || !panel) return;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const lerp = (a, b, t) => a + (b - a) * t;
    const ease = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    function tick() {
      const vh = page.clientHeight,
        vw = page.clientWidth;
      if (vw <= 768) return;
      const scrollTop = page.scrollTop,
        sectionTop = section.offsetTop,
        sectionH = section.offsetHeight;
      const scrolled = clamp(scrollTop - sectionTop, 0, sectionH - vh);
      const scrollable = sectionH - vh;
      if (scrollable <= 0) return;
      const p = scrolled / scrollable,
        pe = ease(p);
      const tp = clamp((p - 0.35) / 0.65, 0, 1),
        tpe = ease(tp);
      text.style.opacity = lerp(1, 0, tpe);
      text.style.transform = `translateY(-50%) translateX(${lerp(0, -60, tpe)}px) scale(${lerp(1, 0.88, tpe)})`;
      const initOffsetPx = vw * 0.22;
      panel.style.transform = `translateX(calc(-50% + ${lerp(initOffsetPx, 0, pe)}px)) translateY(-50%) scale(${lerp(0.62, 1.3, pe)})`;
      panel.style.borderRadius = `${lerp(16, 0, pe)}px`;
      if (hint) hint.style.opacity = p > 0.04 ? "0" : "1";
      if (showPromptRef.current) {
        showPromptRef.current.style.opacity = p > 0.04 ? "0" : "1";
        showPromptRef.current.style.pointerEvents = p > 0.04 ? "none" : "auto";
        showPromptRef.current.style.translate = p > 0.04 ? "0 24px" : "0 0";
      }
    }
    page.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick, { passive: true });
    tick();
    return () => {
      page.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current,
      timer = document.getElementById("ahs-timer");
    if (!video || !timer) return;
    const fn = () => {
      const s = Math.floor(video.currentTime % 60),
        m = Math.floor(video.currentTime / 60);
      timer.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };
    video.addEventListener("timeupdate", fn);
    return () => video.removeEventListener("timeupdate", fn);
  }, []);

  const toggleAudio = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isMuted;
    setIsMuted((p) => !p);
  };
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
    } else {
      v.play();
      setIsPlaying(true);
    }
  };
  const handleEnableAudio = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    setIsMuted(false);
  };

  return (
    <div
      ref={pageRef}
      className={`op-page ${theme}-theme`}
      style={{ background: bg, color }}
    >
      <Header />

      {showPrompt && (
        <AudioIntroPrompt
          ref={showPromptRef}
          theme={theme}
          onEnableAudio={handleEnableAudio}
          onDismiss={() => setShowPrompt(false)}
        />
      )}

      <section ref={sectionRef} className={`ahs-section ${theme}-theme`}>
        <div className="ahs-sticky">
          <div ref={textRef} className="ahs-text">
            <motion.h1
              className="ahs-title"
              style={{ color: isLight ? "#373738" : undefined }}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
            >
              To have long-term success as a coach, you have to be{" "}
              <span style={{ color: isLight ? "#074c7a" : "#f7c651" }}>
                obsessed
              </span>{" "}
              in some way.
            </motion.h1>
            <motion.p
              className="ahs-subtitle"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.38,
              }}
            >
              At Better Tomorrow, our leaders have blazed an exceptional trail,
              securing numerous product offers and guiding students to become
              true heroes! Our trainers, thriving as software engineers in
              highly scalable environments, hold the key to our success.
            </motion.p>
          </div>
          <motion.div
            ref={panelRef}
            className="ahs-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
          >
            <video
              ref={videoRef}
              id="ahs-video"
              src={sampleVideo}
              autoPlay
              muted
              loop
              playsInline
              className="ahs-video"
            />
            <div className="ahs-panel-overlay" />
            <div className="ahs-labels">
              <span className="ahs-label">Better Tomorrow</span>
              <span className="ahs-label">
                <span className="ahs-rec" />
                Our Story
              </span>
              <button
                className="ahs-ctrl-btn ahs-ctrl-btn--play"
                onClick={togglePlay}
              >
                {isPlaying ? <IconPause /> : <IconPlay />}
              </button>
              <span className="ahs-label" id="ahs-timer">
                00:00
              </span>
              <button
                className={`ahs-ctrl-btn ahs-ctrl-btn--audio ${isMuted ? "ahs-muted" : "ahs-unmuted"}`}
                onClick={toggleAudio}
              >
                <span className="ahs-ctrl-icon">
                  {isMuted ? <IconSoundOff /> : <IconSoundOn />}
                </span>
                <span className="ahs-ctrl-label">
                  {isMuted ? "Unmute" : "Mute"}
                </span>
                {!isMuted && (
                  <span className="ahs-bars" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </span>
                )}
              </button>
            </div>
          </motion.div>
          <div ref={hintRef} className="ahs-hint">
            <span className="ahs-hint-text">Scroll</span>
            <div className="ahs-hint-line" />
          </div>
        </div>
      </section>

      <section className="om-section" style={{ background: bg }}>
        <div className="om-inner">
          <div className="om-visual">
            <motion.div
              className="om-image-wrap"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              initial={{ opacity: 0, scale: 0.78, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <MissionTarget width="clamp(160px, 40%, 280px)" isDark={isDark} />
              <motion.p
                className="om-image-title"
                style={{ color: accent, fontSize: "clamp(22px, 3vw, 40px)" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
              >
                Our Mission
              </motion.p>
            </motion.div>
          </div>
          <div className="om-content" style={{ marginTop: 0 }}>
            {lines.map((l, i) => (
              <motion.p
                key={i}
                className={`om-text${l.lead ? " om-text--lead" : ""}`}
                style={{ color: l.lead ? textPri : textSub }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.13,
                }}
              >
                {l.text}
              </motion.p>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <div style={{ textAlign: "center", padding: "50px 20px 10px" }}>
            <motion.h2
              initial={{ opacity: 0, y: 40, letterSpacing: "0.12em" }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: "-0.03em" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                margin: "0 0 20px",
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.06,
                color: textPri,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Number of Students{" "}
              <motion.span
                style={{ color: accent, display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
              >
                Benefited
              </motion.span>
            </motion.h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 20,
              maxWidth: 800,
              margin: "0 auto",
              padding: "0 20px 48px",
            }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.12,
                }}
              >
                <StatCard
                  key={i}
                  stat={s}
                  index={i}
                  accent={accent}
                  isDark={isDark}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: isDark ? "#0a0a0a" : "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 72,
            zIndex: 50,
            background: isDark ? "#0a0a0a" : "#ffffff",
            textAlign: "center",
            padding: "20px 20px 18px",
            borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(5,56,89,0.08)"}`,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              color: textPri,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Three Pillars That{" "}
            <motion.span
              style={{ color: accent, display: "inline-block" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.25,
              }}
            >
              Define Us
            </motion.span>
          </motion.h2>
        </div>
        <div
          style={{
            
            position: "relative",
            height:
              typeof window !== "undefined" && window.innerWidth <= 768
                ? "auto"
                : `${TOPICS.length * 100}vh`,
          }}
        >
          {TOPICS.map((topic, i) => (
            <PhiloItem
              key={topic.id}
              topic={topic}
              index={i}
              total={TOPICS.length}
              pageRef={pageRef}
              isDark={isDark}
            />
          ))}
        </div>
      </section>

      <HappyHours isDark={isDark} />

      <Footer />
    </div>
  );
}
