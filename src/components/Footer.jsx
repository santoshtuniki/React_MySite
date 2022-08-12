import React from "react";
import facebook from "./images/contacts/facebook.png";
import linkedin from "./images/contacts/linkedin.png";
import github from "./images/contacts/github.png";

function Footer() {
	return (
		<section id="footer">
			<div>
			<a 
			target="_blank" 
			href="https://www.facebook.com/saisantoshkumar.tuniki"
			>
			<img className="contact" src={facebook} alt="facebook-img" />
			</a>
			<a 
			target="_blank" 
			href="https://www.linkedin.com/in/santosh2001/"
			>
			<img className="contact" src={linkedin} alt="linkedin-img" />
			</a>
			<a 
			target="_blank" 
			href="https://github.com/santoshtuniki"
			>
			<img className="contact" src={github} alt="github-img" />
			</a> 
			</div>
		</section>
	)
}

export default Footer;
