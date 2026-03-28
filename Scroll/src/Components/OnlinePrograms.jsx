import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import "./Home_Static.css";
import Footer from "./Footer";
import pimg1 from "../assets/pimg1.png";
import pimg2 from "../assets/pimg2.png";
import pimg3 from "../assets/pimg3.png";
import pimg4 from "../assets/pimg4.png";
import pimg5 from "../assets/pimg5.png";
import pimg6 from "../assets/pimg6.png";
import { AnimatePresence } from "framer-motion";
import cimg1 from "../assets/cimg1.png";
import cimg2 from "../assets/cimg2.png";
import cimg3 from "../assets/cimg3.png";
import cimg4 from "../assets/cimg4.png";
import cimg5 from "../assets/cimg5.png";
import cimg6 from "../assets/cimg6.png";
import cimg7 from "../assets/cimg7.png";
import cimg8 from "../assets/cimg8.jpg";
import cimg9 from "../assets/cimg9.png";
import cimg10 from "../assets/cimg10.jpg";
import cimg11 from "../assets/cimg11.png";
import cimg12 from "../assets/cimg12.jpg";
import cimg13 from "../assets/cimg13.png";
import cimg14 from "../assets/cimg14.jpg";
import cimg15 from "../assets/cimg15.jpg";
import cimg16 from "../assets/cimg16.png";
import cimg17 from "../assets/cimg17.jpg";
import cimg18 from "../assets/cimg18.jpg";
import cimg19 from "../assets/cimg19.png";
import cimg20 from "../assets/cimg20.jpg";
import cimg21 from "../assets/cimg21.jpg";
import cimg22 from "../assets/cimg22.jpg";
import cimg23 from "../assets/cimg23.jpg";
import cimg24 from "../assets/cimg24.jpg";
import cimg25 from "../assets/cimg25.jpg";
import cimg26 from "../assets/cimg26.jpg";
import cimg27 from "../assets/cimg27.png";

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  isLight,
  borderColor,
  themeAccentA,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <div
        onClick={() => setOpen((p) => !p)}
        style={{
          padding: "12px 14px",
          borderRadius: 10,
          border: `1px solid ${open ? themeAccentA : borderColor}`,
          background: isLight ? "#f5f7fa" : "#1a1a22",
          color: value
            ? isLight
              ? "#0d1117"
              : "#f0f0f0"
            : isLight
              ? "#9ba3af"
              : "#5a6170",
          fontSize: 13.5,
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          userSelect: "none",
          fontFamily: "inherit",
        }}
      >
        <span>{value || placeholder}</span>
        <span
          style={{
            fontSize: 10,
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            opacity: 0.6,
          }}
        >
          ▼
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 0,
            right: 0,
            zIndex: 9999,
            borderRadius: 10,
            overflow: "hidden",
            border: `1px solid ${borderColor}`,
            background: isLight ? "#ffffff" : "#1a1a22",
            boxShadow: isLight
              ? "0 8px 24px rgba(5,56,89,0.12)"
              : "0 8px 24px rgba(0,0,0,0.5)",
          }}
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              style={{
                padding: "11px 14px",
                fontSize: 13.5,
                cursor: "pointer",
                color:
                  value === opt
                    ? themeAccentA
                    : isLight
                      ? "#0d1117"
                      : "#f0f0f0",
                background:
                  value === opt
                    ? isLight
                      ? "rgba(5,56,89,0.06)"
                      : "rgba(247,198,81,0.08)"
                    : "transparent",
                fontWeight: value === opt ? 700 : 400,
                fontFamily: "inherit",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = isLight
                  ? "rgba(5,56,89,0.05)"
                  : "rgba(255,255,255,0.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  value === opt
                    ? isLight
                      ? "rgba(5,56,89,0.06)"
                      : "rgba(247,198,81,0.08)"
                    : "transparent")
              }
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const COURSES = {
  popular: [
    {
      id: "p1",
      title: "Java Full Stack",
      category: "Full Stack",
      level: "Beginner",
      img: cimg1,
      desc: "Master Java from basics to enterprise-level web apps.",
    },
    {
      id: "p2",
      title: "MERN Stack",
      category: "Full Stack",
      level: "Intermediate",
      img: cimg16,
      desc: "MongoDB, Express, React, Node — the complete JS stack.",
    },
    {
      id: "p3",
      title: "DSA in Java",
      category: "Interview Prep",
      level: "Intermediate",
      img: cimg3,
      desc: "Crack interviews with in-depth DSA using Java.",
    },
    {
      id: "p4",
      title: "Python for AI",
      category: "AI Based",
      level: "Beginner",
      img: cimg8,
      desc: "Python fundamentals with AI/ML applications.",
    },
    {
      id: "p5",
      title: "JavaScript Mastery",
      category: "Programming",
      level: "Beginner",
      img: cimg11,
      desc: "From zero to JS hero — complete frontend path.",
    },
    {
      id: "p6",
      title: "DevOps Essentials",
      category: "Full Stack",
      level: "Advanced",
      img: cimg15,
      desc: "CI/CD, Docker, cloud — ship software faster.",
    },
    {
      id: "p7",
      title: "Spring Boot + Angular",
      category: "Full Stack",
      level: "Advanced",
      img: cimg22,
      desc: "Enterprise-grade Java backend with Angular frontend.",
    },
    {
      id: "p8",
      title: "System Design",
      category: "Interview Prep",
      level: "Advanced",
      img: cimg6,
      desc: "Design scalable systems — crack senior roles.",
    },
    {
      id: "p9",
      title: "Flutter App Development",
      category: "Interview Prep",
      level: "Advanced",
      img: cimg14,
      desc: "Build beautiful cross-platform mobile apps for Android and iOS using Flutter.",
    },
    {
      id: "p10",
      title: "Cybersecurity & Ethical Hacking",
      category: "Interview Prep",
      level: "Advanced",
      img: cimg27,
      desc: "Learn how to protect systems, networks, and applications from cyber attacks.",
    },
  ],

  programming: [
    {
      id: "pr1",
      title: "C",
      category: "Programming",
      level: "Beginner",
      img: cimg10,
      desc: "Master the foundation of all programming languages.",
    },
    {
      id: "pr2",
      title: "Python",
      category: "Programming",
      level: "Beginner",
      img: cimg8,
      desc: "Clean, versatile, dominant in AI & data science.",
    },
    {
      id: "pr3",
      title: "JavaScript",
      category: "Programming",
      level: "Beginner",
      img: cimg11,
      desc: "The language of the web — frontend & backend.",
    },
    {
      id: "pr4",
      title: "Java",
      category: "Programming",
      level: "Intermediate",
      img: cimg1,
      desc: "Enterprise-grade, write once run anywhere.",
    },

    {
      id: "pr5",
      title: "C++",
      category: "Programming",
      level: "Advanced",
      img: cimg9,
      desc: "Object-oriented powerhouse for competitive programming.",
    },
    {
      id: "pr6",
      title: "TypeScript",
      category: "Programming",
      level: "Advanced",
      img: cimg18,
      desc: "A strongly typed, open-source programming language.",
    },
    {
      id: "pr7",
      title: "C#",
      category: "Programming",
      level: "Intermediate",
      img: cimg19,
      desc: "A modern, object-oriented programming language.",
    },

    {
      id: "pr8",
      title: "SQL",
      category: "Programming",
      level: "Intermediate",
      img: cimg20,
      desc: "Standard programming language used to interact with and manage data stored in relational databases.",
    },
  ],
  fullstack: [
    {
      id: "f1",
      title: "Java Full Stack",
      category: "Full Stack",
      level: "Beginner",
      img: cimg1,
      desc: "Master Java from basics to enterprise-level web apps.",
    },
    {
      id: "f2",
      title: "Web Dev Bootcamp",
      category: "Full Stack",
      level: "Beginner",
      img: cimg5,
      desc: "HTML to deployment — the complete full-stack path.",
    },
    {
      id: "f3",
      title: "React + Node JS",
      category: "Full Stack",
      level: "Intermediate",
      img: cimg13,
      desc: "Build modern full-stack apps with React and Node.",
    },
    {
      id: "f4",
      title: "MERN Stack",
      category: "Full Stack",
      level: "Intermediate",
      img: cimg16,
      desc: "MongoDB, Express, React, Node — the complete JS stack.",
    },
    {
      id: "f5",
      title: "MEAN Stack",
      category: "Full Stack",
      level: "Intermediate",
      img: cimg17,
      desc: "Angular-powered full stack with MongoDB and Express.",
    },
    {
      id: "f6",
      title: "Spring Boot + Angular",
      category: "Full Stack",
      level: "Advanced",
      img: cimg22,
      desc: "Enterprise-grade Java backend with Angular frontend.",
    },
    {
      id: "f7",
      title: "Frontend Development",
      category: "Full Stack",
      level: "Intermediate",
      img: cimg12,
      desc: "Design beautiful, responsive, and interactive websites..",
    },
    {
      id: "f8",
      title: "Backend Development",
      category: "Full Stack",
      level: "Intermediate",
      img: cimg23,
      desc: "Learn how to build the server-side logic that powers modern web applications.",
    },
    {
      id: "f9",
      title: "HTML, CSS & JavaScript",
      category: "Full Stack",
      level: "Beginner",
      img: cimg3,
      desc: "Learn how to build modern responsive websites from scratch.",
    },
  ],
  interview: [
    {
      id: "i1",
      title: "DSA in Java",
      category: "Interview Prep",
      level: "Intermediate",
      img: cimg3,
      desc: "Crack interviews with in-depth DSA using Java.",
    },
    {
      id: "i2",
      title: "DSA in C",
      category: "Interview Prep",
      level: "Beginner",
      img: cimg2,
      desc: "Data structures from scratch using C.",
    },
    {
      id: "i3",
      title: "System Design",
      category: "Interview Prep",
      level: "Advanced",
      img: cimg6,
      desc: "Design scalable systems — crack senior roles.",
    },
    {
      id: "i4",
      title: "Flutter App Development",
      category: "Interview Prep",
      level: "Advanced",
      img: cimg14,
      desc: "Build beautiful cross-platform mobile apps for Android and iOS using Flutter.",
    },

    {
      id: "i5",
      title: "DBMS & SQL",
      category: "Interview Prep",
      level: "Beginner",
      img: cimg4,
      desc: "Relational models, SQL and normalization.",
    },
    {
      id: "i6",
      title: "Aptitude & Logical Reasoning",
      category: "Interview Prep",
      level: "Beginner",
      img: cimg24,
      desc: "Prepare for quantitative and logical rounds asked in company placement tests.",
    },
    {
      id: "i7",
      title: "Communication & Soft Skills",
      category: "Interview Prep",
      level: "Beginner",
      img: cimg25,
      desc: "Improve confidence, communication, and interview performance.",
    },
    {
      id: "i8",
      title: "Resume Building & Interview Skills",
      category: "Interview Prep",
      level: "Beginner",
      img: cimg26,
      desc: "Relational models, SQL and normalization.",
    },

    {
      id: "i9",
      title: "OS & Networks",
      category: "Interview Prep",
      level: "Intermediate",
      img: cimg7,
      desc: "Core CS concepts every interviewer asks.",
    },
    {
      id: "i10",
      title: "Cybersecurity & Ethical Hacking",
      category: "Interview Prep",
      level: "Advanced",
      img: cimg27,
      desc: "Learn how to protect systems, networks, and applications from cyber attacks.",
    },
  ],
};

