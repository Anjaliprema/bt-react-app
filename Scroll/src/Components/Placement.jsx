import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import "./Home_Static.css";
import Footer from "./Footer";
import HERO_IMG_1 from "../assets/plimg1.png";
import HERO_IMG_3 from "../assets/plimg2.png";
import HERO_IMG_2 from "../assets/plimg3.png";
import HERO_IMG_5 from "../assets/plimg5.png";
import HERO_IMG_6 from "../assets/plimg6.png";
import HERO_IMG_7 from "../assets/plimg7.png";
import PL_IMG_9 from "../assets/plimg9.png";
import PL_IMG_10 from "../assets/plimg10.png";
import PL_IMG_11 from "../assets/plimg11.png";
import Vector_Img from "../assets/plimg_Vecor_img.png";
import plimg5 from "../assets/plimg_tcs5.png";
import plimg7 from "../assets/plimg_rently7.png";
import CompanyOrbit from "./CompanyOrbit";
import {
  FaCode,
  FaLayerGroup,
  FaProjectDiagram,
  FaComments,
  FaClipboardList,
} from "react-icons/fa";

const FILTER_TABS = [
  "All",
  "Product Based",
  "Service Based",
  "Startups",
  "MNC",
];
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
    img: HERO_IMG_5,
  },
  {
    id: 2,
    name: "Majeed",
    role: "SDE",
    company: "Amazon",
    batch: "2023",
    course: "DSA + FullStack",
    pkg: "24 LPA",
    category: "Product Based",
    img: HERO_IMG_6,
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
    img: HERO_IMG_1,
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
    img: PL_IMG_10,
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
    img: HERO_IMG_7,
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
    img: PL_IMG_11,
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
    img: HERO_IMG_3,
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
    img: PL_IMG_9,
  },
  {
    id: 9,
    name: "Chandru Ramesh",
    role: "Software Dev",
    company: "JMAN Group",
    batch: "2025",
    course: "MERN Stack",
    pkg: "6.5 LPA",
    category: "Product Based",
    img: HERO_IMG_2,
  },
];
const TESTIMONIALS = [
  {
    id: 1,
    text: "Before attending this program, my knowledge of MERN was limited to a basic understanding of its components. However, after completing the training, I feel much more confident and equipped with the necessary skills to delve deeper into MERN development. I have gained a more comprehensive understanding of the architecture, tools, and best practices involved in MERN stack development. This newfound knowledge has boosted my confidence and motivation to further explore and master MERN.",
    course: "Full Stack Development",
    tag: "MERN Stack",
  },
  {
    id: 2,
    text: "At all times the trainer keep everyone's attention on the listing(i,e) out of 70/70 members. 1st time i didn't sleep for a sec in whole 8 hrs in these 9 days. Your teaching and lab sections were more intractive to me. The main thing that you have teached is how to understand and learn by own(i,e) by searching. In each concepts you had compared the java lang with other languages that Why java is more preferable and special and unique thing in java so i like java more than before.",
    course: "Java Full Stack",
    tag: "Java",
  },
  {
    id: 3,
    text: "I haven't really learnt Java from any training like this, because everyone just teaches the basic outline and no one solves us any problem and explain each and every words and logic. But here sir repeated the concepts whenever we ask without hesitating and also asked us what concepts we want. The way of teaching and dedication is the unique thing in this training session.",
    course: "Java Full Stack",
    tag: "Java",
  },
  {
    id: 4,
    text: "Being a student from biology background in both school and college I was not much interested in computer related things even after the completion of few trainings in our college itself. At the start of this dream fit I thought I would think the same way after completing this. But to be honest it helped me explore new things and I started liking developing web. The way the team lead the session interactive and friendly was an ease for me to cope up with a completely new set of skill.",
    course: "Frontend Development",
    tag: "Web Development",
  },
  {
    id: 5,
    text: "This training was very useful for me as I know java only the syntax and basics even with that I am not clear. I know the theory and how to implement it but I didn't know why we are going for that particular concept and I forgot those concepts when days goes by. But now I am having a clarity that how to approach a concept and how to learn the data structures step by step and this was the first time I'd done the programs in home and approach any prgrams from the scratch.",
    course: "Java Full Stack",
    tag: "DSA",
  },
  {
    id: 6,
    text: "The way of explaining the topics makes your training unique and also the way of approaching, the efforts you take to make every single one of us understand the concepts is really great and also the way you explain a problem statement and giving us time to approach the problem from different perspectives and at last sharing your point of view in solving the problem is really good.",
    course: "Data Structures",
    tag: "Problem Solving",
  },
];

