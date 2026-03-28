import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import LightLogo from "../assets/download.png";
import DarkLogo from "../assets/altimg.png";
let headerAnimated = false;

export default function Header() {
  const [hasAnimated, setHasAnimated] = useState(headerAnimated);

  useEffect(() => {
    if (!headerAnimated) {
      headerAnimated = true;
      setHasAnimated(true);
    }
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark",
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsLight((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "light" : "dark");
      window.dispatchEvent(new Event("themechange"));
      return newTheme;
    });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);

    const handleRmScroll = (e) => setIsScrolled(e.detail.scrollTop > 80);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("rm-scroll", handleRmScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("rm-scroll", handleRmScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const isHome = location.pathname === "/";
  const isRoadmap = location.pathname === "/Roadmap";
  const isOnline = location.pathname === "/Programs";
  const isAbout = location.pathname === "/About_us";
  const isPlacement = location.pathname === "/Placement";
  const isContact = location.pathname === "/Contact_us";

  const navLinkStyle = (isActive) => ({
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "none",
    fontWeight: isActive ? "700" : "500",
    padding: "9px 18px",
    borderRadius: "30px",
    transition: "color 0.2s ease, background 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: isActive
      ? isLight
        ? "#053859"
        : "#f7c651"
      : isLight
        ? "#9ca8b8"
        : "rgba(255,255,255,0.45)",
    background: isActive
      ? isLight
        ? "rgba(5,56,89,0.07)"
        : "rgba(247,198,81,0.08)"
      : "transparent",
  });

  const navLinkHover = (e, isActive, light) => {
    if (isActive) return;
    e.currentTarget.style.color = light ? "#374151" : "rgba(255,255,255,0.65)";
    e.currentTarget.style.background = light
      ? "rgba(5,56,89,0.04)"
      : "rgba(255, 252, 246, 0.1)";
  };

  const navLinkLeave = (e, isActive, light) => {
    if (isActive) return;
    e.currentTarget.style.color = light ? "#9ca8b8" : "rgba(255,255,255,0.45)";
    e.currentTarget.style.background = "transparent";
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <motion.div
          className="logo-section"
          initial={hasAnimated ? false : { x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={isLight ? LightLogo : DarkLogo}
            alt="BT logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          {!isScrolled && (
            <div className="logo-text">
              <h1 onClick={() => navigate("/")}>Better Tomorrow</h1>
              <p onClick={() => navigate("/")}>
                Building Skills for the Future
              </p>
            </div>
          )}
        </motion.div>

        <motion.nav
          className="nav-menu"
          initial={hasAnimated ? false : { x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <a
            onClick={() => navigate("/")}
            style={navLinkStyle(isHome)}
            onMouseEnter={(e) => navLinkHover(e, isHome, isLight)}
            onMouseLeave={(e) => navLinkLeave(e, isHome, isLight)}
          >
            Home
          </a>

          <a
            onClick={() => navigate("/Programs")}
            style={navLinkStyle(isOnline)}
            onMouseEnter={(e) => navLinkHover(e, isOnline, isLight)}
            onMouseLeave={(e) => navLinkLeave(e, isOnline, isLight)}
          >
            Programs
          </a>

          <a
            onClick={() => navigate("/Placement")}
            style={navLinkStyle(isPlacement)}
            onMouseEnter={(e) => navLinkHover(e, isPlacement, isLight)}
            onMouseLeave={(e) => navLinkLeave(e, isPlacement, isLight)}
          >
            Placements
          </a>

          <a
            onClick={() => navigate("/Roadmap")}
            style={navLinkStyle(isRoadmap)}
            onMouseEnter={(e) => navLinkHover(e, isRoadmap, isLight)}
            onMouseLeave={(e) => navLinkLeave(e, isRoadmap, isLight)}
          >
            Road Map
          </a>

          <a
            onClick={() => navigate("/About_us")}
            style={navLinkStyle(isAbout)}
            onMouseEnter={(e) => navLinkHover(e, isAbout, isLight)}
            onMouseLeave={(e) => navLinkLeave(e, isAbout, isLight)}
          >
            About Us
          </a>
            <a
            onClick={() => navigate("/Contact_us")}
            style={navLinkStyle(isContact)}
            onMouseEnter={(e) => navLinkHover(e, isContact, isLight)}
            onMouseLeave={(e) => navLinkLeave(e, isContact, isLight)}
          >
            Contact Us
          </a>
        </motion.nav>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`ham-line ${menuOpen ? "open" : ""}`} />
          <span className={`ham-line ${menuOpen ? "open" : ""}`} />
          <span className={`ham-line ${menuOpen ? "open" : ""}`} />
        </button>

        <motion.div
          className="theme-toggle desktop-only-toggle"
          onClick={toggleTheme}
          initial={
            hasAnimated ? false : { scale: 0, opacity: 0, rotateY: -180 }
          }
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

      {menuOpen && (
        <motion.div
          className="mobile-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {[
            {
              label: "Home",
              isActive: isHome,
              action: () => scrollToSection("home"),
            },
            {
              label: "Programs",
              isActive: isOnline,
              action: () => navigate("/Programs"),
            },
            {
              label: "Placement",
              isActive: isPlacement,
              action: () => navigate("/Placement"),
            },
            
            {
              label: "Road Map",
              isActive: isRoadmap,
              action: () => navigate("/Roadmap"),
            },
            {
              label: "About Us",
              isActive: isAbout,
              action: () => navigate("/About_us"),
            },
              {
              label: "Contact Us",
              isActive: isContact,
              action: () => navigate("/Contact_us"),
            },
          ].map(({ label, isActive, action }) => (
            <a
              key={label}
              onClick={() => {
                action();
                setMenuOpen(false);
              }}
              style={{
                fontWeight: isActive ? "700" : "500",
                background: isActive
                  ? isLight
                    ? "rgba(5, 56, 89, 0.1)"
                    : "rgba(247, 198, 81, 0.12)"
                  : "transparent",
                color: isActive
                  ? isLight
                    ? "#053859"
                    : "#f7c651"
                  : isLight
                    ? "#053859"
                    : "#ffffff",
                borderRadius: "10px",
                padding: "10px 16px",
                display: "block",
                transition: "all 0.2s ease",
              }}
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