const CATEGORY_FILTERS = [
  { id: "popular", label: "Popular" },
  { id: "programming", label: "Programming Courses" },
  { id: "fullstack", label: "Full Stack" },
  { id: "interview", label: "Interview Prep" },
];

const LEVEL_FILTERS = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

function CourseCard({
  course,
  index = 0,
  isLight,
  textColor,
  subColor,
  themeAccentA,
  onApply,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="ec-card"
      style={{
        background: isLight ? "#ffffff" : "#111116",
        border: `1.5px solid ${
          hovered
            ? isLight
              ? themeAccentA 
              : "rgba(235, 235, 235, 0.57)" 
            : isLight
              ? "rgba(5,56,89,0.1)"
              : "rgba(255,255,255,0.07)"
        }`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15, 
        ease: "easeOut",
      }}
      whileHover={{ y: -5 }}
    >
      <div className="ec-card-img-wrap">
        <img src={course.img} alt={course.title} className="ec-card-img" />
        <div className="ec-card-img-overlay" />
      </div>

      <div className="ec-card-body">
        <h4 className="ec-card-title" style={{ color: textColor }}>
          {course.title}
        </h4>
        <p className="ec-card-desc" style={{ color: subColor }}>
          {course.desc}
        </p>
        <button
          className="ec-card-btn btn-2"
          onClick={() => onApply(course.title)}
        >
          Apply Now →
        </button>
      </div>
    </motion.div>
  );
}

