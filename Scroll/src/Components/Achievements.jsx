import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home_Static.css";

export default function Achievements() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark"
  );
  const pageRef = useRef(null);

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
        new CustomEvent("rm-scroll", { detail: { scrollTop: page.scrollTop } })
      );
    };
    page.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      page.removeEventListener("scroll", onScroll);
      window.dispatchEvent(
        new CustomEvent("rm-scroll", { detail: { scrollTop: 0 } })
      );
    };
  }, []);

  const bg        = isLight ? "#f5f7fa" : "#0a0a0a";
  const textColor = isLight ? "#373738" : "#f0f0f0";

  return (
    <div
      ref={pageRef}
      className={`op-page ${isLight ? "light-theme" : "dark-theme"}`}
      style={{ background: bg, color: textColor }}
    >
      <Header />

      <main style={{ minHeight: "60vh", padding: "100px 24px 40px" }}>
        <h1>Achievements</h1>
      </main>

      <Footer />
    </div>
  );
}