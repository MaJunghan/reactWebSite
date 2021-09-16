import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section ">
      <div className="section__container">
        <h1>skills</h1>
        <h2>Skills & Attributes</h2>
        <div className="skillset">
          <div className="skillset__left">
            <h3 className="skillset__title">Skills</h3>
            <div className="skill">
              <div className="skill__description">
                <span>HTML</span>
                <span>70%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style="width:70%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>CSS</span>
                <span>70%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style="width:70%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>JavaScript</span>
                <span>70%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style="width:70%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>Typescript</span>
                <span>30%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style="width:30%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>Vue.js</span>
                <span>70%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style="width:70%"></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill__description">
                <span>React.js</span>
                <span>50%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style="width:50%"></div>
              </div>
            </div>
          </div>
          <div className="skillset__right">
            <div className="tools">
              <h3 className="skillset__title">Tools</h3>
              <ul className="tools__list">
                <li><span>Visual Studio Code</span></li>
                <li><span>IntelliJ</span></li>
                <li><span>Eclipse</span></li>
              </ul>
            </div>
            <div className="etc">
              <h3 className="skillset__title">Etc</h3>
              <ul className="etc__list">
                <li><span>Git</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;