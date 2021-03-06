import React, { useState, useEffect } from 'react';
import './app.css';
import Navbar from 'components/navbar';
import Introduction from 'components/introduction';
import About from 'components/about';
import Skills from 'components/skills';
import Projects from 'components/projects';
import Contact from 'components/contact';

function App() {
  const [navShow, setNavShow] = useState('');
  const [scroll, setScroll] = useState(0);

  const scrollEvent = () => {
    setScroll(window.scrollY);
    scroll > 200 ? setNavShow('navbar--blue') : setNavShow('');
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
  });

  return (
    <>
      <Navbar navShow={navShow} />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
