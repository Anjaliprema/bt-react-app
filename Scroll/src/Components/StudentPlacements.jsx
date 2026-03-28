import "./StudentPlacements.css";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
const students = [
  {
    name: "Arun Kumar",
    company: "TCS",
    role: "Software Engineer",
    batch: "2023",
    package: "₹6 LPA",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    company: "Infosys",
    role: "Frontend Developer",
    batch: "2022",
    package: "₹8 LPA",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Das",
    company: "Zoho",
    role: "Backend Developer",
    batch: "2023",
    package: "₹12 LPA",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Joseph",
    company: "Google",
    role: "Data Scientist",
    batch: "2024",
    package: "₹22 LPA",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "James",
    company: "Zoho",
    role: "Frontend Developer",
    batch: "2024",
    package: "₹10 LPA",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Pradeep",
    company: "Infosys",
    role: "UI/UX Designer",
    batch: "2025",
    package: "₹8 LPA",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Kamal",
    company: "Amazon",
    role: "SDE",
    batch: "2025",
    package: "₹18 LPA",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Vimal",
    company: "Infosys",
    role: "AI Engineer",
    batch: "2025",
    package: "₹17 LPA",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];

function StudentPlacements() {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const pauseRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    const speed = 0.35;

    const loop = () => {
      if (!pauseRef.current) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;

    const onScroll = () => {
      const card = container.querySelector(".card");
      if (!card) return;

      const cardWidth = card.offsetWidth + 20;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(index % students.length);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollByCard = (dir) => {
    const card = scrollRef.current.querySelector(".card");
    if (!card) return;

    pauseRef.current = true;

    scrollRef.current.scrollBy({
      left: dir * (card.offsetWidth + 20),
      behavior: "smooth",
    });

    setTimeout(() => {
      pauseRef.current = false;
    }, 600);
  };

  const scrollToIndex = (index) => {
    const card = scrollRef.current.querySelector(".card");
    pauseRef.current = true;

    scrollRef.current.scrollTo({
      left: index * (card.offsetWidth + 20),
      behavior: "smooth",
    });

    setTimeout(() => {
      pauseRef.current = false;
    }, 600);
  };

  return (
    <div className="placements-section">
      <div className="row">
        <span className="arrow" onClick={() => scrollByCard(-1)}>
          &#8249;
        </span>

        <div
          className="scroll-container"
          ref={scrollRef}
          onMouseEnter={() => (pauseRef.current = true)}
          onMouseLeave={() => (pauseRef.current = false)}
        >
          <motion.div
            className="scroll-track"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            {[...students, ...students].map((s, i) => (
              <div
                className={`card ${i % students.length === activeIndex ? "active-card" : ""}`}
                key={i}
              >
                <div className="image-container">
                  <img src={s.img} className="student-image" alt={s.name} />
                  <div className="package">{s.package}</div>
                  <div className="student-name">{s.name}</div>
                </div>
                <hr />
                <div className="belowimgcontent">
                  <p className="cmp">{s.company}</p>
                  <p className="rol">{s.role}</p>
                  <p className="bat">Batch {s.batch}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <span className="arrow" onClick={() => scrollByCard(1)}>
          &#8250;
        </span>
      </div>

      <div className="dots">
        {students.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentPlacements;
