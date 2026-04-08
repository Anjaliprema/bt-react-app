// import { useState, useEffect, useRef } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// const BLOGS = [
//   {
//     id: 1,
//     category: "Web developement",
//     catKey: "web",
//     title: "Roadmap for MERN Stack Developer",
//     date: "April 24, 2024",
//     read: "10 min read",
//     img: "https://a.storyblok.com/f/289953055564718/756x365/9102108e50/whatsapp-image-2024-12-22-at-7-42-43-pm.jpeg",
//   },
//   {
//     id: 2,
//     category: "Interview Preperation",
//     catKey: "interview",
//     title: "Cracking Interviews at Zoho",
//     date: "May 18, 2024",
//     read: "7 min read",
//     img: "https://a.storyblok.com/f/289953055564718/1219x675/0618f94d61/interview-prep.webp",
//   },
//   {
//     id: 3,
//     category: "Web developement",
//     catKey: "web",
//     title: "Complete Javascript in 30 days",
//     date: "June 15, 2024",
//     read: "8 min read",
//     img: "https://a.storyblok.com/f/289953055564718/1890x820/1e238b3a97/js2.jpg",
//   },
//   {
//     id: 4,
//     category: "Interview Preperation",
//     catKey: "interview",
//     title: "How to crack Product based companies",
//     date: "July 20, 2022",
//     read: "6 min read",
//     img: "https://a.storyblok.com/f/289953055564718/1219x675/305ee5e877/interview-prep-1.webp",
//   },
//   {
//     id: 5,
//     category: "Devops",
//     catKey: "devops",
//     title: "Roadmap for DevOps - Beginners",
//     date: "September 7, 2024",
//     read: "10min read",
//     img: "https://a.storyblok.com/f/289953055564718/542x316/bf5eac42dd/dev.png",
//   },
//   {
//     id: 6,
//     category: "Web developement",
//     catKey: "web",
//     title: "Web developer vs Web designer",
//     date: "December 12, 2023",
//     read: "6 min read",
//     img: "https://a.storyblok.com/f/289953055564718/1219x675/305ee5e877/interview-prep-1.webp",
//   },
//   {
//     id: 7,
//     category: "Interview Preperation",
//     catKey: "interview",
//     title: "Roadmap for MERN Stack Developer",
//     date: "August 23, 2022",
//     read: "4 min read",
//     img: "https://a.storyblok.com/f/289953055564718/756x365/9102108e50/whatsapp-image-2024-12-22-at-7-42-43-pm.jpeg",
//   },
// ];

// const TABS = [
//   { label: "All", key: "all" },
//   { label: "Web developement", key: "web" },
//   { label: "Interview preperation", key: "interview" },
//   { label: "Devops", key: "devops" },
// ];

// const CAT_COLORS = {
//   web: {
//     dark: {
//       bg: "rgba(247,198,81,0.13)",
//       text: "#f7c651",
//       border: "rgba(247,198,81,0.35)",
//     },
//     light: {
//       bg: "rgba(5,56,89,0.08)",
//       text: "#053859",
//       border: "rgba(5,56,89,0.22)",
//     },
//   },
//   interview: {
//     dark: {
//       bg: "rgba(93,202,165,0.13)",
//       text: "#5dcaa5",
//       border: "rgba(93,202,165,0.3)",
//     },
//     light: {
//       bg: "rgba(15,110,86,0.08)",
//       text: "#0f6e56",
//       border: "rgba(15,110,86,0.22)",
//     },
//   },
//   devops: {
//     dark: {
//       bg: "rgba(216,90,48,0.13)",
//       text: "#f0997b",
//       border: "rgba(216,90,48,0.3)",
//     },
//     light: {
//       bg: "rgba(153,60,29,0.1)",
//       text: "#993c1d",
//       border: "rgba(153,60,29,0.22)",
//     },
//   },
// };

// function useDark() {
//   const [dark, setDark] = useState(true);
//   return [dark, setDark];
// }

// function useInView(ref) {
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => setVisible(e.isIntersecting),
//       { threshold: 0.12 },
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return visible;
// }

// function AnimCard({ children, delay = 0, style = {} }) {
//   const ref = useRef();
//   const vis = useInView(ref);
//   return (
//     <div
//       ref={ref}
//       style={{
//         opacity: vis ? 1 : 0,
//         transform: vis ? "translateY(0)" : "translateY(28px)",
//         transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
//         ...style,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// function BlogCard({ blog, dark, index }) {
//   const [hov, setHov] = useState(false);
//   const cat = CAT_COLORS[blog.catKey] || CAT_COLORS.web;
//   const c = dark ? cat.dark : cat.light;

