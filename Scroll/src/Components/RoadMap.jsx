// import { useState } from "react";
// import "./RoadMap.css";

// const roadmapData = {
//   C: [
//     {
//       title: "Programming Fundamentals",
//       resources: [
//         { name: "C Basics – W3Schools", link: "https://www.w3schools.com/c/" },
//         { name: "C Tutorial – GeeksforGeeks", link: "https://www.geeksforgeeks.org/c-programming-language/" }
//       ]
//     },
//     {
//       title: "Control Structures",
//       resources: [
//         { name: "If-Else & Loops", link: "https://www.programiz.com/c-programming/c-if-else-statement" }
//       ]
//     },
//     {
//       title: "Functions & Recursion",
//       resources: [
//         { name: "C Functions", link: "https://www.tutorialspoint.com/cprogramming/c_functions.htm" }
//       ]
//     },
//     {
//       title: "Arrays & Strings",
//       resources: [
//         { name: "Arrays in C", link: "https://www.geeksforgeeks.org/arrays-in-c-cpp/" }
//       ]
//     },
//     {
//       title: "Pointers & Memory",
//       resources: [
//         { name: "Pointers Explained", link: "https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/" }
//       ]
//     },
//     {
//       title: "Structures & File Handling",
//       resources: [
//         { name: "Structures in C", link: "https://www.programiz.com/c-programming/c-structures" }
//       ]
//     },
//     {
//       title: "Mini Projects & Certification ",
//       resources: [
//         { name: "C Certification – Udemy", link: "https://www.udemy.com/" }
//       ]
//     }
//   ],

//   Java: [
//     {
//       title: "Java Basics",
//       resources: [
//         { name: "Java Tutorial – W3Schools", link: "https://www.w3schools.com/java/" }
//       ]
//     },
//     {
//       title: "OOP Concepts",
//       resources: [
//         { name: "OOP in Java", link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" }
//       ]
//     },
//     {
//       title: "Collections & Exception Handling",
//       resources: [
//         { name: "Java Collections", link: "https://www.javatpoint.com/collections-in-java" }
//       ]
//     },
//     {
//       title: "Multithreading",
//       resources: [
//         { name: "Java Threads", link: "https://www.geeksforgeeks.org/multithreading-in-java/" }
//       ]
//     },
//     {
//       title: "JDBC & Projects ",
//       resources: [
//         { name: "JDBC Guide", link: "https://www.javatpoint.com/java-jdbc" }
//       ]
//     }
//   ]
// };

// function RoadMap() {
//   const [language, setLanguage] = useState("C");
//   const [activeStep, setActiveStep] = useState(null);

//   const toggleStep = (index) => {
//     setActiveStep(activeStep === index ? null : index);
//   };

//   return (
//     <div className="roadmap-page">
//       <div className="roadmap-container">

//         <h2 className="roadmap-title">Start Your Programming Journey</h2>

//         {/* Language Buttons */}
//         <div className="language-select">
//           {["C", "Java"].map((lang) => (
//             <button
//               key={lang}
//               className={language === lang ? "active" : ""}
//               onClick={() => {
//                 setLanguage(lang);
//                 setActiveStep(null);
//               }}
//             >
//               {lang}
//             </button>
//           ))}
//         </div>

//         {/* Timeline */}
//         <div className="timeline">
//           {roadmapData[language].map((step, index) => (
//             <div
//               key={index}
//               className={`timeline-step ${activeStep === index ? "open" : ""}`}
//               onClick={() => toggleStep(index)}
//             >
//               <div className="circle">{index + 1}</div>

//               <div className="content">
//                 <h3>{step.title}</h3>

//                 {activeStep === index && (
//                   <div className="resources">
//                     {step.resources.map((res, i) => (
//                       <a
//                         key={i}
//                         href={res.link}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         🔗 {res.name}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default RoadMap;
import { useState } from "react";
import "./RoadMap.css";

const roadmapData = {
  C: [
    {
      title: "Programming Fundamentals",
      resources: [
        { name: "C Basics - W3Schools", link: "https://www.w3schools.com/c/" }
      ]
    },
    {
      title: "Control Structures",
      resources: [
        { name: "If-Else & Loops", link: "https://www.programiz.com/c-programming/c-if-else-statement" }
      ]
    },
    {
      title: "Functions & Recursion",
      resources: [
        { name: "C Functions Guide", link: "https://www.tutorialspoint.com/cprogramming/c_functions.htm" }
      ]
    },
    {
      title: "Pointers & Memory",
      resources: [
        { name: "Pointers Explained", link: "https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/" }
      ]
    },
    {
      title: "Mini Projects & Certification",
      resources: [
        { name: "Certification Course", link: "https://www.udemy.com/" }
      ]
    }
  ],

  Java: [
    {
      title: "Java Basics",
      resources: [
        { name: "Java Tutorial", link: "https://www.w3schools.com/java/" }
      ]
    },
    {
      title: "OOP Concepts",
      resources: [
        { name: "OOP in Java", link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" }
      ]
    },
    {
      title: "Collections & JDBC",
      resources: [
        { name: "Java Collections", link: "https://www.javatpoint.com/collections-in-java" }
      ]
    },
    {
      title: "Projects & Certification",
      resources: [
        { name: "Java Certification", link: "https://www.udemy.com/" }
      ]
    }
  ]
};

function RoadMap() {
  const [language, setLanguage] = useState("C");
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <div className="roadmap-page">

      <h2 className="roadmap-title">Start Your Programming Journey</h2>

      <div className="language-select">
        {["C", "Java"].map((lang) => (
          <button
            key={lang}
            className={language === lang ? "active" : ""}
            onClick={() => {
              setLanguage(lang);
              setActiveStep(null);
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      <div className="timeline">
        {roadmapData[language].map((step, index) => (
          <div
            key={index}
            className={`timeline-step ${index % 2 === 0 ? "left" : "right"} ${activeStep === index ? "open" : ""}`}
            onClick={() => toggleStep(index)}
          >
            <div className="circle">{index + 1}</div>

            <div className="step-content">
              <h3>{step.title}</h3>

              {activeStep === index && (
                <div className="resources">
                  {step.resources.map((res, i) => (
                    <a key={i} href={res.link} target="_blank" rel="noreferrer">
                      🔗 {res.name}
                    </a>
                  ))}
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default RoadMap;
