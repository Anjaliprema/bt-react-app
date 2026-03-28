import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import "./Home_Static.css";
import emailjs from "@emailjs/browser";
const EMAIL = "training@thebettertomorrow.in";
const PHONES = ["+91 97505 03595", "+91 83002 87195"];
const WHATSAPP = "https://wa.me/919750503595";
const WEBSITE = "www.thebettertomorrow.in";
const SITE_URL = "https://www.thebettertomorrow.in";
const MAPS_URL =
  "https://maps.google.com/?q=The+Better+Tomorrow+Coimbatore+Tamil+Nadu";
const SERVICE_ID = "service_76bk7hy";
const TEMPLATE_ID = "template_ycqvkul";
const PUBLIC_KEY = "zKCJ0_FXcMlJ6k_NJ";

const PhoneIcon = ({ color, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>
);
const MailIcon = ({ color, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);
const WhatsAppIcon = ({ color, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);
const GlobeIcon = ({ color, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const PinIcon = ({ color, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.7"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ArrowIcon = ({ color, size = 13 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.2"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7,7 17,7 17,17" />
  </svg>
);

function LineCard({
  isLight,
  icon: Icon,
  label,
  line1,
  line2,
  href,
  delay,
  isLocation,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: isLocation ? true : false,
    amount: 0.3,
  });
  const [hov, setHov] = useState(false);

  const textPri = isLight ? "#0d1f38" : "#f0f0f0";
  const textMut = isLight ? "rgba(13,31,56,0.5)" : "rgba(240,240,240,0.45)";
  const border = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)";

  const iconBg = hov
    ? isLight
      ? "#074c7a"
      : "#f7c651"
    : isLight
      ? "rgba(7,76,122,0.08)"
      : "rgba(247,198,81,0.12)";

  const iconColor = hov
    ? isLight
      ? "#ffffff"
      : "#000000"
    : isLight
      ? "#074c7a"
      : "#f7c651";

  const arrowColor = hov ? (isLight ? "#074c7a" : "#f7c651") : textMut;

  const content = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 16px",
        borderBottom: `1px solid ${border}`,
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: iconBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.25s ease",
            textDecoration: "none",
          }}
        >
          <Icon color={iconColor} size={18} />
        </div>

        <div>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.1em",
              margin: 0,
              color: textMut,
              fontWeight: 700,
            }}
          >
            {label}
          </p>

          <p
            style={{
              fontSize: 14,
              fontWeight: 700,
              margin: "2px 0 0",
              color: textPri,
            }}
          >
            {line1}
          </p>

          {line2 && (
            <p
              style={{
                fontSize: 12,
                margin: 0,
                color: textMut,
              }}
            >
              {line2}
            </p>
          )}
        </div>
      </div>

      <div
        style={{
          opacity: hov ? 1 : 0,
          transform: hov ? "translateX(0)" : "translateX(-6px)",
          transition: "all 0.25s ease",
        }}
      >
        <ArrowIcon color={arrowColor} size={16} />
      </div>
    </motion.div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {content}
    </a>
  ) : (
    content
  );
}

