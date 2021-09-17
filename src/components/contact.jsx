import React from 'react';
import { faGithub, faBloggerB } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
	const contactTitle = `Let's talk`;
	const contactEmail = `wjdgksak@naver.com`;
	const chusin = ` 2021 JungHan's - Site`;

	return (
		<section id="contact" className="section">
			<h1 className="contact__title">{contactTitle}</h1>
			<h2 className="contact__email">{contactEmail}</h2>
			<div className="contact__links">
				<a href="https://github.com/MaJunghan/" target="blank">
					<FontAwesomeIcon icon={faGithub} className="iconGit" />
				</a>
				<a href="https://blog.naver.com/wjdgksak" target="blank">
					<FontAwesomeIcon icon={faBloggerB} />
				</a>
			</div>
			<p className="contact__rights">
				{chusin}
			</p>
		</section>
	)
}

export default Contact;