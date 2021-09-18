import React from 'react';

const Skills = () => {
  const style = [
    { id: 1, skillName: 'HTML', skillValue: '70%' },
    { id: 2, skillName: 'CSS', skillValue: '70%' },
    { id: 3, skillName: 'JavaScript', skillValue: '80%' },
    { id: 4, skillName: 'TypeScript', skillValue: '40%' },
    { id: 5, skillName: 'Vue.js', skillValue: '80%' },
    { id: 6, skillName: 'React.js', skillValue: '60%' },
  ];

  const skillSetList = style.map((skillObj) => {
    return (
      <div key={skillObj.id} className="skill">
        <div className="skill__description">
          <span>{skillObj.skillName}</span>
          <span>{skillObj.skillValue}</span>
        </div>
        <div className="skill__bar">
          <div
            className="skill__value"
            style={{ width: skillObj.skillValue }}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <section id="skills" className="section ">
      <div className="section__container">
        <h1>skills</h1>
        <h2>Skills & Attributes</h2>
        <div className="skillset">
          <div className="skillset__left">
            <h3 className="skillset__title">Skills</h3>
            <li>{skillSetList}</li>
          </div>
          <div className="skillset__right">
            <div className="tools">
              <h3 className="skillset__title">Tools</h3>
              <ul className="tools__list">
                <li>
                  <span>Visual Studio Code</span>
                </li>
                <li>
                  <span>IntelliJ</span>
                </li>
                <li>
                  <span>Eclipse</span>
                </li>
              </ul>
            </div>
            <div className="etc">
              <h3 className="skillset__title">Etc</h3>
              <ul className="etc__list">
                <li>
                  <span>Git</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
