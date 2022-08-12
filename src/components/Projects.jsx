import React from "react";
import project from "./images/icons/project.png";

function Projects() {
	return (
		<section id="projects">
			<h2 className="title">
				<img className="icon" src={project} alt="project-img" />
				Projects
			</h2>
			<div className="works">
				<ul>
					<div className="projectz">
						<li className="heading">TinDog Website</li>
						<ol>
							<li>Created the Website using Bootstrap,HTML and CSS.</li>
							<li>Added a Navbar using bootstrap.</li>
							<li>Used bootstrap grid system to make the site responsive.</li>
							<li>Involved card, button, fontawesome to make the website more beautiful.</li>
						</ol>
					</div>
					<div className="projectz">
						<li className="heading">Keeper App</li>
						<ol>
							<li>Created the front-end of the app using React.js</li>
							<li>Utilized useState from Hooks API to make the app dynamic.</li>
							<li>Used onClick, onChange event handlers.</li>
							<li>Also involved mapping, spreadOperators to make the code attractive.</li>
						</ol>
					</div>
					<div className="projectz">
						<li className="heading">todoList App</li>
						<ol>
							<li>Created the back-end using mongoose</li>
							<li>Utilized EJS templates to transfer data.</li>
							<li>Used express, body-parser modules.</li>
							<li>Also used get, post, delete methods.</li>
						</ol>
					</div>
				</ul>
			</div>
		</section>
	);
}

export default Projects;