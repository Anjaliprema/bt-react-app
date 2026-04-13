import React, { useState, useEffect, useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import logo3 from "../Assets/logo3.png";
import logo2 from "../Assets/logo2.png";
import logo4 from "../Assets/logo4.png";
import logo5 from "../assets/logo1_kcg.png";
import c1 from "../assets/c1_dsa.jpg";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import cimg24 from "../assets/cimg24.jpg";
import c6 from "../assets/c6.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import "./Home_Static.css";

function RoadmapCarousel({ cards, cExpand, cShrink }) {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth <= 540) setVisibleCount(1);
      else if (window.innerWidth <= 900) setVisibleCount(2);
      else setVisibleCount(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, cards.length - visibleCount);

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [maxIndex]);

  useEffect(() => {
    if (!trackRef.current) return;
    const cardEl = trackRef.current.querySelector(".rm-card");
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 18;
    trackRef.current.style.transform = `translateX(-${current * cardWidth}px)`;
  }, [current, visibleCount]);

  const goTo = (i) => setCurrent(Math.max(0, Math.min(i, maxIndex)));

  useEffect(() => {
    const handleKey = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "ArrowRight") goTo(current + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, maxIndex]);

  const linkedinIcon = (
    <svg style={{ width: 14, height: 14, fill: "#fff" }} viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  return (
    <div ref={containerRef}>
      <div className="rm-carousel-outer">
        <div className="rm-carousel-viewport">
          <div className="rm-carousel-track" ref={trackRef}>
            {cards.map((card, i) => (
              <div
                key={i}
                className="rm-card"
                onClick={() => window.open(card.url, "_blank")}
                onMouseEnter={cExpand}
                onMouseLeave={cShrink}
              >
                <div className="rm-img-wrap">
                  <img
                    className="rm-card-img"
                    src={card.img}
                    alt={card.title}
                    onError={(e) => {
                      e.currentTarget.src = card.fallback;
                    }}
                  />
                </div>
                <div className="rm-card-body">
                  <div className="rm-cat-badge">{card.badge}</div>
                  <div className="rm-card-title">{card.title}</div>
                  <div className="rm-card-foot">
                    <span className="rm-view-text">View on LinkedIn</span>
                    <a
                      className="success-linkedin-link"
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {linkedinIcon}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rm-carousel-nav">
        <div className="rm-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <div
              key={i}
              className={`rm-dot${current === i ? " on" : ""}`}
              onClick={() => goTo(i)}
              onMouseEnter={cExpand}
              onMouseLeave={cShrink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Student() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark",
  );
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeDot, setActiveDot] = useState(0);
  const pageRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const carouselTrackRef = useRef(null);
  const carouselCurrentRef = useRef(0);
  const [activePreview, setActivePreview] = useState(null);

  useEffect(() => {
    const h = () => setIsLight(localStorage.getItem("theme") !== "dark");
    window.addEventListener("themechange", h);
    return () => window.removeEventListener("themechange", h);
  }, []);

  useEffect(() => {
    const successSection = document.querySelector(".success-carousel-wrap");
    const handleKey = (e) => {
      if (!successSection) return;
      const rect = successSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowLeft")
        document.getElementById("successPrev")?.click();
      if (e.key === "ArrowRight")
        document.getElementById("successNext")?.click();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const track = carouselTrackRef.current;
    if (!track) return;

    const originalCards = Array.from(track.children);
    const totalCards = originalCards.length;
    const clonesBefore = originalCards
      .slice(-2)
      .map((card) => card.cloneNode(true));
    const clonesAfter = originalCards
      .slice(0, 2)
      .map((card) => card.cloneNode(true));

    clonesBefore.forEach((clone) =>
      track.insertBefore(clone, track.firstChild),
    );
    clonesAfter.forEach((clone) => track.appendChild(clone));

    carouselCurrentRef.current = 2;

    const allCards = Array.from(track.children);

    const updateCarousel = (instant = false) => {
      const current = carouselCurrentRef.current;
      const cardWidth = 350;
      const containerCenter = track.parentElement.offsetWidth / 2;
      const offset = containerCenter - cardWidth / 2 - current * cardWidth;

      track.style.transition = instant
        ? "none"
        : "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      track.style.transform = `translateX(${offset}px)`;

      allCards.forEach((card, i) => {
        card.classList.remove(
          "sc-active",
          "sc-left-edge",
          "sc-right-edge",
          "sc-far-left",
          "sc-far-right",
          "sc-hidden",
        );
        const position = i - current;
        if (position === 0) card.classList.add("sc-active");
        else if (position === -1) card.classList.add("sc-left-edge");
        else if (position === -2) card.classList.add("sc-far-left");
        else if (position === 1) card.classList.add("sc-right-edge");
        else if (position === 2) card.classList.add("sc-far-right");
        else card.classList.add("sc-hidden");
      });
    };

    const handleTrackClick = (e) => {
      const card = e.target.closest(".success-carousel-card");
      if (!card || !card.dataset.url) return;
      window.open(card.dataset.url, "_blank");
    };
    track.addEventListener("click", handleTrackClick);

    const prev = () => {
      carouselCurrentRef.current--;
      updateCarousel();
      setTimeout(() => {
        if (carouselCurrentRef.current < 2) {
          carouselCurrentRef.current = totalCards + 1;
          updateCarousel(true);
        }
      }, 600);
    };

    const next = () => {
      carouselCurrentRef.current++;
      updateCarousel();
      setTimeout(() => {
        if (carouselCurrentRef.current >= totalCards + 2) {
          carouselCurrentRef.current = 2;
          updateCarousel(true);
        }
      }, 600);
    };

    updateCarousel(true);

    const prevBtn = document.getElementById("successPrev");
    const nextBtn = document.getElementById("successNext");
    if (prevBtn) prevBtn.onclick = prev;
    if (nextBtn) nextBtn.onclick = next;

    const handleResize = () => updateCarousel(true);
    window.addEventListener("resize", handleResize);

    return () => {
      track.removeEventListener("click", handleTrackClick);
      if (prevBtn) prevBtn.onclick = null;
      if (nextBtn) nextBtn.onclick = null;
      window.removeEventListener("resize", handleResize);
    };
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
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);
    const animRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = ringPos.current.x + "px";
        cursorRingRef.current.style.top = ringPos.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animRing);
    };
    rafRef.current = requestAnimationFrame(animRing);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll(
      ".blog-reveal, .blog-reveal-left, .blog-reveal-right, .blog-card",
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            e.target.querySelectorAll(".blog-trend-item").forEach((item, i) => {
              item.classList.remove("trend-in");
              setTimeout(() => item.classList.add("trend-in"), 200 + i * 130);
            });
            e.target.querySelectorAll("[data-blog-count]").forEach((n) => {
              const target = parseFloat(n.dataset.blogCount);
              const isFloat = String(target).includes(".");
              let start = null;
              const step = (ts) => {
                if (!start) start = ts;
                const p = Math.min((ts - start) / 1200, 1);
                const ease = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
                n.textContent = isFloat
                  ? (ease * target).toFixed(1)
                  : Math.floor(ease * target);
                if (p < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            });
            e.target.querySelectorAll("[data-blog-prog]").forEach((b) => {
              b.style.width = b.dataset.blogProg;
            });
            e.target.querySelectorAll("[data-blog-wfill]").forEach((b) => {
              b.style.width = b.dataset.blogWfill;
            });
            e.target.querySelectorAll("[data-blog-statw]").forEach((b) => {
              setTimeout(() => {
                b.style.width = b.dataset.blogStatw;
              }, 200);
            });
          } else {
            e.target.classList.remove("in");
            e.target
              .querySelectorAll(".blog-trend-item")
              .forEach((item) => item.classList.remove("trend-in"));
            e.target.querySelectorAll("[data-blog-count]").forEach((n) => {
              n.textContent = "0";
            });
            e.target.querySelectorAll("[data-blog-prog]").forEach((b) => {
              b.style.width = "0";
            });
            e.target.querySelectorAll("[data-blog-wfill]").forEach((b) => {
              b.style.width = "0";
            });
            e.target.querySelectorAll("[data-blog-statw]").forEach((b) => {
              b.style.width = "0";
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeFilter]);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    if (card.classList.contains("blog-card-wide")) return;
    const r = card.getBoundingClientRect();
    const dx = ((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * 7;
    const dy = ((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * 7;
    card.style.transform = `perspective(900px) rotateY(${dx}deg) rotateX(${-dy}deg) translateY(-6px) scale(1.015)`;
  };
  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    if (card.classList.contains("blog-card-wide")) return;
    card.style.transform = "";
  };

  const cExpand = () => {
    cursorRef.current?.classList.add("blog-expand");
    cursorRingRef.current?.classList.add("blog-expand");
  };
  const cShrink = () => {
    cursorRef.current?.classList.remove("blog-expand");
    cursorRingRef.current?.classList.remove("blog-expand");
  };

  const isHidden = (cat) =>
    activeFilter !== "all" && cat !== activeFilter && cat !== "all";
  const cardCls = (cat, extra = "") =>
    `blog-card${extra ? " " + extra : ""}${isHidden(cat) ? " blog-hidden-card" : ""}`;
  const cardEvt = {
    onMouseMove: handleCardMouseMove,
    onMouseLeave: handleCardMouseLeave,
    onMouseEnter: cExpand,
  };

  const themeClass = isLight ? "light-theme" : "dark-theme";
  const bg = isLight ? "#ffffff" : "#0a0a0a";

  const trendLinks = {
    1: "https://workat.tech/fullstack-development/article/fullstack-development-roadmap-mern-stack-8eqh1qepx6md",
    2: "https://github.com/Asabeneh/30-Days-Of-JavaScript",
    3: "https://www.crio.do/blog/why-learn-data-structures-and-algorithms/",
    4: "https://dev.to/prodevopsguytech/devops-for-beginners-a-complete-roadmap-to-get-started-2863",
    5: "https://www.interviewbit.com/zoho-interview-questions/",
  };

  const trendPreviews = {
    1: {
      tag: { label: "Web Development", cls: "blog-tag-primary" },
      title: "MERN Stack Zero to Hero",
      snippet:
        "A comprehensive guide to building full-stack applications with MongoDB, Express, React, and Node.js. Covers project structure, REST APIs, authentication, deployment, and real-world best practices to get you job-ready.",
      keyPoints: [
        "Build 3 real-world projects",
        "JWT Auth & protected routes",
        "Deploy on AWS & Vercel",
        "REST API design patterns",
      ],
      author: {
        initials: "GC",
        name: "Gaurav Chandak",
        date: "April 24, 2026",
        role: "Full Stack Engineer",
      },
      stats: { views: "4.8k", readTime: "10 min", rating: "4.9" },
    },
    2: {
      tag: { label: "Web Development", cls: "blog-tag-primary" },
      title: "JS in 30 Days Challenge",
      snippet:
        "A structured 30-day program to master JavaScript from fundamentals to advanced concepts. Each day introduces new topics with exercises, projects, and quizzes — perfect for beginners and those brushing up their skills.",
      keyPoints: [
        "Day-by-day structured plan",
        "50+ hands-on exercises",
        "ES6+ modern syntax",
        "Mini projects each week",
      ],
      author: {
        initials: "AS",
        name: "Asabeneh Yetayeh",
        date: "June 15, 2024",
        role: "Senior JavaScript Developer",
      },
      stats: { views: "5.1k", readTime: "8 min", rating: "4.8" },
    },
    3: {
      tag: { label: "Interview Prep", cls: "blog-tag-green" },
      title: "DSA Interview Roadmap",
      snippet:
        "Everything you need to crack data structures and algorithms interviews at top tech companies. Covers arrays, trees, graphs, dynamic programming, and system design with curated problem sets and time-complexity analysis.",
      keyPoints: [
        "100+ curated problems",
        "Time & space complexity guide",
        "System design basics",
        "Mock interview tips",
      ],
      author: {
        initials: "CR",
        name: "Crio.do Team",
        date: "August 23, 2024",
        role: "Interview Coaching Team",
      },
      stats: { views: "3.2k", readTime: "12 min", rating: "4.7" },
    },
    4: {
      tag: { label: "DevOps", cls: "blog-tag-pink" },
      title: "DevOps Beginner's Path",
      snippet:
        "Start your DevOps journey with this step-by-step roadmap covering Linux, Docker, Kubernetes, CI/CD pipelines, cloud platforms, and monitoring tools. Includes hands-on labs and recommended resources for each stage.",
      keyPoints: [
        "Docker & Kubernetes basics",
        "CI/CD with GitHub Actions",
        "AWS & GCP overview",
        "Monitoring with Grafana",
      ],
      author: {
        initials: "PG",
        name: "ProDevOpsGuy",
        date: "September 7, 2024",
        role: "DevOps Architect",
      },
      stats: { views: "2.9k", readTime: "10 min", rating: "4.6" },
    },
    5: {
      tag: { label: "Interview Prep", cls: "blog-tag-green" },
      title: "Cracking Zoho Interviews",
      snippet:
        "An insider's guide to Zoho's hiring process covering coding rounds, logical reasoning, and HR interviews. Includes frequently asked questions, tips from candidates who cleared all rounds, and a preparation timeline.",
      keyPoints: [
        "Round-by-round breakdown",
        "Frequently asked coding Qs",
        "HR interview strategies",
        "2-week prep timeline",
      ],
      author: {
        initials: "IB",
        name: "InterviewBit Editorial",
        date: "May 18, 2024",
        role: "Career Guidance Team",
      },
      stats: { views: "1.7k", readTime: "7 min", rating: "4.5" },
    },
  };

  const successCards = [
    {
      gradient: "linear-gradient(135deg, #060c3c, #5b21b6)",
      logo: logo3,
      badge: "MERN Stack",
      lpa: "10",
      company: "Mr. Cooper + DTCC",
      college: "Sri Eshwar College of Engineering",
      avatars: [
        { cls: "success-avatar-blue", letter: "S" },
        { cls: "success-avatar-green", letter: "M" },
      ],
      count: "2 students",
      url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_placements-interview-preparation-activity-7197083375034093570-r3Y3",
    },
    {
      gradient: "linear-gradient(135deg, #2e0a34, #9320aa)",
      logo: logo5,
      badge: "Product",
      lpa: "8",
      company: "DTCC",
      college: "KCG College of Technology",
      avatars: [
        { cls: "success-avatar-blue", letter: "M" },
        { cls: "success-avatar-green", letter: "F" },
        { cls: "success-avatar-orange", letter: "N" },
        { cls: "success-avatar-red", letter: "+1" },
      ],
      count: "4 students",
      url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_placementtraining-interviews-joboffers-activity-7203464839036366850-d31X",
    },
    {
      gradient: "linear-gradient(135deg, #072c1c, #168957)",
      logo: logo2,
      badge: "MERN Stack",
      lpa: "10",
      company: "Presidio",
      college: "Kongu Engineering College",
      avatars: [{ cls: "success-avatar-blue", letter: "K" }],
      count: "1 student",
      url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_placements-sde-mern-activity-7209605050904510464-KUsW",
    },
    {
      gradient: "linear-gradient(135deg, #340823, #991b62)",
      logo: logo4,
      badge: "Product",
      lpa: "8",
      company: "HP Inc",
      college: "M.Kumarasamy College of Engineering",
      avatars: [{ cls: "success-avatar-green", letter: "S" }],
      count: "1 student",
      url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_internship-grateful-hp-activity-7259627218245439488-hCon",
    },
    {
      gradient: "linear-gradient(135deg, #072c1c, #168957)",
      logo: logo2,
      badge: "MERN Stack",
      lpa: "8",
      company: "TrusTrace",
      college: "Kongu Engineering College",
      avatars: [{ cls: "success-avatar-orange", letter: "SK" }],
      count: "1 student",
      url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_placements-training-sde-activity-7198670870087704577-yeOZ",
    },
  ];

  return (
    <div
      ref={pageRef}
      className={`op-page ${themeClass}`}
      style={{
        background: bg,
        paddingTop: "3%",
        color: isLight ? "#373738" : "#f0f0f0",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="blog-cursor" ref={cursorRef} />
      <div className="blog-cursor-ring" ref={cursorRingRef} />

      <Header />

      {/* ── Instant Feedback Section ── */}
      <div
        className="blog-page"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <div className="feed-grid blog-reveal">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
          >
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(28px, 3.8vw, 46px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: isLight ? "#0a0a0a" : "#f0f0f0",
                margin: 0,
              }}
            >
              Instant Feedback{" "}
              <span style={{ color: isLight ? "#053859" : "#f7c651" }}>
                on Trainings
              </span>
            </h2>

            <p
              style={{
                fontSize: 14,
                color: isLight ? "#555" : "rgba(240,240,240,0.55)",
                lineHeight: 1.8,
                margin: 0,
                maxWidth: 460,
              }}
            >
              No more waiting for post-training evaluations or struggling to
              identify areas that need improvement. This innovative approach
              revolutionizes the way we learn and develop by providing real-time
              insights and guidance.
            </p>

            <a
              href="https://thebettertomorrow.in/LRP"
              target="_blank"
              rel="noopener noreferrer"
              className="feed-btn"
              onMouseEnter={cExpand}
              onMouseLeave={cShrink}
            >
              Click here <span className="feed-btn-arrow">→</span>
            </a>
          </div>

          <div
            className="feed-img-wrap"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={cExpand}
            onMouseLeave={cShrink}
          >
            <img
              src={f1}
              alt="Instant Feedback on Trainings"
              style={{
                width: "90%",
                maxWidth: 500,
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="blog-page"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <div className="tracker-grid blog-reveal">
          <div
            className="tracker-img-wrap"
            onMouseEnter={cExpand}
            onMouseLeave={cShrink}
          >
            <img src={f2} alt="Interview Preparation Tracker" />
          </div>

          <div className="tracker-content">
            <span className="tracker-badge">Coming Soon</span>

            <h2 className="tracker-title">
              Interview <span className="success-subtitle">Preparation</span>
              <br />
              Tracker
            </h2>

            <p className="tracker-description">
              Our Interview Preparation Tracker is designed to help students
              organize and optimize their preparation journey with a structured
              approach. Whether you're just starting or refining your skills,
              this tracker ensures you're always on the right path.
            </p>

            <div className="tracker-features">
              <div className="tracker-feature-item">
                <span className="tracker-check-icon">✓</span>
                <span>
                  Organize your preparation with topic-wise progress tracking
                </span>
              </div>
              <div className="tracker-feature-item">
                <span className="tracker-check-icon">✓</span>
                <span>
                  Get personalized study plans based on your target companies
                </span>
              </div>
              <div className="tracker-feature-item">
                <span className="tracker-check-icon">✓</span>
                <span>
                  Track daily progress and maintain consistency with streaks
                </span>
              </div>
              <div className="tracker-feature-item">
                <span className="tracker-check-icon">✓</span>
                <span>
                  Access curated resources and practice problems for each topic
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-page">
        <div className="blog-header blog-reveal">
          <div>
            <h1 className="blog-main-title">Blog</h1>
          </div>
          <div className="blog-header-right">
            <div className="blog-post-count">total articles</div>
            <div className="blog-big-num">128</div>
          </div>
        </div>

        <div className="blog-ticker-wrap blog-reveal">
          <div className="blog-ticker">
            {[
              "MERN Stack · 4.8k views",
              "DSA Roadmap · 3.2k views",
              "DevOps Guide · 2.9k views",
              "JS in 30 Days · 5.1k views",
              "Zoho Interviews · 1.7k views",
              "System Design · 2.4k views",
              "MERN Stack · 4.8k views",
              "DSA Roadmap · 3.2k views",
              "DevOps Guide · 2.9k views",
              "JS in 30 Days · 5.1k views",
              "Zoho Interviews · 1.7k views",
              "System Design · 2.4k views",
            ].map((item, i) => {
              const [title, views] = item.split(" · ");
              return (
                <span key={i} className="blog-ticker-item">
                  <strong>{title}</strong> · {views}{" "}
                  <span className="blog-ticker-sep">✦</span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="blog-filter-wrap blog-reveal blog-delay-1">
          {[
            { id: "all", label: "All" },
            { id: "web", label: "Web Development" },
            { id: "interview", label: "Interview Preparation" },
            { id: "devops", label: "DevOps" },
          ].map((f) => (
            <button
              key={f.id}
              className={`blog-ftab${activeFilter === f.id ? " on" : ""}`}
              onClick={() => setActiveFilter(f.id)}
              onMouseEnter={cExpand}
              onMouseLeave={cShrink}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="blog-bento">
          <div
            className={cardCls("web", "blog-card-featured blog-reveal-left")}
            style={{ gridColumn: "span 8" }}
            {...cardEvt}
            onClick={() =>
              window.open(
                "https://workat.tech/fullstack-development/article/fullstack-development-roadmap-mern-stack-8eqh1qepx6md",
                "_blank",
              )
            }
          >
            <div className="blog-feat-img">
              <div className="blog-code-grid-lines" />
              <div className="blog-code-glow" />
              <div className="blog-feat-img-inner">
                <div className="blog-code-block">
                  <div>
                    <span style={{ color: "#f472b6" }}>const</span>{" "}
                    <span style={{ color: "#60a5fa" }}>stack</span> = [
                    <span style={{ color: "#fb923c" }}>'M'</span>,
                    <span style={{ color: "#fb923c" }}>'E'</span>,
                    <span style={{ color: "#fb923c" }}>'R'</span>,
                    <span style={{ color: "#fb923c" }}>'N'</span>]
                  </div>
                  <div>
                    <span style={{ color: "#4ade80" }}>stack.forEach</span>(s
                    =&gt; <span style={{ color: "#e879f9" }}>learn</span>(s))
                  </div>
                  <div style={{ color: "#94a3b8" }}>
                    // your roadmap starts here
                  </div>
                  <div>
                    <span style={{ color: "#f472b6" }}>async function</span>{" "}
                    <span style={{ color: "#60a5fa" }}>master</span>() &#123;
                  </div>
                  <div style={{ paddingLeft: "1em" }}>
                    <span style={{ color: "#fb923c" }}>await</span>{" "}
                    <span style={{ color: "#4ade80" }}>practice</span>(
                    <span style={{ color: "#e879f9" }}>daily</span>)
                  </div>
                  <div>&#125;</div>
                </div>
              </div>
              <div className="blog-img-corner-badge">MERN Stack</div>
              <div className="blog-img-corner-views">4.8k views</div>
              <div className="blog-img-corner-time">10 min read</div>
            </div>

            <div className="blog-feat-body">
              <div className="blog-feat-title">
                Roadmap for MERN Stack Developer — From Zero to Job Ready in
                2024
              </div>
              <div className="blog-feat-excerpt">
                A complete guide covering MongoDB, Express, React, and Node.js
                with real-world projects, interview strategies, and salary
                insights.
              </div>
              <div className="blog-feat-meta-row">
                <div className="blog-avatar">BT</div>
                <div className="blog-meta-info">
                  <div className="blog-meta-name">Better Tomorrow</div>
                  <div className="blog-meta-date">April 24, 2026</div>
                </div>
                <button
                  className="blog-read-btn"
                  onMouseEnter={cExpand}
                  onMouseLeave={cShrink}
                >
                  Read article <span className="blog-btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>

          <div
            className={cardCls("all", "blog-card-stats blog-reveal-right")}
            {...cardEvt}
          >
            <div>
              <div className="blog-stats-eyebrow">Blog · Statistics</div>
              <div className="blog-stats-title">
                Numbers that
                <br />
                tell our story
              </div>
            </div>
            <div className="blog-stats-grid">
              {[
                { count: 128, label: "Articles", w: "85%" },
                { count: 42, label: "Authors", w: "60%" },
                { count: 94, label: "k Readers", w: "95%" },
                { count: 4.9, label: "Avg. Rating", w: "98%" },
              ].map((s, i) => (
                <div key={i} className="blog-stat-item">
                  <div className="blog-stat-num" data-blog-count={s.count}>
                    0
                  </div>
                  <div className="blog-stat-label">{s.label}</div>
                  <div className="blog-stat-bar">
                    <div className="blog-stat-bar-fill" data-blog-statw={s.w} />
                  </div>
                </div>
              ))}
            </div>
            <div className="blog-stats-footer">
              <span className="blog-stats-cta">Updated daily</span>
              <div className="blog-stats-icon">✦</div>
            </div>
          </div>

          {[
            {
              cat: "web",
              delay: "blog-delay-1",
              bg: "linear-gradient(135deg,#fef9c3,#fde68a)",
              darkBg: "linear-gradient(135deg,#2d2a00,#3d3500)",
              inner: {
                text: "JS",
                sub: "30 DAYS",
                font: "'Poppins', sans-serif",
                size: 36,
                color: "#92400e",
                darkColor: "#fde68a",
              },
              tag: "blog-tag-primary",
              tagLabel: "Web Development",
              title: "Complete Javascript in 30 Days",
              meta: "June 15, 2024 · 8 min read",
              prog: "72%",
              progColor: "#1a56db",
              url: "https://github.com/Asabeneh/30-Days-Of-JavaScript",
            },
            {
              cat: "interview",
              delay: "blog-delay-2",
              bg: "linear-gradient(135deg,#f0fdf4,#bbf7d0)",
              darkBg: "linear-gradient(135deg,#002d1a,#003d22)",
              inner: {
                text: "Zoho",
                font: "'Poppins', sans-serif",
                size: 35,
                color: "#065f46",
                darkColor: "#4ade80",
              },
              tag: "blog-tag-green",
              tagLabel: "Interview Preparation",
              title: "Cracking Interviews at Zoho",
              meta: "May 18, 2024 · 7 min read",
              prog: "58%",
              progColor: "#059669",
              url: "https://www.interviewbit.com/zoho-interview-questions/",
            },
            {
              cat: "interview",
              delay: "blog-delay-3",
              bg: "linear-gradient(135deg,#ede9fe,#c4b5fd)",
              darkBg: "linear-gradient(135deg,#1e0a3c,#2d1260)",
              inner: {
                text: "Product Hunt",
                font: "'Poppins', sans-serif",
                size: 30,
                color: "#4c1d95",
                darkColor: "#c4b5fd",
              },
              tag: "blog-tag-purple",
              tagLabel: "Interview Preparation",
              title: "How to Crack Product Based Companies",
              meta: "July 20, 2022 · 6 min read",
              prog: "45%",
              progColor: "#7c3aed",
              url: "https://medium.com/@tushar_patil/a-guide-to-crack-product-based-companies-8a889e3ca7e7",
            },
          ].map((t, i) => (
            <div
              key={i}
              className={cardCls(
                t.cat,
                `blog-card-topic blog-reveal ${t.delay}`,
              )}
              {...cardEvt}
              onClick={() => window.open(t.url, "_blank")}
            >
              <div
                className="blog-topic-img"
                style={{ background: isLight ? t.bg : t.darkBg }}
              >
                <div
                  className="blog-topic-img-inner"
                  style={{
                    color: isLight ? t.inner.color : t.inner.darkColor,
                    fontFamily: t.inner.font,
                    fontSize: t.inner.size,
                    textAlign: "center",
                    lineHeight: 1.15,
                  }}
                >
                  {t.inner.text.includes("\n")
                    ? t.inner.text.split("\n").map((l, j) => (
                        <span key={j} style={{ display: "block" }}>
                          {l}
                        </span>
                      ))
                    : t.inner.text}
                </div>
                {t.inner.sub && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 8,
                      right: 10,
                      fontSize: 9,
                      fontWeight: 700,
                      color: isLight ? "#78350f" : "#fde68a",
                      letterSpacing: ".1em",
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    {t.inner.sub}
                  </div>
                )}
              </div>
              <div className="blog-topic-body">
                <span
                  className={`blog-tag ${t.tag}`}
                  style={{ marginBottom: ".5rem", width: "fit-content" }}
                >
                  {t.tagLabel}
                </span>
                <div className="blog-topic-title">{t.title}</div>
                <div className="blog-topic-meta">{t.meta}</div>
                <div className="blog-progress-bar">
                  <div
                    className="blog-progress-fill"
                    data-blog-prog={t.prog}
                    style={{ background: t.progColor }}
                  />
                </div>
              </div>
            </div>
          ))}

          {[
            {
              cat: "devops",
              num: "01",
              tag: "blog-tag-pink",
              tagLabel: "DevOps",
              title: "Roadmap for DevOps — Beginners",
              meta: "September 7, 2024 · 10 min read",
              fill: "80%",
              barColor: "#c1121f",
              views: "2.9k",
              delay: "",
              url: "https://dev.to/prodevopsguytech/devops-for-beginners-a-complete-roadmap-to-get-started-2863",
            },
            {
              cat: "web",
              num: "02",
              tag: "blog-tag-primary",
              tagLabel: "Web Dev",
              title: "Web Developer vs Web Designer",
              meta: "December 12, 2023 · 6 min read",
              fill: "55%",
              barColor: "#1a56db",
              views: "1.8k",
              delay: "blog-delay-1",
              url: "https://www.geeksforgeeks.org/blogs/difference-between-web-designer-and-web-developer/",
            },
            {
              cat: "interview",
              num: "03",
              tag: "blog-tag-amber",
              tagLabel: "Interview",
              title: "Roadmap for MERN Stack Developer",
              meta: "August 23, 2022 · 4 min read",
              fill: "70%",
              barColor: "#d97706",
              views: "3.2k",
              delay: "blog-delay-2",
              url: "https://www.crio.do/blog/why-learn-data-structures-and-algorithms/",
            },
          ].map((w, i) => (
            <div
              key={i}
              className={cardCls(
                w.cat,
                `blog-card-wide blog-reveal ${w.delay}`,
              )}
              style={{ gridColumn: "span 12" }}
              {...cardEvt}
              onClick={() => window.open(w.url, "_blank")}
            >
              <div className="blog-wide-num">{w.num}</div>
              <div className="blog-wide-pill">
                <span className={`blog-tag ${w.tag}`}>{w.tagLabel}</span>
              </div>
              <div className="blog-wide-body">
                <div className="blog-wide-title">{w.title}</div>
                <div className="blog-wide-meta">{w.meta}</div>
              </div>
              <div className="blog-wide-bar">
                <div
                  className="blog-wide-bar-fill"
                  data-blog-wfill={w.fill}
                  style={{ background: w.barColor }}
                />
              </div>
              <div className="blog-wide-views">{w.views}</div>
              <div className="blog-wide-arrow">→</div>
            </div>
          ))}
        </div>

        <div
          className="blog-reveal"
          style={{
            width: "100%",
            marginTop: "1.5rem",
            display: "flex",
            gap: "0",
            minHeight: "340px",
            borderRadius: "16px",
            border: isLight
              ? "1.5px solid rgba(5,56,89,0.15)"
              : "1.5px solid rgba(255,255,255,0.12)",
            overflow: "hidden",
            background: "var(--card-bg)",
          }}
        >
          <div
            className="blog-reveal-left"
            style={{
              width: "33%",
              borderRight: isLight
                ? "1px solid rgba(5,56,89,0.1)"
                : "1px solid rgba(255,255,255,0.1)",
              padding: "1.4rem 1.6rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="blog-trending-header">
              <span className="blog-trending-title-text">Trending Now</span>
              <span className="blog-trending-badge">HOT 🔥</span>
            </div>
            <div className="blog-trend-list">
              {[
                {
                  rank: 1,
                  title: "MERN Stack Zero to Hero",
                  views: "4.8k views · Web dev",
                },
                {
                  rank: 2,
                  title: "JS in 30 Days Challenge",
                  views: "5.1k views · Web dev",
                },
                {
                  rank: 3,
                  title: "DSA Interview Roadmap",
                  views: "3.2k views · Interview",
                },
                {
                  rank: 4,
                  title: "DevOps Beginner's Path",
                  views: "2.9k views · DevOps",
                },
                {
                  rank: 5,
                  title: "Cracking Zoho Interviews",
                  views: "1.7k views · Interview",
                },
              ].map((t) => (
                <div
                  key={t.rank}
                  className="blog-trend-item"
                  style={{
                    background:
                      activePreview === t.rank
                        ? isLight
                          ? "rgba(5,56,89,0.05)"
                          : "rgba(247,198,81,0.08)"
                        : "transparent",
                    borderRadius: "8px",
                    paddingLeft: activePreview === t.rank ? ".4rem" : "0",
                  }}
                  onClick={() =>
                    setActivePreview(activePreview === t.rank ? null : t.rank)
                  }
                  onMouseEnter={cExpand}
                  onMouseLeave={cShrink}
                >
                  <div className="blog-trend-rank">{t.rank}</div>
                  <div style={{ flex: 1 }}>
                    <div className="blog-trend-text">{t.title}</div>
                    <div className="blog-trend-views">{t.views}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="blog-reveal-right"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: activePreview ? "stretch" : "center",
              justifyContent: activePreview ? "flex-start" : "center",
              padding: "2rem",
              color: "var(--text-muted)",
              fontSize: 13,
              textAlign: "center",
            }}
          >
            {activePreview ? (
              (() => {
                const p = trendPreviews[activePreview];
                return (
                  <div
                    key={activePreview}
                    className="blog-preview-panel"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      height: "100%",
                    }}
                  >
                    <span
                      className={`blog-tag ${p.tag.cls}`}
                      style={{ width: "fit-content" }}
                    >
                      {p.tag.label}
                    </span>

                    <div
                      style={{
                        fontSize: "clamp(16px, 2vw, 21px)",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.3,
                        textAlign: "left",
                      }}
                    >
                      {p.title}
                    </div>

                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        textAlign: "left",
                      }}
                    >
                      {p.snippet}
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "8px",
                      }}
                    >
                      {p.keyPoints.map((pt, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 7,
                            fontSize: 12,
                            color: "var(--text-secondary)",
                            background: isLight
                              ? "rgba(5,56,89,0.04)"
                              : "rgba(255,255,255,0.04)",
                            border: isLight
                              ? "1px solid rgba(5,56,89,0.08)"
                              : "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 8,
                            padding: "7px 10px",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--accent)",
                              fontWeight: 700,
                              fontSize: 13,
                              lineHeight: 1,
                            }}
                          >
                            ✦
                          </span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "1.5rem",
                        padding: "0.8rem 0",
                        borderTop: isLight
                          ? "1px solid rgba(5,56,89,0.08)"
                          : "1px solid rgba(255,255,255,0.08)",
                        borderBottom: isLight
                          ? "1px solid rgba(5,56,89,0.08)"
                          : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {[
                        { icon: "👁", val: p.stats.views, label: "views" },
                        { icon: "⏱", val: p.stats.readTime, label: "read" },
                        { icon: "★", val: p.stats.rating, label: "rating" },
                      ].map((s, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            textAlign: "left",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: "var(--text-primary)",
                            }}
                          >
                            {s.icon} {s.val}
                          </span>
                          <span
                            style={{
                              fontSize: 10,
                              color: "var(--text-muted)",
                              textTransform: "uppercase",
                              letterSpacing: ".06em",
                            }}
                          >
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <div className="blog-avatar">{p.author.initials}</div>
                        <div style={{ textAlign: "left" }}>
                          <div
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: "var(--text-primary)",
                            }}
                          >
                            {p.author.name}
                          </div>
                          <div
                            style={{ fontSize: 11, color: "var(--text-muted)" }}
                          >
                            {p.author.role} · {p.author.date}
                          </div>
                        </div>
                      </div>
                      <button
                        className="blog-read-btn"
                        onClick={() =>
                          window.open(trendLinks[activePreview], "_blank")
                        }
                        onMouseEnter={cExpand}
                        onMouseLeave={cShrink}
                      >
                        Read article <span className="blog-btn-arrow">→</span>
                      </button>
                    </div>
                  </div>
                );
              })()
            ) : (
              <>
                <div style={{ fontSize: 28 }}>
                  <FiArrowLeft />
                </div>
                <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                  Select a topic
                </div>
                <div>Click any trending item to preview</div>
              </>
            )}
          </div>
        </div>

        <div className="blog-dot-row">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`blog-dot${activeDot === i ? " on" : ""}`}
              onClick={() => setActiveDot(i)}
              onMouseEnter={cExpand}
              onMouseLeave={cShrink}
            />
          ))}
        </div>

        <div className="blog-footer-row blog-reveal">
          <span className="blog-footer-label">Showing 10 of 128 articles</span>
          <button
            className="blog-va-btn"
            onMouseEnter={cExpand}
            onMouseLeave={cShrink}
          >
            View all articles ↗
          </button>
        </div>
      </div>

      <div className="blog-page">
        <div className="success-header-wrap blog-reveal">
          <div className="success-title-row">
            <h2 style={{ marginBottom: "0" }} className="success-main-title">
              Success <span className="success-subtitle">Stories</span> Shared
              on LinkedIn
            </h2>
          </div>
        </div>

        <div className="success-carousel-wrap blog-reveal">
          <div className="success-carousel-track" ref={carouselTrackRef}>
            {successCards.map((card, i) => (
              <div
                key={i}
                className="success-card success-carousel-card"
                data-url={card.url}
                onMouseEnter={cExpand}
                onMouseLeave={cShrink}
              >
                <div
                  className="success-card-accent"
                  style={{ background: card.gradient }}
                >
                  <div className="success-logo">
                    <img src={card.logo} alt="College Logo" />
                  </div>
                  <span className="success-badge">{card.badge}</span>
                  <div className="success-lpa-big">{card.lpa}</div>
                </div>

                <div className="success-card-body">
                  <p className="success-company-name">{card.company}</p>
                  <p className="success-college-name">{card.college}</p>
                </div>

                <div className="success-card-foot">
                  <div className="success-avatars-group">
                    {card.avatars.map((av, j) => (
                      <div key={j} className={`success-avatar ${av.cls}`}>
                        {av.letter}
                      </div>
                    ))}
                  </div>
                  <span className="success-student-count">{card.count}</span>
                  <a
                    className="success-linkedin-link"
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="success-linkedin-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="success-carousel-nav">
            <button
              className="success-nav-btn"
              id="successPrev"
              onMouseEnter={cExpand}
              onMouseLeave={cShrink}
            >
              ←
            </button>
            <button
              className="success-nav-btn"
              id="successNext"
              onMouseEnter={cExpand}
              onMouseLeave={cShrink}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="blog-page">
        <div className="blog-reveal">
          <h2
            style={{ paddingBottom: "30px", textAlign: "center" }}
            className="success-main-title"
          >
            Your <span className="success-subtitle">Roadmap</span> to Interview
            Success
          </h2>

          <RoadmapCarousel
            cards={[
              {
                img: c5,
                fallback:
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
                badge: "CS Core",
                title: "Must-needed CS Core Subjects for an Interview",
                url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_sde-interviewpreparation-student-activity-7219661893068578817-27Nm/",
              },
              {
                img: c1,
                fallback:
                  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80",
                badge: "DSA",
                title: "Important Problems on Array and Strings",
                url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_sde-interviews-placementpreparation-activity-7208539624686669826-VWkS/",
              },
              {
                img: c3,
                fallback:
                  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
                badge: "Full Stack",
                title: "Answer this Javascript Interview Questions",
                url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_javascript-sde-interviewpreparation-activity-7200918981942132736-hpjr/",
              },
              {
                img: c6,
                fallback:
                  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
                badge: "Full Stack",
                title: "Why MERN is so Popular Among Developers?",
                url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_sde-guidelines-mernstack-activity-7173027714767990784-dmS_/",
              },
              {
                img: cimg24,
                fallback:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
                badge: "Interview Prep",
                title: "How to Select a Skill and Gain Confidence in It?",
                url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_placement-tips-interview-activity-7191496002678198274-gh4W/",
              },
              {
                img: c4,
                fallback:
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
                badge: "MERN Stack",
                title: "Complete Roadmap for MERN Stack Developer",
                url: "https://www.linkedin.com/posts/better-tomorrow-training-institute_mernstack-student-college-activity-7173188665957965824-wobA/",
              },
            ]}
            cExpand={cExpand}
            cShrink={cShrink}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