function FilterSection({
  isLight,
  textColor,
  subColor,
  themeAccentA,
  borderColor,
  onApply,
}) {
  const [activeLevel, setActiveLevel] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [levelOpen, setLevelOpen] = useState(false);
  const levelRef = useRef(null);
  const sectionRef = useRef(null);

  const wrapRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (wrapRef.current) {
        const totalWidth = wrapRef.current.offsetWidth;
        const gap = 20 * 4;
        setCardWidth((totalWidth - gap) / 5);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const bg = isLight ? "white" : "#0a0a0a";
  const isAll = !activeLevel && !activeCategory;

  useEffect(() => {
    const handler = (e) => {
      if (levelRef.current && !levelRef.current.contains(e.target))
        setLevelOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleAll = () => {
    if (!isAll) {
      setActiveLevel(null);
      setActiveCategory(null);
      setExpanded(false);
    }
  };

  const handleLevel = (id) => {
    if (activeLevel === id) return;
    setActiveLevel(id);
    setLevelOpen(false);
    setExpanded(false);
  };

  const handleCategory = (id) => {
    if (activeCategory === id) return;
    setActiveCategory(id);
    setExpanded(false);
  };

  const getFilteredCourses = () => {
    const all = [
      ...COURSES.popular,
      ...COURSES.programming,
      ...COURSES.fullstack,
      ...COURSES.interview,
    ].filter((c, i, arr) => arr.findIndex((x) => x.id === c.id) === i);

    let pool;
    switch (activeCategory) {
      case "popular":
        pool = COURSES.popular;
        break;
      case "programming":
        pool = COURSES.programming;
        break;
      case "fullstack":
        pool = COURSES.fullstack;
        break;
      case "interview":
        pool = COURSES.interview;
        break;
      default:
        pool = all;
    }

    if (activeLevel) {
      const lvlMap = {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      };
      pool = pool.filter((c) => c.level === lvlMap[activeLevel]);
    }

    return pool;
  };

  const courses = getFilteredCourses();

  const row1 = courses.slice(0, 5);
  const row2 = courses.slice(5, 10);

  const activeLevelLabel = LEVEL_FILTERS.find(
    (l) => l.id === activeLevel,
  )?.label;

  const activeStyle = {
    background: themeAccentA,
    color: isLight ? "#fff" : "#000",
    border: `1.5px solid ${themeAccentA}`,
  };
  const inactiveStyle = {
    background: "transparent",
    color: subColor,
    border: `1.5px solid ${borderColor}`,
  };

  const makePendulumItems = (items) => {
    if (items.length === 0) return [];

    let base = [...items];

    if (base.length < 5) {
      let i = 0;
      while (base.length < 5) {
        base.push(items[i % items.length]);
        i++;
      }
    }
    return base;
  };

  const row1Items = makePendulumItems(row1);
  const row2Items = makePendulumItems(row2);

  return (
    <section
      ref={sectionRef}
      className="ec-filter-section"
      style={{ background: bg }}
    >
      {" "}
      <div className="ec-filter-header">
        <div>
          <h2 className="ec-filter-title" style={{ color: textColor }}>
            Explore
          </h2>
          <p className="ec-filter-subtitle" style={{ color: subColor }}>
            Navigate Your Career Journey
          </p>
        </div>
      </div>
      <div className="ec-filter-pills">
        <div ref={levelRef} className="ec-level-dropdown-wrap">
          <button
            className="ec-filter-pill ec-level-trigger"
            style={activeLevel ? activeStyle : inactiveStyle}
            onClick={() => setLevelOpen((p) => !p)}
          >
            {activeLevelLabel ?? "Level"}
            <span
              style={{
                marginLeft: 7,
                fontSize: 10,
                display: "inline-block",
                transition: "transform 0.2s",
                transform: levelOpen ? "rotate(180deg)" : "rotate(0deg)",
                opacity: 0.7,
              }}
            >
              ▼
            </span>
          </button>

          {levelOpen && (
            <motion.div
              className="ec-level-dropdown"
              style={{
                background: isLight ? "#ffffff" : "#1a1a22",
                border: `1px solid ${borderColor}`,
                boxShadow: isLight
                  ? "0 8px 28px rgba(5,56,89,0.12)"
                  : "0 8px 28px rgba(0,0,0,0.5)",
              }}
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              {LEVEL_FILTERS.map((lf) => (
                <div
                  key={lf.id}
                  className="ec-level-option"
                  style={{
                    color: activeLevel === lf.id ? themeAccentA : textColor,
                    background:
                      activeLevel === lf.id
                        ? isLight
                          ? "rgba(5,56,89,0.06)"
                          : "rgba(247,198,81,0.08)"
                        : "transparent",
                    fontWeight: activeLevel === lf.id ? 700 : 400,
                    cursor: activeLevel === lf.id ? "default" : "pointer",
                  }}
                  onClick={() => handleLevel(lf.id)}
                  onMouseEnter={(e) => {
                    if (activeLevel !== lf.id)
                      e.currentTarget.style.background = isLight
                        ? "rgba(5,56,89,0.05)"
                        : "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      activeLevel === lf.id
                        ? isLight
                          ? "rgba(5,56,89,0.06)"
                          : "rgba(247,198,81,0.08)"
                        : "transparent";
                  }}
                >
                  <span
                    className="ec-level-dot"
                    style={{
                      background:
                        activeLevel === lf.id ? themeAccentA : borderColor,
                    }}
                  />
                  {lf.label}
                  {activeLevel === lf.id && (
                    <span
                      style={{
                        marginLeft: "auto",
                        fontSize: 12,
                        color: themeAccentA,
                      }}
                    >
                      ✓
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </div>

        <div
          style={{
            width: 1,
            height: 32,
            background: borderColor,
            alignSelf: "center",
            margin: "0 4px",
            flexShrink: 0,
          }}
        />

        <button
          className={`ec-filter-pill ${isAll ? "ec-filter-pill--active" : ""}`}
          style={isAll ? activeStyle : inactiveStyle}
          onClick={handleAll}
        >
          All
        </button>

        {CATEGORY_FILTERS.map((cf) => (
          <button
            key={cf.id}
            className={`ec-filter-pill ${activeCategory === cf.id ? "ec-filter-pill--active" : ""}`}
            style={activeCategory === cf.id ? activeStyle : inactiveStyle}
            onClick={() => handleCategory(cf.id)}
          >
            {cf.label}
          </button>
        ))}
      </div>
      {courses.length === 0 && (
        <div
          style={{
            maxWidth: 960,
            margin: "-8px auto 28px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 12, color: subColor, fontStyle: "italic" }}>
            — no courses match this combination
          </span>
        </div>
      )}
      <AnimatePresence mode="wait">
        {!expanded ? (
          <motion.div
            key={`pendulum-${activeLevel ?? "nl"}-${activeCategory ?? "nc"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {row1Items.length > 0 && (
              <div
                ref={wrapRef}
                className="ec-pendulum-wrap ec-pendulum-wrap--left"
                style={{ marginBottom: 20 }}
              >
                <motion.div
                  className="ec-pendulum-row ec-pendulum-row--left"
                  animate={{ x: [-120, 120, -120] }}
                  transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  {" "}
                  {row1Items.map((course, index) => (
                    <div key={`r1-${index}`} className="ec-pendulum-card">
                      <CourseCard
                        course={course}
                        index={0}
                        isLight={isLight}
                        textColor={textColor}
                        subColor={subColor}
                        themeAccentA={themeAccentA}
                        borderColor={borderColor}
                        onApply={onApply}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            )}

            {row2.length > 0 && (
              <div
                className="ec-pendulum-wrap ec-pendulum-wrap--right"
                ref={wrapRef}
              >
                <motion.div
                  className="ec-pendulum-row ec-pendulum-row--right"
                  animate={{ x: [120, -120, 120] }}
                  transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  {" "}
                  {row2Items.map((course, index) => (
                    <div key={`r2-${index}`} className="ec-pendulum-card">
                      <CourseCard
                        course={course}
                        index={0}
                        isLight={isLight}
                        textColor={textColor}
                        subColor={subColor}
                        themeAccentA={themeAccentA}
                        borderColor={borderColor}
                        onApply={onApply}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key={`grid-${activeLevel ?? "nl"}-${activeCategory ?? "nc"}`}
            className="ec-cards-grid-4 ec-filter-view-all-grid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                index={index}
                course={course}
                isLight={isLight}
                textColor={textColor}
                subColor={subColor}
                themeAccentA={themeAccentA}
                borderColor={borderColor}
                onApply={onApply}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {courses.length > 4 && (
        <div className="ec-view-all-wrap">
          <button
            className="ec-view-all-btn"
          
            onClick={() => {
              const next = !expanded;
              setExpanded(next);
              if (next) {
                setTimeout(() => {
                  const pageEl = sectionRef.current?.closest(".op-page");
                  const sectionTop = sectionRef.current?.offsetTop ?? 0;
                  pageEl?.scrollTo({
                    top: sectionTop - 72,
                    behavior: "smooth",
                  });
                }, 50);
              }
            }}
          >
            {expanded ? "Show Less ↑" : "View All Courses ↓"}
          </button>
        </div>
      )}
    </section>
  );
}


function CourseRow({
  title,
  subtitle,
  courses,
  isLight,
  textColor,
  subColor,
  themeAccentA,
  borderColor,
  bg,
  onApply,
}) {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const trackRef = useRef(null);
  const isPaused = useRef(false);
  const offsetRef = useRef(0);
  const [cardWidth, setCardWidth] = useState(280);
  const GAP = 20;

  const loopItems = [...courses, ...courses, ...courses];
  const total = courses.length;

  useEffect(() => {
    const measure = () => {
      if (cardRef.current) setCardWidth(cardRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!trackRef.current || cardWidth === 280) return;
    const step = cardWidth + GAP;
    offsetRef.current = total;
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(${-(total * step)}px)`;
  }, [total, cardWidth]);

  useEffect(() => {
    if (expanded) return;

    const id = setInterval(() => {
      if (isPaused.current || !trackRef.current) return;

      const step = cardWidth + GAP;
      offsetRef.current += 1;

      if (offsetRef.current >= total * 2) {
        trackRef.current.style.transition = "transform 0.6s ease-in-out";
        trackRef.current.style.transform = `translateX(${-(offsetRef.current * step)}px)`;

        setTimeout(() => {
          if (!trackRef.current) return;
          offsetRef.current = offsetRef.current - total;
          trackRef.current.style.transition = "none";
          trackRef.current.style.transform = `translateX(${-(offsetRef.current * step)}px)`;
        }, 620); 
      } else {
        trackRef.current.style.transition = "transform 0.6s ease-in-out";
        trackRef.current.style.transform = `translateX(${-(offsetRef.current * step)}px)`;
      }
    }, 1800);

    return () => clearInterval(id);
  }, [expanded, cardWidth, total]);

  return (
    <section
      ref={sectionRef}
      className="ec-row-section"
      style={{ background: bg }}
    >
      <div className="ec-row-header">
        <div>
          <h2
            className="ec-row-title"
            style={{ color: isLight ? "#053859" : textColor }}
          >
            {title}
          </h2>
          <p className="ec-row-subtitle" style={{ color: subColor }}>
            {subtitle}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!expanded ? (
          <motion.div
            key="snap-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="ec-pendulum-wrap"
              style={{ overflow: "hidden", width: "100%", padding: "6px 0" }}
              onMouseEnter={() => (isPaused.current = true)}
              onMouseLeave={() => (isPaused.current = false)}
            >
              <div
                ref={trackRef}
                style={{
                  display: "flex",
                  gap: GAP,
                  width: "max-content",
                  willChange: "transform",
                }}
              >
                {loopItems.map((course, i) => (
                  <div
                    key={`${course.id}-${i}`}
                    className="ec-pendulum-card"
                    ref={i === 0 ? cardRef : null}
                  >
                    <CourseCard
                      course={course}
                      index={0}
                      isLight={isLight}
                      textColor={textColor}
                      subColor={subColor}
                      themeAccentA={themeAccentA}
                      borderColor={borderColor}
                      onApply={onApply}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            className="ec-cards-grid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                index={index}
                course={course}
                isLight={isLight}
                textColor={textColor}
                subColor={subColor}
                themeAccentA={themeAccentA}
                borderColor={borderColor}
                onApply={onApply}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="ec-view-all-wrap">
        <button
          className="ec-view-all-btn"

          onClick={() => {
            const next = !expanded;
            setExpanded(next);
            if (next) {
              setTimeout(() => {
                const pageEl = sectionRef.current?.closest(".op-page");
                const top = sectionRef.current?.offsetTop ?? 0;
                pageEl?.scrollTo({ top: top - 72, behavior: "smooth" });
              }, 50);
            }
          }}
        >
          {expanded ? "Show Less ↑" : "View All Courses ↓"}
        </button>
      </div>
    </section>
  );
}

function FloatingOrb({ style }) {
  return <div className="op-orb" style={style} />;
}

export default function OnlinePrograms() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark",
  );
  const pageRef = useRef(null);

  const [applyFor, setApplyFor] = useState(null);
  const [applyForm, setApplyForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    college: "",
    year: "",
    duration: "",
    slot: "",
  });
  const [applySubmitted, setApplySubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setIsLight(localStorage.getItem("theme") !== "dark");
    window.addEventListener("themechange", handler);
    return () => window.removeEventListener("themechange", handler);
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const onScroll = () => {
      window.dispatchEvent(
        new CustomEvent("rm-scroll", { detail: { scrollTop: page.scrollTop } }),
      );
    };
    page.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      page.removeEventListener("scroll", onScroll);
      window.dispatchEvent(
        new CustomEvent("rm-scroll", { detail: { scrollTop: 0 } }),
      );
    };
  }, []);

  const bg = isLight ? "#f5f7fa" : "#0a0a0a";
  const textColor = isLight ? "#373738" : "#f0f0f0";
  const subColor = isLight ? "#5a6170" : "#9ba3af";
  const themeAccentA = isLight ? "#074c7a" : "#f7c651";
  const themeAccentB = isLight ? "#0a5c8f" : "#e0a419";
  const themeGradient = isLight
    ? "linear-gradient(135deg, #053759, #0a5c8fa8)"
    : "linear-gradient(135deg, #f7c651, #e0a419)";
  const themeShadow = isLight
    ? "0 8px 24px rgba(5,56,89,0.35)"
    : "0 8px 24px rgba(247,198,81,0.35)";
  const borderColor = isLight
    ? "rgba(5,56,89,0.15)"
    : "rgba(247, 197, 81, 0.04)";
  const gridBg = isLight
    ? "linear-gradient(rgba(5,56,89,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(5,55,89,0.08) 1px,transparent 1px)"
    : "linear-gradient(rgba(247, 197, 81, 0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(247, 197, 81, 0.07) 1px,transparent 1px)";
  const orbOpacity = isLight ? 0.18 : 0.22;

  return (
    <div
      ref={pageRef}
      className={`op-page ${isLight ? "light-theme" : "dark-theme"}`}
      style={{ background: bg, color: textColor }}
    >
      <Header />

      <section className="op-hero">
        <FloatingOrb
          style={{
            width: 500,
            height: 500,
            top: -100,
            left: -200,
            background: themeAccentA,
            opacity: orbOpacity,
          }}
        />
        <FloatingOrb
          style={{
            width: 400,
            height: 400,
            top: 0,
            right: -150,
            background: themeAccentB,
            opacity: orbOpacity,
            animationDuration: "9.7s",
          }}
        />
        <FloatingOrb
          style={{
            width: 300,
            height: 300,
            bottom: 0,
            left: "30%",
            background: themeAccentA,
            opacity: orbOpacity,
            animationDuration: "7.1s",
          }}
        />

        <div className="op-grid" style={{ backgroundImage: gridBg }} />

        <div className="op-hero-content">
          <motion.h1
            className="op-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            layout={false}
            style={{ color: textColor }}
          >
            Expert Guidance From <br />
            <span style={{ color: themeAccentA }}>Start </span>
            To Summit
          </motion.h1>

          <motion.p
            className="op-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            layout={false}
            style={{ color: subColor }}
          >
            Designed and taught by Industrial Experts to help you transform your
            career into a dream job.
          </motion.p>

          <motion.div
            className="op-cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            layout={false}
          >
            <a
              href="mailto:training@thebettertomorrow.in"
              className="op-btn-primary btn-2"
              style={{
                background: themeGradient,
                color: isLight ? "#fff" : "#000",
              }}
            >
              Enroll Now
            </a>
            <a
              href="tel:+919750503595"
              className="op-btn-secondary btn-2"
              style={{
                background: isLight
                  ? "rgba(5,56,89,0.06)"
                  : "rgba(255,255,255,0.08)",
                color: textColor,
                border: `1px solid ${borderColor}`,
              }}
            >
              Talk to Us
            </a>
          </motion.div>
        </div>

        <motion.div
          className="benefits-strip"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.9 },
            },
          }}
        >
          {[
            "1:1 Mentorship",
            "Job Placement Support",
            "Live Projects",
            "Mock Interviews",
            "Resume Building",
            "Industry Certifications",
            "Doubt Clearing Sessions",
          ].map((label, i) => (
            <motion.div
              key={i}
              className="benefit-pill-wrap"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <div
                className="benefit-pill"
                style={{
                  background: isLight
                    ? "rgba(5,56,89,0.05)"
                    : "rgba(255,255,255,0.04)",
                  border: `1px solid ${borderColor}`,
                }}
              >
                <span
                  className="benefit-dot"
                  style={{ background: themeAccentA }}
                />
                <span className="benefit-label" style={{ color: subColor }}>
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </section>

      <FilterSection
        isLight={isLight}
        textColor={textColor}
        subColor={subColor}
        themeAccentA={themeAccentA}
        borderColor={borderColor}
        onApply={(title) => {
          setApplyFor(title);
          setApplySubmitted(false);
        }}
      />

      <CourseRow
        title="Popular Courses"
        subtitle="Most enrolled programs by our students"
        courses={COURSES.popular}
        isLight={isLight}
        textColor={textColor}
        subColor={subColor}
        themeAccentA={themeAccentA}
        borderColor={borderColor}
        bg={isLight ? "#f5f7fa" : "#0d0d0d"}
        onApply={(title) => {
          setApplyFor(title);
          setApplySubmitted(false);
        }}
      />

      <CourseRow
        title="Programming Courses"
        subtitle="Pick a language, master it from scratch"
        courses={COURSES.programming}
        isLight={isLight}
        textColor={textColor}
        subColor={subColor}
        themeAccentA={themeAccentA}
        borderColor={borderColor}
        bg={isLight ? "#ffffff" : "#0a0a0a"}
        onApply={(title) => {
          setApplyFor(title);
          setApplySubmitted(false);
        }}
      />

      <CourseRow
        title="Full Stack Courses"
        subtitle="End-to-end development tracks for real-world projects"
        courses={COURSES.fullstack}
        isLight={isLight}
        textColor={textColor}
        subColor={subColor}
        themeAccentA={themeAccentA}
        borderColor={borderColor}
        bg={isLight ? "#f5f7fa" : "#0d0d0d"}
        onApply={(title) => {
          setApplyFor(title);
          setApplySubmitted(false);
        }}
      />

      <CourseRow
        title="Interview Prep"
        subtitle="Land your dream job with structured interview training"
        courses={COURSES.interview}
        isLight={isLight}
        textColor={textColor}
        subColor={subColor}
        themeAccentA={themeAccentA}
        borderColor={borderColor}
        bg={isLight ? "#ffffff" : "#0a0a0a"}
        onApply={(title) => {
          setApplyFor(title);
          setApplySubmitted(false);
        }}
      />

      <AnimatePresence>
        {applyFor && (
          <motion.div
            className="apply-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setApplyFor(null)}
            style={{
              background: isLight ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.72)",
            }}
          >
            <motion.div
              className="apply-modal"
              style={{
                background: isLight ? "#ffffff" : "#111116",
                border: `1px solid ${isLight ? "rgba(5,56,89,0.12)" : "rgba(255,255,255,0.08)"}`,
                boxShadow: isLight
                  ? "0 24px 80px rgba(5,56,89,0.18)"
                  : "0 24px 80px rgba(0,0,0,0.7)",
              }}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="apply-close"
                style={{ color: subColor }}
                onClick={() => setApplyFor(null)}
              >
                ✕
              </button>

              {applySubmitted ? (
                <div className="apply-success">
                  <div style={{ fontSize: 48 }}>🎉</div>
                  <h3 style={{ color: themeAccentA }}>Application Sent!</h3>
                  <p style={{ color: subColor }}>
                    We'll get back to you shortly. Your future starts today!
                  </p>
                </div>
              ) : (
                <>
                  <div className="apply-modal-header">
                    <p
                      className="apply-modal-badge"
                      style={{ color: themeAccentA }}
                    >
                      Enroll for the Course
                    </p>

                    <p
                      className="apply-modal-quote"
                      style={{ color: subColor }}
                    >
                      "Your future is created by what you do today, not
                      tomorrow"
                    </p>
                  </div>

                  <form
                    className="apply-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const subject = encodeURIComponent(
                        `Course Application: ${applyFor}`,
                      );
                      const body = encodeURIComponent(
                        `Course: ${applyFor}\nName: ${applyForm.name}\nEmail: ${applyForm.email}\nPhone: ${applyForm.phone}\nRole: ${applyForm.role}\nCollege: ${applyForm.college}\nYear: ${applyForm.year}\nDuration: ${applyForm.duration}\nSlot: ${applyForm.slot}`,
                      );
                      window.location.href = `mailto:training@thebettertomorrow.in?subject=${subject}&body=${body}`;
                      setApplySubmitted(true);
                    }}
                  >
                    <div className="apply-row-2">
                      <div className="apply-field">
                        <input
                          required
                          className="apply-input"
                          style={{
                            background: isLight ? "#f5f7fa" : "#1a1a22",
                            color: textColor,
                            border: `1px solid ${borderColor}`,
                          }}
                          placeholder="Full Name"
                          value={applyForm.name}
                          onChange={(e) =>
                            setApplyForm((p) => ({
                              ...p,
                              name: e.target.value,
                            }))
                          }
                          onFocus={(e) =>
                            (e.target.style.borderColor = themeAccentA)
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = borderColor)
                          }
                        />
                      </div>
                      <div className="apply-field">
                        <input
                          required
                          type="email"
                          className="apply-input"
                          style={{
                            background: isLight ? "#f5f7fa" : "#1a1a22",
                            color: textColor,
                            border: `1px solid ${borderColor}`,
                          }}
                          placeholder=" Email Address"
                          value={applyForm.email}
                          onChange={(e) =>
                            setApplyForm((p) => ({
                              ...p,
                              email: e.target.value,
                            }))
                          }
                          onFocus={(e) =>
                            (e.target.style.borderColor = themeAccentA)
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = borderColor)
                          }
                        />
                      </div>
                    </div>

                    <div className="apply-row-2">
                      <div className="apply-field">
                        <input
                          required
                          type="tel"
                          className="apply-input"
                          style={{
                            background: isLight ? "#f5f7fa" : "#1a1a22",
                            color: textColor,
                            border: `1px solid ${borderColor}`,
                          }}
                          placeholder="Phone Number"
                          value={applyForm.phone}
                          onChange={(e) =>
                            setApplyForm((p) => ({
                              ...p,
                              phone: e.target.value,
                            }))
                          }
                          onFocus={(e) =>
                            (e.target.style.borderColor = themeAccentA)
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = borderColor)
                          }
                        />
                      </div>
                      <div className="apply-field">
                        <CustomSelect
                          value={applyForm.role}
                          onChange={(v) =>
                            setApplyForm((p) => ({ ...p, role: v }))
                          }
                          options={[
                            "Student",
                            "Working Professional",
                            "Fresher",
                            "Career Switch",
                          ]}
                          placeholder="Select Role"
                          isLight={isLight}
                          borderColor={borderColor}
                          themeAccentA={themeAccentA}
                        />
                      </div>
                    </div>

                    <div className="apply-row-2">
                      <div className="apply-field">
                        <input
                          className="apply-input"
                          style={{
                            background: isLight ? "#f5f7fa" : "#1a1a22",
                            color: textColor,
                            border: `1px solid ${borderColor}`,
                          }}
                          placeholder="College Name"
                          value={applyForm.college}
                          onChange={(e) =>
                            setApplyForm((p) => ({
                              ...p,
                              college: e.target.value,
                            }))
                          }
                          onFocus={(e) =>
                            (e.target.style.borderColor = themeAccentA)
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = borderColor)
                          }
                        />
                      </div>
                      <div className="apply-field">
                        <CustomSelect
                          value={applyForm.year}
                          onChange={(v) =>
                            setApplyForm((p) => ({ ...p, year: v }))
                          }
                          options={[
                            "1st Year",
                            "2nd Year",
                            "3rd Year",
                            "4th Year",
                            "Graduated",
                          ]}
                          placeholder="Year of Study"
                          isLight={isLight}
                          borderColor={borderColor}
                          themeAccentA={themeAccentA}
                        />
                      </div>
                    </div>

                    <div className="apply-row-2">
                      <div className="apply-field">
                        <CustomSelect
                          value={applyForm.duration}
                          onChange={(v) =>
                            setApplyForm((p) => ({ ...p, duration: v }))
                          }
                          options={[
                            "Fast Track (1 Month)",
                            "Deep Dive (3 Months)",
                          ]}
                          placeholder="Course Duration"
                          isLight={isLight}
                          borderColor={borderColor}
                          themeAccentA={themeAccentA}
                        />
                      </div>
                      <div className="apply-field">
                        <CustomSelect
                          value={applyForm.slot}
                          onChange={(v) =>
                            setApplyForm((p) => ({ ...p, slot: v }))
                          }
                          options={["Daily 1 - Hour", "Weekends Only"]}
                          placeholder="Preferred Time Slot"
                          isLight={isLight}
                          borderColor={borderColor}
                          themeAccentA={themeAccentA}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="apply-submit btn-2"
                      style={{
                        background: isLight
                          ? "linear-gradient(135deg,#053859,#0a5c8f)"
                          : "linear-gradient(135deg,#f7c651,#e0a419)",
                        color: isLight ? "#fff" : "#000",
                        boxShadow: isLight
                          ? "0 8px 24px rgba(5,56,89,0.35)"
                          : "0 8px 24px rgba(247,198,81,0.35)",
                      }}
                    >
                      Enroll Now
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
