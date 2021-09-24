import React, { useState, useEffect } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
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
    <Router>
      <Navbar navShow={navShow} />
      <Switch>
        <Route exact path="/" component={Introduction}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/skill" component={Skills}></Route>
        <Route path="/work" component={Projects}></Route>
        <Route path="/conta" component={Contact}></Route>
      </Switch>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <button className="arrow-up">
        <i className="fas fa-arrow-up"></i>
      </button>
    </Router>
  );
}

export default App;
