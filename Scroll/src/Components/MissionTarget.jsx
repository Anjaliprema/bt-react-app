import React, { useEffect, useRef, useState } from "react";

const MissionTarget = ({ width = "100%", isDark = true }) => {
  const [triggered, setTriggered] = useState(false);
  const [clear, setClear] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
          setTimeout(() => setClear(true), 1200);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const gapColor = isDark ? "#0d1a22" : "#e8c8c8";
  const dotBg = isDark ? "#0d1a22" : "#9a1a1a";
  const ringDark = isDark ? "#1a5a7a" : "#9a1a1a";
  const ringMid = isDark ? "#2a9fd0" : "#e03030";
  const ringLight = isDark ? "#70d0f0" : "#f08080";

  const css = triggered
    ? `
    #r3o,#r3i,#r3s{animation:draw3 0.5s ease forwards .1s}
    #r2o,#r2i,#r2s{animation:draw2 0.5s ease forwards 0.7s}
    #r1o,#r1i,#r1s{animation:draw1 0.5s ease forwards 1.2s}
    #cdot{opacity:0;animation:pop .3s ease forwards 1.2s}
    #stand{opacity:0;animation:pop .4s ease forwards 1.3s}
    #arrow-grp{opacity:0;animation:arrowFly .9s cubic-bezier(.2,.8,.3,1) forwards 2s}    
    @keyframes draw3{from{stroke-dashoffset:817}to{stroke-dashoffset:0}}
    @keyframes draw2{from{stroke-dashoffset:597}to{stroke-dashoffset:0}}
    @keyframes draw1{from{stroke-dashoffset:377}to{stroke-dashoffset:0}}
    @keyframes pop{to{opacity:1}}
    @keyframes arrowFly{
      0%{opacity:0;transform:translate(180px,-180px)}
      25%{opacity:1}
      100%{opacity:1;transform:translate(0,0)}
    }
  `
    : `
    #r3o,#r3i,#r3s{ stroke-dashoffset:817; }
    #r2o,#r2i,#r2s{ stroke-dashoffset:597; }
    #r1o,#r1i,#r1s{ stroke-dashoffset:377; }
    #cdot{ opacity:0; }
    #stand{ opacity:0; }
    #arrow-grp{ opacity:0; }
  `;

  return (
    <div
      style={{
        width,
        position: "relative",
        maxWidth: "320px",
        margin: "0 auto",
      }}
    >
      {" "}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: clear
            ? "blur(0px)"
            : triggered
              ? "blur(1px)"
              : "blur(0px)",
          WebkitBackdropFilter: clear
            ? "blur(0px)"
            : triggered
              ? "blur(1px)"
              : "blur(0px)",
          transition: clear
            ? "backdrop-filter 1.2s ease, opacity 1.2s ease"
            : "none",
          opacity: clear ? 0 : triggered ? 1 : 0,
          pointerEvents: "none",
          zIndex: 2,
          borderRadius: "50%",
        }}
      />
      <svg
        ref={svgRef}
        width="100%"
        viewBox="170 100 340 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: clear ? "blur(0px)" : triggered ? "blur(1px)" : "blur(0px)",
          transition: clear ? "filter 1.4s cubic-bezier(0.16,1,0.3,1)" : "none",
          display: "block",
        }}
      >
        <defs>
          <style>{css}</style>
        </defs>

        <g id="stand">
          <polygon points="252,377 244,377 218,462 226,462" fill="#6b3e1a" />
          <polygon points="252,377 248,377 222,462 224,462" fill="#8a5528" />
          <polygon points="244,377 242,377 218,462 218,462" fill="#4a2a0e" />
          <polygon points="428,377 436,377 462,462 454,462" fill="#6b3e1a" />
          <polygon points="428,377 432,377 458,462 456,462" fill="#8a5528" />
          <polygon points="436,377 438,377 462,462 462,462" fill="#4a2a0e" />
          <polygon points="208,462 234,462 236,470 206,470" fill="#5a3210" />
          <polygon
            points="208,462 234,462 234,466 208,466"
            fill="#7a4e28"
            opacity="0.8"
          />
          <polygon points="446,462 472,462 474,470 444,470" fill="#5a3210" />
          <polygon
            points="446,462 472,462 472,466 446,466"
            fill="#7a4e28"
            opacity="0.8"
          />
          <rect x="240" y="372" width="16" height="9" rx="2" fill="#3a3a3a" />
          <rect x="241" y="373" width="14" height="4" rx="1" fill="#606060" />
          <circle cx="244" cy="377" r="1.5" fill="#909090" />
          <circle cx="252" cy="377" r="1.5" fill="#909090" />
          <rect x="424" y="372" width="16" height="9" rx="2" fill="#3a3a3a" />
          <rect x="425" y="373" width="14" height="4" rx="1" fill="#606060" />
          <circle cx="428" cy="377" r="1.5" fill="#909090" />
          <circle cx="436" cy="377" r="1.5" fill="#909090" />
        </g>

        <g>
          <circle
            id="r3o"
            cx="340"
            cy="285"
            r="130"
            fill="none"
            stroke={ringDark}
            strokeWidth="22"
            strokeDasharray="817"
            strokeDashoffset="817"
            transform="rotate(-90 340 285)"
          />
          <circle
            id="r3s"
            cx="340"
            cy="285"
            r="130"
            fill="none"
            stroke={ringMid}
            strokeWidth="16"
            strokeDasharray="817"
            strokeDashoffset="817"
            transform="rotate(-90 340 285)"
          />
          <circle
            id="r3i"
            cx="340"
            cy="285"
            r="130"
            fill="none"
            stroke={ringLight}
            strokeWidth="6"
            strokeDasharray="817"
            strokeDashoffset="817"
            transform="rotate(-90 340 285)"
            opacity="0.6"
          />
          <circle
            id="r2o"
            cx="340"
            cy="285"
            r="95"
            fill="none"
            stroke={ringDark}
            strokeWidth="20"
            strokeDasharray="597"
            strokeDashoffset="597"
            transform="rotate(-90 340 285)"
          />
          <circle
            id="r2s"
            cx="340"
            cy="285"
            r="95"
            fill="none"
            stroke={ringMid}
            strokeWidth="14"
            strokeDasharray="597"
            strokeDashoffset="597"
            transform="rotate(-90 340 285)"
          />
          <circle
            id="r2i"
            cx="340"
            cy="285"
            r="95"
            fill="none"
            stroke={ringLight}
            strokeWidth="5"
            strokeDasharray="597"
            strokeDashoffset="597"
            transform="rotate(-90 340 285)"
            opacity="0.6"
          />
          <circle
            id="r1o"
            cx="340"
            cy="285"
            r="60"
            fill="none"
            stroke={ringDark}
            strokeWidth="18"
            strokeDasharray="377"
            strokeDashoffset="377"
            transform="rotate(-90 340 285)"
          />
          <circle
            id="r1s"
            cx="340"
            cy="285"
            r="60"
            fill="none"
            stroke={ringMid}
            strokeWidth="12"
            strokeDasharray="377"
            strokeDashoffset="377"
            transform="rotate(-90 340 285)"
          />
          <circle
            id="r1i"
            cx="340"
            cy="285"
            r="60"
            fill="none"
            stroke={ringLight}
            strokeWidth="4"
            strokeDasharray="377"
            strokeDashoffset="377"
            transform="rotate(-90 340 285)"
            opacity="0.7"
          />
          <circle
            cx="340"
            cy="285"
            r="75"
            fill="none"
            stroke={gapColor}
            strokeWidth="6"
          />
          <circle
            cx="340"
            cy="285"
            r="113"
            fill="none"
            stroke={gapColor}
            strokeWidth="6"
          />
          <circle id="cdot" cx="340" cy="285" r="18" fill={dotBg} />
          <circle cx="340" cy="285" r="14" fill={ringDark} />
          <circle cx="340" cy="285" r="10" fill={ringMid} />
          <circle cx="340" cy="285" r="5" fill="#80d8f8" />
          <circle cx="338" cy="283" r="2" fill="#c0eeff" opacity="0.8" />
        </g>

        <g id="arrow-grp">
          <g transform="rotate(-45, 340, 285)">
            <rect
              x="348"
              y="281"
              width="185"
              height="8"
              rx="4"
              fill="#c8aa60"
            />
            <rect
              x="348"
              y="282"
              width="185"
              height="3"
              fill="#e0c880"
              opacity="0.5"
            />
            <rect
              x="348"
              y="281"
              width="185"
              height="1"
              fill="#f0d890"
              opacity="0.3"
            />
            <polygon
              points="495,285 540,282 555,258 530,262 510,266 495,272"
              fill="#2a2820"
            />
            <polygon
              points="495,285 540,282 535,268 518,272 505,276"
              fill="#1a1810"
            />
            <line
              x1="497"
              y1="283"
              x2="510"
              y2="264"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="500"
              y1="283"
              x2="513"
              y2="263"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="503"
              y1="282"
              x2="516"
              y2="262"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="506"
              y1="282"
              x2="519"
              y2="261"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="509"
              y1="282"
              x2="522"
              y2="260"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="512"
              y1="281"
              x2="525"
              y2="259"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="515"
              y1="281"
              x2="528"
              y2="259"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="518"
              y1="281"
              x2="531"
              y2="259"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="521"
              y1="281"
              x2="534"
              y2="259"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="524"
              y1="281"
              x2="537"
              y2="260"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="527"
              y1="281"
              x2="540"
              y2="262"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="530"
              y1="281"
              x2="542"
              y2="265"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="533"
              y1="281"
              x2="543"
              y2="269"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="495"
              y1="284"
              x2="540"
              y2="282"
              stroke="#6a5a40"
              strokeWidth="1.2"
            />
            <polygon
              points="495,285 540,288 555,312 530,308 510,304 495,298"
              fill="#2a2820"
            />
            <polygon
              points="495,285 540,288 535,302 518,298 505,294"
              fill="#1a1810"
            />
            <line
              x1="497"
              y1="287"
              x2="510"
              y2="306"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="500"
              y1="287"
              x2="513"
              y2="307"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="503"
              y1="288"
              x2="516"
              y2="308"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="506"
              y1="288"
              x2="519"
              y2="309"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="509"
              y1="288"
              x2="522"
              y2="310"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="512"
              y1="289"
              x2="525"
              y2="311"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="515"
              y1="289"
              x2="528"
              y2="311"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="518"
              y1="289"
              x2="531"
              y2="311"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="521"
              y1="289"
              x2="534"
              y2="311"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="524"
              y1="289"
              x2="537"
              y2="310"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="527"
              y1="289"
              x2="540"
              y2="308"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="530"
              y1="289"
              x2="542"
              y2="305"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="533"
              y1="289"
              x2="543"
              y2="301"
              stroke="#4a4038"
              strokeWidth="0.7"
              opacity="0.8"
            />
            <line
              x1="495"
              y1="286"
              x2="540"
              y2="288"
              stroke="#6a5a40"
              strokeWidth="1.2"
            />
            <rect x="536" y="281" width="8" height="8" rx="2" fill="#3a2810" />
            <rect
              x="537"
              y="282"
              width="6"
              height="3"
              rx="1"
              fill="#6a4820"
              opacity="0.6"
            />
            <rect
              x="374"
              y="279"
              width="16"
              height="12"
              rx="1"
              fill="#3a3535"
            />
            <rect x="375" y="280" width="14" height="5" rx="1" fill="#606060" />
            <polygon points="340,285 390,277 390,293" fill="#404040" />
            <polygon points="340,285 390,277 365,285" fill="#909090" />
            <polygon points="340,285 390,293 365,285" fill="#2a2a2a" />
            <line
              x1="340"
              y1="285"
              x2="390"
              y2="277"
              stroke="#f0f0f0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="340"
              y1="285"
              x2="390"
              y2="293"
              stroke="#c0c0c0"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <line
              x1="343"
              y1="285"
              x2="388"
              y2="285"
              stroke="#e0e0e0"
              strokeWidth="0.8"
              opacity="0.6"
            />
            <circle cx="340" cy="285" r="1.5" fill="#ffffff" opacity="0.9" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default MissionTarget;
