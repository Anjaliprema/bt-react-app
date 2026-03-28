import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const API_URL = "http://localhost:5000";
const EMAIL = "anjaliprema4321@gmail.com";

const COURSES = [
  "Full Stack Development",
  "Data Science & AI",
  "Digital Marketing",
  "UI/UX Design",
  "Cloud Computing",
  "Cyber Security",
  "Other",
];

export default function EnrollPage() {
  const navigate = useNavigate();
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark"
  );
  const [form, setForm] = useState({
    name: "", email: "", phone: "", course: "", qualification: "", message: "",
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const h = () => setIsLight(localStorage.getItem("theme") !== "dark");
    window.addEventListener("themechange", h);
    return () => window.removeEventListener("themechange", h);
  }, []);

  const bg         = isLight ? "#ffffff" : "#0a0a0a";
  const textColor  = isLight ? "#1a1a2e" : "#f0f0f0";
  const subColor   = isLight ? "#5a6170" : "#9ba3af";
  const cardBg     = isLight ? "#ffffff" : "#111111";
  const inputBg    = isLight ? "#f8f9fb" : "#1a1a22";
  const border     = isLight ? "rgba(5,56,89,0.12)" : "rgba(247,198,81,0.12)";
  const themeA     = isLight ? "#074c7a" : "#f7c651";
  const themeGrad  = isLight
    ? "linear-gradient(135deg,#053759,#0a5c8f)"
    : "linear-gradient(135deg,#f7c651,#e0a419)";
  const shadow     = isLight
    ? "0 8px 16px rgba(0,0,0,0.06), 0 32px 80px rgba(7,76,122,0.12)"
    : "0 8px 16px rgba(0,0,0,0.6), 0 32px 80px rgba(0,0,0,0.7)";

  const iStyle = {
    padding: "13px 16px",
    borderRadius: 12,
    border: `1.5px solid ${border}`,
    background: inputBg,
    color: textColor,
    fontFamily: "DM Sans, sans-serif",
    fontSize: 14,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const focus = (e) => {
    e.target.style.borderColor = themeA;
    e.target.style.boxShadow = `0 0 0 3px ${isLight ? "rgba(7,76,122,0.08)" : "rgba(247,198,81,0.08)"}`;
  };
  const blur = (e) => {
    e.target.style.borderColor = border;
    e.target.style.boxShadow = "none";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          course: form.course || "Not specified",
          message: `Qualification: ${form.qualification}\n\n${form.message}`,
          type: "enroll",
        }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else setError("Something went wrong. Please email us at " + EMAIL);
    } catch {
      setError("Something went wrong. Please email us at " + EMAIL);
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ background: bg, minHeight: "100vh", color: textColor }}>
      <Header />

      <div
        style={{
          background: themeGrad,
          padding: "60px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {[
          { w: 300, h: 300, top: -80, left: -80 },
          { w: 200, h: 200, top: 20, right: -60 },
        ].map((s, i) => (
          <div key={i} style={{
            position: "absolute",
            width: s.w, height: s.h,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            top: s.top, left: s.left, right: s.right,
          }} />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <span style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.15)",
            color: isLight ? "#fff" : "#000",
            padding: "6px 18px",
            borderRadius: 30,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            marginBottom: 16,
            fontFamily: "DM Sans, sans-serif",
          }}>
            ENROLLMENT FORM
          </span>
          <h1 style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 900,
            color: isLight ? "#ffffff" : "#000000",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}>
            Start Your Journey Today
          </h1>
          <p style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: 16,
            color: isLight ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.7)",
            margin: 0,
            maxWidth: 480,
            marginInline: "auto",
            lineHeight: 1.6,
          }}>
            Fill in your details below and our team will reach out within 24 hours.
          </p>
        </motion.div>
      </div>

      {/* Form card */}
      <div style={{
        maxWidth: 620,
        marginInline: "auto",
        padding: "0 24px 80px",
        marginTop: -40,
        position: "relative",
        zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: cardBg,
            borderRadius: 24,
            padding: "40px 36px",
            boxShadow: shadow,
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 240, damping: 16 }}
                style={{ fontSize: 64, marginBottom: 20 }}
              >
                🎉
              </motion.div>
              <h2 style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 800, fontSize: 26,
                color: themeA, margin: "0 0 12px",
              }}>
                Enrollment Submitted!
              </h2>
              <p style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 15, color: subColor,
                lineHeight: 1.7, margin: "0 0 32px",
              }}>
                Thank you <strong>{form.name}</strong>! We've received your enrollment request and will contact you shortly.
              </p>
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/")}
                style={{
                  background: themeGrad,
                  color: isLight ? "#fff" : "#000",
                  border: "none",
                  padding: "13px 32px",
                  borderRadius: 30,
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 14, fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                ← Back to Home
              </motion.button>
            </div>
          ) : (
            <>
              <h2 style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 800, fontSize: 22,
                color: textColor, margin: "0 0 6px",
              }}>
                Personal Details
              </h2>
              <p style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13.5, color: subColor,
                margin: "0 0 28px", lineHeight: 1.6,
              }}>
                All fields marked * are required.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {[
                    { k: "name", p: "Full Name *", type: "text", req: true },
                    { k: "phone", p: "Phone Number *", type: "tel", req: true },
                  ].map(({ k, p, type, req }) => (
                    <div key={k}>
                      <label style={{
                        display: "block", fontSize: 11, fontWeight: 700,
                        letterSpacing: "0.08em", color: themeA,
                        fontFamily: "DM Sans, sans-serif",
                        textTransform: "uppercase", marginBottom: 6,
                      }}>
                        {p}
                      </label>
                      <input
                        required={req} type={type}
                        placeholder={p.replace(" *", "")}
                        value={form[k]}
                        onChange={e => setForm(prev => ({ ...prev, [k]: e.target.value }))}
                        onFocus={focus} onBlur={blur}
                        style={iStyle}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{
                    display: "block", fontSize: 11, fontWeight: 700,
                    letterSpacing: "0.08em", color: themeA,
                    fontFamily: "DM Sans, sans-serif",
                    textTransform: "uppercase", marginBottom: 6,
                  }}>
                    Email Address *
                  </label>
                  <input
                    required type="email" placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                    onFocus={focus} onBlur={blur}
                    style={iStyle}
                  />
                </div>

                <div>
                  <label style={{
                    display: "block", fontSize: 11, fontWeight: 700,
                    letterSpacing: "0.08em", color: themeA,
                    fontFamily: "DM Sans, sans-serif",
                    textTransform: "uppercase", marginBottom: 6,
                  }}>
                    Course Interested In *
                  </label>
                  <select
                    required
                    value={form.course}
                    onChange={e => setForm(prev => ({ ...prev, course: e.target.value }))}
                    onFocus={focus} onBlur={blur}
                    style={{ ...iStyle, appearance: "none", cursor: "pointer" }}
                  >
                    <option value="">Select a course...</option>
                    {COURSES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{
                    display: "block", fontSize: 11, fontWeight: 700,
                    letterSpacing: "0.08em", color: themeA,
                    fontFamily: "DM Sans, sans-serif",
                    textTransform: "uppercase", marginBottom: 6,
                  }}>
                    Highest Qualification
                  </label>
                  <input
                    type="text" placeholder="e.g. B.E, MBA, 12th Grade..."
                    value={form.qualification}
                    onChange={e => setForm(prev => ({ ...prev, qualification: e.target.value }))}
                    onFocus={focus} onBlur={blur}
                    style={iStyle}
                  />
                </div>

                <div>
                  <label style={{
                    display: "block", fontSize: 11, fontWeight: 700,
                    letterSpacing: "0.08em", color: themeA,
                    fontFamily: "DM Sans, sans-serif",
                    textTransform: "uppercase", marginBottom: 6,
                  }}>
                    Any Questions / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals or any questions you have..."
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    onFocus={focus} onBlur={blur}
                    style={{ ...iStyle, resize: "vertical" }}
                  />
                </div>

                {error && (
                  <p style={{
                    color: "#e24b4a", fontSize: 13,
                    fontFamily: "DM Sans, sans-serif", margin: 0,
                  }}>
                    {error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={!sending ? { scale: 1.02, y: -1 } : {}}
                  whileTap={!sending ? { scale: 0.98 } : {}}
                  style={{
                    padding: "15px",
                    borderRadius: 30,
                    border: "none",
                    background: sending ? "#ccc" : themeGrad,
                    color: isLight ? "#fff" : "#000",
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: 15, fontWeight: 800,
                    cursor: sending ? "not-allowed" : "pointer",
                    marginTop: 8,
                    letterSpacing: "0.02em",
                  }}
                >
                  {sending ? "Submitting…" : "Submit Enrollment →"}
                </motion.button>

              </form>
            </>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}