//   return (
//     <AnimCard delay={index * 0.07} style={{ height: "100%" }}>
//       <div
//         onMouseEnter={() => setHov(true)}
//         onMouseLeave={() => setHov(false)}
//         style={{
//           borderRadius: 20,
//           overflow: "hidden",
//           border: `1px solid ${dark ? (hov ? "rgba(247,198,81,0.35)" : "rgba(255,255,255,0.07)") : hov ? "rgba(5,56,89,0.28)" : "rgba(5,56,89,0.1)"}`,
//           background: dark
//             ? hov
//               ? "rgba(255,255,255,0.04)"
//               : "rgba(255,255,255,0.02)"
//             : "#fff",
//           boxShadow: hov
//             ? dark
//               ? "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(247,198,81,0.1)"
//               : "0 16px 40px rgba(5,56,89,0.12)"
//             : dark
//               ? "none"
//               : "0 2px 16px rgba(5,56,89,0.05)",
//           transform: hov
//             ? "translateY(-6px) scale(1.015)"
//             : "translateY(0) scale(1)",
//           transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
//           display: "flex",
//           flexDirection: "column",
//           height: "100%",
//           cursor: "pointer",
//         }}
//       >
//         <div
//           style={{
//             position: "relative",
//             overflow: "hidden",
//             height: 170,
//             flexShrink: 0,
//           }}
//         >
//           <img
//             src={blog.img}
//             alt={blog.title}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               display: "block",
//               transform: hov ? "scale(1.07)" : "scale(1)",
//               transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
//             }}
//             onError={(e) => {
//               e.target.style.display = "none";
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background:
//                 "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)",
//               pointerEvents: "none",
//             }}
//           />
//         </div>
//         <div
//           style={{
//             padding: "14px 16px 18px",
//             flex: 1,
//             display: "flex",
//             flexDirection: "column",
//             gap: 8,
//           }}
//         >
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               alignSelf: "flex-start",
//               fontSize: 10,
//               fontWeight: 700,
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//               padding: "4px 10px",
//               borderRadius: 20,
//               background: c.bg,
//               color: c.text,
//               border: `1px solid ${c.border}`,
//             }}
//           >
//             {blog.category}
//           </div>
//           <p
//             style={{
//               fontSize: 14,
//               fontWeight: 700,
//               color: dark
//                 ? hov
//                   ? "#f7c651"
//                   : "rgba(255,255,255,0.9)"
//                 : hov
//                   ? "#053859"
//                   : "#1a2535",
//               lineHeight: 1.4,
//               margin: 0,
//               transition: "color 0.2s",
//               flex: 1,
//             }}
//           >
//             {blog.title}
//           </p>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 6,
//               marginTop: 2,
//             }}
//           >
//             <span
//               style={{
//                 fontSize: 11,
//                 color: dark ? "rgba(255,255,255,0.4)" : "rgba(5,56,89,0.5)",
//                 fontFamily: "monospace",
//               }}
//             >
//               {blog.date}
//             </span>
//             <span
//               style={{
//                 fontSize: 9,
//                 color: dark ? "rgba(255,255,255,0.2)" : "rgba(5,56,89,0.25)",
//               }}
//             >
//               •
//             </span>
//             <span
//               style={{
//                 fontSize: 11,
//                 color: dark ? "rgba(255,255,255,0.4)" : "rgba(5,56,89,0.5)",
//                 fontFamily: "monospace",
//               }}
//             >
//               {blog.read}
//             </span>
//           </div>
//         </div>
//       </div>
//     </AnimCard>
//   );
// }

// export default function BlogSection() {
//   const [dark, setDark] = useDark();
//   const [activeTab, setActiveTab] = useState("all");

//   const filtered =
//     activeTab === "all" ? BLOGS : BLOGS.filter((b) => b.catKey === activeTab);

//   const bg = dark ? "#0b0b0b" : "#fafafa";
//   const textPrimary = dark ? "rgba(255,255,255,0.88)" : "#053859";
//   const textMuted = dark ? "rgba(255,255,255,0.45)" : "rgba(5,56,89,0.55)";
//   const accent = dark ? "#f7c651" : "#053859";

