import { ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';
import Home_Static from './Components/Home_Static';

function App() {
  return (
    <ParallaxProvider>
      <Home_Static/>
    </ParallaxProvider>
  );
}

export default App;