function BigMapCard({ isLight }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.15 });
  const [hov, setHov] = useState(false);

  const accent = isLight ? "#074c7a" : "#f7c651";
  const muted = isLight ? "rgba(5,56,89,0.4)" : "rgba(247,198,81,0.4)";
  const divider = isLight ? "rgba(5,56,89,0.06)" : "rgba(255,255,255,0.05)";
  const tooltipBg = isLight ? "#fff" : "#0d1f38";
  const tooltipTx = isLight ? "#074c7a" : "#e8f2fc";
  const tooltipSb = isLight ? "#185FA5" : "#93b8d4";
  const mapBg = isLight ? "#f0ede6" : "#18181a";
  const roadCol = isLight ? "#e0dcd4" : "#2a2a2c";
  const bldgA = isLight ? "#c4c0b8" : "#333";
  const bldgB = isLight ? "#bcb8b0" : "#2e2e2e";

  const shadow = isLight
    ? "0 4px 8px rgba(0,0,0,0.02), 0 16px 40px rgba(7,76,122,0.09)"
    : "0 4px 8px rgba(0,0,0,0.4), 0 16px 40px rgba(0,0,0,0.5)";
  const shadowHov = isLight
    ? "0 8px 16px rgba(0,0,0,0.04), 0 28px 64px rgba(7,76,122,0.15)"
    : "0 8px 16px rgba(0,0,0,0.55), 0 28px 64px rgba(0,0,0,0.65)";

  const windows = [
    [240, 106, 16, 14],
    [262, 106, 16, 14],
    [284, 106, 16, 14],
    [306, 106, 16, 14],
    [240, 126, 16, 12],
    [262, 126, 16, 12],
    [284, 126, 16, 12],
    [306, 126, 16, 12],
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 24,
        background: isLight ? "#ffffff" : "#111111",
        boxShadow: hov ? shadowHov : shadow,
        transition: "box-shadow 0.35s ease, transform 0.25s ease",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          padding: "26px 28px 0",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 9,
              background: isLight
                ? "rgba(7,76,122,0.07)"
                : "rgba(247,198,81,0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PinIcon color={accent} size={13} />
          </div>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.13em",
              color: muted,
              fontFamily: "DM Sans, sans-serif",
              textTransform: "uppercase",
            }}
          >
            Find Us
          </span>
        </div>

        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: isLight
              ? "rgba(7,76,122,0.05)"
              : "rgba(247,198,81,0.07)",
            borderRadius: 20,
            padding: "5px 11px",
          }}
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.07em",
              color: accent,
            }}
          >
            11.0168°N · 76.9558°E
          </span>
        </motion.div>
      </div>

      <div style={{ flex: 1, overflow: "hidden", minHeight: 0, marginTop: 14 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 680 320"
          preserveAspectRatio="xMidYMid slice"
          style={{ display: "block" }}
        >
          <defs>
            <filter id="bwMapV3">
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncR type="linear" slope="0.88" intercept="0.06" />
                <feFuncG type="linear" slope="0.88" intercept="0.06" />
                <feFuncB type="linear" slope="0.88" intercept="0.06" />
              </feComponentTransfer>
            </filter>
            <radialGradient id="spotMapV3" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="rgba(247,198,81,0.2)" />
              <stop offset="100%" stopColor="rgba(247,198,81,0)" />
            </radialGradient>
            <radialGradient id="vigV3" cx="50%" cy="50%" r="70%">
              <stop offset="55%" stopColor="transparent" />
              <stop
                offset="100%"
                stopColor={
                  isLight ? "rgba(255,255,255,0.45)" : "rgba(17,17,17,0.55)"
                }
              />
            </radialGradient>
          </defs>
          <rect width="680" height="320" fill={mapBg} />
          <g filter="url(#bwMapV3)" opacity={isLight ? 0.6 : 0.3}>
            <rect x="0" y="72" width="680" height="20" fill={roadCol} />
            <rect x="0" y="160" width="680" height="20" fill={roadCol} />
            <rect x="0" y="248" width="680" height="20" fill={roadCol} />
            <rect x="72" y="0" width="20" height="320" fill={roadCol} />
            <rect x="192" y="0" width="20" height="320" fill={roadCol} />
            <rect x="354" y="0" width="20" height="320" fill={roadCol} />
            <rect x="514" y="0" width="20" height="320" fill={roadCol} />
            <rect x="100" y="14" width="80" height="50" rx="3" fill={bldgA} />
            <rect x="390" y="14" width="108" height="50" rx="3" fill={bldgB} />
            <rect x="100" y="106" width="80" height="46" rx="3" fill={bldgA} />
            <rect x="390" y="106" width="108" height="46" rx="3" fill={bldgB} />
            <rect x="100" y="190" width="80" height="50" rx="3" fill={bldgA} />
            <rect x="390" y="190" width="108" height="50" rx="3" fill={bldgB} />
            <rect x="536" y="190" width="66" height="50" rx="6" fill={bldgB} />
            <rect x="100" y="270" width="80" height="30" rx="3" fill={bldgA} />
          </g>
          <ellipse cx="289" cy="155" rx="130" ry="100" fill="url(#spotMapV3)" />
          <g>
            <rect
              x="218"
              y="110"
              width="142"
              height="72"
              rx="6"
              fill="#074c7a"
            />
            <rect
              x="225"
              y="117"
              width="128"
              height="58"
              rx="4"
              fill="#e8f2fc"
            />
            {windows.map(([x, y, w, h], i) => (
              <rect
                key={i}
                x={x}
                y={y + 10}
                width={w}
                height={h}
                rx="2"
                fill="#f7c651"
              />
            ))}
            <text
              x="289"
              y="130"
              textAnchor="middle"
              fontSize="7.5"
              fill="#f7c651"
              fontFamily="sans-serif"
              fontWeight="900"
              letterSpacing="0.5"
            >
              THE BETTER TOMORROW
            </text>
          </g>
          <path
            d="M80 290 Q140 275 200 255 Q255 235 278 190"
            stroke="#E24B4A"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="8 5"
            opacity="0.8"
          >
            <animate
              attributeName="strokeDashoffset"
              from="220"
              to="0"
              begin="0.3s"
              dur="1.2s"
              fill="freeze"
            />
          </path>
          <g>
            <ellipse cx="289" cy="195" rx="13" ry="5" fill="rgba(0,0,0,0.2)">
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="1.9s"
                dur="0.3s"
                fill="freeze"
              />
            </ellipse>
            <g opacity="0">
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="1.9s"
                dur="0.3s"
                fill="freeze"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,-16; 0,0; 0,-6; 0,0"
                begin="1.9s"
                dur="0.65s"
                fill="freeze"
              />
              <path
                d="M289 100 C268 100 250 118 250 138 C250 168 289 195 289 195 C289 195 328 168 328 138 C328 118 310 100 289 100Z"
                fill="#E24B4A"
              />
              <circle cx="289" cy="136" r="17" fill="#fff" />
              <text
                x="289"
                y="132"
                textAnchor="middle"
                fontSize="9"
                fill="#074c7a"
                fontFamily="sans-serif"
                fontWeight="900"
              >
                BT
              </text>
              <text
                x="289"
                y="143"
                textAnchor="middle"
                fontSize="7"
                fill="#185FA5"
                fontFamily="sans-serif"
              >
                HQ
              </text>
            </g>
          </g>
          <g opacity="0">
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              begin="2.8s"
              dur="0.5s"
              fill="freeze"
            />
            <rect
              x="320"
              y="82"
              width="200"
              height="76"
              rx="13"
              fill={tooltipBg}
              stroke="#074c7a"
              strokeWidth="2"
            />
            <path
              d="M322 106 L306 124 L336 106Z"
              fill={tooltipBg}
              stroke="#074c7a"
              strokeWidth="2"
            />
            <rect x="330" y="91" width="66" height="15" rx="7" fill="#074c7a" />
            <text
              x="363"
              y="102"
              textAnchor="middle"
              fontSize="8.5"
              fill="#f7c651"
              fontFamily="sans-serif"
              fontWeight="800"
            >
              HQ · PRIMARY
            </text>
            <text
              x="420"
              y="124"
              textAnchor="middle"
              fontSize="13"
              fill={tooltipTx}
              fontFamily="sans-serif"
              fontWeight="800"
            >
              The Better Tomorrow
            </text>
            <text
              x="420"
              y="142"
              textAnchor="middle"
              fontSize="11.5"
              fill={tooltipSb}
              fontFamily="sans-serif"
            >
              Coimbatore, Tamil Nadu
            </text>
          </g>
          <rect width="680" height="320" fill="url(#vigV3)" />
        </svg>
      </div>

      <div
        style={{
          padding: "13px 22px",
          borderTop: `1px solid ${divider}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          flexShrink: 0,
          background: isLight
            ? "rgba(255,255,255,0.92)"
            : "rgba(17,17,17,0.92)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              position: "relative",
              width: 14,
              height: 14,
              flexShrink: 0,
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: accent,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "20%",
                borderRadius: "50%",
                background: accent,
              }}
            />
          </div>
          <div>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 12,
                fontWeight: 800,
                color: accent,
                margin: 0,
                textDecoration: "none",
              }}
            >
              Coimbatore, Tamil Nadu
            </p>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 9,
                color: muted,
                margin: 0,
                letterSpacing: "0.04em",
              }}
            >
              Tamil Nadu · India
            </p>
          </div>
        </div>
        <motion.a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: isLight
              ? "linear-gradient(135deg,#074c7a,#185FA5)"
              : "linear-gradient(135deg,#f7c651,#e0a419)",
            color: isLight ? "#fff" : "#000",
            padding: "9px 18px",
            borderRadius: 30,
            textDecoration: "none",
            fontFamily: "DM Sans, sans-serif",
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          <PinIcon color={isLight ? "#fff" : "#000"} size={11} />
          Open in Maps
          <ArrowIcon color={isLight ? "#fff" : "#000"} size={10} />
        </motion.a>
      </div>
    </motion.div>
  );
}

const LINES = [
  {
    static: "We train you for",
    cycling: ["Dream Jobs", "Real Careers", "the Future"],
  },
  {
    static: "Learn from",
    cycling: ["Industry Experts", "Real Mentors", "the Best"],
  },
  {
    static: "Build skills that",
    cycling: ["Get You Hired", "Last a Lifetime", "Stand Out"],
  },
];
const INTERVAL = 2200;

function ContactModal({ isLight, title, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const accent = isLight ? "#074c7a" : "#f7c651";
  const textColor = isLight ? "#373738" : "#f0f0f0";
  const subColor = isLight ? "#5a6170" : "#9ba3af";
  const border = isLight ? "rgba(5,56,89,0.12)" : "rgba(247,198,81,0.12)";
  const muted = isLight ? "rgba(5,56,89,0.5)" : "rgba(242,237,228,0.45)";
  const themeA = isLight ? "#074c7a" : "#f7c651";
  const themeGrad = isLight
    ? "linear-gradient(135deg,#053759,#0a5c8fa8)"
    : "linear-gradient(135deg,#f7c651,#e0a419)";
  const inputBg = isLight ? "#f8f9fb" : "#1a1a22";

  const iStyle = {
    padding: "12px 14px",
    borderRadius: 10,
    border: `1px solid ${border}`,
    background: inputBg,
    color: textColor,
    fontFamily: "DM Sans, sans-serif",
    fontSize: 13.5,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    width: "100%",
    boxSizing: "border-box",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          course: form.course || "Not specified",
          message: form.message,
        },
        PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please email us at " + EMAIL);
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: isLight ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backdropFilter: "blur(4px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 36, scale: 0.97 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: isLight ? "#fff" : "#111",
          borderRadius: 24,
          padding: "40px 40px 36px",
          width: "100%",
          maxWidth: 500,
          position: "relative",
          boxShadow: isLight
            ? "0 8px 16px rgba(0,0,0,0.06),0 32px 80px rgba(7,76,122,0.18)"
            : "0 8px 16px rgba(0,0,0,0.6),0 32px 80px rgba(0,0,0,0.75)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: isLight
              ? "rgba(5,56,89,0.06)"
              : "rgba(255,255,255,0.08)",
            border: "none",
            cursor: "pointer",
            color: muted,
            fontSize: 14,
            padding: "6px 10px",
            borderRadius: 8,
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 240, damping: 16 }}
              style={{ fontSize: 52, marginBottom: 20 }}
            >
              🎉
            </motion.div>
            <h3
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 800,
                fontSize: 22,
                color: themeA,
                margin: "0 0 10px",
              }}
            >
              Message Sent!
            </h3>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 14,
                color: subColor,
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              Thank you for reaching out. We'll get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <h2
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 800,
                fontSize: 24,
                color: textColor,
                margin: "0 0 6px",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13.5,
                color: subColor,
                margin: "0 0 28px",
                lineHeight: 1.6,
                textDecoration: "none",
              }}
            >
              Fill in the details below and we'll reach out to you soon.
            </p>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                {[
                  { k: "name", p: "Full Name" },
                  { k: "phone", p: "Phone Number" },
                ].map(({ k, p }) => (
                  <input
                    key={k}
                    required
                    placeholder={p}
                    value={form[k]}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, [k]: e.target.value }))
                    }
                    onFocus={(e) => {
                      e.target.style.borderColor = themeA;
                      e.target.style.boxShadow = `0 0 0 3px ${isLight ? "rgba(7,76,122,0.08)" : "rgba(247,198,81,0.08)"}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = border;
                      e.target.style.boxShadow = "none";
                    }}
                    style={iStyle}
                  />
                ))}
              </div>
              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                onFocus={(e) => {
                  e.target.style.borderColor = themeA;
                  e.target.style.boxShadow = `0 0 0 3px ${isLight ? "rgba(7,76,122,0.08)" : "rgba(247,198,81,0.08)"}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = border;
                  e.target.style.boxShadow = "none";
                }}
                style={iStyle}
              />
              <input
                placeholder="Course Interested In (optional)"
                value={form.course}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, course: e.target.value }))
                }
                onFocus={(e) => {
                  e.target.style.borderColor = themeA;
                  e.target.style.boxShadow = `0 0 0 3px ${isLight ? "rgba(7,76,122,0.08)" : "rgba(247,198,81,0.08)"}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = border;
                  e.target.style.boxShadow = "none";
                }}
                style={iStyle}
              />
              <textarea
                required
                rows={4}
                placeholder="Your message or requirements..."
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                onFocus={(e) => {
                  e.target.style.borderColor = themeA;
                  e.target.style.boxShadow = `0 0 0 3px ${isLight ? "rgba(7,76,122,0.08)" : "rgba(247,198,81,0.08)"}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = border;
                  e.target.style.boxShadow = "none";
                }}
                style={{ ...iStyle, resize: "vertical" }}
              />
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={!sending ? { scale: 1.02, y: -1 } : {}}
                whileTap={!sending ? { scale: 0.98 } : {}}
                style={{
                  padding: "14px",
                  borderRadius: 30,
                  border: "none",
                  background: themeGrad,
                  color: isLight ? "#fff" : "#000",
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: sending ? "not-allowed" : "pointer",
                  opacity: sending ? 0.7 : 1,
                  transition: "opacity 0.2s",
                  marginTop: 4,
                }}
              >
                {sending ? "Sending…" : "Send Message →"}
              </motion.button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ContactUs() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark",
  );
  const [modal, setModal] = useState(null);
  const pageRef = useRef(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: false, amount: 0.5 });
  const [lineIdx, setLineIdx] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeout(() => {
        setWordIdx((prev) => {
          const n = (prev + 1) % LINES[lineIdx].cycling.length;
          if (n === 0) setLineIdx((l) => (l + 1) % LINES.length);
          return n;
        });
      }, 350);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [lineIdx]);

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

  const bg = isLight ? "#ffffff" : "#0a0a0a";
  const textColor = isLight ? "#373738" : "#f0f0f0";
  const accent = isLight ? "#074c7a" : "#f7c651";
  const muted = isLight ? "rgba(5,56,89,0.5)" : "rgba(242,237,228,0.45)";
  const subColor = isLight ? "#5a6170" : "#9ba3af";
  const themeA = isLight ? "#074c7a" : "#f7c651";
  const themeB = isLight ? "#0a5c8f" : "#e0a419";
  const themeGrad = isLight
    ? "linear-gradient(135deg,#053759,#0a5c8fa8)"
    : "linear-gradient(135deg,#f7c651,#e0a419)";
  const borderColor = isLight ? "rgba(5,56,89,0.12)" : "rgba(247,197,81,0.06)";
  const orbOpacity = isLight ? 0.1 : 0.16;

  const currentLine = LINES[lineIdx];
  const currentWord = currentLine.cycling[wordIdx];

  const miniCards = [
    {
      icon: PhoneIcon,
      iconBg: isLight ? "#074c7a" : "#1a1a2e",
      iconColor: "#ffffff",
      label: "Call Us",
      line1: PHONES[0],
      line2: PHONES[1],
      href: `tel:${PHONES[0].replace(/\s/g, "")}`,
      delay: 0,
    },
    {
      icon: MailIcon,
      iconBg: isLight ? "#185FA5" : "#0d2640",
      iconColor: "#ffffff",
      label: "Email Us",
      line1: "training@thebettertomorrow.in",
      line2: "We reply within 24 hours",
      href: `mailto:${EMAIL}`,
      delay: 0.08,
    },
    {
      icon: WhatsAppIcon,
      iconBg: "#25D366",
      iconColor: "#ffffff",
      label: "WhatsApp",
      line1: "Chat with us",
      line2: PHONES[0],
      href: WHATSAPP,
      delay: 0.16,
    },
    {
      icon: GlobeIcon,
      iconBg: isLight ? "#0a5c8f" : "#1a2e1a",
      iconColor: "#ffffff",
      label: "Website",
      line1: "thebettertomorrow.in",
      line2: " ",
      href: SITE_URL,
      delay: 0.24,
    },
  ];

  return (
    <div
      ref={pageRef}
      className={`op-page ${isLight ? "light-theme" : "dark-theme"}`}
      style={{ background: bg, color: textColor, minHeight: "100vh" }}
    >
      <Header />

      <section className="op-hero" style={{ position: "relative" }}>
        {[
          { w: 500, h: 500, t: -100, l: -200, c: themeA },
          { w: 400, h: 400, t: 0, r: -150, c: themeB, dur: "9.7s" },
          { w: 300, h: 300, b: 0, l: "30%", c: themeA, dur: "7.1s" },
        ].map((o, i) => (
          <div
            key={i}
            className="op-orb"
            style={{
              width: o.w,
              height: o.h,
              top: o.t,
              left: o.l,
              right: o.r,
              bottom: o.b,
              background: o.c,
              opacity: orbOpacity,
              animationDuration: o.dur,
            }}
          />
        ))}

        <div
          className="op-hero-content"
          style={{ position: "relative", zIndex: 1 }}
        >
          <h1
            className="op-title"
            style={{
              color: textColor,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.15em",
              lineHeight: 1.1,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentLine.static}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "block" }}
              >
                {currentLine.static}
              </motion.span>
            </AnimatePresence>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                minHeight: "1.2em",
                position: "relative",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    color: themeA,
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            className="op-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: subColor }}
          >
            Have questions about our programs or your future career path? Let's
            talk. Our team is ready to guide you toward a better tomorrow.
          </motion.p>

          <motion.div
            className="op-cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anjaliprema4321@gmail.com&su=New%20Course%20Enquiry%20-%20The%20Better%20Tomorrow&body=Hi%20Team%2C%0A%0A%2F%2F%2F%20Type%20your%20message%20here%0A/// Kindly%20mention%20your%20name%2C%20phone%20number%2C%20and%20the%20course%20you%27re%20interested%20in%20so%20we%20can%20get%20back%20to%20you%20quickly."
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button
                className="btn-2"
                style={{
                  background: themeGrad,
                  color: isLight ? "#fff" : "#000",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 16px",
                  borderRadius: "30px",
                  fontSize: "14px",
                  fontWeight: 600,
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 24px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(0,0,0,0.15)";
                }}
              >
                Enroll Now
              </button>
            </a>

            <button
              onClick={() => setModal("talk")}
              className="op-btn-secondary btn-2"
              style={{
                background: isLight
                  ? "rgba(5,56,89,0.05)"
                  : "rgba(255,255,255,0.07)",
                color: textColor,
                border: `1px solid ${borderColor}`,
                cursor: "pointer",
              }}
            >
              Talk to Us
            </button>
          </motion.div>
        </div>
      </section>

      <section
        style={{
          width: "100%",
          background: bg,
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
          padding: "30px clamp(16px,5vw,80px) 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 400,
            borderRadius: "50%",
            background: isLight
              ? "rgba(7,76,122,0.04)"
              : "rgba(14,76,160,0.16)",
            top: -100,
            right: -120,
            pointerEvents: "none",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: isLight
              ? "rgba(29,158,117,0.03)"
              : "rgba(247,198,81,0.05)",
            bottom: 40,
            left: -80,
            pointerEvents: "none",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            ref={headingRef}
            style={{
              textAlign: "center",
              paddingBottom: "3%",
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "clamp(28px,4vw,35px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                display: "inline-block",
              }}
            >
              {["Ways", "to"].map((word, wi) => (
                <motion.span
                  key={wi}
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                  animate={
                    headingInView
                      ? { opacity: 1, y: 0, filter: "blur(0px)" }
                      : { opacity: 0, y: 28, filter: "blur(6px)" }
                  }
                  transition={{
                    duration: 0.55,
                    delay: 0.1 + wi * 0.13,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: "inline-block",
                    color: textColor,
                    marginRight: "0.28em",
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                animate={
                  headingInView
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 28, filter: "blur(6px)" }
                }
                transition={{
                  duration: 0.55,
                  delay: 0.36,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  display: "inline-block",
                  marginRight: "0.28em",
                  position: "relative",
                }}
              >
                <span style={{ visibility: "hidden" }}>reach</span>
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    borderRadius: 4,
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <defs>
                      <clipPath id="rcV3">
                        <text
                          x="50%"
                          y="32"
                          textAnchor="middle"
                          fontFamily="DM Sans, sans-serif"
                          fontWeight="800"
                          fontSize="32"
                          letterSpacing="-0.5"
                        >
                          reach
                        </text>
                      </clipPath>
                    </defs>
                    <text
                      x="50%"
                      y="32"
                      textAnchor="middle"
                      fontFamily="DM Sans, sans-serif"
                      fontWeight="800"
                      fontSize="32"
                      letterSpacing="-0.5"
                      fill={
                        isLight
                          ? "rgba(7,76,122,0.15)"
                          : "rgba(247,198,81,0.15)"
                      }
                    >
                      reach
                    </text>
                    <motion.rect
                      x="0"
                      width="100"
                      height="40"
                      fill={themeA}
                      clipPath="url(#rcV3)"
                      animate={
                        headingInView ? { y: [40, 0, 0, 40] } : { y: 40 }
                      }
                      transition={
                        headingInView
                          ? {
                              duration: 3.2,
                              times: [0, 0.35, 0.75, 1],
                              ease: ["easeOut", "linear", "easeIn"],
                              repeat: Infinity,
                              repeatDelay: 0.4,
                              delay: 0.55,
                            }
                          : { duration: 0.4 }
                      }
                    />
                    <motion.g
                      clipPath="url(#rcV3)"
                      animate={
                        headingInView ? { y: [40, 0, 0, 40] } : { y: 40 }
                      }
                      transition={
                        headingInView
                          ? {
                              duration: 3.2,
                              times: [0, 0.35, 0.75, 1],
                              ease: ["easeOut", "linear", "easeIn"],
                              repeat: Infinity,
                              repeatDelay: 0.4,
                              delay: 0.55,
                            }
                          : { duration: 0.4 }
                      }
                    >
                      <motion.path
                        d="M-20 0 Q-5 -4 10 0 Q25 4 40 0 Q55 -4 70 0 Q85 4 100 0 Q115 -4 130 0 L130 40 L-20 40 Z"
                        fill={
                          isLight
                            ? "rgba(7,76,122,0.3)"
                            : "rgba(247,198,81,0.3)"
                        }
                        animate={{ x: [0, -40] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </motion.g>
                  </svg>
                </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                animate={
                  headingInView
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 28, filter: "blur(6px)" }
                }
                transition={{
                  duration: 0.55,
                  delay: 0.49,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: "inline-block", color: textColor }}
              >
                us
              </motion.span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.9fr",
              gap: 20,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {miniCards.map((card, i) => (
                <LineCard
                  key={i}
                  isLight={isLight}
                  {...card}
                  isLocation={card.label === "Location"}
                />
              ))}
            </div>

            <BigMapCard isLight={isLight} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              paddingTop: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13,
                color: muted,
              }}
            >
              Visit our website for more information
            </span>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: accent,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <GlobeIcon color={accent} size={13} />
              {WEBSITE}
              <ArrowIcon color={accent} size={11} />
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {modal && (
          <ContactModal
            key="modal"
            isLight={isLight}
            title={modal === "enroll" ? "Enroll Now" : "Talk to Us"}
            onClose={() => setModal(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
