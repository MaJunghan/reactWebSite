import React, { useState, useEffect } from 'react';
import './app.css';
import Navbar from 'components/navbar';
import Introduction from 'components/introduction';
import About from 'components/about';
import Skills from 'components/skills';
import Projects from 'components/projects';
import Contact from 'components/contact';

function App() {
  const [scroll, setScroll] = useState(0);

  const scrollEvent = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    console.log(`scroll값은 ?? : ${scroll}`);
  });

  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <button className="arrow-up">
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default App;
