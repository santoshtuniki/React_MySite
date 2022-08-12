import React from "react";
import skill from "./images/icons/skills.png";
import HTML from "./images/skills/html.jpg";
import CSS from "./images/skills/css.jpeg";
import JS from "./images/skills/js.jpg";
import NodeJS from "./images/skills/nodeJS.png";
import ExpressJS from "./images/skills/express.jpg";
import MongoDB from "./images/skills/mongodb.jpg";
import ReactJS from "./images/skills/react.jpg";
import Windows from "./images/skills/windows.jpg";


function Skills() {
  return (
	<section id="skills">
		<h2 className="title">
				<img  className="icon" src={skill} alt="skills-img" />
				Skills
			</h2>
			<div className="skillz">
				<img className="ability" src={HTML} alt="html-img" />
				<img className="ability" src={CSS} alt="css-img" />
				<img className="ability" src={JS} alt="js-img" />
				<img className="ability" src={NodeJS} alt="nodeJS-img" />
				<img className="ability" src={ExpressJS} alt="express-img" />
				<img className="ability" src={MongoDB} alt="mongodb-img" />
				<img className="ability" src={ReactJS} alt="react-img" />
				<img className="ability" src={Windows} alt="windows-img" />
			</div>
	</section>
  );
}

export default Skills;
