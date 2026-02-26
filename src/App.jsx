import { ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';
import Home_Static from './Components/Home_Static';
// import Component from './Learn/Component';

function App() {
  return (
    <ParallaxProvider>
      <Home_Static/>
            {/* <Component />
                  <div style={{ height: "100vh" }}></div> */}
    </ParallaxProvider>
  );
}

export default App;