const STATS = [
  { value: "5000+", label: "Students Placed" },
  { value: "24 LPA", label: "Highest Package" },
  { value: "500+", label: "Hiring Companies" },
  { value: "200+", label: "Product Offers" },
];

function HeroCards({ isLight }) {
  const [active, setActive] = useState(1);
  const [hovered, setHovered] = useState(null);
  const cards = [
    {
      img: HERO_IMG_1,
      label: "Devi V",
      count: "20LPA",
      desc: "Qae at Amazon",
    },
    {
      img: HERO_IMG_2,
      label: "Chandru Ramesh",
      count: "6.5LPA",
      desc: "JMAN Group",
    },
    {
      img: PL_IMG_11,
      label: "Gayatthri A",
      count: "15LPA",
      desc: "Lead at Capgemni",
    },
  ];

  const cardBgs = isLight
    ? [
        "linear-gradient(160deg, #d5dee8 0%, #b0c1c9 100%)",
        "linear-gradient(160deg, #e8e0d5 0%, #c9bfb0 100%)",
        "linear-gradient(160deg, #ccd6dd 0%, #aeb8c2 100%)",
      ]
    : [
        "linear-gradient(160deg, #c1d3e8f9 0%, #b0b5c9 100%)",
        "linear-gradient(160deg, #e8e0d5 0%, #c9bfb0 100%)",
        "linear-gradient(160deg, #b8d7ed 0%, #a0b4c7 100%)",
      ];

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        alignItems: "flex-end",
        height: "calc(100vh - 120px)",
        maxHeight: 680,
        minHeight: 480,
        width: "100%",
      }}
    >
      {cards.map((c, i) => {
        const isAct = active === i;
        const isHov = hovered === i;
        return (
          <motion.div
            key={i}
            onClick={() => setActive(i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{ flex: isAct ? 3 : 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.1, 0.64, 1] }}
            style={{
              height: "100%",
              borderRadius: 20,
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
              minWidth: 0,
              background: cardBgs[i],
            }}
          >
            <img
              src={c.img}
              alt={c.label}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                opacity: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: isAct
                  ? "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)"
                  : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
              }}
            />

            {isAct && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 18,
                  right: 18,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 15,
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: 1.3,
                  }}
                >
                  {c.label}
                </span>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: 28,
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    {c.count}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontWeight: 600,
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    PLACED
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              animate={{ opacity: isHov ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: isLight
                  ? "linear-gradient(to top, rgba(5, 55, 89, 0.22) 0%, rgba(5, 55, 89, 0.26) 10px, transparent 100%)"
                  : "linear-gradient(to top, rgba(0, 0, 0, 0.18) 0%, rgba(247,198,81,0.15) 1%, transparent 100%)",
              }}
            />

            <motion.div
              animate={{ y: isHov ? 0 : 16, opacity: isHov ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                bottom: isAct ? 68 : 72,
                left: 16,
                right: 16,
                pointerEvents: "none",
                zIndex: 3,
              }}
            >
              <p
                style={{
                  margin: "0 0 6px",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {c.desc}
              </p>
            </motion.div>

            {!isAct && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  paddingBottom: 24,
                }}
              >
                <motion.span
                  animate={{ opacity: isHov ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  {c.label}
                </motion.span>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

function StatCounter({ value, label, accent, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        textAlign: "center",
        padding: "28px 20px",
        borderRadius: 16,
        background: isDark ? "rgba(255,255,255,0.04)" : "rgba(5,56,89,0.04)",
        border: `1.5px solid ${isDark ? "rgba(247,198,81,0.2)" : "rgba(5,56,89,0.12)"}`,
      }}
    >
      <div
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(28px, 4vw, 40px)",
          color: accent,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 13,
          color: isDark ? "rgba(255,255,255,0.55)" : "rgba(5,56,89,0.6)",
          marginTop: 8,
          marginBottom: 0,
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

function StudentCard({ student, isLight, accent, borderColor, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: isLight ? "#f0f4f8" : "#111827",
        border: `1.5px solid ${hovered ? accent : borderColor}`,
        boxShadow: hovered
          ? isLight
            ? "0 16px 48px rgba(5,56,89,0.14)"
            : "0 16px 48px rgba(0,0,0,0.55)"
          : isLight
            ? "0 2px 12px rgba(5,56,89,0.05)"
            : "0 2px 12px rgba(0,0,0,0.25)",
        transition: "all 0.25s ease",
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
            background:
              "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: isLight
              ? "linear-gradient(135deg,#053859,#0a5c8f)"
              : "linear-gradient(135deg,#f7c5518d,#e0a419",
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
        <div style={{ position: "absolute", bottom: 12, left: 14 }}>
          <p
            style={{
              margin: 0,
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {student.name}
          </p>
          <p
            style={{
              margin: "2px 0 0",
              color: "rgba(255,255,255,0.75)",
              fontSize: 12,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {student.role}
          </p>
        </div>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: isLight
                ? "rgba(5,56,89,0.08)"
                : "rgba(247,198,81,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isLight ? accent : "rgba(255,255,255,0.6)"}
              strokeWidth="2.2"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: 13,
              color: isLight ? accent : "rgba(255,255,255,0.6)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {student.company}
          </span>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 20,
              background: isLight
                ? "rgba(5,56,89,0.06)"
                : "rgba(247,198,81,0.08)",
              color: isLight ? accent : "rgba(255,255,255,0.6)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {student.course}
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 20,
              background: isLight
                ? "rgba(5,56,89,0.04)"
                : "rgba(255,255,255,0.05)",
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

function Testimonials({ isLight, accent, isDark, borderColor }) {
  const [current, setCurrent] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [flying, setFlying] = useState(null); // { dir, card }
  const startXRef = useRef(0);
  const cardRef = useRef(null);
  const total = TESTIMONIALS.length;

  const CARD_COLORS_DARK = [
    "linear-gradient(145deg,#1a2744,#0d1a36)",
    "linear-gradient(145deg,#1e1a10,#2a220a)",
    "linear-gradient(145deg,#0d1f1a,#0a2018)",
    "linear-gradient(145deg,#1f1020,#150a1a)",
    "linear-gradient(145deg,#1a1010,#200e0e)",
    "linear-gradient(145deg,#101a20,#0a1520)",
  ];
  const CARD_COLORS_LIGHT = [
    "linear-gradient(145deg,#e8f0ff,#d0ddf5)",
    "linear-gradient(145deg,#fffae8,#f5edcc)",
    "linear-gradient(145deg,#e8f5f0,#d0ede5)",
    "linear-gradient(145deg,#f5e8ff,#ecddf5)",
    "linear-gradient(145deg,#ffe8e8,#f5d0d0)",
    "linear-gradient(145deg,#e8f4ff,#d0e8f5)",
  ];

  const stackProps = [
    { y: 0, scale: 1, opacity: 1, zIndex: 6 },
    { y: 12, scale: 0.95, opacity: 1, zIndex: 5 },
    { y: 22, scale: 0.9, opacity: 1, zIndex: 4 },
    { y: 30, scale: 0.85, opacity: 0.7, zIndex: 3 },
    { y: 36, scale: 0.8, opacity: 0.5, zIndex: 2 },
    { y: 40, scale: 0.77, opacity: 0.3, zIndex: 1 },
  ];

  const advance = (dir = 1) => {
    setFlying(dir);
    setTimeout(() => {
      setCurrent((p) => (p + 1) % total);
      setFlying(null);
      setDragX(0);
    }, 420);
  };

  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  const onMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    startXRef.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setDragX(x - startXRef.current);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragX) > 80) advance(dragX > 0 ? 1 : -1);
    else setDragX(0);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onMouseMove);
    window.addEventListener("touchend", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isDragging, dragX]);

  const bg = isLight ? "#f5f7fa" : "#080a0f";
  const cardColors = isLight ? CARD_COLORS_LIGHT : CARD_COLORS_DARK;
  const textCol = isLight ? "rgba(5,56,89,0.75)" : "rgba(242,237,228,0.75)";
  const mutedCol = isLight ? "rgba(5,56,89,0.4)" : "rgba(242,237,228,0.35)";
  const numCol = isLight ? "rgba(5,56,89,0.15)" : "rgba(255,255,255,0.15)";
  const divCol = isLight ? "rgba(5,56,89,0.06)" : "rgba(255,255,255,0.06)";
  const footerTextCol = isLight ? "#053859" : "rgba(242,237,228,0.9)";

  return (
    <section
      style={{
        padding: "20px 20px 30px",
        background: bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: isLight
            ? "radial-gradient(circle, rgba(5,56,89,0.08) 1px, transparent 1px)"
            : "radial-gradient(circle, rgba(247,198,81,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: isLight
            ? "radial-gradient(ellipse at center, transparent 40%, #f5f7fa 100%)"
            : "radial-gradient(ellipse at center, transparent 40%, #080a0f 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 160,
          height: 160,
          borderRadius: "50%",
          top: 30,
          right: 10,
          border: `28px solid ${isLight ? "rgba(5,56,89,0.12)" : "rgba(247,198,81,0.15)"}`,
          background: "transparent",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 110,
          height: 110,
          borderRadius: "50%",
          top: "23%",
          right: 2,
          border: `20px solid ${isLight ? "rgba(247,198,81,0.35)" : "rgba(247,198,81,0.18)"}`,
          background: "transparent",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 160,
          height: 160,
          borderRadius: "50%",
          bottom: 5,
          left: 5,
          background: isLight
            ? "rgba(247,198,81,0.25)"
            : "rgba(247,198,81,0.08)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          borderRadius: "50%",
          bottom: "6%",
          left: 32,
          border: `14px solid ${isLight ? "rgba(5,56,89,0.10)" : "rgba(255,255,255,0.07)"}`,
          background: "transparent",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          textAlign: "center",
          marginBottom: 28,
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Poppins,sans-serif",
            fontSize: "clamp(22px,3.5vw,38px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: isLight ? "#1a1a2e" : "#f2ede4",
            margin: "0 0 12px",
          }}
        >
          What student says about{" "}
          <span style={{ color: accent }}>our training</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Poppins,sans-serif",
            fontSize: 13,
            color: mutedCol,
            lineHeight: 1.8,
            margin: "0 auto",
            width: "70%",
          }}
        >
          At Better Tomorrow, we assist in developing practical skills with
          hands-on expertise and enhance your learning ability to excel in your
          preferred domain. The feedback below is genuine, without a single
          letter altered.
        </motion.p>
      </motion.div>

      <motion.div
        style={{
          position: "relative",
          width: "min(800px,95vw)",
          margin: "0 auto",
          zIndex: 1,
        }}
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* LEFT */}
        <div className="t-zone t-zone-l">
          <div className="t-arw" onClick={prev}>
            <div className="t-arw-face">
              <svg viewBox="0 0 24 24" fill="none">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", flex: 1, height: 330, zIndex: 1 }}>
          {TESTIMONIALS.map((t, i) => {
            const pos = (((i - current) % total) + total) % total;
            const s = stackProps[pos] || {
              y: 44,
              scale: 0.75,
              opacity: 0,
              zIndex: 0,
            };
            const isTop = pos === 0;
            const flyX = flying ? (flying > 0 ? 600 : -600) : 0;
            const flyRot = flying ? (flying > 0 ? 18 : -18) : 0;

            return (
              <motion.div
                key={t.id}
                animate={
                  isTop && flying
                    ? {
                        x: flyX,
                        rotate: flyRot,
                        opacity: 0,
                        transition: { duration: 0.42, ease: [0.4, 0, 1, 1] },
                      }
                    : {
                        y: s.y,
                        scale: s.scale,
                        opacity: s.opacity,
                        x: isTop ? dragX : 0,
                        rotate: isTop ? dragX * 0.04 : 0,
                        transition:
                          isDragging && isTop
                            ? { duration: 0 }
                            : { duration: 0.45, ease: [0.34, 1.1, 0.64, 1] },
                      }
                }
                style={{
                  position: "absolute",
                  inset: 0,
                  background: cardColors[i % cardColors.length],
                  borderRadius: 12,
                  overflow: "hidden",
                  zIndex: s.zIndex,
                  cursor: isTop ? "grab" : "default",
                  pointerEvents: isTop ? "auto" : "none",
                  border: `1px solid ${isLight ? "rgba(5,56,89,0.08)" : "rgba(255,255,255,0.06)"}`,
                  boxShadow: isLight
                    ? "0 20px 60px rgba(5,56,89,0.1)"
                    : "0 20px 60px rgba(0,0,0,0.5)",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                }}
                onMouseDown={isTop ? onMouseDown : undefined}
                onTouchStart={isTop ? onMouseDown : undefined}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(to right, ${accent}, #ff6b4a98)`,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    right: 20,
                    fontSize: 160,
                    fontWeight: 900,
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.03)",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  "
                </div>

                <div
                  style={{
                    padding: 20,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 28 22"
                    fill="none"
                    style={{ marginBottom: 10, opacity: 0.35, flexShrink: 0 }}
                  >
                    <path
                      d="M0 22V13.5C0 9.167 1.333 5.667 4 3c2.667-2.667 6-4 10-4v4c-2.333 0-4.333.833-6 2.5C6.333 7.167 5.5 9.167 5.5 11.5H11V22H0zm17 0V13.5c0-4.333 1.333-7.833 4-10.5C23.667.333 27-1 31-1v4c-2.333 0-4.333.833-6 2.5-1.667 1.667-2.5 3.667-2.5 6H28V22H17z"
                      fill={accent}
                    />
                  </svg>

                  <p
                    style={{
                      fontFamily: "Poppins,sans-serif",
                      fontSize: 14.5,
                      lineHeight: 1.85,
                      color: textCol,
                      flex: 1,
                      margin: 0,
                    }}
                  >
                    {t.text}
                  </p>

                  <div
                    style={{
                      marginTop: 24,
                      paddingTop: 18,
                      borderTop: `1px solid ${divCol}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        border: `1px solid ${isLight ? "rgba(5,56,89,0.15)" : "rgba(247,198,81,0.2)"}`,
                        background: isLight
                          ? "rgba(5,56,89,0.04)"
                          : "rgba(247,198,81,0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={
                          isLight ? "rgba(5,56,89,0.5)" : "rgba(247,198,81,0.6)"
                        }
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                      </svg>
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins,sans-serif",
                          fontWeight: 600,
                          fontSize: 12,
                          color: footerTextCol,
                        }}
                      >
                        {t.course}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "Poppins,sans-serif",
                          fontSize: 11,
                          color: mutedCol,
                        }}
                      >
                        Program participant
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="t-zone t-zone-r">
          <div className="t-arw" onClick={() => advance(1)}>
            <div className="t-arw-face">
              <svg viewBox="0 0 24 24" fill="none">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 20,
          zIndex: 1,
        }}
      >
        {TESTIMONIALS.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setCurrent(i)}
            animate={{
              width: i === current ? 24 : 7,
              background:
                i === current
                  ? accent
                  : isLight
                    ? "rgba(5,56,89,0.15)"
                    : "rgba(255,255,255,0.15)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              height: 6,
              borderRadius: 3,
              cursor: "pointer",
              flexShrink: 0,
            }}
          />
        ))}
        <span
          style={{
            fontFamily: "Poppins,sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: mutedCol,
            marginLeft: 4,
            whiteSpace: "nowrap",
          }}
        >
          {current + 1} of {total}
        </span>
      </motion.div>
    </section>
  );
}

function CompanyMarquee({ isLight, isDark }) {
  const companies = [
    {
      name: "Amazon",
      logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    },
    {
      name: "Informatica",
      logo: "https://www.google.com/s2/favicons?domain=informatica.com&sz=128",
    },
    {
      name: "Zoho",
      logo: "https://www.google.com/s2/favicons?domain=zoho.com&sz=128",
    },
    {
      name: "TCS Digital",
      logo: plimg5,
    },
    {
      name: "TCS Ninja",
      logo: plimg5,
    },
    {
      name: "Odessa",
      logo: "https://www.google.com/s2/favicons?domain=odessa.com&sz=128",
    },
    {
      name: "Payoda",
      logo: "https://www.google.com/s2/favicons?domain=payoda.com&sz=128",
    },
    {
      name: "Rently",
      logo: plimg7,
    },
    {
      name: "Temenos",
      logo: "https://www.google.com/s2/favicons?domain=temenos.com&sz=128",
    },
    {
      name: "Sirius",
      logo: "https://www.google.com/s2/favicons?domain=siriusxm.com&sz=128",
    },
    {
      name: "Capgemini",
      logo: "https://www.google.com/s2/favicons?domain=capgemini.com&sz=128",
    },
    {
      name: "Wipro",
      logo: "https://www.google.com/s2/favicons?domain=wipro.com&sz=128",
    },

    {
      name: "Cognizant",
      logo: "https://www.google.com/s2/favicons?domain=cognizant.com&sz=128",
    },
    {
      name: "Infosys",
      logo: "https://www.google.com/s2/favicons?domain=infosys.com&sz=128",
    },
    {
      name: "Accenture",
      logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128",
    },
  ];

  const row1 = [...companies.slice(0, 8), ...companies.slice(0, 8)];
  const row2 = [...companies.slice(8), ...companies.slice(8)];

  const LogoCard = ({ c }) => (
    <div
      style={{
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        margin: "0 16px",
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 18,
          background: "rgba(255,255,255,0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isLight
            ? "4px 6px 20px rgba(5,56,89,0.12), -2px -2px 8px rgba(255,255,255,0.9)"
            : "4px 6px 20px rgba(0,0,0,0.45), -2px -2px 8px rgba(255,255,255,0.03)",
          transform: "perspective(300px) rotateX(8deg) rotateY(-6deg)",
          border: isLight
            ? "1px solid rgba(5,56,89,0.08)"
            : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <img
          src={c.logo}
          alt={c.name}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
          style={{
            width: 48,
            height: 48,
            objectFit: "contain",
            borderRadius: 8,
          }}
        />
        <div
          style={{
            width: 48,
            height: 48,
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 900,
            fontSize: 20,
            color: isLight ? "#053859" : "#f7c651",
          }}
        >
          {c.name[0]}
        </div>
      </div>
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          color: isLight ? "rgba(5,56,89,0.7)" : "rgba(255,255,255,0.6)",
          whiteSpace: "nowrap",
          letterSpacing: "0.02em",
        }}
      >
        {c.name}
      </span>
    </div>
  );

  return (
    <section
      style={{
        padding: "80px 0 80px",
        background: isLight ? "#f5f7fa" : "#0d0d0d",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: 52, padding: "0 40px" }}
      >
        <div style={{ position: "relative" }}>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: isLight ? "#1a1a1a" : "rgba(240,235,220,0.95)",
              margin: "0 0 16px",
              position: "relative",
              zIndex: 1,
            }}
          >
            You{" "}
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              win.
            </span>
            <br />
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              We{" "}
            </span>
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: isLight ? "#053859" : "#f7c651",
              }}
            >
              place.
            </span>
          </h2>
        </div>
      </motion.div>

      <div style={{ overflow: "hidden", marginBottom: 24 }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
          }}
        >
          {row1.map((c, i) => (
            <LogoCard key={i} c={c} />
          ))}
        </motion.div>
      </div>

      <div style={{ overflow: "hidden" }}>
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
          }}
        >
          {row2.map((c, i) => (
            <LogoCard key={i} c={c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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
        background: isLight ? "rgba(5,56,89,0.18)" : "rgba(247,198,81,0.24)",
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

const Track = ({ items, animName, duration, pillBorder, accent, isLight }) => (
  <div
    style={{
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      height: 32,
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

function SkillsList({ isLight, accent }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      title: "Data Structures & Algorithms",
      desc: "Master arrays, trees, graphs and solve complex problems confidently in any interview.",
    },
    {
      title: "Full Stack Development",
      desc: "Build end-to-end web applications with modern frameworks — from backend APIs to pixel-perfect UIs.",
    },
    {
      title: "System Design",
      desc: "Design scalable, fault-tolerant systems. Crack senior-level interview rounds with confidence.",
    },
    {
      title: "Communication & Soft Skills",
      desc: "Present yourself powerfully, handle HR rounds, and build a standout professional presence.",
    },
    {
      title: "Interview Preparation",
      desc: "Mock interviews, resume building, and real-world coding challenges to get you job-ready fast.",
    },
  ];

  const icons = [
    FaCode,
    FaLayerGroup,
    FaProjectDiagram,
    FaComments,
    FaClipboardList,
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {skills.map((s, i) => {
        const isHov = hoveredSkill === i;
        const Icon = icons[i];
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
        const iconColor = isHov ? (isLight ? "#ffffff" : "#0a0a0a") : accent;

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
                transition: "background 0.25s ease, border-color 0.25s ease",
              }}
            >
              <Icon size={18} color={iconColor} />
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
  );
}

function SkillsTimeline({ isLight, accent, isDark }) {
  const mutedCol = isLight ? "rgba(5,56,89,0.4)" : "rgba(242,237,228,0.35)";
  const pillBorder = isLight ? "rgba(5,56,89,0.15)" : "rgba(247,198,81,0.2)";
  const rowDivider = isLight ? "rgba(5,56,89,0.05)" : "rgba(255,255,255,0.05)";
  const bg = isLight ? "white" : "black";
  const fadeL = `linear-gradient(to right, ${bg}, transparent)`;
  const fadeR = `linear-gradient(to left, ${bg}, transparent)`;

  const ROW1 = [
    "Full Stack Developer",
    "Java Developer",
    "SDE at Amazon",
    "Frontend Engineer",
    "MERN Stack Dev",
    "Product Engineer",
    "React Developer",
  ];
  const ROW2 = [
    "Backend Engineer",
    "DevOps Engineer",
    "SDE at Zoho",
    "Spring Boot Dev",
    "Node.js Engineer",
    "Software Engineer",
    "QA Engineer",
  ];
  const ROW3 = [
    "Tech Lead",
    "SDE-2 at Capgemini",
    "DSA Expert",
    "API Developer",
    "SDE at TCS",
    "Cloud Engineer",
    "System Designer",
  ];

  const Pill = ({ text }) => (
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

  const Track = ({ items, animName, duration }) => (
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
          <Pill key={i} text={t} />
        ))}
      </div>
    </div>
  );

  const skills = [
    {
      icon: <FaCode size={18} />,
      title: "Data Structures & Algorithms",
      desc: "Master arrays, trees, graphs and solve complex problems confidently in any interview.",
    },
    {
      icon: <FaLayerGroup size={18} />,
      title: "Full Stack Development",
      desc: "Build end-to-end web applications with modern frameworks — from backend APIs to pixel-perfect UIs.",
    },
    {
      icon: <FaProjectDiagram size={18} />,
      title: "System Design",
      desc: "Design scalable, fault-tolerant systems. Crack senior-level interview rounds with confidence.",
    },
    {
      icon: <FaComments size={18} />,
      title: "Communication & Soft Skills",
      desc: "Present yourself powerfully, handle HR rounds, and build a standout professional presence.",
    },
    {
      icon: <FaClipboardList size={18} />,
      title: "Interview Preparation",
      desc: "Mock interviews, resume building, and real-world coding challenges to get you job-ready fast.",
    },
  ];

  return (
    <section
      style={{
        padding: "30px 0px",
        background: isLight ? "#ffffff" : "#0a0a0a",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(22px, 3.5vw, 38px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: isLight ? "#1a1a2e" : "#f2ede4",
              margin: "0 0 12px",
            }}
          >
            Get the skills you need for a job that is in{" "}
            <span style={{ color: accent }}>demand.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 13,
              color: mutedCol,
              lineHeight: 1.8,
              margin: "0 auto",
              maxWidth: "65%",
            }}
          >
            The modern labor market dictates its own terms. To be a competitive
            specialist today requires more than professional skills — it demands
            a complete transformation.
          </motion.p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          <SkillsList isLight={isLight} accent={accent} />

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
    initial={{ opacity: 0, scale: 0.6 }}
    whileHover={{ opacity: 1, scale: 1 }}    
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
    }}
  />

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
        transition: { delay: i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
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
      transform: "translate(-50%, calc(-50% + 30px))",  // ← +60px shifts all glows down together
    }}
  />
))}
  

    <motion.img
      src={Vector_Img}
      alt="Skills illustration"
      variants={{
        rest: { scale: 1, filter: "drop-shadow(0px 0px 0px transparent)" },
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
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
                minHeight: 108,
                gap: 15,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: 44,
                  background: fadeL,
                  zIndex: 4,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  width: 44,
                  background: fadeR,
                  zIndex: 4,
                  pointerEvents: "none",
                }}
              />
              <Track
                items={ROW1}
                animName="marqueeLeft"
                duration={60}
                pillBorder={pillBorder}
                accent={accent}
                isLight={isLight}
              />
              <Track
                items={ROW2}
                animName="marqueeRight"
                duration={70}
                pillBorder={pillBorder}
                accent={accent}
                isLight={isLight}
              />
              <Track
                items={ROW3}
                animName="marqueeLeft"
                duration={55}
                pillBorder={pillBorder}
                accent={accent}
                isLight={isLight}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Placement() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark",
  );
  const [activeFilter, setActiveFilter] = useState("All");
  const pageRef = useRef(null);

  const isDark = !isLight;
  const theme = isLight ? "light" : "dark";
  const bg = isLight ? "#f5f7fa" : "#0a0a0a";
  const textColor = isLight ? "#373738" : "#f0f0f0";
  const accent = isLight ? "#074c7a" : "#f7c651";
  const subColor = isLight ? "rgba(5,56,89,0.62)" : "rgba(255,255,255,0.52)";
  const borderColor = isLight ? "rgba(5,56,89,0.12)" : "rgba(247,198,81,0.15)";

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

  const filtered =
    activeFilter === "All"
      ? PLACED_STUDENTS
      : PLACED_STUDENTS.filter((s) => s.category === activeFilter);

  return (
    <div
      ref={pageRef}
      className={`op-page ${theme}-theme`}
      style={{ background: bg, color: textColor }}
    >
      <Header />

      <section
        style={{
          height: "100vh",
          padding: "80px 40px 0px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: bg,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            top: -100,
            left: -150,
            pointerEvents: "none",
            background: isLight
              ? "rgba(5,56,89,0.06)"
              : "rgba(247,198,81,0.05)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            bottom: 0,
            right: -100,
            pointerEvents: "none",
            background: isLight
              ? "rgba(10,92,143,0.05)"
              : "rgba(224,164,25,0.05)",
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 40,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {" "}
          <div style={{ maxWidth: 580 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ margin: "0 0 28px" }}
            >
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(28px, 4.5vw, 30px)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: isLight ? "#373738" : "rgba(255,255,255,0.94)",
                  margin: 0,
                }}
              >
                Fostering a
              </p>

              <div style={{ position: "relative", display: "inline-block" }}>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(32px, 5.5vw, 60px)",
                    fontWeight: 900,
                    lineHeight: 1.0,
                    letterSpacing: "-0.04em",
                    color: isLight
                      ? "rgba(5,56,89,0.15)"
                      : "rgba(247,198,81,0.15)",
                    margin: 0,
                    userSelect: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Better Tomorrow
                </p>

                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(32px, 5.5vw, 60px)",
                    fontWeight: 900,
                    lineHeight: 1.0,
                    letterSpacing: "-0.04em",
                    color: isLight ? "#053859" : "#f7c651",
                    margin: 0,
                    userSelect: "none",
                    whiteSpace: "nowrap",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    animation: "liquidRise 2.4s ease-in-out infinite alternate",
                  }}
                >
                  Better Tomorrow
                </p>
              </div>

              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(28px, 4.5vw, 24px)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: isLight ? "#373738" : "rgba(255,255,255,0.94)",
                  margin: "10px 0 0",
                  maxWidth: 400,
                }}
              >
                through the power of learning in action.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 1.85,
                color: isLight
                  ? "rgba(5,56,89,0.58)"
                  : "rgba(255,255,255,0.48)",
                maxWidth: 420,
                margin: "0 0 36px",
                fontWeight: 400,
              }}
            >
              From zero knowledge to dream offers — our students have cracked
              interviews at{" "}
              <span style={{ color: accent, fontWeight: 600 }}>
                Amazon, Google, Capgemini
              </span>{" "}
              and 500+ <br />
              more companies.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: "85%", marginLeft: "15%" }}
          >
            <HeroCards isLight={isLight} />
          </motion.div>
        </div>
      </section>

      <CompanyOrbit isLight={isLight} />

      <section
        style={{
          padding: "80px 40px 60px",
          background: isLight ? "#ffffff" : "#0d0d0d",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
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
                margin: 0,
              }}
            >
              Real Stories, Real Results:{" "}
              <span style={{ color: accent }}>
                Our Students Success Stories.
              </span>
            </h2>
          </motion.div>

          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            {FILTER_TABS.map((tab) => {
              const isAct = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  style={{
                    padding: "9px 20px",
                    borderRadius: 999,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.22s ease",
                    background: isAct
                      ? isLight
                        ? "linear-gradient(135deg,#053859,#0a5c8f)"
                        : "linear-gradient(135deg,#f7c651,#e0a419)"
                      : "transparent",
                    color: isAct
                      ? isLight
                        ? "#fff"
                        : "#000"
                      : isLight
                        ? "#053859"
                        : "rgba(255,255,255,0.55)",
                    border: `1.5px solid ${isAct ? "transparent" : borderColor}`,
                    boxShadow: isAct
                      ? isLight
                        ? "0 4px 16px rgba(5,56,89,0.25)"
                        : "0 4px 16px rgba(247,198,81,0.25)"
                      : "none",
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <SkillsTimeline isLight={isLight} accent={accent} isDark={isDark} />

      <Testimonials
        isLight={isLight}
        accent={accent}
        isDark={isDark}
        borderColor={borderColor}
      />

      <Footer />
    </div>
  );
}