//   return (
//     <div
//       style={{
//         background: bg,
//         minHeight: "100vh",
//         padding: "48px 0 80px",
//         fontFamily: "'Poppins','Segoe UI',system-ui,sans-serif",
//         transition: "background 0.3s, color 0.3s",
//       }}
//     >
//         <Header />
//       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
//         {/* Header */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginBottom: 36,
//           }}
//         >
//           <div>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 10,
//                 marginBottom: 8,
//               }}
//             >
//               <div
//                 style={{
//                   width: 28,
//                   height: 2,
//                   background: accent,
//                   borderRadius: 2,
//                 }}
//               />
//               <span
//                 style={{
//                   fontSize: 10,
//                   fontWeight: 700,
//                   letterSpacing: "0.18em",
//                   textTransform: "uppercase",
//                   color: accent,
//                 }}
//               >
//                 Editorial
//               </span>
//             </div>
//             <h1
//               style={{
//                 margin: 0,
//                 fontSize: "clamp(28px,4vw,46px)",
//                 fontWeight: 800,
//                 letterSpacing: "-0.025em",
//                 lineHeight: 1.1,
//                 color: textPrimary,
//               }}
//             >
//               Blogs
//             </h1>
//             <p style={{ margin: "8px 0 0", fontSize: 14, color: textMuted }}>
//               Insights, guides and stories from our team
//             </p>
//           </div>
//           {/* Theme toggle */}
//         </div>

//         {/* Filter tabs */}
//         <div
//           style={{
//             display: "flex",
//             gap: 8,
//             flexWrap: "wrap",
//             marginBottom: 36,
//           }}
//         >
//           {TABS.map((tab) => {
//             const isActive = activeTab === tab.key;
//             return (
//               <button
//                 key={tab.key}
//                 onClick={() => setActiveTab(tab.key)}
//                 style={{
//                   padding: "8px 20px",
//                   borderRadius: 40,
//                   fontSize: 12,
//                   fontWeight: 600,
//                   fontFamily: "inherit",
//                   cursor: "pointer",
//                   transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
//                   border: `1.5px solid ${isActive ? accent : dark ? "rgba(255,255,255,0.12)" : "rgba(5,56,89,0.18)"}`,
//                   background: isActive
//                     ? dark
//                       ? "linear-gradient(135deg,#f7c651 0%,#e0a419 100%)"
//                       : "linear-gradient(135deg,#053859 0%,#0a5c8f 100%)"
//                     : "transparent",
//                   color: isActive
//                     ? dark
//                       ? "#000"
//                       : "#fff"
//                     : dark
//                       ? "rgba(255,255,255,0.7)"
//                       : "rgba(5,56,89,0.7)",
//                   transform: isActive ? "translateY(-2px)" : "translateY(0)",
//                   boxShadow: isActive
//                     ? dark
//                       ? "inset 2px 2px 2px rgba(255,255,255,0.3), 4px 4px 12px rgba(0,0,0,0.25)"
//                       : "inset 2px 2px 2px rgba(255,255,255,0.35), 4px 4px 12px rgba(5,56,89,0.2)"
//                     : "none",
//                 }}
//               >
//                 {tab.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Blog Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//             gap: 20,
//           }}
//         >
//           {filtered.map((blog, i) => (
//             <BlogCard key={blog.id} blog={blog} dark={dark} index={i} />
//           ))}
//         </div>

//         {/* Footer row */}
//         <AnimCard delay={0.3}>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               marginTop: 44,
//               paddingTop: 28,
//               borderTop: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(5,56,89,0.1)"}`,
//             }}
//           >
//             <span style={{ fontSize: 13, color: textMuted }}>
//               Showing {filtered.length} of {BLOGS.length} articles
//             </span>
//             <button
//               style={{
//                 padding: "10px 26px",
//                 borderRadius: 30,
//                 fontSize: 13,
//                 fontWeight: 700,
//                 fontFamily: "inherit",
//                 cursor: "pointer",
//                 border: `1.5px solid ${dark ? "rgba(247,198,81,0.4)" : "rgba(5,56,89,0.3)"}`,
//                 background: "transparent",
//                 color: dark ? "#f7c651" : "#053859",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = dark
//                   ? "rgba(247,198,81,0.1)"
//                   : "rgba(5,56,89,0.06)";
//                 e.currentTarget.style.transform = "translateY(-2px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "transparent";
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               View all articles ↗
//             </button>
//           </div>
//         </AnimCard>
//       </div>
//       <Footer />
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
import './StudentBlog.css' // We'll create this CSS file

