import React from 'react';
import { faHtml5, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
	return (
		<section id="about" className="section section__container">
			<h1>About me</h1>
			<p>LG 차세대커머스에서 nuxt.js로 Mobile 관련 페이지를 5개월 정도 제작한 경험있습니다.
				<br />최근에는 vue.js 뿐만 아니라 react.js에도 관심이 생겨서 공부하고있고,<br />
				해당 내용들은 블로그에서 확인 할 수 있습니다.
			</p>
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
					<div className="major__description">
						React.js
					</div>
				</div>
				<div className="major">
					<div className="major__icon">
						<FontAwesomeIcon icon={faVuejs} />
					</div>
					<h2 className="major__title">Framework</h2>
					<div className="major__description">
						Vue.js, Nuxt.js
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;