import StudentPlacements from "./StudentPlacements";
import About from "./About";
import "./Home_Static.css";
import LightLogo from "../assets/download.png";
import DarkLogo from "../assets/altimg.png";
import { motion } from "framer-motion";
import TransformationSection from "./TransformationSection";
import { useState, useEffect, useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import img1 from "../assets/Programming-bro.png";
import img2 from "../assets/Experts-bro.png";
import img3 from "../assets/Product-presentation-bro.png";
import img4 from "../assets/Visual-data-pana.png";
import img5 from "../assets/Website-Creator-bro.png";
import img6 from "../assets/Profile-data-bro.png";
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
import { GoArrowUpRight } from "react-icons/go";
import {
  FaMoon,
  FaSun,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";
import RoadMap from "./RoadMap";

function Home() {
  const [isLight, setIsLight] = useState(false);
  const [page, setPage] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const glowRef = useRef(null);
  const floatingRef = useRef(null);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      name: "Sri Eswar College Of Engineering, Coimbatore",
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
      name: "M. Kumarasamy College Of Engineering, Karur",
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

  const programs = [
    {
      title: "Programming Expertise",
      img: img1,
      description: "Any programming language / Framework from fundamentals",
    },
    {
      title: "Practical Expertise",
      img: img2,
      description:
        "C or Java,Data structures, Introduction to Web development.",
    },
    {
      title: "Product Expertise",
      img: img3,
      description: "Data structures, hands on experience on algorithms.",
    },
    {
      title: "Domain Expertise",
      img: img4,
      description:
        "AI or ML Engineer, Data Science, DevOps Engineer, Data Analyst",
    },
    {
      title: "Full Stack Web Development",
      img: img5,
      description:
        "MERN, MEAN, React with TypeScript, React with Django, Spring Boot",
    },
    {
      title: "Skillhub360",
      img: img6,
      description:
        "Interview 360 for Boosting your confidence, Cracking Coding Interviews in Java, Quantitative Aptitude and Verbal Reasoning",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroTitle = useParallax({
    translateY: [-120, 0],
    scale: [1, 1.1],
    easing: "easeOut",
  });

  const heroSubtitle = useParallax({
    translateY: [-60, 0],
    scale: [1, 1.3],
    easing: "easeInOut",
  });

  const heroButton = useParallax({
    translateY: [10, 0],
    easing: "easeOut",
  });

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      const x = (e.clientX - innerWidth / 2) / 60;
      const y = (e.clientY - innerHeight / 2) / 60;

      if (floatingRef.current) {
        floatingRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={isLight ? "light-theme" : "dark-theme"}>
      <div ref={glowRef} className="cursor-glow" />

      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-content">
          <motion.div
            className="logo-section"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={isLight ? LightLogo : DarkLogo}
              alt="BT logo"
              onClick={() => setPage("home")}
            />

            {!isScrolled && (
              <div className="logo-text">
                <h1 onClick={() => setPage("home")}>Better Tomorrow</h1>
                <p onClick={() => setPage("home")}>
                  Building Skills for the Future
                </p>
              </div>
            )}
          </motion.div>

          <motion.nav
            className="nav-menu"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <a onClick={() => scrollToSection("home")}>Home</a>
            <a onClick={() => scrollToSection("about")}>About</a>
            <a onClick={() => scrollToSection("programs")}>Programs</a>
            <a onClick={() => scrollToSection("achievements")}>Achievements</a>
            <a onClick={() => scrollToSection("placements")}>Placements</a>

            <a onClick={() => setPage("roadmap")} className="roadmap-btn btn-2">
              Road Map
            </a>
          </motion.nav>

          <motion.div
            className="theme-toggle"
            onClick={toggleTheme}
            initial={{ scale: 0, opacity: 0, rotateY: -180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            style={{ perspective: 400 }}
          >
            <motion.div
              className="toggle-3d-wrap"
              animate={{ rotateY: isLight ? 0 : 180 }}
              transition={{ duration: 0.55, ease: [0.34, 1.4, 0.64, 1] }}
              style={{
                transformStyle: "preserve-3d",
                position: "relative",
                width: 38,
                height: 38,
              }}
            >
              <div className="toggle-face toggle-front">
                <FaMoon />
              </div>
              <div className="toggle-face toggle-back">
                <FaSun />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {page === "home" ? (
        <main className="main-content">
          <motion.section
            id="home"
            className="hero-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="floating-content" ref={floatingRef}>
              <div className="hero-content">
                <div className="hero-text">
                  <motion.h2
                    ref={heroTitle.ref}
                    className="hero-title"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    Education is not the learning of facts, but the training of
                    the mind to think
                  </motion.h2>
                  <motion.p
                    ref={heroSubtitle.ref}
                    className="hero-subtitle"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  >
                    Empowering independent learning fueled by senior developers
                    from leading MNCs. We provide problem statements, foster a
                    comfortable environment, and track individual progress for
                    optimal growth.
                  </motion.p>
                  <motion.button
                    ref={heroButton.ref}
                    className="cta-button btn-2"
                    onClick={() => scrollToSection("programs")}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    Get Started <FaArrowRight />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.section>

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
              <motion.h2
                ref={cardTitle.ref}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                Blaze A Trail On Our Pathway To Turbocharge Your Tech Career!
              </motion.h2>
              <motion.p
                ref={cardText.ref}
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              >
                At Better Tomorrow, we immerse budding talents in live
                industrial projects and real-world problem-solving. We fortify
                their confidence with a solid foundation in industry essentials.
                Our commitment drives us, and our unwavering pillars include:
              </motion.p>
            </div>

            <div>
              <About />
            </div>
          </section>

          <section id="programs" className="programs-section">
            <div className="section-header">
              <motion.h2
                ref={aboutTitleProgram.ref}
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              >
                Extensive Programs From Domain Experts That Meets Industry
                Expectations
              </motion.h2>
            </div>
            <div className="programs-slider">
              <motion.div
                className="programs-track"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                {[...programs, ...programs].map((program, idx) => (
                  <div key={idx} className="program-card">
                    <img src={program.img} alt={program.title} />
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="programs-readmore">
              <a href="#about" className="read-more-btn btn-2">
                Read More{" "}
                <GoArrowUpRight
                  style={{
                    marginTop: "1px",
                    verticalAlign: "middle",
                    fontWeight: "700",
                  }}
                />
              </a>
            </div>
          </section>

          <section id="achievements" className="achievements-section">
            <div className="section-header">
              <motion.h2
                ref={Title.ref}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                Their Beliefs Made Us So Remarkable On Where We Are Now!
              </motion.h2>
              <motion.p
                ref={Text.ref}
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              >
                In the below institutions we are doing long run programs not an
                one or two days events. For detailed event list check our
                Instagram page.
              </motion.p>
            </div>
            <div className="carousel-wrapper">
              {colleges.map((college, idx) => {
                const position = idx - activeIndex;

                return (
                  <motion.div
                    key={idx}
                    className={`carousel-card ${position === 0 ? "carousel-card--active" : ""}`}
                    onClick={() => setActiveIndex(idx)}
                    initial={{
                      x: 0,
                      scale: 0.5,
                      opacity: 0,
                      borderRadius: "100px",
                    }}
                    whileInView={{
                      x: position * 260,
                      scale: position === 0 ? 1 : 0.8,
                      rotateY: position * -15,
                      transformPerspective: 1000,
                      opacity: Math.abs(position) > 2 ? 0 : 1,
                      filter: position === 0 ? "blur(0px)" : "blur(1.5px)",
                      borderRadius: position === 0 ? "20px" : "40px",
                      zIndex: 10 - Math.abs(position),
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 10,
                      mass: 0.1,
                      delay: idx * 0.1,
                    }}
                    style={{
                      backgroundImage: `url(${college.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
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
                          <a
                            href={college.link}
                            className="more-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View More →
                          </a>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="testimonial-section"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h3>Our Commitment Towards Mentorship Makes Us Unique</h3>
              <p>Learning in Action than thinking about it</p>
            </motion.div>
          </section>

          <section id="placements" className="placements-section-wrapper">
            <div className="section-header">
              <motion.h2
                ref={aboutTitle.ref}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                Our Graduates Pathway To Success
              </motion.h2>
              <motion.p
                ref={aboutText.ref}
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              >
                Full Stack Web Development Using MERN Stack In 15 Days -
                Students Momentous Transformations
              </motion.p>
            </div>
            <div className="placements-wrapper">
              <StudentPlacements />
            </div>
          </section>

          <TransformationSection isLight={isLight} />

          <footer className="footer">
            <h3>Better Tomorrow</h3>
            <div className="footer-content">
              <div className="footer-column">
                <div className="footer-links">
                  <h4>Reach us</h4>
                  <p>+91 9750503595</p>
                  <p>+91 8300287195</p>
                  <p>training@thebettertomorrow.in</p>
                </div>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#achievements">Achievements</a>
                <a href="#placements">Placement Status</a>
              </div>

              <div className="footer-column">
                <h4>Support</h4>
                <a href="#">Forums</a>
                <a href="#">JS Documentations</a>
                <a href="#">Quiz</a>
              </div>

              <div className="footer-column">
                <h4>Quick Links</h4>
                <a href="#">React JS</a>
                <a href="#">Node JS</a>
                <a href="#">Javascript</a>
                <a href="#">Feedback</a>
              </div>

              <div className="footer-column newsletter">
                <h4>JOIN OUR COMMUNITY</h4>
                <p>Will send you job updates and our community news</p>
                <div className="newsletter-form ">
                  <input type="email" placeholder="Your email" />
                  <button className="btn-2">Subscribe</button>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>
                © 2025 Better Tomorrow Training Institute. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      ) : (
        <RoadMap />
      )}
    </div>
  );
}

export default Home;
