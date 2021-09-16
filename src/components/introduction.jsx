import React from 'react';
import me from 'img/me.jpg'

const Introduction = () => {
  const title = `Hello I'm JungHan`;
  const description = `HMTL & CSS 사용하는 프론트엔드 개발자 입니다.`;
  const homeBtn = "Contact Me";

  return (
    <section id="home" className="home">
      <img
        className="home__avatar"
        src={me}
        alt="photo"
      />
      <h1 className="home__title"> {title} </h1>
      <h2 className="home__description"> {description} </h2>
      <button className="home__contact" data-link="#contact"> {homeBtn}</button>
    </section>
  )
}
export default Introduction;