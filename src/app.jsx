import React from 'react';
import './app.css';
import Navbar from 'components/navbar'
import Introduction from 'components/introduction';
import About from 'components/about';
import Skills from 'components/skills';
import Projects from 'components/projects';
import Contact from 'components/contact';


function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <button className="arrow-up">
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}

export default App
