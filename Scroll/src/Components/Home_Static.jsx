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
  FaCheckCircle,
  FaUsers,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";

function Home() {
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "light" : true;
  });

  const glowRef = useRef(null);
 


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



  const FeatureIcon = ({ type }) => {
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
            <h2 ref={Title.ref}>
              Their Beliefs Made Us So Remarkable On Where We Are Now!
            </h2>
            <p ref={Text.ref}>
              In the below institutions we are doing long run programs not an
              one or two days events. For detailed event list check our
              Instagram page.
            </p>
          </div>
          <motion.div
            className="carousel-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {colleges.map((college, idx) => {
              const position = idx - activeIndex;

              return (
                <motion.div
                  key={idx}
                  className={`carousel-card ${position === 0 ? "carousel-card--active" : ""}`}
                  onClick={() => setActiveIndex(idx)}
                  variants={{
                    hidden: {
                      x: position * 260,
                      scale: 0.88,
                      opacity: 0,
                      borderRadius: "50px",
                    },
                    visible: {
                      x: position * 260,
                      scale: position === 0 ? 1 : 0.8,
                      rotateY: position * -10,
                      transformPerspective: 1000,
                      opacity: Math.abs(position) > 2 ? 0 : 1,
                      filter: position === 0 ? "blur(0px)" : "blur(1.5px)",
                      borderRadius: position === 0 ? "20px" : "40px",
                      zIndex: 10 - Math.abs(position),
                      transition: {
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
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
          </motion.div>

       

          <motion.div
            className="testimonial-section"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="ts-sub-container">
              <h3>Our Commitment Towards Mentorship Makes Us Unique</h3>
              <p className="ts-sub">
                Learning in Action than thinking about it
              </p>
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
                  whileHover={{ y: -6, scale: 1.03 }}
                >
                  <div className="ts-feature-icon">
                    <FeatureIcon type={f.type} />
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
