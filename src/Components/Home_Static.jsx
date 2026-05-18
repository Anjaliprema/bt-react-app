import StudentPlacements from "./StudentPlacements";
import About from "./About";
import Header from "./Header";
import HeroSlider from "./Homeslider";
import Footer from "./Footer";
import "./Home_Static.css";
import { motion } from "framer-motion";
import TransformationSection from "./TransformationSection";
import { useState, useEffect, useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import clgimg1 from "../assets/clgimg1-bait.png";
import clgimg2 from "../assets/clgimg2-kit.png";
import clgimg3 from "../assets/clgimg3-sri-eshwar.png";
import clgimg4 from "../assets/clgimg4-perumal-manimegalai.png";
import clgimg5 from "../assets/clgimg5-bannari.png";
import clgimg6 from "../assets/clgimg6-kec.png";
import clgimg7 from "../assets/clgimg7-kumarasamy.png";
import clgimg8 from "../assets/clgimg8-bit.png";
import clgimg9 from "../assets/clgimg9-bit.png";
import clgimg10 from "../assets/clgimg10-sri-eshwar.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import {
  FaCode,
  FaLayerGroup,
  FaProjectDiagram,
  FaComments,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import Vector_Img from "../assets/plimg_Vecor_img.png";
import { GoArrowUpRight } from "react-icons/go";
import { FaCheckCircle, FaBriefcase, FaChartLine } from "react-icons/fa";

const Pill = ({ text, pillBorder, accent, isLight }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "0 14px",
      height: 32,
      borderRadius: 999,
      border: `1.5px solid ${pillBorder}`,
      whiteSpace: "nowrap",
      flexShrink: 0,
      userSelect: "none",
    }}
  >
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 16,
        height: 16,
        borderRadius: 999,
        color: isLight ? "#053859" : "#f7c651",
        fontSize: 10,
        fontWeight: 700,
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      ✓
    </span>
    <span
      style={{
        fontSize: 11.5,
        fontWeight: 700,
        color: accent,
        letterSpacing: "0.01em",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {text}
    </span>
  </div>
);

const Track = ({
  items,
  animName,
  duration,
  pillBorder,
  accent,
  isLight,
  rowDivider,
}) => (
  <div
    style={{
      flex: 1,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      borderBottom: `1px solid ${rowDivider}`,
    }}
  >
    <div
      style={{
        display: "flex",
        gap: 8,
        width: "max-content",
        padding: "0 4px",
        animation: `${animName} ${duration}s linear infinite`,
      }}
    >
      {[...items, ...items, ...items].map((t, i) => (
        <Pill
          key={i}
          text={t}
          pillBorder={pillBorder}
          accent={accent}
          isLight={isLight}
        />
      ))}
    </div>
  </div>
);

function HomeSkillsSection({ isLight }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const accent = isLight ? "#074c7a" : "#f7c651";
  const mutedCol = isLight ? "rgba(5,56,89,0.4)" : "rgba(242,237,228,0.35)";
  const pillBorder = isLight ? "rgba(5,56,89,0.15)" : "rgba(247,198,81,0.2)";
  const rowDivider = isLight ? "rgba(5,56,89,0.05)" : "rgba(255,255,255,0.05)";

  const skills = [
    {
      icon: <FaCode size={18} />,
      title: "Programming Expertise",
      desc: "Any programming language / Framework from fundamentals",
    },
    {
      icon: <FaLayerGroup size={18} />,
      title: "Practical Expertise",
      desc: "C or Java, Data structures, Introduction to Web development.",
    },
    {
      icon: <FaProjectDiagram size={18} />,
      title: "Product Expertise",
      desc: "Data structures, hands on experience on algorithms.",
    },
    {
      icon: <FaComments size={18} />,
      title: "Domain Expertise",
      desc: "AI or ML Engineer, Data Science, DevOps Engineer, Data Analyst",
    },
    {
      icon: <FaClipboardList size={18} />,
      title: "Full Stack Web Development",
      desc: "MERN, MEAN, React with TypeScript, React with Django, Spring Boot",
    },
    {
      icon: <FaUsers size={18} />,
      title: "Skillhub360",
      desc: "Interview 360 for Boosting your confidence, Cracking Coding Interviews in Java, Quantitative Aptitude and Verbal Reasoning",
    },
  ];

  const ROW1 = [
    "Programming Expertise",
    "C Language",
    "Java Fundamentals",
    "Python Basics",
    "Framework Training",
    "Practical Expertise",
    "Data Structures",
  ];
  const ROW2 = [
    "Product Expertise",
    "Algorithm Design",
    "Domain Expertise",
    "AI / ML Engineer",
    "Data Science",
    "DevOps Engineer",
    "Data Analyst",
  ];
  const ROW3 = [
    "Full Stack Dev",
    "MERN Stack",
    "React TypeScript",
    "React with Django",
    "Spring Boot",
    "Skillhub360",
    "Interview Prep",
  ];

  return (
    <section
      style={{
        padding: "80px 40px 60px",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="skills-two-col"
        >
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="skills-list-col"
          >
            {skills.map((s, i) => {
              const isHov = hoveredSkill === i;
              const iconBg = isHov
                ? isLight
                  ? "#053859"
                  : "#f7c651"
                : isLight
                  ? "rgba(5,56,89,0.07)"
                  : "rgba(247,198,81,0.1)";
              const iconBorder = isHov
                ? isLight
                  ? "#053859"
                  : "#d5b85b"
                : isLight
                  ? "rgba(5,56,89,0.12)"
                  : "rgba(247,198,81,0.18)";
              const iconColor = isHov
                ? isLight
                  ? "#ffffff"
                  : "#0a0a0a"
                : accent;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredSkill(i)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "18px 0",
                    borderBottom:
                      i < skills.length - 1
                        ? `1px solid ${isLight ? "rgba(5,56,89,0.08)" : "rgba(255,255,255,0.06)"}`
                        : "none",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      flexShrink: 0,
                      background: iconBg,
                      border: `1px solid ${iconBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition:
                        "background 0.25s ease, border-color 0.25s ease",
                    }}
                  >
                    <span
                      style={{
                        color: iconColor,
                        transition: "color 0.25s ease",
                      }}
                    >
                      {s.icon}
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0 0 4px",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        color: isLight ? "#053859" : "rgba(255,255,255,0.9)",
                      }}
                    >
                      {s.title}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 13,
                        lineHeight: 1.65,
                        color: isLight
                          ? "rgba(5,56,89,0.58)"
                          : "rgba(255,255,255,0.48)",
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              background: "transparent",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 350,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <motion.div
                style={{ width: "100%", height: "100%", position: "relative" }}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  variants={{
                    rest: { opacity: 0, scale: 0.7 },
                    hover: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: isLight
                      ? "radial-gradient(ellipse at 60% 35%, rgba(7,76,122,0.13) 0%, rgba(10,92,143,0.07) 45%, transparent 70%)"
                      : "radial-gradient(ellipse at 60% 35%, rgba(247,198,81,0.18) 0%, rgba(247,198,81,0.08) 45%, transparent 70%)",
                    filter: "blur(18px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                {[
                  { top: "27%", left: "21%" },
                  { top: "21%", left: "35%" },
                  { top: "10%", left: "48%" },
                  { top: "21%", left: "61%" },
                  { top: "25%", left: "74%" },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      rest: { opacity: 0, scale: 0 },
                      hover: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: i * 0.07,
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    style={{
                      position: "absolute",
                      top: pos.top,
                      left: pos.left,
                      width: 25,
                      height: 25,
                      borderRadius: "50%",
                      background: isLight
                        ? "rgba(7,76,122,0.2)"
                        : "rgba(247,198,81,0.3)",
                      boxShadow: isLight
                        ? "0 0 18px 10px rgba(7,76,122,0.28), 0 0 40px 18px rgba(7,76,122,0.12)"
                        : "0 0 18px 10px rgba(247,198,81,0.45), 0 0 40px 18px rgba(247,198,81,0.2)",
                      filter: "blur(6px)",
                      pointerEvents: "none",
                      zIndex: 3,
                      transform: "translate(-50%, calc(-50% + 30px))",
                    }}
                  />
                ))}

                <motion.img
                  src={Vector_Img}
                  alt="Skills illustration"
                  variants={{
                    rest: {
                      scale: 1,
                      filter: "drop-shadow(0px 0px 0px transparent)",
                    },
                    hover: {
                      scale: 1.06,
                      filter: isLight
                        ? "drop-shadow(0px 8px 24px rgba(7,76,122,0.18))"
                        : "drop-shadow(0px 8px 24px rgba(247,198,81,0.25))",
                    },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    padding: "0px 28px",
                    background: "transparent",
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </motion.div>
            </div>

            <div
              className="skills-marquee-wrap"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
                minHeight: 108,
                gap: 15,
                pointerEvents: "none",
              }}
            >
              <Track
                items={ROW1}
                animName="marqueeLeft"
                duration={60}
                pillBorder={pillBorder}
                accent={accent}
                isLight={isLight}
                rowDivider={rowDivider}
              />
              <Track
                items={ROW2}
                animName="marqueeRight"
                duration={70}
                pillBorder={pillBorder}
                accent={accent}
                isLight={isLight}
                rowDivider={rowDivider}
              />
              <Track
                items={ROW3}
                animName="marqueeLeft"
                duration={55}
                pillBorder={pillBorder}
                accent={accent}
                isLight={isLight}
                rowDivider={rowDivider}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "light" : true;
  });

  const glowRef = useRef(null);

  const mobileHeaderRef = useRef(null);
  const mobileProgRef = useRef(null);
  const mobileIsAnimating = useRef(false);

  const colleges = [
    {
      name: "Bannari Amman Institute Of Technology, Erode",
      program: "Mern stack training 15 days",
      image: clgimg1,
      logo: logo1,
      link: "https://www.bitsathy.ac.in",
    },
    {
      name: "Kongu Engineering College, Perundurai",
      program: "Mern stack Training",
      image: clgimg2,
      logo: logo2,
      link: "https://kongu.ac.in/",
    },
    {
      name: "Sri Eswar College of Engineering, Coimbatore",
      program: "Mern stack training",
      image: clgimg3,
      logo: logo3,
      link: "https://www.srieswar.ac.in",
    },
    {
      name: "Perumal Manimegalai College, Hosur",
      program: "Introduction on DSA and Data Science Workshop",
      image: clgimg4,
      logo: logo5,
      link: "https://www.perumalarts.com",
    },
    {
      name: "Bannari Amman Institute Of Technology, Erode",
      program: "Data cleaning and pre processing using Tableau",
      image: clgimg5,
      logo: logo1,
      link: "https://www.bitsathy.ac.in",
    },
    {
      name: "Kongu Engineering College, Perundurai",
      program: "Advance Java Training",
      image: clgimg6,
      logo: logo2,
      link: "https://kongu.ac.in/",
    },
    {
      name: "M. Kumarasamy College of Engineering, Karur",
      program: "Programming expertise in Java",
      image: clgimg7,
      logo: logo4,
      link: "https://www.mkce.ac.in",
    },
    {
      name: "Bannari Amman Institute Of Technology, Erode",
      program: "Mern stack training",
      image: clgimg8,
      logo: logo1,
      link: "https://www.bitsathy.ac.in",
    },
    {
      name: "Bannari Amman Institute Of Technology, Erode",
      program: "Mern stack training",
      image: clgimg9,
      logo: logo1,
      link: "https://www.bitsathy.ac.in",
    },
    {
      name: "Sri Eswar College Of Engineering, Coimbatore",
      program: "Mern stack training",
      image: clgimg10,
      logo: logo3,
      link: "https://www.srieswar.ac.in",
    },
  ];

  const middleIndex = Math.floor(colleges.length / 2);
  const [activeIndex, setActiveIndex] = useState(middleIndex);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const statsParallax = useParallax({
    translateY: [70, -80],
    scale: [1, 1.1],
    speed: -10,
  });
  const statsh2Parallax = useParallax({
    opacity: [0, 1],
    translateY: [120, -160],
    scale: [1, 1.3],
    speed: 10,
  });
  const cardTitle = useParallax({
    translateY: [-80, 0],
    opacity: [0, 1],
    scale: [1, 1.2],
    easing: "easeOut",
  });
  const cardText = useParallax({
    translateY: [-40, 0],
    opacity: [0, 1],
    easing: "easeInOut",
  });
  const aboutTitle = useParallax({
    translateY: [-80, 0],
    opacity: [0, 1],
    scale: [1, 1.2],
    easing: "easeOut",
  });
  const aboutTitleProgram = useParallax({
    translateY: [-80, 0],
    opacity: [0, 1],
    scale: [1, 1.1],
    easing: "easeOut",
  });
  const aboutText = useParallax({
    translateY: [-40, 0],
    opacity: [0, 1],
    easing: "easeInOut",
  });
  const Title = useParallax({
    opacity: [0, 1],
    scale: [1, 1.2],
    easing: "easeOut",
  });
  const Text = useParallax({
    translateY: [-40, 0],
    opacity: [0, 1],
    easing: "easeInOut",
  });

  useEffect(() => {
    const handler = () => {
      setIsLight(localStorage.getItem("theme") !== "dark");
    };
    window.addEventListener("themechange", handler);
    return () => window.removeEventListener("themechange", handler);
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll(".count-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const updateCount = () => {
              const increment = target / 100;
              if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
              } else {
                counter.innerText = target;
              }
            };
            updateCount();
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.6 },
    );
    counters.forEach((counter) => observer.observe(counter));
    return () => observer.disconnect();
  }, []);

  const FeatureIcon = ({ type, isLight }) => {
    const stroke = !isLight ? "#f7c651" : "#053859";

    if (type === "industry")
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          className="ts-svg-icon"
        >
          <rect
            x="3"
            y="18"
            width="8"
            height="17"
            rx="2"
            stroke={stroke}
            strokeWidth="2"
            className="ts-svg-path"
          />
          <rect
            x="15"
            y="11"
            width="8"
            height="24"
            rx="2"
            stroke={stroke}
            strokeWidth="2"
            className="ts-svg-path"
          />
          <rect
            x="27"
            y="4"
            width="8"
            height="31"
            rx="2"
            stroke={stroke}
            strokeWidth="2"
            className="ts-svg-path"
          />
          <line
            x1="3"
            y1="35"
            x2="35"
            y2="35"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
          <circle
            cx="7"
            cy="14"
            r="2.5"
            stroke={stroke}
            strokeWidth="1.5"
            className="ts-svg-path"
          />
          <circle
            cx="19"
            cy="7"
            r="2.5"
            stroke={stroke}
            strokeWidth="1.5"
            className="ts-svg-path"
          />
          <circle
            cx="31"
            cy="0.5"
            r="2.5"
            stroke={stroke}
            strokeWidth="1.5"
            className="ts-svg-path"
          />
          <polyline
            points="7,14 19,7 31,1"
            stroke={stroke}
            strokeWidth="1.5"
            strokeDasharray="3 2"
            className="ts-svg-path"
          />
        </svg>
      );

    if (type === "interview")
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          className="ts-svg-icon"
        >
          <rect
            x="3"
            y="5"
            width="32"
            height="22"
            rx="3"
            stroke={stroke}
            strokeWidth="2"
            className="ts-svg-path"
          />
          <line
            x1="19"
            y1="27"
            x2="19"
            y2="33"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
          <line
            x1="12"
            y1="33"
            x2="26"
            y2="33"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
          <polyline
            points="10,14 15,19 28,10"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ts-svg-path"
          />
        </svg>
      );

    if (type === "guidance")
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          className="ts-svg-icon"
        >
          <circle
            cx="14"
            cy="11"
            r="7"
            stroke={stroke}
            strokeWidth="2"
            className="ts-svg-path"
          />
          <path
            d="M3 35c0-6.075 4.925-11 11-11"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
          <circle
            cx="28"
            cy="24"
            r="7"
            stroke={stroke}
            strokeWidth="2"
            className="ts-svg-path"
          />
          <line
            x1="28"
            y1="20"
            x2="28"
            y2="24"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
          <circle
            cx="28"
            cy="27"
            r="1.2"
            fill={stroke}
            className="ts-svg-path"
          />
        </svg>
      );

    if (type === "progress")
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          className="ts-svg-icon"
        >
          <circle
            cx="19"
            cy="19"
            r="15"
            stroke={stroke}
            strokeWidth="2"
            className="ts-svg-path"
          />
          <path
            d="M19 19 L19 7"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
          <path
            d="M19 19 L28 24"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
          <circle
            cx="19"
            cy="19"
            r="2.5"
            fill={stroke}
            className="ts-svg-path"
          />
          <line
            x1="19"
            y1="4"
            x2="19"
            y2="6"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
          <line
            x1="19"
            y1="32"
            x2="19"
            y2="34"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
          <line
            x1="4"
            y1="19"
            x2="6"
            y2="19"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
          <line
            x1="32"
            y1="19"
            x2="34"
            y2="19"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            className="ts-svg-path"
          />
        </svg>
      );
  };

  return (
    <div className={isLight ? "light-theme" : "dark-theme"}>
      <div ref={glowRef} className="cursor-glow" />

      <Header />

      <motion.main
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
      >
        <HeroSlider />

        <section className="stats-section animate-on-scroll">
          <h2 ref={statsh2Parallax.ref}>Catalysing Your Path to Success</h2>
          <motion.div
            ref={statsParallax.ref}
            className="stats-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="stat-card"
              style={{ animationDelay: "0.1s" }}
              variants={cardVariants}
            >
              <div className="stat-icon rotate-on-hover">
                <FaChartLine />
              </div>
              <br />
              <span className="count-up" data-target="6">
                0
              </span>
              <span> LPA</span>
              <p>Average Dream Job CTC</p>
            </motion.div>

            <motion.div
              className="stat-card"
              style={{ animationDelay: "0.2s" }}
              variants={cardVariants}
            >
              <div className="stat-icon rotate-on-hover">
                <FaBriefcase />
              </div>
              <br />
              <span className="count-up" data-target="200">
                0
              </span>
              <span>+</span>
              <p>Product Offers</p>
            </motion.div>

            <motion.div
              className="stat-card"
              style={{ animationDelay: "0.3s" }}
              variants={cardVariants}
            >
              <div className="stat-icon rotate-on-hover">
                <FaUsers />
              </div>
              <br />
              <span className="count-up" data-target="5000">
                0
              </span>
              <span>+</span>
              <p>Job Opportunities</p>
            </motion.div>

            <motion.div
              className="stat-card"
              style={{ animationDelay: "0.4s" }}
              variants={cardVariants}
            >
              <div className="stat-icon rotate-on-hover">
                <FaCheckCircle />
              </div>
              <br />
              <span className="count-up" data-target="24">
                0
              </span>
              <span> LPA</span>
              <p>Highest Package</p>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="about-section">
          <div className="section-header">
            <h2 ref={cardTitle.ref}>
              Blaze A Trail On Our Pathway To Turbocharge Your Tech Career!
            </h2>
            <p ref={cardText.ref}>
              At Better Tomorrow, we immerse budding talents in live industrial
              projects and real-world problem-solving. We fortify their
              confidence with a solid foundation in industry essentials.
            </p>
          </div>

          <div>
            <About />
          </div>
        </section>

        <section id="programs" className="programs-section">
          <div className="section-header">
            <h2 ref={aboutTitleProgram.ref}>
              Extensive Programs From Domain Experts That Meets Industry
              Expectations
            </h2>
          </div>

          <HomeSkillsSection isLight={isLight} />
        </section>

        <section id="achievements" className="achievements-section">
          <div className="section-header">
            <h2 ref={Title.ref}>
              Their Beliefs Made Us So Remarkable On Where We Are Now!
            </h2>
            <p ref={Text.ref}>
              In the below institutions we are doing long run programs not an
              one or two days events. For detailed event list check our
              Instagram page.
            </p>
          </div>
          <div className="carousel-wrapper mobile-carousel-wrapper">
            {colleges.map((college, idx) => {
              let position = idx - activeIndex;
              const half = Math.floor(colleges.length / 2);
              if (position > half) position -= colleges.length;
              if (position < -half) position += colleges.length;

              return (
                <motion.div
                  key={idx}
                  className={`carousel-card ${position === 0 ? "carousel-card--active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                  initial={false}
                  animate={{
                    x: position * 260,
                    scale: position === 0 ? 1 : 0.8,
                    rotateY: position * -10,
                    opacity: Math.abs(position) > 2 ? 0 : 1,
                    filter: position === 0 ? "blur(0px)" : "blur(1.5px)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    backgroundImage: `url(${college.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 10 - Math.abs(position),
                    borderRadius: position === 0 ? "20px" : "40px",
                  }}
                >
                  <div
                    style={{ padding: "0px" }}
                    className="carousel-card-content"
                  >
                    <span className="card-number">
                      {idx + 1} / {colleges.length}
                    </span>
                    <div className="college-header">
                      <img
                        src={college.logo}
                        alt={college.name}
                        className="college-logo"
                      />
                      <h3>{college.name}</h3>
                    </div>

                    {position === 0 && (
                      <>
                        <p className="program-text">{college.program}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mobile-clg-card">
            <div className="mobile-clg-header" ref={mobileHeaderRef}>
              <img
                src={colleges[activeIndex].logo}
                className="mobile-clg-logo"
                alt={colleges[activeIndex].name}
              />
              <h3 className="mobile-clg-name">{colleges[activeIndex].name}</h3>
            </div>

            <div className="mobile-clg-img-wrap">
              <img
                src={colleges[activeIndex].image}
                className="mobile-clg-img"
                alt={colleges[activeIndex].name}
              />
            </div>

            <p className="mobile-clg-program" ref={mobileProgRef}>
              {colleges[activeIndex].program}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              marginTop: 24,
            }}
          >
            {[
              { label: "←", dir: "left" },
              { label: "→", dir: "right" },
            ].map(({ label, dir }) => (
              <button
                key={label}
                onClick={() => {
                  if (mobileIsAnimating.current) return;
                  mobileIsAnimating.current = true;

                  const nextIdx =
                    dir === "right"
                      ? (activeIndex + 1) % colleges.length
                      : (activeIndex - 1 + colleges.length) % colleges.length;

                  const exitX = dir === "right" ? -160 : 160;
                  const exitY = 100;
                  const enterX = dir === "right" ? 160 : -160;
                  const enterY = 100;
                  const dur = 480;

                  function curveOut(el, tx, ty, cb) {
                    if (!el) {
                      cb && cb();
                      return;
                    }
                    const midX = tx * 0.5,
                      midY = ty * 0.6;
                    let start = null;
                    function step(ts) {
                      if (!start) start = ts;
                      const t = Math.min((ts - start) / dur, 1);
                      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                      const x =
                        3 * (1 - ease) * ease * ease * midX +
                        ease * ease * ease * tx;
                      const y =
                        3 * (1 - ease) * ease * ease * midY +
                        ease * ease * ease * ty;
                      el.style.transform = `translate(${x}px,${y}px)`;
                      el.style.opacity = String(1 - ease);
                      if (t < 1) requestAnimationFrame(step);
                      else cb && cb();
                    }
                    requestAnimationFrame(step);
                  }

                  function curveIn(el, fromX, fromY, cb) {
                    if (!el) {
                      cb && cb();
                      return;
                    }
                    el.style.transform = `translate(${fromX}px,${fromY}px)`;
                    el.style.opacity = "0";
                    let start = null;
                    function step(ts) {
                      if (!start) start = ts;
                      const t = Math.min((ts - start) / dur, 1);
                      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                      const e1 = 1 - ease;
                      const bx =
                        e1 * e1 * e1 * fromX +
                        3 * e1 * e1 * ease * (fromX * 0.5);
                      const by =
                        e1 * e1 * e1 * fromY +
                        3 * e1 * e1 * ease * (fromY * 0.6);
                      el.style.transform = `translate(${bx}px,${by}px)`;
                      el.style.opacity = String(ease);
                      if (t < 1) requestAnimationFrame(step);
                      else {
                        el.style.transform = "translate(0px,0px)";
                        el.style.opacity = "1";
                        cb && cb();
                      }
                    }
                    requestAnimationFrame(step);
                  }

                  curveOut(mobileHeaderRef.current, exitX, exitY, () => {
                    setActiveIndex(nextIdx);
                    requestAnimationFrame(() =>
                      curveIn(mobileHeaderRef.current, enterX, enterY, () => {
                        mobileIsAnimating.current = false;
                      }),
                    );
                  });

                  setTimeout(() => {
                    curveOut(mobileProgRef.current, exitX, exitY, () => {
                      requestAnimationFrame(() =>
                        curveIn(mobileProgRef.current, enterX, enterY, null),
                      );
                    });
                  }, 60);
                }}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "none",
                  background: isLight ? "#ececec" : "#1e1e1e",
                  boxShadow: isLight
                    ? "4px 4px 10px rgba(0,0,0,0.12),-4px -4px 10px rgba(255,255,255,0.9)"
                    : "4px 4px 10px rgba(0,0,0,0.5),-4px -4px 10px rgba(255,255,255,0.04)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  color: isLight ? "#053859" : "#f7c651",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.border = isLight
                    ? "1.5px solid rgba(5,56,89,0.35)"
                    : "1.5px solid rgba(247,198,81,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.border = "none";
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <motion.div
            className="testimonial-section"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="ts-banner-header">
              <div className="ts-banner-title-block">
                <h3>Our Commitment Towards Mentorship Makes Us Unique</h3>
                <p className="ts-sub">
                  Learning in Action than thinking about it
                </p>
              </div>
              <div className="ts-banner-divider" />
            </div>

            <div className="ts-features">
              {[
                {
                  type: "guidance",
                  title: "Personalized Guidance",
                  desc: "Every student gets dedicated attention from senior developers.",
                  delay: 0,
                },
                {
                  type: "industry",
                  title: "Real Industry Project Experience",
                  desc: "Work on live, production-grade projects that mirror what top MNCs actually build.",
                  delay: 0.15,
                },
                {
                  type: "interview",
                  title: "Interview & Placement Prep",
                  desc: "360° coaching — DSA, system design, aptitude, and confidence building to crack your dream company.",
                  delay: 0.3,
                },
                {
                  type: "progress",
                  title: "Progress Tracking & Feedback",
                  desc: "Continuous, structured feedback loops so your growth is always measurable and visible.",
                  delay: 0.45,
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="ts-feature-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: f.delay,
                    ease: "easeOut",
                  }}
                >
                  <div className="ts-feature-accent-line" />

                  <div className="ts-feature-icon">
                    <FeatureIcon type={f.type} isLight={isLight} />
                  </div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                  <div className="ts-feature-glow" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="placements" className="placements-section-wrapper">
          <div className="section-header">
            <h2 ref={aboutTitle.ref}>Our Graduates Pathway To Success</h2>
            <p ref={aboutText.ref}>
              Full Stack Web Development Using MERN Stack In 15 Days - Students
              Momentous Transformations
            </p>
          </div>
          <div className="placements-wrapper">
            <StudentPlacements />
          </div>
        </section>

        <TransformationSection isLight={isLight} />

        <Footer />
      </motion.main>
    </div>
  );
}

export default Home;
