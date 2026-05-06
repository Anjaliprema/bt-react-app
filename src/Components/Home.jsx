import StudentPlacements from "../StudentPlacements";
import "./Home.css";
import LightLogo from "./assets/download.png";
import DarkLogo from "./assets/altimg.png";
import { useState, useEffect, useRef } from "react";
import {
  FaMoon,
  FaSun,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";
import RoadMap from "../RoadMap";
import { initAllAnimations } from "../animations";

class Particle {
  constructor(canvas, ctx, isLight) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.isLight = isLight;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.z = Math.random() * 1000;
    this.size = Math.random() * 2 + 1;
    this.speed = Math.random() * 0.5 + 0.1;
  }

  update() {
    this.z -= this.speed;
    if (this.z <= 0) this.reset();
  }

  draw() {
    const ctx = this.ctx;
    const canvas = this.canvas;
    const x = (this.x - canvas.width / 2) * (1000 / this.z) + canvas.width / 2;
    const y =
      (this.y - canvas.height / 2) * (1000 / this.z) + canvas.height / 2;
    const size = this.size * (1000 / this.z);

    if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
      ctx.fillStyle = this.isLight
        ? `rgba(5, 56, 89, ${0.3 * (1000 / this.z)})`
        : `rgba(247, 198, 81, ${0.4 * (1000 / this.z)})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

class FloatingShape {
  constructor(canvas, ctx, isLight) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.isLight = isLight;
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.size = Math.random() * 100 + 50;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.01;
    this.opacity = Math.random() * 0.1 + 0.05;
  }

  update() {
    const canvas = this.canvas;
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;

    if (this.x < -this.size) this.x = canvas.width + this.size;
    if (this.x > canvas.width + this.size) this.x = -this.size;
    if (this.y < -this.size) this.y = canvas.height + this.size;
    if (this.y > canvas.height + this.size) this.y = -this.size;
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = this.isLight
      ? `rgba(5, 56, 89, ${this.opacity})`
      : `rgba(247, 198, 81, ${this.opacity})`;

    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.7);
    ctx.restore();
  }
}

function Home() {
  const [isLight, setIsLight] = useState(false);
  const [page, setPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  useEffect(() => {
    initAllAnimations();
  }, []);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from(
      { length: 150 },
      () => new Particle(canvas, ctx, isLight),
    );
    const shapes = Array.from(
      { length: 8 },
      () => new FloatingShape(canvas, ctx, isLight),
    );

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        shape.update();
        shape.draw();
      });

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLight]);

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
    },
    {
      name: "Kongu Engineering College, Perundurai",
      program: "Mern stack Training",
    },
    {
      name: "Sri Eswar College Of Engineering, Coimbatore",
      program: "Mern stack training",
    },
    {
      name: "Perumal Manimegalai College, Hosur",
      program: "Introduction on DSA and Data Science Workshop",
    },
    {
      name: "Bannari Amman Institute Of Technology, Erode",
      program: "Data cleaning and pre processing using Tableau",
    },
    {
      name: "Kongu Engineering College, Perundurai",
      program: "Advance Java Training",
    },
    {
      name: "M. Kumarasamy College Of Engineering, Karur",
      program: "Programming expertise in Java",
    },
  ];

  const programs = [
    {
      title: "Programming Expertise",
      description: "Master core programming fundamentals",
    },
    {
      title: "Practical Expertise",
      description: "Hands-on real-world projects",
    },
    {
      title: "Product Expertise",
      description: "Build production-ready applications",
    },
    {
      title: "Domain Expertise",
      description: "Specialized industry knowledge",
    },
  ];

  return (
    <div className={isLight ? "light-theme" : "dark-theme"}>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-content">
          <div className="logo-section">
            <img
              src={isLight ? LightLogo : DarkLogo}
              alt="BT logo"
              className="logo-img"
            />
            <div className="logo-text">
              <h1 onClick={() => setPage("home")}>
                Better Tomorrow Training Institute
              </h1>
              <p>Building Skills for the Future</p>
            </div>
          </div>

          <nav className="nav-menu">
            <a onClick={() => scrollToSection("home")} className="nav-link">
              Home
            </a>
            <a onClick={() => scrollToSection("programs")} className="nav-link">
              Programs
            </a>
            <a
              onClick={() => scrollToSection("achievements")}
              className="nav-link"
            >
              Achievements
            </a>
            <a
              onClick={() => scrollToSection("placements")}
              className="nav-link"
            >
              Placements
            </a>
            <a onClick={() => scrollToSection("about")} className="nav-link">
              About
            </a>
            <a
              onClick={() => setPage("roadmap")}
              className="roadmap-btn magnetic-btn"
            >
              <span>Road Map</span>
            </a>
          </nav>

          <div className="theme-toggle magnetic-btn" onClick={toggleTheme}>
            {isLight ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </header>

      {page === "home" ? (
        <main className="main-content">
          <section id="home" className="hero-section">
            <canvas ref={canvasRef} className="hero-canvas"></canvas>
            <div
              className="hero-content"
              style={{
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              }}
            >
              <div className="hero-text">
                <h2 className="hero-title glitch-text">
                  Education is not the learning of facts, but the training of
                  the mind to think
                </h2>
                <p className="hero-subtitle fade-in-up">
                  Empowering independent learning fueled by senior developers
                  from leading MNCs. We provide problem statements, foster a
                  comfortable environment, and track individual progress for
                  optimal growth.
                </p>
                <button
                  className="cta-button magnetic-btn pulse-btn"
                  onClick={() => scrollToSection("programs")}
                >
                  <span className="btn-text">Get Started</span>
                  <FaArrowRight className="btn-icon" />
                  <span className="btn-glow"></span>
                </button>
              </div>
            </div>
            <div className="scroll-indicator">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
            </div>
          </section>

          <section className="stats-section animate-on-scroll">
            <div className="stats-container">
              <div className="stat-card" style={{ animationDelay: "0.1s" }}>
                <div className="stat-icon rotate-on-hover">
                  <FaChartLine />
                </div>
                <h3 className="count-up" data-target="6">
                  0
                </h3>
                <p>LPA Average Dream Job CTC</p>
              </div>
              <div className="stat-card" style={{ animationDelay: "0.2s" }}>
                <div className="stat-icon rotate-on-hover">
                  <FaBriefcase />
                </div>
                <h3 className="count-up" data-target="200">
                  0
                </h3>
                <p>+ Product Offers</p>
              </div>
              <div className="stat-card" style={{ animationDelay: "0.3s" }}>
                <div className="stat-icon rotate-on-hover">
                  <FaUsers />
                </div>
                <h3 className="count-up" data-target="5000">
                  0
                </h3>
                <p>+ Job Opportunities</p>
              </div>
              <div className="stat-card" style={{ animationDelay: "0.4s" }}>
                <div className="stat-icon rotate-on-hover">
                  <FaCheckCircle />
                </div>
                <h3 className="count-up" data-target="24">
                  0
                </h3>
                <p>LPA Highest Package</p>
              </div>
            </div>
          </section>

          <section id="about" className="about-section animate-on-scroll">
            <div className="section-header">
              <h2 className="slide-in-text">
                Blaze A Trail On Our Pathway To Turbocharge Your Tech Career!
              </h2>
              <p className="fade-in-up">
                At Better Tomorrow, we immerse budding talents in live
                industrial projects and real-world problem-solving. We fortify
                their confidence with a solid foundation in industry essentials.
              </p>
            </div>

            <div className="pillars-grid">
              <div
                className="pillar-card tilt-card"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="card-number">01</div>
                <h3>Adaptive Training</h3>
                <p>
                  Rather than imposing a fixed syllabus, we tailor our approach
                  to each student's unique learning journey. Our proprietary
                  tool conducts daily assessments and generates progress charts,
                  providing you with detailed statistical reports and live
                  tracking of each student's results.
                </p>
              </div>
              <div
                className="pillar-card tilt-card"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="card-number">02</div>
                <h3>Curve Technique</h3>
                <p>
                  Our teaching methodology departs from traditional lecturing.
                  We integrate engaging activities and hands-on practical
                  sessions to enhance comprehension. Encouraging students to
                  think critically and engage in open dialogue, we create an
                  environment for the exchange of ideas and insights.
                </p>
              </div>
              <div
                className="pillar-card tilt-card"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="card-number">03</div>
                <h3>Developers - Mentors</h3>
                <p>
                  Our in-house trainers are seasoned industry experts who have
                  excelled in interviews with their vast expertise. At Better
                  Tomorrow, our product engineers have meticulously crafted an
                  immersive training plan, backed by an extensive repository of
                  interview questions.
                </p>
              </div>
            </div>
          </section>

          <section id="programs" className="programs-section animate-on-scroll">
            <div className="section-header">
              <h2 className="slide-in-text">
                Extensive Programs From Domain Experts That Meets Industry
                Expectations
              </h2>
            </div>

            <div className="programs-grid">
              {programs.map((program, idx) => (
                <div
                  key={idx}
                  className="program-card flip-card"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h3>{program.title}</h3>
                      <div className="card-icon">📚</div>
                    </div>
                    <div className="flip-card-back">
                      <p>{program.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="featured-programs">
              <div className="featured-card shimmer-card">
                <div className="shimmer"></div>
                <h3>Full Stack Web Development</h3>
                <p>Complete MERN Stack mastery</p>
              </div>
              <div className="featured-card shimmer-card">
                <div className="shimmer"></div>
                <h3>Skillhub360</h3>
                <p>
                  Strong Foundation - Any programming language/Framework from
                  fundamentals
                </p>
              </div>
            </div>
          </section>

          <section
            id="placements"
            className="placements-section-wrapper animate-on-scroll"
          >
            <div className="section-header">
              <h2 className="slide-in-text">
                Our Graduates Pathway To Success
              </h2>
              <p className="fade-in-up">
                Full Stack Web Development Using MERN Stack In 15 Days -
                Students Momentous Transformations
              </p>
            </div>
            <div className="placements-wrapper">
              <StudentPlacements />
            </div>
          </section>

          <section
            id="achievements"
            className="achievements-section animate-on-scroll"
          >
            <div className="section-header">
              <h2 className="slide-in-text">
                Their Beliefs Made Us So Remarkable On Where We Are Now!
              </h2>
              <p className="fade-in-up">
                In the below institutions we are doing long run programs not one
                or two days events.
              </p>
            </div>

            <div className="colleges-grid">
              {colleges.map((college, idx) => (
                <div
                  key={idx}
                  className="college-card slide-up-card"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="college-icon">🎓</div>
                  <h4>{college.name}</h4>
                  <p>{college.program}</p>
                </div>
              ))}
            </div>

            <div className="testimonial-section pulse-glow">
              <h3>Our Commitment Towards Mentorship Makes Us Unique</h3>
              <p>Learning in Action than thinking about it</p>
            </div>
          </section>

          <section className="transformation-section animate-on-scroll">
            <div className="transformation-content">
              <div className="transform-card morph-card">
                <h3>Before Session</h3>
                <p>Basic understanding and limited practical exposure</p>
              </div>
              <div className="arrow-connector bounce-arrow">→</div>
              <div className="transform-card morph-card">
                <h3>After Session</h3>
                <p>Industry-ready professional with hands-on experience</p>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-content">
              <div className="footer-column fade-in-up">
                <h3>Better Tomorrow</h3>
                <div className="footer-links">
                    <h4 style={{margin:"0px"}}>Reach us</h4>
                  <p>+91 9750503595</p>
                  <p>+91 8300287195</p>
                  <p>training@thebettertomorrow.in</p>
                </div>
              </div>

              <div
                className="footer-column fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#achievements">Achievements</a>
                <a href="#placements">Placement Status</a>
              </div>

              <div
                className="footer-column fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h4>Support</h4>
                <a href="#">Forums</a>
                <a href="#">JS Documentations</a>
                <a href="#">Quiz</a>
              </div>

              <div
                className="footer-column fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <h4>Quick Links</h4>
                <a href="#">React JS</a>
                <a href="#">Node JS</a>
                <a href="#">Javascript</a>
                <a href="#">Feedback</a>
              </div>

              <div
                className="footer-column newsletter fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <h4>JOIN OUR COMMUNITY</h4>
                <p>Will send you job updates and our community news</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Your email" />
                  <button className="magnetic-btn">Subscribe</button>
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
