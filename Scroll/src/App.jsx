import { ParallaxProvider } from "react-scroll-parallax";
import { Routes, Route } from "react-router-dom";
import Home_Static from "./Components/Home_Static";
import RoadMap from "./Components/RoadMap";
import OnlinePrograms from "./Components/OnlinePrograms";
import About_Us from "./Components/About_Us";
import Placement from "./Components/Placement";
import Contact_Us from "./Components/Contact_Us";
import EnrollPage from "./Components/EnrollPage";

function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Home_Static />} />
        <Route path="/Roadmap" element={<RoadMap />} />
        <Route path="/Programs" element={<OnlinePrograms />} />
        <Route path="/About_us" element={<About_Us />} />
        <Route path="/Placement" element={<Placement />} />
        <Route path="/Contact_us" element={<Contact_Us />} />
        <Route path="/enroll" element={<EnrollPage />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
