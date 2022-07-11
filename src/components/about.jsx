import React from 'react';
import { faHtml5, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <section id="about" className="section section__container">
      <h1>About me</h1>
      <p>1</p>
      <div className="about__majors">
        <div className="major">
          <div className="major__icon">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <h2 className="major__title">Basic</h2>
          <div className="major__description">
            HTML, CSS, JavaScript, Typescript
          </div>
        </div>
        <div className="major">
          <div className="major__icon">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <h2 className="major__title">Library</h2>
          <div className="major__description">React.js</div>
        </div>
        <div className="major">
          <div className="major__icon">
            <FontAwesomeIcon icon={faVuejs} />
          </div>
          <h2 className="major__title">Framework</h2>
          <div className="major__description">Vue.js, Nuxt.js</div>
        </div>
      </div>
    </section>
  );
};

export default About;