function Student() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark"
  );
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCards, setVisibleCards] = useState(new Set());
  
  const pageRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

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
        new CustomEvent("rm-scroll", {
          detail: { scrollTop: page.scrollTop },
        })
      );
    page.addEventListener("scroll", fn, { passive: true });
    return () => {
      page.removeEventListener("scroll", fn);
      window.dispatchEvent(
        new CustomEvent("rm-scroll", { detail: { scrollTop: 0 } })
      );
    };
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${ringPos.current.x}px`;
        cursorRingRef.current.style.top = `${ringPos.current.y}px`;
      }
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.revealId;
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, id]));
          } else {
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.delete(id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('[data-reveal-id]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCursorExpand = (expand) => {
    if (cursorRef.current) {
      cursorRef.current.classList.toggle('expand', expand);
    }
    if (cursorRingRef.current) {
      cursorRingRef.current.classList.toggle('expand', expand);
    }
  };

  const handleCardMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = ((e.clientX - cx) / (r.width / 2)) * 6;
    const dy = ((e.clientY - cy) / (r.height / 2)) * 6;
    cardRef.current.style.transform = `perspective(800px) rotateY(${dx}deg) rotateX(${-dy}deg) translateY(-4px) scale(1.01)`;
  };

  const handleCardMouseLeave = (cardRef) => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
  };

  const filterCards = (cat) => {
    setActiveFilter(cat);
  };

  const isCardVisible = (cat) => {
    return activeFilter === 'all' || cat === activeFilter || cat === 'all';
  };

  const bg = isLight ? "#ffffff" : "#0a0a0a";
  const textColor = isLight ? "#373738" : "#f0f0f0";

  // Card refs for magnetic effect
  const cardRefs = useRef({});
  const getCardRef = (id) => {
    if (!cardRefs.current[id]) {
      cardRefs.current[id] = React.createRef();
    }
    return cardRefs.current[id];
  };

  return (
    <div
      ref={pageRef}
      className={`op-page ${isLight ? "light-theme" : "dark-theme"} blog-page`}
      style={{
        background: bg,
        color: textColor,
        minHeight: "100vh",
        overflowY: "auto"
      }}
    >
      {/* Custom Cursor */}
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={cursorRingRef}></div>

      <Header />
      
      <div className="blog-content">
        {/* Header Section */}
        <div 
          className={`blog-header ${visibleCards.has('header') ? 'in' : ''}`}
          data-reveal-id="header"
        >
          <div className="header-left">
            <div className="eyebrow">
              <span></span>
              Journal
            </div>
            <h1 className="main-title">
               Blog
            </h1>
          </div>
          <div className="header-right">
            <div className="post-count">total articles</div>
            <div className="big-num">128</div>
          </div>
        </div>

        {/* Ticker */}
        <div 
          className={`ticker-wrap ${visibleCards.has('ticker') ? 'in' : ''}`}
          data-reveal-id="ticker"
        >
          <div className="ticker">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="ticker-item"><strong>MERN Stack</strong> · 4.8k views <span className="ticker-sep">✦</span></span>
                <span className="ticker-item"><strong>DSA Roadmap</strong> · 3.2k views <span className="ticker-sep">✦</span></span>
                <span className="ticker-item"><strong>DevOps Guide</strong> · 2.9k views <span className="ticker-sep">✦</span></span>
                <span className="ticker-item"><strong>JS in 30 Days</strong> · 5.1k views <span className="ticker-sep">✦</span></span>
                <span className="ticker-item"><strong>Zoho Interviews</strong> · 1.7k views <span className="ticker-sep">✦</span></span>
                <span className="ticker-item"><strong>System Design</strong> · 2.4k views <span className="ticker-sep">✦</span></span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div 
          className={`filter-wrap ${visibleCards.has('filters') ? 'in' : ''}`}
          data-reveal-id="filters"
        >
          <span className="filter-label">Filter</span>
          {[
            { cat: 'all', label: 'All Essay' },
            { cat: 'web', label: 'Culture' },
            { cat: 'interview', label: 'Technology' },
            { cat: 'devops', label: 'The Future' }
          ].map(({ cat, label }) => (
            <button
              key={cat}
              className={`ftab ${activeFilter === cat ? 'on' : ''}`}
              onClick={() => filterCards(cat)}
              onMouseEnter={() => handleCursorExpand(true)}
              onMouseLeave={() => handleCursorExpand(false)}
            >
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="bento">
          {/* Featured Hero Card */}
          <FeaturedCard 
            visible={visibleCards.has('featured') && isCardVisible('web')}
            onCursorExpand={handleCursorExpand}
            cardRef={getCardRef('featured')}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          />

          {/* Stats Card */}
          <StatsCard 
            visible={visibleCards.has('stats') && isCardVisible('all')}
            onCursorExpand={handleCursorExpand}
            cardRef={getCardRef('stats')}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          />

          {/* Topic Cards */}
          <TopicCard
            id="topic1"
            visible={visibleCards.has('topic1') && isCardVisible('web')}
            bgGradient="var(--topic-grad-primary)"
            iconColor="var(--accent)"
            icon="JS"
            iconStyle={{ fontFamily: "'DM Mono',monospace", fontSize: '36px' }}
            badge="30 DAYS"
            tag={{ class: 'tag-blue', text: 'Web dev' }}
            title="Complete Javascript in 30 Days — The Definitive Guide"
            meta="June 15, 2024 · 8 min read"
            progress={72}
            progressColor="var(--accent)"
            onCursorExpand={handleCursorExpand}
            cardRef={getCardRef('topic1')}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            delay={1}
          />

          <TopicCard
            id="topic2"
            visible={visibleCards.has('topic2') && isCardVisible('interview')}
            bgGradient="var(--topic-grad-secondary)"
            iconColor="var(--accent-alt)"
            icon="Z"
            iconStyle={{ fontSize: '42px', fontFamily: "'Playfair Display',serif" }}
            tag={{ class: 'tag-green', text: 'Interview' }}
            title="Cracking Interviews at Zoho — Insider Tips"
            meta="May 18, 2024 · 7 min read"
            progress={58}
            progressColor="var(--accent-alt)"
            onCursorExpand={handleCursorExpand}
            cardRef={getCardRef('topic2')}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            delay={2}
          />

          <TopicCard
            id="topic3"
            visible={visibleCards.has('topic3') && isCardVisible('interview')}
            bgGradient="var(--topic-grad-muted)"
            iconColor="var(--ink2)"
            icon={<>Product<br/>Hunt</>}
            iconStyle={{ fontSize: '28px', fontFamily: "'Playfair Display',serif", textAlign: 'center', lineHeight: 1.15 }}
            tag={{ class: 'tag-purple', text: 'Interview' }}
            title="How to Crack Product-Based Companies"
            meta="July 20, 2022 · 6 min read"
            progress={45}
            progressColor="var(--accent)"
            onCursorExpand={handleCursorExpand}
            cardRef={getCardRef('topic3')}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            delay={3}
          />

          {/* Wide Cards */}
          <WideCard
            id="wide1"
            visible={visibleCards.has('wide1') && isCardVisible('devops')}
            num="01"
            tag={{ class: 'tag-pink', text: 'DevOps' }}
            title="Roadmap for DevOps — Complete Beginner's Guide"
            meta="September 7, 2024 · 10 min read"
            barFill={80}
            barColor="var(--accent)"
            views="2.9k"
            onCursorExpand={handleCursorExpand}
            cardRef={getCardRef('wide1')}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          />

          <WideCard
            id="wide2"
            visible={visibleCards.has('wide2') && isCardVisible('web')}
            num="02"
            tag={{ class: 'tag-blue', text: 'Web dev' }}
            title="Web Developer vs Web Designer — Know the Difference"
            meta="December 12, 2023 · 6 min read"
            barFill={55}
            barColor="var(--accent-alt)"
            views="1.8k"
            onCursorExpand={handleCursorExpand}
            cardRef={getCardRef('wide2')}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            delay={1}
          />

          <WideCard
            id="wide3"
            visible={visibleCards.has('wide3') && isCardVisible('interview')}
            num="03"
            tag={{ class: 'tag-amber', text: 'Interview' }}
            title="MERN Stack Developer — Interview Roadmap & DSA Prep"
            meta="Aug 23, 2022 · 4 min read"
            barFill={70}
            barColor="var(--ink2)"
            views="3.2k"
            onCursorExpand={handleCursorExpand}
            cardRef={getCardRef('wide3')}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            delay={2}
          />

          {/* Trending Card */}
          <TrendingCard
            visible={visibleCards.has('trending') && isCardVisible('all')}
            onCursorExpand={handleCursorExpand}
            cardRef={getCardRef('trending')}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          />

          {/* Newsletter Card */}
          {/* <NewsletterCard
            visible={visibleCards.has('newsletter') && isCardVisible('all')}
            onCursorExpand={handleCursorExpand}
            cardRef={getCardRef('newsletter')}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          /> */}
        </div>

        {/* Pagination Dots */}
        <div className="dot-row">
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`dot ${i === 0 ? 'on' : ''}`}
              onMouseEnter={() => handleCursorExpand(true)}
              onMouseLeave={() => handleCursorExpand(false)}
            />
          ))}
        </div>

        {/* Footer Row */}
        <div 
          className={`footer-row ${visibleCards.has('footer-row') ? 'in' : ''}`}
          data-reveal-id="footer-row"
        >
          <span className="footer-label">Showing 10 of 128 articles</span>
          <button 
            className="va-btn"
            onMouseEnter={() => handleCursorExpand(true)}
            onMouseLeave={() => handleCursorExpand(false)}
          >
            <span>View all articles ↗</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Featured Card Component
function FeaturedCard({ visible, onCursorExpand, cardRef, onMouseMove, onMouseLeave }) {
  return (
    <div
      ref={cardRef}
      className={`card card-featured reveal-left ${visible ? 'in' : ''}`}
      data-reveal-id="featured"
      data-cat="web"
      onMouseEnter={() => onCursorExpand(true)}
      onMouseLeave={() => {
        onCursorExpand(false);
        onMouseLeave(cardRef);
      }}
      onMouseMove={(e) => onMouseMove(e, cardRef)}
    >
      <div className="feat-img">
        <div className="code-grid-lines"></div>
        <div className="code-glow"></div>
        <div className="feat-img-inner">
          <div className="code-block">
            <div><span style={{color:'var(--accent)'}}>const</span> <span style={{color:'var(--panel-muted-strong)'}}>stack</span> = [<span style={{color:'var(--accent-alt)'}}>'M'</span>,<span style={{color:'var(--accent-alt)'}}>'E'</span>,<span style={{color:'var(--accent-alt)'}}>'R'</span>,<span style={{color:'var(--accent-alt)'}}>'N'</span>]</div>
            <div><span style={{color:'var(--panel-muted-strong)'}}>stack.forEach</span>(s =&gt; <span style={{color:'var(--accent)'}}>learn</span>(s))</div>
            <div style={{color:'var(--panel-muted)'}}><span style={{color:'var(--panel-muted)'}}>// your roadmap starts here</span></div>
            <div><span style={{color:'var(--accent)'}}>async function</span> <span style={{color:'var(--panel-muted-strong)'}}>master</span>() {'{'}</div>
            <div style={{paddingLeft:'1em'}}><span style={{color:'var(--accent-alt)'}}>await</span> <span style={{color:'var(--panel-muted-strong)'}}>practice</span>(<span style={{color:'var(--accent)'}}>daily</span>)</div>
            <div>{'}'}</div>
          </div>
        </div>
        <div className="img-corner-badge">MERN Stack</div>
        <div className="img-corner-views">4.8k views</div>
      </div>
      <div className="feat-body">
        <div className="feat-top">
          <div className="tag-row">
            <span className="tag tag-blue">● Web Development</span>
            <span className="reading-time">10 min read</span>
          </div>
          <div className="feat-title">Roadmap for MERN Stack Developer — From Zero to Job Ready in 2024</div>
          <div className="feat-excerpt">A complete guide covering MongoDB, Express, React, and Node.js with real-world projects, interview strategies, and salary insights.</div>
        </div>
        <div className="feat-meta-row">
          <div className="avatar">BT</div>
          <div className="meta-info">
            <div className="meta-name">Better Tomorrow</div>
            <div className="meta-date">April 24, 2024</div>
          </div>
          <button className="read-btn">Read article <span className="btn-arrow">→</span></button>
        </div>
      </div>
    </div>
  );
}

// Stats Card Component
function StatsCard({ visible, onCursorExpand, cardRef, onMouseMove, onMouseLeave }) {
  const [counts, setCounts] = useState({ articles: 0, authors: 0, readers: 0, rating: 0 });
  
  useEffect(() => {
    if (visible) {
      const targets = { articles: 128, authors: 42, readers: 94, rating: 4.9 };
      const duration = 1200;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
        
        setCounts({
          articles: Math.floor(ease * targets.articles),
          authors: Math.floor(ease * targets.authors),
          readers: Math.floor(ease * targets.readers),
          rating: (ease * targets.rating).toFixed(1)
        });
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    } else {
      setCounts({ articles: 0, authors: 0, readers: 0, rating: 0 });
    }
  }, [visible]);

  return (
    <div
      ref={cardRef}
      className={`card card-stats reveal-right ${visible ? 'in' : ''}`}
      data-reveal-id="stats"
      data-cat="all"
      onMouseEnter={() => onCursorExpand(true)}
      onMouseLeave={() => {
        onCursorExpand(false);
        onMouseLeave(cardRef);
      }}
      onMouseMove={(e) => onMouseMove(e, cardRef)}
    >
      <div>
        <div className="stats-eyebrow">Blog · Statistics</div>
        <div className="stats-title">Numbers that<br/>tell our story</div>
      </div>
      <div className="stats-grid">
        <StatItem num={counts.articles} label="Articles" color="var(--accent)" fill={visible ? 85 : 0} />
        <StatItem num={counts.authors} label="Authors" color="var(--accent-alt)" fill={visible ? 60 : 0} />
        <StatItem num={counts.readers} label="k Readers" color="var(--panel-muted-strong)" fill={visible ? 95 : 0} />
        <StatItem num={counts.rating} label="Avg. Rating" color="var(--panel-contrast)" fill={visible ? 98 : 0} />
      </div>
      <div className="stats-footer">
        <span className="stats-cta">Updated daily</span>
        <div className="stats-icon">✦</div>
      </div>
    </div>
  );
}

function StatItem({ num, label, color, fill }) {
  return (
    <div className="stat-item">
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-bar">
        <div 
          className="stat-bar-fill" 
          style={{ background: color, width: `${fill}%` }}
        />
      </div>
    </div>
  );
}

// Topic Card Component
function TopicCard({ 
  id, visible, bgGradient, iconColor, icon, iconStyle, badge, tag, title, meta, progress, progressColor,
  onCursorExpand, cardRef, onMouseMove, onMouseLeave, delay = 0
}) {
  return (
    <div
      ref={cardRef}
      className={`card card-topic reveal delay-${delay} ${visible ? 'in' : ''}`}
      data-reveal-id={id}
      onMouseEnter={() => onCursorExpand(true)}
      onMouseLeave={() => {
        onCursorExpand(false);
        onMouseLeave(cardRef);
      }}
      onMouseMove={(e) => onMouseMove(e, cardRef)}
    >
      <div className="topic-img" style={{ background: bgGradient }}>
        <div className="topic-img-inner" style={{ color: iconColor, ...iconStyle }}>{icon}</div>
        {badge && (
          <div style={{ 
            position: 'absolute', bottom: '8px', right: '10px', 
            fontSize: '9px', fontWeight: 700, color: 'var(--badge-text-strong)',
            letterSpacing: '.1em', fontFamily: "'DM Mono',monospace"
          }}>{badge}</div>
        )}
      </div>
      <div className="topic-body">
        <span className={`tag ${tag.class}`} style={{ marginBottom: '.5rem', width: 'fit-content' }}>{tag.text}</span>
        <div className="topic-title">{title}</div>
        <div className="topic-meta">{meta}</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: visible ? `${progress}%` : '0%',
              background: progressColor 
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Wide Card Component
function WideCard({ 
  id, visible, num, tag, title, meta, barFill, barColor, views,
  onCursorExpand, cardRef, onMouseMove, onMouseLeave, delay = 0
}) {
  return (
    <div
      ref={cardRef}
      className={`card card-wide reveal delay-${delay} ${visible ? 'in' : ''}`}
      data-reveal-id={id}
      style={{ gridColumn: 'span 8' }}
      onMouseEnter={() => onCursorExpand(true)}
      onMouseLeave={() => {
        onCursorExpand(false);
        onMouseLeave(cardRef);
      }}
      onMouseMove={(e) => onMouseMove(e, cardRef)}
    >
      <div className="wide-num">{num}</div>
      <div className="wide-pill"><span className={`tag ${tag.class}`}>{tag.text}</span></div>
      <div className="wide-body">
        <div className="wide-title">{title}</div>
        <div className="wide-meta">{meta}</div>
      </div>
      <div className="wide-bar">
        <div 
          className="wide-bar-fill" 
          style={{ 
            width: visible ? `${barFill}%` : '0%',
            background: barColor 
          }}
        />
      </div>
      <div className="wide-views">{views}</div>
      <div className="wide-arrow">→</div>
    </div>
  );
}

// Trending Card Component
function TrendingCard({ visible, onCursorExpand, cardRef, onMouseMove, onMouseLeave }) {
  const trends = [
    { rank: 1, text: 'MERN Stack Zero to Hero', views: '4.8k views · Web dev' },
    { rank: 2, text: 'JS in 30 Days Challenge', views: '5.1k views · Web dev' },
    { rank: 3, text: 'DSA Interview Roadmap', views: '3.2k views · Interview' },
    { rank: 4, text: "DevOps Beginner's Path", views: '2.9k views · DevOps' },
    { rank: 5, text: 'Cracking Zoho Interviews', views: '1.7k views · Interview' },
  ];

  return (
    <div
      ref={cardRef}
      className={`card card-trending reveal-right ${visible ? 'in' : ''}`}
      data-reveal-id="trending"
      data-cat="all"
      style={{ gridColumn: 'span 4', gridRow: 'span 3', alignSelf: 'start' }}
      onMouseEnter={() => onCursorExpand(true)}
      onMouseLeave={() => {
        onCursorExpand(false);
        onMouseLeave(cardRef);
      }}
      onMouseMove={(e) => onMouseMove(e, cardRef)}
    >
      <div className="trending-header">
        <span className="trending-title">Trending Now</span>
        <span className="trending-badge">Hot 🔥</span>
      </div>
      {trends.map((t) => (
        <div key={t.rank} className="trend-item">
          <div className="trend-rank">{t.rank}</div>
          <div>
            <div className="trend-text">{t.text}</div>
            <div className="trend-views">{t.views}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Newsletter Card Component
function NewsletterCard({ visible, onCursorExpand, cardRef, onMouseMove, onMouseLeave }) {
  const [email, setEmail] = useState('');

  return (
    <div
      ref={cardRef}
      className={`card card-newsletter reveal ${visible ? 'in' : ''}`}
      data-reveal-id="newsletter"
      data-cat="all"
      onMouseEnter={() => onCursorExpand(true)}
      onMouseLeave={() => {
        onCursorExpand(false);
        onMouseLeave(cardRef);
      }}
      onMouseMove={(e) => onMouseMove(e, cardRef)}
    >
      <div className="nl-left">
        <div className="nl-eyebrow">Newsletter · Weekly</div>
        <div className="nl-title">Get the best articles<br/>delivered to your inbox</div>
        <div className="nl-sub">Join 12,000+ developers reading every Sunday.</div>
        <div className="nl-form">
          <input 
            className="nl-input" 
            type="email" 
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="nl-btn">Subscribe →</button>
        </div>
      </div>
      <div className="nl-right">
        <div className="floating-dot" style={{ 
          width: '10px', height: '10px', background: 'var(--accent)', 
          opacity: 0.6, top: '-8px', right: '-4px', animationDelay: '.5s' 
        }}/>
        <div className="floating-dot" style={{ 
          width: '6px', height: '6px', background: 'var(--accent-alt)', 
          opacity: 0.5, bottom: '-4px', left: '8px', animationDelay: '1.2s' 
        }}/>
        <div className="nl-badge">
          <div className="nl-badge-num">12k</div>
          <div className="nl-badge-label">Subscribers</div>
        </div>
      </div>
    </div>
  );
}

export default Student





// import React, { useState, useEffect, useRef } from 'react'
// import Header from './Header'
// import Footer from './Footer'

// function Student() {

//   const [isLight, setIsLight] = useState(
//     () => localStorage.getItem("theme") !== "dark"
//   );

//   const pageRef = useRef(null);

//   useEffect(() => {
//     const h = () => setIsLight(localStorage.getItem("theme") !== "dark");
//     window.addEventListener("themechange", h);
//     return () => window.removeEventListener("themechange", h);
//   }, []);

//   useEffect(() => {
//     const page = pageRef.current;
//     if (!page) return;

//     const fn = () =>
//       window.dispatchEvent(
//         new CustomEvent("rm-scroll", {
//           detail: { scrollTop: page.scrollTop },
//         })
//       );

//     page.addEventListener("scroll", fn, { passive: true });

//     return () => {
//       page.removeEventListener("scroll", fn);
//       window.dispatchEvent(
//         new CustomEvent("rm-scroll", { detail: { scrollTop: 0 } })
//       );
//     };
//   }, []);

//   const bg = isLight ? "#ffffff" : "#0a0a0a";
//   const textColor = isLight ? "#373738" : "#f0f0f0";

//   return (
//     <div
//       ref={pageRef} 
//       className={`op-page ${isLight ? "light-theme" : "dark-theme"}`}
//       style={{
//         background: bg,
//         color: textColor,
//         minHeight: "100vh",
//         overflowY: "auto" 
//       }}
//     >

//       <Header />

//       <div
//         style={{
//           minHeight: "150vh", 
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center'
//         }}
//       >
//         Student Page Content
//       </div>

//       <Footer />

//     </div>
//   )
// }

// export default Student
