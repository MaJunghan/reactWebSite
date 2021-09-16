import React from 'react';
import './app.css';
import Navbar from 'components/navbar'
import Introduction from 'components/introduction';
import About from 'components/about';
import Skills from 'components/skills';


function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Skills />
    </>
  )
}

export default App
